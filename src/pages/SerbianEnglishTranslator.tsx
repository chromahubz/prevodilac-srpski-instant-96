import { useState } from "react";
import { ArrowLeftRight, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TokenMeter } from "@/components/ui/token-meter";
import { TTSButton } from "@/components/ui/tts-button";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";

const SerbianEnglishTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  
  const { isRegistered, isPremium, usedTokens, totalTokens } = useAuth();

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    setTimeout(() => {
      setTranslatedText("This is a sample translation from Serbian to English that will be replaced with actual n8n webhook translation.");
      setIsTranslating(false);
    }, 1000);
  };

  const handleSwapLanguages = () => {
    window.location.href = "/prevodilac-engleski-srpski";
  };

  return (
    <div className="min-h-screen bg-background">
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
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa srpskog na engleski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa srpskog jezika na engleski. Besplatno, uz opciju izgovora teksta.
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
              <span className="text-base">🇺🇸</span>
              <span className="font-medium text-card-foreground">Engleski</span>
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
                <Button
                  onClick={handleTranslate}
                  disabled={!sourceText.trim() || isTranslating}
                  className="bg-primary hover:bg-primary-hover"
                >
                  {isTranslating ? "Prevodi..." : "Prevedi"}
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="translator-input bg-muted min-h-[120px] text-muted-foreground">
                {translatedText || "Translation will appear here..."}
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
            Profesionalni prevod sa srpskog na engleski
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Najbolji srpsko-engleski prevodilac</h3>
              <p className="text-muted-foreground">
                Naš prevodilac koristi najnovije AI tehnologije za precizan prevod sa srpskog na engleski jezik,
                čuvajući gramatiku i kontekst.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Savršen za studente i profesionalce</h3>
              <p className="text-muted-foreground">
                Idealan alat za studente koji uče engleski, kao i za profesionalce koji rade
                sa međunarodnim klijentima.
              </p>
            </div>
          </div>
        </div>

        {!isRegistered && (
          <div className="bg-card border border-card-border rounded-lg p-6 text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Headphones className="h-5 w-5 text-primary" />
              <span className="font-medium">Perfektujte svoj engleski izgovor</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Slušajte kako se prevedeni tekst izgovara na engleskom jeziku
            </p>
            <Button className="bg-primary hover:bg-primary-hover">Registruj se za besplatno slušanje</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SerbianEnglishTranslator;