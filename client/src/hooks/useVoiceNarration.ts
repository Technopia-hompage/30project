import { useState, useEffect, useRef } from 'react';

interface VoiceNarrationOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
}

export function useVoiceNarration() {
  const [isSupported, setIsSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    // Check if speech synthesis is supported
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      // Load available voices
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      loadVoices();
      speechSynthesis.onvoiceschanged = loadVoices;
    }

    return () => {
      stop();
    };
  }, []);

  const getVoiceForLanguage = (language: string): SpeechSynthesisVoice | null => {
    const languageMap: { [key: string]: string[] } = {
      'jp': ['ja-JP', 'ja'],
      'ko': ['ko-KR', 'ko'],
      'en': ['en-US', 'en-GB', 'en'],
      'zh': ['zh-CN', 'zh-TW', 'zh']
    };

    const targetLangs = languageMap[language] || ['en'];
    
    for (const targetLang of targetLangs) {
      const voice = voices.find(voice => 
        voice.lang.toLowerCase().startsWith(targetLang.toLowerCase())
      );
      if (voice) return voice;
    }

    // Fallback to any available voice
    return voices.length > 0 ? voices[0] : null;
  };

  const speak = (
    text: string, 
    language: string = 'en', 
    options: VoiceNarrationOptions = {}
  ) => {
    if (!isSupported || !text.trim()) return;

    // Stop any current speech
    stop();

    // Remove HTML tags from text
    const cleanText = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
    
    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = getVoiceForLanguage(language);
    
    if (voice) {
      utterance.voice = voice;
    }

    utterance.rate = options.rate || 1.0;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utterance.onerror = () => {
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (isSupported && isPlaying && !isPaused) {
      speechSynthesis.pause();
    }
  };

  const resume = () => {
    if (isSupported && isPaused) {
      speechSynthesis.resume();
    }
  };

  const stop = () => {
    if (isSupported) {
      speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      utteranceRef.current = null;
    }
  };

  const toggle = (text: string, language: string = 'en', options?: VoiceNarrationOptions) => {
    if (isPlaying) {
      if (isPaused) {
        resume();
      } else {
        pause();
      }
    } else {
      speak(text, language, options);
    }
  };

  return {
    isSupported,
    isPlaying,
    isPaused,
    voices,
    speak,
    pause,
    resume,
    stop,
    toggle,
    getVoiceForLanguage
  };
}