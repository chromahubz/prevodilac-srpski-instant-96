import { useState } from "react";
import { ArrowLeftRight, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TokenMeter } from "@/components/ui/token-meter";
import { TTSButton } from "@/components/ui/tts-button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";

const GermanSerbianTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  
  const { isRegistered, isPremium, usedTokens, totalTokens } = useAuth();

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);
    setTimeout(() => {
      setTranslatedText("Ovo je primer prevoda sa nemačkog na srpski koji će biti zamenjen stvarnim prevodom.");
      setIsTranslating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeaderLogo />
          </div>
          <div className="flex items-center gap-4">
            {isRegistered && <TokenMeter used={usedTokens} total={totalTokens} className="hidden md:flex" />}
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa nemačkog na srpski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa nemačkog jezika na srpski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        <div className="translator-surface p-6 mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇩🇪</span>
              <span className="font-medium text-card-foreground">Nemački</span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = "/prevodilac-srpski-nemacki"}
              className="p-2 hover:bg-secondary"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇷🇸</span>
              <span className="font-medium text-card-foreground">Srpski</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value.slice(0, 500))}
                placeholder="Geben Sie Text zur Übersetzung ein..."
                className="translator-input"
                maxLength={500}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{sourceText.length}/500 zeichen</span>
                <Button onClick={handleTranslate} disabled={!sourceText.trim() || isTranslating} className="bg-primary hover:bg-primary-hover">
                  {isTranslating ? "Prevodi..." : "Prevedi"}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="translator-input bg-muted min-h-[120px] text-muted-foreground">
                {translatedText || "Prevod će se pojaviti ovde..."}
              </div>
              {translatedText && (
                <div className="flex justify-between items-center">
                  <TTSButton text={translatedText} isRegistered={isRegistered} isPremium={isPremium} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Zašto koristiti naš prevodilac sa nemačkog na srpski?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Brz i precizan prevod</h3>
              <p className="text-muted-foreground">
                Naš napredni algoritam obezbeđuje brze i tačne prevode sa nemačkog na srpski jezik,
                čuvajući kontekst i značenje originalnog teksta. Sistem prepoznaje idiome, kolokvijalizam
                i kulturne specifičnosti za prirodan prevod.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Složena nemačka gramatika</h3>
              <p className="text-muted-foreground">
                Pravilno obrađuje nemačke deklinacije, složene reči i specifičan red reči u rečenici. Naš sistem je obučen na velikim korpusima nemačkog
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
      </div>
      
      <Footer />
    </div>
  );
};

export default GermanSerbianTranslator;