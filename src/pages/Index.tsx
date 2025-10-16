import { useState, useEffect } from "react";
import { ArrowLeftRight, Users, Headphones, Copy, Check, Code2, Palette, Globe, Smartphone, Laptop, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";
import { translateWithGroq } from "@/lib/groq";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("sr");
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentBannerScreen, setCurrentBannerScreen] = useState(0);

  const { isRegistered, isPremium, usedTokens, totalTokens } = useAuth();

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

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;

    setIsTranslating(true);
    setTranslatedText(""); // Clear previous translation

    try {
      // Use Groq Qwen AI with streaming
      await translateWithGroq(
        sourceText,
        sourceLang,
        targetLang,
        {
          onChunk: (text: string) => {
            // Update the translated text as chunks arrive
            setTranslatedText(text);
          },
          onComplete: () => {
            setIsTranslating(false);
            toast({
              title: "Prevod uspešan",
              description: "Tekst je uspešno preveden",
            });
          },
          onError: (error: Error) => {
            console.error("Translation error:", error);
            setTranslatedText("Prevod trenutno nije dostupan, pokušajte ponovo.");
            setIsTranslating(false);
            toast({
              title: "Greška pri prevođenju",
              description: "Molimo pokušajte ponovo",
              variant: "destructive",
            });
          }
        }
      );

    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Prevod trenutno nije dostupan, pokušajte ponovo.");
      setIsTranslating(false);
      toast({
        title: "Greška pri prevođenju",
        description: "Molimo pokušajte ponovo",
        variant: "destructive",
      });
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Main Translator */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="translator-surface p-6 mb-8">
          {/* Language Selection */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <LanguageSelector value={sourceLang} onChange={setSourceLang} />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwapLanguages}
              className="p-2 hover:bg-secondary"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            <LanguageSelector value={targetLang} onChange={setTargetLang} />
          </div>

          {/* Translation Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Source Text */}
            <div className="space-y-4">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value.slice(0, 2000))}
                placeholder="Unesi tekst za prevod..."
                className="translator-input"
                maxLength={2000}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{sourceText.length}/2000 karaktera</span>
                <Button
                  onClick={handleTranslate}
                  disabled={!sourceText.trim() || isTranslating}
                  className="bg-primary hover:bg-primary-hover"
                >
                  {isTranslating ? "Prevodi..." : "Prevedi"}
                </Button>
              </div>
            </div>

            {/* Translation Result */}
            <div className="space-y-4">
              <div className={`translator-input bg-muted min-h-[120px] text-foreground relative ${
                isTranslating ? 'animate-pulse border-2 border-primary/50 border-dashed' : ''
              }`}>
                <div className="relative group">
                  {translatedText || "Prevod će se pojaviti ovde..."}
                  {translatedText && (
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(translatedText);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        } catch (err) {
                          console.error('Failed to copy:', err);
                        }
                      }}
                      className="absolute -top-1 -right-1 p-1 rounded hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                    </button>
                  )}
                </div>
              </div>
               {translatedText && (
                 <div className="flex justify-between items-center">
                   <TTSButton
                     text={translatedText}
                     isRegistered={true}
                     isPremium={isPremium}
                   />
                 </div>
               )}
            </div>
          </div>
        </div>


        {/* Conversion Banners */}
        <div className="space-y-4 mb-8">
          {!isRegistered && (
            <div className="bg-card border border-card-border rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-primary" />
                <span className="font-medium">Čuvaj svoje prevode i slušaj ih kad god poželiš</span>
              </div>
              <p className="text-muted-foreground mb-3">Registruj se besplatno</p>
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
        </div>

        {/* Quick Language Shortcuts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link to="/prevodilac-engleski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Engleskog
            </Button>
          </Link>
          <Link to="/prevodilac-nemacki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Nemačkog
            </Button>
          </Link>
          <Link to="/prevodilac-francuski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Francuskog
            </Button>
          </Link>
          <Link to="/prevodilac-italijanski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Italijanskog
            </Button>
          </Link>
          <Link to="/prevodilac-spanski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Španskog
            </Button>
          </Link>
          <Link to="/prevodilac-ruski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Ruskog
            </Button>
          </Link>
          <Link to="/prevodilac-grcki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Grčkog
            </Button>
          </Link>
          <Link to="/prevodilac-madjarski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Mađarskog
            </Button>
          </Link>
          <Link to="/prevodilac-rumunski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Rumunskog
            </Button>
          </Link>
          <Link to="/prevodilac-bugarski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Bugarskog
            </Button>
          </Link>
          <Link to="/prevodilac-kineski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Kineskog
            </Button>
          </Link>
          <Link to="/prevodilac-japanski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Japanskog
            </Button>
          </Link>
          <Link to="/prevodilac-korejski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Korejskog
            </Button>
          </Link>
          <Link to="/prevodilac-turski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Turskog
            </Button>
          </Link>
          <Link to="/prevodilac-arapski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Arapskog
            </Button>
          </Link>
          <Link to="/prevodilac-holandski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Holandskog
            </Button>
          </Link>
          <Link to="/prevodilac-ceski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Češkog
            </Button>
          </Link>
          <Link to="/prevodilac-slovacki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Slovačkog
            </Button>
          </Link>
          <Link to="/prevodilac-poljski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Poljskog
            </Button>
          </Link>
          <Link to="/prevodilac-portugalski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Portugalskog
            </Button>
          </Link>
          <Link to="/tekst-u-govor" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Tekst u govor
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;