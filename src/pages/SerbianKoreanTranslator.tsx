import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";
import { useTranslation } from "@/hooks/use-translation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const SerbianKoreanTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const { translateText, isTranslating } = useTranslation();
  const navigate = useNavigate();

  const isRegistered = false;
  const isPremium = false;
  const usedTokens = 2;
  const totalTokens = 5;

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    const result = await translateText(sourceText, "sr", "ko");
    setTranslatedText(result || "Prevod trenutno nije dostupan, pokušajte ponovo.");
  };

  const handleSwapLanguages = () => {
    navigate("/prevodilac-korejski-srpski");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader isRegistered={isRegistered} usedTokens={usedTokens} totalTokens={totalTokens} />

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa srpskog na korejski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa srpskog jezika na korejski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        {/* Main Translator */}
        <div className="translator-surface p-6 mb-8">
          {/* Language Selection - Fixed */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇷🇸</span>
              <span className="font-medium text-card-foreground">Srpski</span>
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
              <span className="text-base">🇰🇷</span>
              <span className="font-medium text-card-foreground">Korejski</span>
            </div>
          </div>

          {/* Translation Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Source Text */}
            <div className="space-y-4">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value.slice(0, 500))}
                placeholder="Unesi tekst za prevod..."
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
            Zašto koristiti naš prevodilac sa srpskog na korejski?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Brz i precizan prevod</h3>
              <p className="text-muted-foreground">
                Naš napredni algoritam obezbeđuje brze i tačne prevode sa srpskog na korejski jezik,
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
                što pomaže u učenju pravilne korejske izgovaranja.
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
          <Link to="/prevodilac-korejski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Korejski → Srpski
            </Button>
          </Link>
          <Link to="/prevodilac-srpski-japanski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Srpski → Japanski
            </Button>
          </Link>
          <Link to="/prevodilac-srpski-kineski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Srpski → Kineski
            </Button>
          </Link>
          <Link to="/tekst-u-govor" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Tekst u govor
            </Button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SerbianKoreanTranslator;