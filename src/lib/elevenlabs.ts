// ElevenLabs API Integration for Text-to-Speech

const API_KEY = 'd8b5c8c5fb4115bd4dbf6b5fb2cd73a5';
const BASE_URL = 'https://api.elevenlabs.io/v1';

// Female voice ID (ZENSKI)
const FEMALE_VOICE_ID = 'cgSgspJ2msm6clMCkdW9';

// Default model - using Eleven V3 (latest and most advanced)
const DEFAULT_MODEL = 'eleven_v3';

// Voice settings
const DEFAULT_VOICE_SETTINGS = {
  stability: 0.5,
  similarity_boost: 0.75
};

export interface TTSOptions {
  text: string;
  voiceId?: string;
  modelId?: string;
  stability?: number;
  similarityBoost?: number;
}

/**
 * Generate speech from text using ElevenLabs API
 * @param options - TTS configuration options
 * @returns Audio blob URL
 */
export const generateSpeech = async (options: TTSOptions): Promise<string> => {
  const {
    text,
    voiceId = FEMALE_VOICE_ID,
    modelId = DEFAULT_MODEL,
    stability = DEFAULT_VOICE_SETTINGS.stability,
    similarityBoost = DEFAULT_VOICE_SETTINGS.similarity_boost
  } = options;

  try {
    const response = await fetch(`${BASE_URL}/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'audio/mpeg'
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability,
          similarity_boost: similarityBoost
        }
      })
    });

    if (!response.ok) {
      throw new Error(`ElevenLabs API error: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);
    return audioUrl;
  } catch (error) {
    console.error('ElevenLabs TTS error:', error);
    throw error;
  }
};

/**
 * Get list of available voices from ElevenLabs
 * @returns Array of voice objects
 */
export const getVoices = async () => {
  try {
    const response = await fetch(`${BASE_URL}/voices`, {
      headers: {
        'xi-api-key': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch voices: ${response.status}`);
    }

    const data = await response.json();
    return data.voices;
  } catch (error) {
    console.error('Error fetching voices:', error);
    throw error;
  }
};

/**
 * Get list of available models from ElevenLabs
 * @returns Array of model objects
 */
export const getModels = async () => {
  try {
    const response = await fetch(`${BASE_URL}/models`, {
      headers: {
        'xi-api-key': API_KEY
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch models: ${response.status}`);
    }

    const models = await response.json();
    return models.filter((model: any) => model.can_do_text_to_speech);
  } catch (error) {
    console.error('Error fetching models:', error);
    throw error;
  }
};

/**
 * Convert audio with voice cloning (Speech-to-Speech)
 * @param audioFile - Audio file to convert
 * @param voiceId - Target voice ID
 * @returns Audio blob URL
 */
export const convertVoice = async (audioFile: File, voiceId: string = FEMALE_VOICE_ID): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('audio', audioFile);

    const response = await fetch(`${BASE_URL}/speech-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Voice conversion failed: ${response.status}`);
    }

    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);
    return audioUrl;
  } catch (error) {
    console.error('Voice conversion error:', error);
    throw error;
  }
};

/**
 * Transcribe audio to text (Speech-to-Text)
 * @param audioFile - Audio file to transcribe
 * @returns Transcription text
 */
export const transcribeAudio = async (audioFile: File): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('audio', audioFile);

    const response = await fetch(`${BASE_URL}/speech-to-text`, {
      method: 'POST',
      headers: {
        'xi-api-key': API_KEY
      },
      body: formData
    });

    if (!response.ok) {
      throw new Error(`Transcription failed: ${response.status}`);
    }

    const result = await response.json();
    return result?.transcription || '';
  } catch (error) {
    console.error('Transcription error:', error);
    throw error;
  }
};
