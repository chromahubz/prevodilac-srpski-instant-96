import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";
import { useTranslation } from "@/hooks/use-translation";
import { useAuth } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";

const SerbianBulgarianTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const { translateText, isTranslating } = useTranslation();
  const navigate = useNavigate();

  const { isRegistered, isPremium, usedTokens, totalTokens } = useAuth();

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    const result = await translateText(sourceText, "sr", "bg");
    setTranslatedText(result || "Prevod trenutno nije dostupan, pokušajte ponovo.");
  };

  const handleSwapLanguages = () => {
    navigate("/prevodilac-bugarski-srpski");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa srpskog na bugarski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa srpskog jezika na bugarski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        <div className="translator-surface p-6 mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇷🇸</span>
              <span className="font-medium text-card-foreground">Srpski</span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleSwapLanguages} className="p-2 hover:bg-secondary">
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇧🇬</span>
              <span className="font-medium text-card-foreground">Bugarski</span>
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
                {translatedText || "Преводът ще се покаже тук..."}
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Srpski prevodilac na bugarski - Сръбски преводач</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Kvalitetan prevod na bugarski</h3>
              <p className="text-muted-foreground">
                Precizan prevod sa srpskog na bugarski jezik koji čuva značenje i kontekst 
                originalnog teksta uz poštovanje bugarske gramatike.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Za bratske narode</h3>
              <p className="text-muted-foreground">
                Idealan za komunikaciju sa Bugarima, turizam ili studije, 
                omogućava jasnu komunikaciju na bugarskom jeziku.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SerbianBulgarianTranslator;