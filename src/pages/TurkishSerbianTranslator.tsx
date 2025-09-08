import { useState } from "react";
import { ArrowLeftRight, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { TokenMeter } from "@/components/ui/token-meter";
import { TTSButton } from "@/components/ui/tts-button";
import { Link } from "react-router-dom";

const TurkishSerbianTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  
  // Fixed language pair for this page
  const sourceLang = "tr";
  const targetLang = "sr";
  
  // Mock user state
  const isRegistered = false;
  const isPremium = false;
  const usedTokens = 2;
  const totalTokens = 5;

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    // TODO: Replace with actual n8n webhook call
    setTimeout(() => {
      setTranslatedText("Ovo je primer prevoda sa turskog na srpski koji će biti zamenjen stvarnim prevodom.");
      setIsTranslating(false);
    }, 1000);
  };

  const handleSwapLanguages = () => {
    // Redirect to Serbian-Turkish translator
    window.location.href = "/prevodilac-srpski-turski";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">PrevodilacSrpski</h1>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            {isRegistered && (
              <TokenMeter used={usedTokens} total={totalTokens} className="hidden md:flex" />
            )}
            <Button variant="outline" size="sm" className="font-medium">
              Prijavi se
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">
              Registruj se
            </Button>
          </div>
        </div>
      </header>

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa turskog na srpski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa turskog jezika na srpski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        {/* Main Translator */}
        <div className="translator-surface p-6 mb-8">
          {/* Language Selection - Fixed */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇹🇷</span>
              <span className="font-medium text-card-foreground">Turski</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwapLanguages}
              className="p-2 hover:bg-secondary"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇷🇸</span>
              <span className="font-medium text-card-foreground">Srpski</span>
            </div>
          </div>

          {/* Translation Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Source Text */}
            <div className="space-y-4">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value.slice(0, 500))}
                placeholder="Çevrilecek metni girin..."
                className="translator-input"
                maxLength={500}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{sourceText.length}/500 karaktera</span>
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
              <div className="translator-input bg-muted min-h-[120px] text-muted-foreground">
                {translatedText || "Prevod će se pojaviti ovde..."}
              </div>
              {translatedText && (
                <div className="flex justify-between items-center">
                  <TTSButton 
                    text={translatedText}
                    isRegistered={isRegistered}
                    isPremium={isPremium}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="max-w-4xl mx-auto prose prose-gray">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Zašto koristiti naš prevodilac sa turskog na srpski?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Brz i precizan prevod</h3>
              <p className="text-muted-foreground">
                Naš napredni algoritam obezbeđuje brze i tačne prevode sa turskog na srpski jezik,
                čuvajući kontekst i značenje originalnog teksta.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Besplatan za korišćenje</h3>
              <p className="text-muted-foreground">
                Osnovne funkcije prevođenja su potpuno besplatne. Prevedite do 500 karaktera
                po pozivu bez ikakvih ograničenja.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Izgovor teksta</h3>
              <p className="text-muted-foreground">
                Registrovani korisnici mogu da slušaju izgovor prevedenog teksta,
                što pomaže u učenju pravilne srpske izgovaranja.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Mobilno optimizovan</h3>
              <p className="text-muted-foreground">
                Naša aplikacija je optimizovana za mobilne uređaje, omogućavajući
                vam da prevodite gde god da se nalazite.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion Banner */}
        {!isRegistered && (
          <div className="bg-card border border-card-border rounded-lg p-6 text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Headphones className="h-5 w-5 text-primary" />
              <span className="font-medium">Želite da čujete izgovor?</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Registrujte se besplatno i dobijte mogućnost slušanja prevedenog teksta
            </p>
            <Button className="bg-primary hover:bg-primary-hover">
              Registruj se besplatno
            </Button>
          </div>
        )}

        {/* Related Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link to="/prevodilac-srpski-turski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Srpski → Turski
            </Button>
          </Link>
          <Link to="/prevodilac-arapski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Arapski → Srpski
            </Button>
          </Link>
          <Link to="/prevodilac-engleski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Engleski → Srpski
            </Button>
          </Link>
          <Link to="/tekst-u-govor" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Tekst u govor
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TurkishSerbianTranslator;