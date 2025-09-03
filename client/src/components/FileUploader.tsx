import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, X, FileText, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface FileUploaderProps {
  onFileUploaded: (fileUrl: string, fileName: string) => void;
  attachedFiles?: Array<{ url: string; name: string }>;
  onFileRemoved?: (index: number) => void;
  label?: string;
  acceptedTypes?: string;
  className?: string;
}

export function FileUploader({
  onFileUploaded,
  attachedFiles = [],
  onFileRemoved,
  label = "파일 첨부",
  acceptedTypes = "*/*",
  className = ""
}: FileUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const handleFileSelect = async (file: File) => {
    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      toast({
        title: "오류", 
        description: "파일 크기는 50MB 이하로 제한됩니다.",
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
      const fileUrl = `/objects${objectPath.split('/uploads/')[1] ? '/uploads/' + objectPath.split('/uploads/')[1] : objectPath}`;
      
      onFileUploaded(fileUrl, file.name);
      
      toast({
        title: "성공",
        description: "파일이 성공적으로 업로드되었습니다."
      });

    } catch (error) {
      console.error('Upload error:', error);
      toast({
        title: "업로드 오류",
        description: "파일 업로드에 실패했습니다. 다시 시도해주세요.",
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
    <div className={`space-y-4 ${className}`}>
      <Label>{label}</Label>
      
      {/* Attached Files List */}
      {attachedFiles.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">첨부된 파일:</p>
          {attachedFiles.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-700 truncate">{file.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.open(file.url, '_blank')}
                  className="h-8 w-8 p-0"
                >
                  <Download className="h-4 w-4" />
                </Button>
                {onFileRemoved && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onFileRemoved(index)}
                    className="h-8 w-8 p-0 text-red-500 hover:text-red-700"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* File Upload Area */}
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
        <FileText className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            파일을 드래그하여 놓거나 클릭하여 선택하세요
          </p>
          <p className="text-xs text-gray-500">
            최대 50MB까지 업로드 가능
          </p>
          <Input
            type="file"
            accept={acceptedTypes}
            onChange={handleFileChange}
            disabled={isUploading}
            className="hidden"
            id="file-upload"
          />
          <Label htmlFor="file-upload" className="cursor-pointer">
            <Button 
              variant="outline" 
              disabled={isUploading}
              className="mt-2"
              asChild
            >
              <span>
                <Upload className="mr-2 h-4 w-4" />
                {isUploading ? '업로드 중...' : '파일 선택'}
              </span>
            </Button>
          </Label>
        </div>
      </div>
    </div>
  );
}