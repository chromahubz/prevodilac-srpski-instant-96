import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";

const ItalianSerbianTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  
  const isRegistered = false;
  const isPremium = false;
  const usedTokens = 2;
  const totalTokens = 5;

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    setIsTranslating(true);
    setTimeout(() => {
      setTranslatedText("Ovo je primer prevoda sa italijanskog na srpski koji će biti zamenjen stvarnim prevodom.");
      setIsTranslating(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader isRegistered={isRegistered} usedTokens={usedTokens} totalTokens={totalTokens} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa italijanskog na srpski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa italijanskog jezika na srpski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        <div className="translator-surface p-6 mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇮🇹</span>
              <span className="font-medium text-card-foreground">Italijanski</span>
            </div>
            <Button variant="ghost" size="sm" className="p-2 hover:bg-secondary">
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
                placeholder="Inserisci il testo da tradurre..."
                className="translator-input"
                maxLength={500}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{sourceText.length}/500 caratteri</span>
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
          <h2 className="text-2xl font-bold text-foreground mb-4">Italijanski prevodilac - Traduttore italiano</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Melodičnost italijanskog jezika</h3>
              <p className="text-muted-foreground">
                Italijanski jezik je poznat po svojoj melodičnosti i lepoti. Naš prevodilac čuva tu originalnu 
                eleganciju pri prevodu na srpski jezik.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Za ljubitelje Italije</h3>
              <p className="text-muted-foreground">
                Savršen alat za one koji planiraju putovanje u Italiju, čitaju italijansku literaturu 
                ili uče ovaj prekrasni jezik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItalianSerbianTranslator;