import { useState } from "react";
import { sendTranslationToWebhook, TranslationData } from "@/lib/webhook";

export const useTranslation = () => {
  const [isTranslating, setIsTranslating] = useState(false);

  const translateText = async (sourceText: string, sourceLang: string, targetLang: string): Promise<string | null> => {
    if (!sourceText.trim()) return null;

    setIsTranslating(true);

    try {
      const translationData: TranslationData = {
        sourceText: sourceText,
        targetText: "", // Will be filled by webhook
        sourceLanguage: sourceLang,
        targetLanguage: targetLang,
        timestamp: new Date().toISOString()
      };

      const result = await sendTranslationToWebhook(translationData);
      return result;
    } catch (error) {
      console.error("Translation error:", error);
      return null;
    } finally {
      setIsTranslating(false);
    }
  };

  return {
    translateText,
    isTranslating
  };
};