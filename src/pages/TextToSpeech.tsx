import { useState } from "react";
import { Volume2, Globe, Download, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { TokenMeter } from "@/components/ui/token-meter";
import { LanguageSelector } from "@/components/ui/language-selector";
import { VoiceSelector } from "@/components/ui/voice-selector";
import { Link } from "react-router-dom";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("sr");
  const [selectedVoice, setSelectedVoice] = useState("aria");
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioGenerated, setAudioGenerated] = useState(false);
  
  const isRegistered = true;
  const isPremium = true;
  const usedTokens = 3;
  const totalTokens = 5;

  const handleGenerateAudio = () => {
    if (!text.trim() || !isRegistered) return;
    
    // TODO: Replace with actual TTS API call
    setTimeout(() => {
      setAudioGenerated(true);
    }, 1000);
  };

  const handlePlay = () => {
    if (!isRegistered) return;
    setIsPlaying(!isPlaying);
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
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Izaberi jezik:
              </label>
              <LanguageSelector 
                value={selectedLanguage} 
                onChange={setSelectedLanguage}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Izaberi glas:
              </label>
              <VoiceSelector 
                value={selectedVoice} 
                onChange={setSelectedVoice}
              />
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
                disabled={!text.trim() || !isRegistered}
                className={`${!isRegistered ? 'opacity-60' : 'bg-primary hover:bg-primary-hover'}`}
              >
                <Volume2 className="h-4 w-4 mr-2" />
                Generiši govor
              </Button>
            </div>
          </div>

          {audioGenerated && (
            <div className="bg-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium text-foreground">Generisan audio:</h3>
                <div className="flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handlePlay}
                    disabled={!isRegistered}
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pauziraj
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Reprodukuj
                      </>
                    )}
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleDownload}
                    disabled={!isPremium}
                    className={!isPremium ? 'opacity-60' : ''}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Skiraj MP3
                  </Button>
                </div>
              </div>
              <div className="bg-card rounded p-4">
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-1/3 transition-all duration-300"></div>
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