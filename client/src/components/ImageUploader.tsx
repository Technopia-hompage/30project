import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, Image as ImageIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ImageUploaderProps {
  onImageUploaded: (imageUrl: string) => void;
  currentImageUrl?: string;
  onImageRemoved?: () => void;
  label?: string;
  className?: string;
}

export function ImageUploader({
  onImageUploaded,
  currentImageUrl,
  onImageRemoved,
  label = "이미지 업로드",
  className = ""
}: ImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      toast({
        title: "오류",
        description: "이미지 파일만 업로드할 수 있습니다.",
        variant: "destructive"
      });
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      toast({
        title: "오류", 
        description: "파일 크기는 10MB 이하로 제한됩니다.",
        variant: "destructive"
      });
      return;
    }

    setIsUploading(true);

    try {
      // Get upload URL from server
      const uploadResponse = await fetch('/api/objects/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filename: file.name,
          contentType: file.type
        })
      });

      if (!uploadResponse.ok) {
        throw new Error('Failed to get upload URL');
      }

      const { uploadURL } = await uploadResponse.json();

      // Upload file directly to object storage
      const uploadFileResponse = await fetch(uploadURL, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': file.type,
        },
      });

      if (!uploadFileResponse.ok) {
        throw new Error('Failed to upload file');
      }

      // Extract the object path from upload URL
      const urlObj = new URL(uploadURL);
      const objectPath = urlObj.pathname;
      
      // Create the accessible URL
      const imageUrl = `/objects${objectPath.split('/uploads/')[1] ? '/uploads/' + objectPath.split('/uploads/')[1] : objectPath}`;
      
      onImageUploaded(imageUrl);
      
      toast({
        title: "성공",
        description: "이미지가 성공적으로 업로드되었습니다."
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "업로드 오류",
        description: "이미지 업로드에 실패했습니다. 다시 시도해주세요.",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  return (
    <div className={`space-y-2 ${className}`}>
      <Label>{label}</Label>
      
      {currentImageUrl ? (
        <div className="relative">
          <img 
            src={currentImageUrl} 
            alt="Uploaded image"
            className="w-full h-48 object-cover rounded-lg border"
          />
          {onImageRemoved && (
            <Button
              variant="destructive"
              size="sm"
              className="absolute top-2 right-2"
              onClick={onImageRemoved}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      ) : (
        <div
          className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
            dragOver 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <ImageIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
          <div className="space-y-2">
            <p className="text-sm text-gray-600">
              이미지를 드래그하여 놓거나 클릭하여 선택하세요
            </p>
            <Input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              disabled={isUploading}
              className="hidden"
              id="image-upload"
            />
            <Label htmlFor="image-upload" className="cursor-pointer">
              <Button 
                variant="outline" 
                disabled={isUploading}
                className="mt-2"
                asChild
              >
                <span>
                  <Upload className="mr-2 h-4 w-4" />
                  {isUploading ? '업로드 중...' : '이미지 선택'}
                </span>
              </Button>
            </Label>
          </div>
        </div>
      )}
    </div>
  );
}