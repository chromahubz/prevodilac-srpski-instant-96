import { Volume2, Lock, Download, Loader2, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTTS } from "@/hooks/use-tts";

interface TTSButtonProps {
  text: string;
  isRegistered?: boolean;
  isPremium?: boolean;
  language?: string;
  voice?: string;
  onPlay?: () => void;
  onDownload?: () => void;
  className?: string;
}

export function TTSButton({
  text,
  isRegistered = false,
  isPremium = false,
  language = "sr",
  voice = "default",
  onPlay,
  onDownload,
  className = ""
}: TTSButtonProps) {
  const { isLoading, isPlaying, playAudio, stopAudio, downloadAudio } = useTTS({
    language,
    voice,
  });

  const handlePlay = async () => {
    if (!isRegistered || !text.trim()) return;

    if (isPlaying) {
      stopAudio();
    } else {
      await playAudio(text);
    }

    if (onPlay) {
      onPlay();
    }
  };

  const handleDownload = async () => {
    if (!text.trim()) return;

    await downloadAudio(text, `prevod-${Date.now()}.mp3`);

    if (onDownload) {
      onDownload();
    }
  };

  const getPlayButtonIcon = () => {
    if (isLoading) return <Loader2 className="h-4 w-4 mr-2 animate-spin" />;
    if (isPlaying) return <Pause className="h-4 w-4 mr-2" />;
    return <Volume2 className="h-4 w-4 mr-2" />;
  };

  const getPlayButtonText = () => {
    if (isLoading) return "Učitava...";
    if (isPlaying) return "Zaustavi";
    return "Slušaj";
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant={isRegistered ? "secondary" : "outline"}
            size="sm"
            onClick={handlePlay}
            disabled={!text || (!isRegistered && !isLoading)}
            className={`h-10 px-4 ${!isRegistered ? 'opacity-60' : ''}`}
          >
            {getPlayButtonIcon()}
            {getPlayButtonText()}
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
            variant="secondary"
            size="sm"
            onClick={handleDownload}
            disabled={!text || isLoading}
            className="h-10 px-4"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Download className="h-4 w-4 mr-2" />
            )}
            MP3
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Skinite kao MP3
        </TooltipContent>
      </Tooltip>
    </div>
  );
}