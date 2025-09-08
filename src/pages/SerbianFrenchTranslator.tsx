import { useState } from "react";
import { ArrowLeftRight, Globe, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TokenMeter } from "@/components/ui/token-meter";
import { TTSButton } from "@/components/ui/tts-button";
import { Link } from "react-router-dom";

const SerbianFrenchTranslator = () => {
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
      setTranslatedText("Ceci est un exemple de traduction du serbe vers le français qui sera remplacé par une vraie traduction.");
      setIsTranslating(false);
    }, 1000);
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
            {isRegistered && <TokenMeter used={usedTokens} total={totalTokens} className="hidden md:flex" />}
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Prevedi tekst sa srpskog na francuski online
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Brz i tačan prevod sa srpskog jezika na francuski. Besplatno, uz opciju izgovora teksta.
          </p>
        </div>

        <div className="translator-surface p-6 mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇷🇸</span>
              <span className="font-medium text-card-foreground">Srpski</span>
            </div>
            <Button variant="ghost" size="sm" className="p-2 hover:bg-secondary">
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2 h-12 px-4 rounded-lg border border-card-border bg-card">
              <span className="text-base">🇫🇷</span>
              <span className="font-medium text-card-foreground">Francuski</span>
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
                  <TTSButton text={translatedText} isRegistered={isRegistered} isPremium={isPremium} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-card-border bg-card mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Prevodilac</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/online-prevodilac" className="hover:text-foreground">Online prevodilac</Link></li>
                <li><Link to="/besplatan-prevod-teksta" className="hover:text-foreground">Besplatan prevod</Link></li>
                <li><Link to="/tekst-u-govor" className="hover:text-foreground">Tekst u govor</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Jezici</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/prevodilac-engleski-srpski" className="hover:text-foreground">Engleski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-nemacki-srpski" className="hover:text-foreground">Nemački ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-francuski-srpski" className="hover:text-foreground">Francuski ↔ Srpski</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Blog</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/blog/10-saveta-kako-brzo-nauciti-engleski" className="hover:text-foreground">10 saveta za engleski</Link></li>
                <li><Link to="/blog/kako-nauciti-nemacki-samostalno" className="hover:text-foreground">Kako naučiti nemački</Link></li>
                <li><Link to="/blog/najcesce-greske-u-engleskom-prevodu" className="hover:text-foreground">Greške u prevodu</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Podrška</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/o-nama" className="hover:text-foreground">O nama</Link></li>
                <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
                <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-card-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 PrevodilacSrpski. Sva prava zadržana.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SerbianFrenchTranslator;