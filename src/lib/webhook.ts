import { toast } from "@/hooks/use-toast";

const WEBHOOK_URL = "https://n8n.cosmofic.com/webhook/3ce5f138-d81a-42ea-a07a-3b6cd9ad413d";

export interface TranslationData {
  sourceText: string;
  targetText: string;
  sourceLanguage: string;
  targetLanguage: string;
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