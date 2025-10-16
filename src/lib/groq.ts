// Groq API Integration for Translation using Qwen model

const API_KEY = import.meta.env.VITE_GROQ_API_KEY;
const BASE_URL = "https://api.groq.com/openai/v1/chat/completions";

// Language code to full language name mapping
const languageNames: { [key: string]: string } = {
  en: "English",
  sr: "Serbian",
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
 * Translate text using Groq Qwen model with streaming support
 * @param sourceText - Text to translate
 * @param sourceLang - Source language code (e.g., 'en')
 * @param targetLang - Target language code (e.g., 'sr')
 * @param callback - Callback functions for streaming
 */
export const translateWithGroq = async (
  sourceText: string,
  sourceLang: string,
  targetLang: string,
  callback: StreamCallback
): Promise<void> => {
  try {
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

    // Make the API request with streaming
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        model: "qwen/qwen-2.5-32b-instruct",
        temperature: 0.6,
        max_completion_tokens: 4096,
        top_p: 0.95,
        stream: true
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
    }

    // Process the stream
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error("No response body");
    }

    const decoder = new TextDecoder();
    let fullText = "";

    while (true) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      // Decode the chunk
      const chunk = decoder.decode(value, { stream: true });

      // Split by newlines to handle multiple SSE messages
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6); // Remove 'data: ' prefix

          if (data === '[DONE]') {
            continue;
          }

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;

            if (content) {
              fullText += content;
              callback.onChunk(fullText);
            }
          } catch (e) {
            // Skip invalid JSON
            console.warn('Failed to parse chunk:', e);
          }
        }
      }
    }

    // Call onComplete when streaming is done
    callback.onComplete();
  } catch (error) {
    console.error("Groq translation error:", error);
    callback.onError(error instanceof Error ? error : new Error("Translation failed"));
  }
};

/**
 * Translate text using Groq without streaming (returns complete text)
 * @param sourceText - Text to translate
 * @param sourceLang - Source language code (e.g., 'en')
 * @param targetLang - Target language code (e.g., 'sr')
 * @returns Translated text
 */
export const translateWithGroqNoStream = async (
  sourceText: string,
  sourceLang: string,
  targetLang: string
): Promise<string> => {
  try {
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

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: "user",
            content: prompt
          }
        ],
        model: "qwen/qwen-2.5-32b-instruct",
        temperature: 0.6,
        max_completion_tokens: 4096,
        top_p: 0.95,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`Groq API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  } catch (error) {
    console.error("Groq translation error:", error);
    throw error;
  }
};
