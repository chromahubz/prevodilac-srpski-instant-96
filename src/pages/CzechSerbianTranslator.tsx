import { useState } from "react";
import { ArrowLeftRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";
import { useTranslation } from "@/hooks/use-translation";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const CzechSerbianTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  
  const { isRegistered, isPremium, usedTokens, totalTokens } = useAuth();

  const { translateText } = useTranslation();

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);

    try {
      const result = await translateText(sourceText, "cs", "sr");
      setTranslatedText(result || "Prevod trenutno nije dostupan, pokušajte ponovo.");
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Prevod trenutno nije dostupan, pokušajte ponovo.");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    // Redirect to Serbian-Czech translator
    window.location.href = "/prevodilac-srpski-ceski";
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa češkog na srpski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa češkog jezika na srpski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        {/* Main Translator */}
        <div className="translator-surface p-6 mb-8">
          {/* Language Selection - Fixed */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇨🇿</span>
              <span className="font-medium text-card-foreground">Češki</span>
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
                placeholder="Zadejte text k překladu..."
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

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Zašto koristiti naš prevodilac sa češkog na srpski?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Brz i precizan prevod</h3>
              <p className="text-muted-foreground">
                Naš napredni algoritam obezbeđuje brze i tačne prevode sa češkog na srpski jezik,
                čuvajući kontekst i značenje originalnog teksta. Sistem prepoznaje idiome, kolokvijalizam
                i kulturne specifičnosti za prirodan prevod.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Zapadnoslovenski češki</h3>
              <p className="text-muted-foreground">
                Češki kao zapadnoslovenski jezik ima drugačije padežne sisteme od srpskog. Naš sistem je obučen na velikim korpusima češkog
                teksta, što omogućava prepoznavanje složenih gramatičkih struktura i kontekstualnih nijansi.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Prirodan audio izgovor</h3>
              <p className="text-muted-foreground">
                Slušajte prevod izgovoren prirodnim srpskim glasom visokeg kvaliteta. Korisno je za učenje
                srpskog jezika, proveru izgovora ili pomoć osobama sa poteškoćama u čitanju. Audio se generiše
                u realnom vremenu sa naprednom TTS tehnologijom.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Optimizovano za sve potrebe</h3>
              <p className="text-muted-foreground">
                Savršeno funkcioniše na svim uređajima - telefonu, tabletu ili računaru. Interfejs je
                prilagođen brzom radu sa intuitivnim kontrolama. Idealno za studente, poslovne korisnike,
                turiste ili sve koji trebaju pouzdan prevod.
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
          <Link to="/prevodilac-srpski-ceski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Srpski → Češki
            </Button>
          </Link>
          <Link to="/prevodilac-slovacki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Slovački → Srpski
            </Button>
          </Link>
          <Link to="/prevodilac-poljski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Poljski → Srpski
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

export default CzechSerbianTranslator;