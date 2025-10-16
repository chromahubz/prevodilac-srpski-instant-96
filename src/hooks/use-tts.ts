import { useState, useRef, useCallback } from "react";
import { generateSpeech } from "@/lib/elevenlabs";
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
      // Generate speech using ElevenLabs (no browser info sent!)
      const url = await generateSpeech({
        text: text.trim(),
        // voiceId and modelId use defaults from elevenlabs.ts
        stability: 0.5,
        similarityBoost: 0.75
      });

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
  }, []);

  const playAudio = useCallback(async (text: string) => {
    try {
      // If already playing same audio, just replay it
      if (audioRef.current && lastGeneratedText === text.trim()) {
        console.log("Replaying cached audio");
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
        return;
      }

      // Stop current audio if playing different text
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }

      let urlToPlay = audioUrl;

      // Generate new audio only if we don't have one or text changed
      if (!urlToPlay || lastGeneratedText !== text.trim()) {
        console.log("Generating new audio for:", text.trim());
        urlToPlay = await generateAudio(text);
        if (!urlToPlay) return;
      } else {
        console.log("Reusing cached audio");
      }

      // Create and play audio
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
  }, [audioUrl, lastGeneratedText, generateAudio]);

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

      // Use cached audio if available and text matches
      if (!urlToDownload || lastGeneratedText !== text.trim()) {
        console.log("Generating audio for download");
        urlToDownload = await generateAudio(text);
        if (!urlToDownload) return;
      } else {
        console.log("Using cached audio for download");
      }

      // Fetch the blob and create download
      const response = await fetch(urlToDownload);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = filename || `prevod-${Date.now()}.mp3`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Clean up blob URL
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);

      toast({
        title: "Preuzimanje započeto",
        description: "Audio fajl se preuzima...",
      });
    } catch (error) {
      console.error("Error downloading audio:", error);
      toast({
        title: "Greška pri preuzimanju",
        description: "Pokušajte ponovo za nekoliko sekundi.",
        variant: "destructive",
      });
    }
  }, [audioUrl, lastGeneratedText, generateAudio]);

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