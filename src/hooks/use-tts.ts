import { useState, useRef, useCallback } from "react";
import { sendTTSToWebhook, TTSData } from "@/lib/webhook";
import { toast } from "@/hooks/use-toast";

export interface UseTTSOptions {
  language?: string;
  voice?: string;
}

export const useTTS = (options: UseTTSOptions = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [lastGeneratedText, setLastGeneratedText] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const generateAudio = useCallback(async (text: string): Promise<string | null> => {
    if (!text.trim()) return null;

    setIsLoading(true);
    try {
      const ttsData: TTSData = {
        text: text.trim(),
        language: options.language || "sr",
        voice: options.voice || "default",
        timestamp: new Date().toISOString(),
      };

      const url = await sendTTSToWebhook(ttsData);

      if (url) {
        setAudioUrl(url);
        setLastGeneratedText(text.trim());

        // Show success message when audio is generated
        toast({
          title: "Audio je spreman!",
          description: "Sačekajte, uskoro ćete čuti audio.",
        });

        return url;
      } else {
        throw new Error("No audio URL received");
      }
    } catch (error) {
      console.error("Error generating TTS audio:", error);
      toast({
        title: "Greška pri generisanju audio",
        description: "Molimo pokušajte ponovo.",
        variant: "destructive",
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [options.language, options.voice]);

  const playAudio = useCallback(async (text: string) => {
    try {
      // Stop current audio if playing
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      let urlToPlay = audioUrl;

      // Generate new audio if we don't have one or text changed
      if (!urlToPlay || lastGeneratedText !== text.trim()) {
        console.log("Generating new audio because:", !urlToPlay ? "no cached audio" : "text changed");
        console.log("Previous text:", lastGeneratedText);
        console.log("Current text:", text.trim());
        urlToPlay = await generateAudio(text);
        if (!urlToPlay) return;
      }

      // Create and play audio
      console.log("Attempting to play audio URL:", urlToPlay);
      const audio = new Audio();
      audioRef.current = audio;

      // Set up event listeners before setting src
      audio.addEventListener('loadstart', () => {
        console.log("Audio loading started");
        setIsLoading(true);
      });

      audio.addEventListener('canplay', () => {
        console.log("Audio can play");
        setIsLoading(false);
      });

      audio.addEventListener('loadeddata', () => {
        console.log("Audio data loaded");
      });

      audio.addEventListener('play', () => {
        console.log("Audio playing");
        setIsPlaying(true);
      });

      audio.addEventListener('pause', () => {
        console.log("Audio paused");
        setIsPlaying(false);
      });

      audio.addEventListener('ended', () => {
        console.log("Audio ended");
        setIsPlaying(false);
        audioRef.current = null;
      });

      audio.addEventListener('error', (e) => {
        console.error("Audio playback error:", e);
        console.error("Audio error details:", {
          error: audio.error,
          src: audio.src,
          readyState: audio.readyState,
          networkState: audio.networkState
        });
        setIsLoading(false);
        setIsPlaying(false);
        audioRef.current = null;
        toast({
          title: "Greška pri reprodukciji audio",
          description: `Ne mogu da reprodukujem audio fajl. URL: ${urlToPlay.substring(0, 50)}...`,
          variant: "destructive",
        });
      });

      // Set the source and load
      audio.src = urlToPlay;
      audio.load();

      try {
        await audio.play();
        console.log("Audio play() completed successfully");
      } catch (playError) {
        console.error("Audio play() failed:", playError);
        setIsLoading(false);
        setIsPlaying(false);
        audioRef.current = null;
        toast({
          title: "Greška pri pokretanju audio",
          description: "Browser ne može da reprodukuje ovaj audio format.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error playing audio:", error);
      setIsLoading(false);
      setIsPlaying(false);
      toast({
        title: "Greška pri reprodukciji",
        description: "Pokušajte ponovo za nekoliko sekundi.",
        variant: "destructive",
      });
    }
  }, [audioUrl, generateAudio]);

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setIsPlaying(false);
    }
  }, []);

  const downloadAudio = useCallback(async (text: string, filename?: string) => {
    try {
      let urlToDownload = audioUrl;

      if (!urlToDownload) {
        urlToDownload = await generateAudio(text);
        if (!urlToDownload) return;
      }

      // Create download link
      const link = document.createElement('a');
      link.href = urlToDownload;
      link.download = filename || `audio-${Date.now()}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: "Audio download started",
        description: "Fajl se preuzima...",
      });
    } catch (error) {
      console.error("Error downloading audio:", error);
      toast({
        title: "Greška pri preuzimanju",
        description: "Pokušajte ponovo za nekoliko sekundi.",
        variant: "destructive",
      });
    }
  }, [audioUrl, generateAudio]);

  return {
    isLoading,
    isPlaying,
    audioUrl,
    generateAudio,
    playAudio,
    stopAudio,
    downloadAudio,
  };
};