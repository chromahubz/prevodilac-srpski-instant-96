import { useState } from "react";
import { ArrowLeftRight, Copy, Check, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { TTSButton } from "@/components/ui/tts-button";
import { SiteHeader } from "@/components/ui/site-header";
import { sendTranslationToWebhook, TranslationData } from "@/lib/webhook";
import { toast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EnglishSerbianTranslator = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Fixed language pair for this page
  const sourceLang = "en";
  const targetLang = "sr";
  
  // Mock user state
  const isRegistered = false;
  const isPremium = false;
  const usedTokens = 2;
  const totalTokens = 5;

  const handleTranslate = async () => {
    if (!sourceText.trim()) return;
    
    setIsTranslating(true);
    
    try {
      // Send translation request to webhook and get actual translation
      const translationData: TranslationData = {
        sourceText: sourceText,
        targetText: "", // Will be filled by webhook
        sourceLanguage: sourceLang,
        targetLanguage: targetLang,
        timestamp: new Date().toISOString()
      };
      
      const webhookResponse = await sendTranslationToWebhook(translationData);
      const translatedResult = webhookResponse || "Prevod trenutno nije dostupan, pokušajte ponovo.";
      
      setTranslatedText(translatedResult);
      
      // Show success message
      toast({
        title: "Prevod uspešan",
        description: "Tekst je uspešno preveden",
      });
      
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Prevod trenutno nije dostupan, pokušajte ponovo.");
      toast({
        title: "Greška pri prevođenju",
        description: "Molimo pokušajte ponovo",
        variant: "destructive",
      });
    } finally {
      setIsTranslating(false);
    }
  };

  const handleSwapLanguages = () => {
    // Redirect to Serbian-English translator
    window.location.href = "/prevodilac-srpski-engleski";
  };

  const handleCopy = async () => {
    if (!translatedText) return;
    
    try {
      await navigator.clipboard.writeText(translatedText);
      setCopied(true);
      toast({
        title: "Kopirano",
        description: "Tekst je kopiran u clipboard",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader isRegistered={isRegistered} usedTokens={usedTokens} totalTokens={totalTokens} />

      {/* SEO Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa engleskog na srpski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa engleskog jezika na srpski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        {/* Main Translator */}
        <div className="translator-surface p-6 mb-8">
          {/* Language Selection - Fixed */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇺🇸</span>
              <span className="font-medium text-card-foreground">Engleski</span>
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
                placeholder="Enter text to translate..."
                className="translator-input"
                maxLength={500}
              />
              <div className="flex justify-between items-center text-sm text-muted-foreground">
                <span>{sourceText.length}/500 characters</span>
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
              <div className={`relative translator-input bg-muted min-h-[120px] group ${
                isTranslating ? 'border-primary/50 animate-pulse' : ''
              } ${
                translatedText ? 'text-foreground' : 'text-muted-foreground'
              }`}>
                {isTranslating && (
                  <div className="absolute inset-0 rounded-lg border-2 border-primary/50 animate-pulse pointer-events-none" />
                )}
                {translatedText || "Prevod će se pojaviti ovde..."}
                {translatedText && (
                  <button
                    onClick={handleCopy}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-card border border-card-border opacity-0 group-hover:opacity-100 transition-opacity hover:bg-secondary"
                    aria-label="Kopiraj tekst"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-success" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                  </button>
                )}
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
            Zašto koristiti naš prevodilac sa engleskog na srpski?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Brz i precizan prevod</h3>
              <p className="text-muted-foreground">
                Naš napredni algoritam obezbeđuje brze i tačne prevode sa engleskog na srpski jezik,
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
          <Link to="/prevodilac-srpski-engleski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Srpski → Engleski
            </Button>
          </Link>
          <Link to="/prevodilac-nemacki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Nemački → Srpski
            </Button>
          </Link>
          <Link to="/prevodilac-francuski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Francuski → Srpski
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

export default EnglishSerbianTranslator;