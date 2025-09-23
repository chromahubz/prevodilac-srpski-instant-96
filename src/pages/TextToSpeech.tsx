import { useState } from "react";
import { Volume2, Globe, Download, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { LanguageSelector } from "@/components/ui/language-selector";
import { VoiceSelector } from "@/components/ui/voice-selector";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("sr");
  const [selectedVoice, setSelectedVoice] = useState("female");
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [audioGenerated, setAudioGenerated] = useState(false);
  const [lastGeneratedText, setLastGeneratedText] = useState("");

  const isRegistered = true;
  const isPremium = true;

  const handleGenerateAudio = async () => {
    if (!text.trim()) return;

    // If text hasn't changed and we already have audio, just play the existing audio
    if (text === lastGeneratedText && currentAudio && audioGenerated) {
      if (isAudioPlaying) {
        currentAudio.pause();
        setIsAudioPlaying(false);
      } else {
        currentAudio.currentTime = 0; // Reset to beginning
        currentAudio.play().then(() => {
          setIsAudioPlaying(true);
        }).catch((error) => {
          console.error("Error playing existing audio:", error);
        });
      }
      return;
    }

    setIsGenerating(true);
    setAudioGenerated(false);

    try {
      // Send TTS request to webhook
      const ttsWebhookUrl = "https://n8n.cosmofic.com/webhook/2cfe4aff-4b89-428f-adf1-9491e10351fa";
      const ttsParams = new URLSearchParams({
        text: text,
        language: selectedLanguage,
        timestamp: new Date().toISOString(),
        source: 'Prevodilac Srpski - TTS',
        userAgent: navigator.userAgent,
        url: window.location.href
      });

      const ttsResponse = await fetch(`${ttsWebhookUrl}?${ttsParams}`, {
        method: 'GET',
      });

      if (ttsResponse.ok) {
        const responseText = await ttsResponse.text();
        console.log('TTS Response (first 100 chars):', responseText.substring(0, 100));
        let audioUrl: string;
        let needsRevoke = false;

        // Handle different response formats
        if (responseText.startsWith('data:audio/')) {
          // Direct data URL - clean up charset parameter that causes playback issues
          audioUrl = responseText.replace(/;charset=utf-8/g, '');
          console.log('Using data URL, cleaned:', audioUrl.substring(0, 50));
        } else if (responseText.startsWith('http')) {
          // Direct URL
          audioUrl = responseText.trim();
          console.log('Using direct URL:', audioUrl);
        } else {
          try {
            // Try parsing as JSON (might contain data URL)
            const jsonResponse = JSON.parse(responseText);
            console.log('Parsed JSON response:', jsonResponse);
            if (jsonResponse.audioUrl) {
              audioUrl = jsonResponse.audioUrl;
            } else if (jsonResponse.url) {
              audioUrl = jsonResponse.url;
            } else if (jsonResponse.publicUrl) {
              audioUrl = jsonResponse.publicUrl;
            } else {
              throw new Error('No audio URL found in JSON response');
            }
          } catch (parseError) {
            console.error('Failed to parse JSON, treating as raw audio data:', parseError);
            // Treat as blob if not a data URL or valid JSON
            const audioBlob = new Blob([responseText], { type: 'audio/mpeg' });
            audioUrl = URL.createObjectURL(audioBlob);
            needsRevoke = true;
          }
        }

        console.log('Final audio URL:', audioUrl);
        const audio = new Audio(audioUrl);

        // For MPGA files, explicitly set the type
        if (audioUrl.includes('.mpga') || audioUrl.includes('.mp3')) {
          audio.setAttribute('type', 'audio/mpeg');
        }

        // Set up audio event listeners
        audio.addEventListener('play', () => setIsAudioPlaying(true));
        audio.addEventListener('pause', () => setIsAudioPlaying(false));
        audio.addEventListener('ended', () => {
          setIsAudioPlaying(false);
          // DON'T remove currentAudio - keep the player visible
        });
        audio.addEventListener('error', (e) => {
          console.error('Audio error:', e);
          setIsAudioPlaying(false);
          // DON'T remove currentAudio on error either
        });

        setCurrentAudio(audio);
        setAudioGenerated(true);
        setLastGeneratedText(text); // Remember what text was generated

        // Automatically start playing the audio
        audio.play().then(() => {
          console.log('Audio started playing');
        }).catch((error) => {
          console.error('Failed to play audio:', error);
        });

        toast({
          title: "Audio generisan",
          description: "Audio se reprodukuje",
        });
      } else {
        throw new Error('TTS failed');
      }
    } catch (error) {
      console.error("TTS error:", error);
      toast({
        title: "TTS greška",
        description: "Pokušajte ponovo",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePlay = () => {
    if (!currentAudio) return;

    if (isAudioPlaying) {
      currentAudio.pause();
      setIsAudioPlaying(false);
    } else {
      currentAudio.play().then(() => {
        setIsAudioPlaying(true);
      }).catch((error) => {
        console.error("Error playing audio:", error);
        setIsAudioPlaying(false);
      });
    }
  };

  const handleDownload = () => {
    if (!isPremium) return;
    // TODO: Implement download functionality
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeaderLogo />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Volume2 className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Tekst u govor</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Pretvori bilo koji tekst u prirodan govor visokeg kvaliteta
          </p>
        </div>

        <div className="translator-surface p-6 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="text-center">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Izaberi jezik:
                </label>
                <div className="flex justify-center">
                  <LanguageSelector
                    value={selectedLanguage}
                    onChange={setSelectedLanguage}
                  />
                </div>
              </div>
              <div className="text-center">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Izaberi glas:
                </label>
                <div className="flex justify-center">
                  <VoiceSelector
                    value={selectedVoice}
                    onChange={setSelectedVoice}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value.slice(0, 1000))}
              placeholder="Unesite tekst koji želite da čujete..."
              className="translator-input"
              rows={6}
              maxLength={1000}
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{text.length}/1000 karaktera</span>
              <Button
                onClick={handleGenerateAudio}
                disabled={!text.trim() || isGenerating}
                className="bg-primary hover:bg-primary-hover"
              >
                <Volume2 className="h-4 w-4 mr-2" />
                {isGenerating ? "Generiše..." :
                 (text === lastGeneratedText && audioGenerated ? "Reprodukuj ponovo" : "Generiši govor")}
              </Button>
            </div>
          </div>

          {audioGenerated && currentAudio && (
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-foreground">Generisan audio:</h3>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleDownload}
                  disabled={!isPremium}
                  className={!isPremium ? 'opacity-60' : ''}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Preuzmi MP3
                </Button>
              </div>

              {/* Audio Player */}
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handlePlay}
                    className="flex-shrink-0 h-12 w-12 rounded-full bg-primary hover:bg-primary-hover text-white"
                  >
                    {isAudioPlaying ? (
                      <Pause className="h-6 w-6" />
                    ) : (
                      <Play className="h-6 w-6 ml-1" />
                    )}
                  </Button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Audio govor</span>
                      <span className="text-xs text-muted-foreground">
                        {isAudioPlaying ? "Reprodukuje se..." : "Spreman za reprodukciju"}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-primary transition-all duration-300 ${
                          isAudioPlaying ? 'animate-pulse' : ''
                        }`}
                        style={{ width: isAudioPlaying ? '100%' : '0%' }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Volume2 className="h-4 w-4" />
                    <span>Ženski glas</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>


        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-6 bg-card border border-card-border rounded-lg">
            <Volume2 className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Prirodan glas</h3>
            <p className="text-sm text-muted-foreground">
              AI glasovi koji zvuče prirodno i jasno
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-card-border rounded-lg">
            <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">Više jezika</h3>
            <p className="text-sm text-muted-foreground">
              Podržano preko 30 različitih jezika
            </p>
          </div>
          <div className="text-center p-6 bg-card border border-card-border rounded-lg">
            <Download className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-semibold text-foreground mb-2">MP3 Export</h3>
            <p className="text-sm text-muted-foreground">
              Sačuvajte audio kao MP3 fajl (Premium)
            </p>
          </div>
        </div>

        {/* Conversion Banners */}
        {!isRegistered && (
          <div className="bg-card border border-card-border rounded-lg p-6 text-center mb-6">
            <Volume2 className="h-6 w-6 text-primary mx-auto mb-3" />
            <h3 className="font-bold text-foreground mb-2">Registruj se za besplatno korišćenje</h3>
            <Button className="bg-primary hover:bg-primary-hover">
              Registruj se besplatno
            </Button>
          </div>
        )}

        {isRegistered && !isPremium && (
          <div className="premium-gradient text-white rounded-lg p-6 text-center">
            <h3 className="font-bold text-lg mb-2">Želiš neograničeno korišćenje?</h3>
            <p className="opacity-90 mb-4">
              Premium korisnici mogu da generišu neograničen broj audio fajlova i skinuju ih kao MP3
            </p>
            <Link to="/premium">
              <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                Pređi na Premium - 9.99€/mesec
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default TextToSpeech;