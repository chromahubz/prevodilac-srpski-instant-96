import { useState, useEffect } from "react";
import { Volume2, Globe, Download, Play, Pause, Code2, Palette, Smartphone, Laptop, Zap, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import { LanguageSelector } from "@/components/ui/language-selector";
import { VoiceSelector } from "@/components/ui/voice-selector";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useTTS } from "@/hooks/use-tts";

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("sr");
  const [selectedVoice, setSelectedVoice] = useState("female");
  const [currentBannerScreen, setCurrentBannerScreen] = useState(0);

  const { isRegistered, isPremium } = useAuth();
  const { isLoading, isPlaying, playAudio, stopAudio, downloadAudio } = useTTS({
    language: selectedLanguage,
    voice: selectedVoice,
  });

  const bannerScreens = [
    {
      line1: "SAJT ZA TVOJ BIZNIS",
      line2: "PORUCISAJT.COM",
      line3: "SAJT VEĆ OD 50€",
      gradient: "gradient-blue"
    },
    {
      line1: "PROFESIONALNI WEB DIZAJN",
      line2: "MODERAN I BRZI SAJT",
      line3: "ZA TVOJU FIRMU",
      gradient: "gradient-green"
    },
    {
      line1: "BESPLATNO HOSTING",
      line2: "I DOMEN PRVA GODINA",
      line3: "PORUCISAJT.COM",
      gradient: "gradient-orange"
    },
    {
      line1: "OPTIMIZOVANO ZA GOOGLE",
      line2: "SEO I MARKETING",
      line3: "UKLJUČENO U CENU",
      gradient: "gradient-purple"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerScreen((prev) => (prev + 1) % bannerScreens.length);
    }, 5000); // Change screen every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleGenerateAudio = async () => {
    if (!text.trim()) return;

    if (isPlaying) {
      stopAudio();
    } else {
      await playAudio(text);
    }
  };

  const handleDownload = async () => {
    if (!isPremium || !text.trim()) return;
    await downloadAudio(text, `tekst-u-govor-${Date.now()}.mp3`);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

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
              onChange={(e) => setText(e.target.value.slice(0, 2000))}
              placeholder="Unesite tekst koji želite da čujete..."
              className="translator-input"
              rows={6}
              maxLength={2000}
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{text.length}/2000 karaktera</span>
              <div className="flex gap-2">
                <Button
                  onClick={handleGenerateAudio}
                  disabled={!text.trim() || isLoading}
                  className="bg-primary hover:bg-primary-hover"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Generiše...
                    </>
                  ) : isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Zaustavi
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-4 w-4 mr-2" />
                      Generiši govor
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleDownload}
                  disabled={!text.trim() || isLoading || !isPremium}
                  variant="secondary"
                  className={!isPremium ? 'opacity-60' : ''}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Preuzmi MP3
                </Button>
              </div>
            </div>
          </div>
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
          <a
            href="https://porucisajt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className={`tech-banner ${bannerScreens[currentBannerScreen].gradient} rounded-lg p-8 text-center min-h-[180px] relative transition-transform hover:scale-[1.02] active:scale-[0.98]`}>
              <div className="floating-icons">
                <Code2 className="floating-icon" size={48} />
                <Palette className="floating-icon" size={40} />
                <Globe className="floating-icon" size={44} />
                <Smartphone className="floating-icon" size={42} />
                <Laptop className="floating-icon" size={46} />
                <Zap className="floating-icon" size={38} />
              </div>
              {bannerScreens.map((screen, index) => (
                <div
                  key={index}
                  className={`banner-screen ${currentBannerScreen === index ? 'active' : ''}`}
                  style={{
                    opacity: currentBannerScreen === index ? 1 : 0,
                    visibility: currentBannerScreen === index ? 'visible' : 'hidden',
                    transition: 'opacity 0.8s ease-in-out',
                    pointerEvents: currentBannerScreen === index ? 'auto' : 'none'
                  }}
                >
                  <div className="tech-text animate-line-1">
                    <p className="text-white text-xl md:text-2xl font-bold tracking-wide">
                      {screen.line1}
                    </p>
                  </div>
                  <div className="tech-text animate-line-2">
                    <p className="text-white text-3xl md:text-4xl font-black tracking-wider">
                      {screen.line2}
                    </p>
                  </div>
                  <div className="tech-text animate-line-3">
                    <p className="text-white text-lg md:text-xl font-semibold tracking-wide">
                      {screen.line3}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </a>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default TextToSpeech;
