import { Volume2, Lock, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TTSButtonProps {
  text: string;
  isListening?: boolean;
  isRegistered?: boolean;
  isPremium?: boolean;
  onPlay?: () => void;
  onDownload?: () => void;
  className?: string;
}

export function TTSButton({ 
  text, 
  isListening = false, 
  isRegistered = false, 
  isPremium = false,
  onPlay,
  onDownload,
  className = ""
}: TTSButtonProps) {
  const handlePlay = () => {
    if (isRegistered && onPlay) {
      onPlay();
    }
  };

  const handleDownload = () => {
    if (isPremium && onDownload) {
      onDownload();
    }
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isRegistered ? "secondary" : "outline"}
            size="sm"
            onClick={handlePlay}
            disabled={!text}
            className={`h-10 px-4 ${!isRegistered ? 'opacity-60' : ''}`}
          >
            <Volume2 className="h-4 w-4 mr-2" />
            {isListening ? "Zaustavi" : "Slušaj"}
            {!isRegistered && <Lock className="h-3 w-3 ml-1 text-tts-disabled" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {!isRegistered ? "Registruj se da slušaš prevod" : "Slušaj prevod"}
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isPremium ? "secondary" : "outline"}
            size="sm"
            onClick={handleDownload}
            disabled={!text}
            className={`h-10 px-4 ${!isPremium ? 'opacity-60' : ''}`}
          >
            <Download className="h-4 w-4 mr-2" />
            MP3
            {!isPremium && <Lock className="h-3 w-3 ml-1 text-tts-disabled" />}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          {!isPremium ? "Premium funkcija - skinite MP3" : "Skinite kao MP3"}
        </TooltipContent>
      </Tooltip>
    </div>
  );
}