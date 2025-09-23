import { toast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.cosmofic.com/webhook/3ce5f138-d81a-42ea-a07a-3b6cd9ad413d";
const TTS_WEBHOOK_URL = "https://n8n.cosmofic.com/webhook/2cfe4aff-4b89-428f-adf1-9491e10351fa";

export interface TranslationData {
  sourceText: string;
  targetText: string;
  sourceLanguage: string;
  targetLanguage: string;
  timestamp: string;
}

export interface TTSData {
  text: string;
  language: string;
  voice?: string;
  timestamp: string;
}

export const sendTranslationToWebhook = async (data: TranslationData) => {
  try {
    // Send GET request with query parameters as the webhook expects GET
    const queryParams = new URLSearchParams({
      sourceText: data.sourceText,
      sourceLanguage: data.sourceLanguage,
      targetLanguage: data.targetLanguage,
      timestamp: data.timestamp,
      source: "Prevodilac Srpski",
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    const response = await fetch(`${WEBHOOK_URL}?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Translation received from webhook:", result);
      // Return just the text property to avoid React errors
      return result.text || result;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending translation to webhook:", error);
    return null;
  }
};

export const sendTTSToWebhook = async (data: TTSData): Promise<string | null> => {
  try {
    // Send GET request with query parameters for TTS generation
    const queryParams = new URLSearchParams({
      text: data.text,
      language: data.language,
      voice: data.voice || "default",
      timestamp: data.timestamp,
      source: "Prevodilac Srpski TTS",
      userAgent: navigator.userAgent,
      url: window.location.href
    });

    console.log("Sending TTS request:", queryParams.toString());

    const response = await fetch(`${TTS_WEBHOOK_URL}?${queryParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log("TTS audio received from webhook:", result);
      console.log("Response type:", typeof result);
      console.log("Response keys:", Object.keys(result || {}));

      // Log the actual values for debugging
      if (result && typeof result === 'object') {
        Object.keys(result).forEach(key => {
          console.log(`Response property "${key}":`, result[key]);
        });
      }

      // Handle different response formats
      let audioUrl = null;

      if (typeof result === 'string') {
        // If result is directly a string URL
        audioUrl = result;
      } else if (result && typeof result === 'object') {
        // Try different possible property names
        audioUrl = result.publicUrl ||
                   result.audioUrl ||
                   result.url ||
                   result.audio_url ||
                   result.audio ||
                   result.mp3Url ||
                   result.fileUrl ||
                   result.link ||
                   result.data?.url ||
                   result.data?.audioUrl ||
                   result.data?.publicUrl;
      }

      console.log("Extracted audio URL:", audioUrl);

      if (audioUrl && typeof audioUrl === 'string') {
        return audioUrl;
      } else {
        console.error("No valid audio URL found in TTS response:", result);
        toast({
          title: "Greška - neispravna audio URL",
          description: "Webhook nije vratio valjan audio link.",
          variant: "destructive",
        });
        return null;
      }
    } else {
      const errorText = await response.text();
      console.error("TTS HTTP error:", response.status, errorText);
      throw new Error(`TTS HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Error sending TTS to webhook:", error);
    toast({
      title: "Greška pri generisanju audio",
      description: "Pokušajte ponovo za nekoliko sekundi.",
      variant: "destructive",
    });
    return null;
  }
};