import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = "AIzaSyAMbos2k0Y7lskikAlb-mKdXcw_qbHyH8I";

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI(API_KEY);

// Language code to full language name mapping
const languageNames: { [key: string]: string } = {
  en: "English",
  sr: "Serbian (Latin script)",
  "sr-cyrl": "Serbian (Cyrillic script)",
  de: "German",
  fr: "French",
  es: "Spanish",
  it: "Italian",
  ru: "Russian",
  el: "Greek",
  hu: "Hungarian",
  ro: "Romanian",
  bg: "Bulgarian",
  zh: "Chinese",
  ja: "Japanese",
  ko: "Korean",
  tr: "Turkish",
  ar: "Arabic",
  nl: "Dutch",
  cs: "Czech",
  sk: "Slovak",
  pl: "Polish",
  pt: "Portuguese",
  sv: "Swedish",
  no: "Norwegian",
  da: "Danish",
  fi: "Finnish",
  sl: "Slovenian"
};

export interface StreamCallback {
  onChunk: (text: string) => void;
  onComplete: () => void;
  onError: (error: Error) => void;
}

/**
 * Translate text using Gemini AI with streaming support
 * @param sourceText - Text to translate
 * @param sourceLang - Source language code (e.g., 'en')
 * @param targetLang - Target language code (e.g., 'sr')
 * @param callback - Callback functions for streaming
 */
export const translateWithGemini = async (
  sourceText: string,
  sourceLang: string,
  targetLang: string,
  callback: StreamCallback
): Promise<void> => {
  try {
    // Get the generative model - using gemini-2.5-flash (latest free tier model)
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Get full language names
    const sourceLanguage = languageNames[sourceLang] || sourceLang;
    const targetLanguage = languageNames[targetLang] || targetLang;

    // Create the professional translation prompt
    const prompt = `Act as a professional translator and perfectly translate and localize the text properly from ${sourceLanguage} to ${targetLanguage}.

IMPORTANT RULES:
- Provide ONLY the translated text
- Do NOT include explanations, notes, or additional commentary
- Maintain the original tone, style, and formatting
- Use natural, idiomatic expressions in the target language
- Preserve any special characters, numbers, or punctuation

Text to translate:
${sourceText}

Translation:`;

    // Generate content with streaming
    const result = await model.generateContentStream(prompt);

    // Process the stream
    let fullText = "";
    for await (const chunk of result.stream) {
      const chunkText = chunk.text();
      fullText += chunkText;
      callback.onChunk(fullText);
    }

    // Call onComplete when streaming is done
    callback.onComplete();
  } catch (error) {
    console.error("Gemini translation error:", error);
    callback.onError(error instanceof Error ? error : new Error("Translation failed"));
  }
};

/**
 * Translate text using Gemini AI without streaming (returns complete text)
 * @param sourceText - Text to translate
 * @param sourceLang - Source language code (e.g., 'en')
 * @param targetLang - Target language code (e.g., 'sr')
 * @returns Translated text
 */
export const translateWithGeminiNoStream = async (
  sourceText: string,
  sourceLang: string,
  targetLang: string
): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const sourceLanguage = languageNames[sourceLang] || sourceLang;
    const targetLanguage = languageNames[targetLang] || targetLang;

    const prompt = `Act as a professional translator and perfectly translate and localize the text properly from ${sourceLanguage} to ${targetLanguage}.

IMPORTANT RULES:
- Provide ONLY the translated text
- Do NOT include explanations, notes, or additional commentary
- Maintain the original tone, style, and formatting
- Use natural, idiomatic expressions in the target language
- Preserve any special characters, numbers, or punctuation

Text to translate:
${sourceText}

Translation:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini translation error:", error);
    throw error;
  }
};
