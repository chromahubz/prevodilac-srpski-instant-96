import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";
import { useTranslation } from "@/hooks/use-translation";
import Footer from "@/components/Footer";

const SerbianSpanishTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

  const isRegistered = false;
  const isPremium = false;
  const usedTokens = 2;
  const totalTokens = 5;

  const { translateText } = useTranslation();

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);

    try {
      const result = await translateText(sourceText, "sr", "es");
      setTranslatedText(result || "Prevod trenutno nije dostupan, pokušajte ponovo.");
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Prevod trenutno nije dostupan, pokušajte ponovo.");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    window.location.href = "/prevodilac-spanski-srpski";
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader isRegistered={isRegistered} usedTokens={usedTokens} totalTokens={totalTokens} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa srpskog na španski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa srpskog jezika na španski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        <div className="translator-surface p-6 mb-8">
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
              <span className="text-base">🇪🇸</span>
              <span className="font-medium text-card-foreground">Španski</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <textarea
                value={sourceText}
                onChange={(e) => setSourceText(e.target.value.slice(0, 500))}
                placeholder="Unesite tekst za prevod..."
                className="translator-input"
                maxLength={500}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{sourceText.length}/500 karaktera</span>
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
                  <TTSButton text={translatedText} lang="es" isRegistered={isRegistered} isPremium={isPremium} />
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Srpski prema španskom
          </h2>
          <p className="text-muted-foreground mb-6">
            Efikasno prevođenje srpskog na španski jezik uz poštovanje regionalnih različitosti španskog iz Latinske Amerike i Španije.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Profesionalan prevod srpsko-španski</h3>
              <p className="text-muted-foreground">
                Naš napredni algoritam obezbeđuje precizne prevode sa srpskog na španski jezik,
                čuvajući kontekst i značenje originalnog teksta. Sistem prepoznaje regionalne
                varijante španskog jezika iz različitih zemalja.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Podrška za sve varijante španskog</h3>
              <p className="text-muted-foreground">
                Prepoznaje različitosti između španskog iz Španije i latinoameričkih varijanti.
                Naš sistem je obučen na velikim korpusima španskog teksta iz različitih regiona,
                što omogućava prilagođavanje lokalnim izrazima.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Prirodan audio izgovor</h3>
              <p className="text-muted-foreground">
                Slušajte prevod izgovoren prirodnim španskim glasom visokeg kvaliteta. Korisno je za učenje
                španskog jezika, proveru izgovora ili pomoć osobama sa poteškoćama u čitanju. Audio se generiše
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

export default SerbianSpanishTranslator;