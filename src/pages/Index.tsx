import { useState } from "react";
import { ArrowLeftRight, Users, Headphones, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/ui/language-selector";
import { TokenMeter } from "@/components/ui/token-meter";
import { TTSButton } from "@/components/ui/tts-button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { sendTranslationToWebhook, TranslationData } from "@/lib/webhook";
import { toast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("sr");
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  
  // Mock user state - replace with actual auth
  const isRegistered = true;
  const isPremium = true;
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

  const handleTTSPlay = async (text: string) => {
    // If audio is currently playing, stop it
    if (currentAudio && isAudioPlaying) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      setIsAudioPlaying(false);
      setCurrentAudio(null);
      return;
    }

    try {
      // Send TTS request to webhook
      const ttsWebhookUrl = "https://n8n.cosmofic.com/webhook/2cfe4aff-4b89-428f-adf1-9491e10351fa";
      const ttsParams = new URLSearchParams({
        text: text,
        language: targetLang,
        timestamp: new Date().toISOString(),
        source: 'Prevodilac Srpski',
        userAgent: navigator.userAgent,
        url: window.location.href
      });
      
      const ttsResponse = await fetch(`${ttsWebhookUrl}?${ttsParams}`, {
        method: 'GET',
      });
      
      if (ttsResponse.ok) {
        const responseText = await ttsResponse.text();
        let audioUrl: string;
        let needsRevoke = false;
        
        // Handle different response formats
        if (responseText.startsWith('data:audio/')) {
          // Direct data URL - clean up charset parameter that causes playback issues
          audioUrl = responseText.replace(/;charset=utf-8/g, '');
          console.log('Cleaned audio URL:', audioUrl.substring(0, 50) + '...');
        } else {
          try {
            // Try parsing as JSON (might contain data URL)
            const jsonResponse = JSON.parse(responseText);
            if (jsonResponse.audioUrl && jsonResponse.audioUrl.startsWith('data:audio/')) {
              audioUrl = jsonResponse.audioUrl;
            } else {
              throw new Error('Invalid JSON response format');
            }
          } catch {
            // Treat as blob if not a data URL or valid JSON
            const audioBlob = new Blob([responseText], { type: 'audio/mpeg' });
            audioUrl = URL.createObjectURL(audioBlob);
            needsRevoke = true;
          }
        }
        
        const audio = new Audio(audioUrl);
        
        // Set up audio event listeners
        audio.addEventListener('loadstart', () => setIsAudioPlaying(true));
        audio.addEventListener('ended', () => {
          setIsAudioPlaying(false);
          setCurrentAudio(null);
          if (needsRevoke) URL.revokeObjectURL(audioUrl);
        });
        audio.addEventListener('error', () => {
          setIsAudioPlaying(false);
          setCurrentAudio(null);
          if (needsRevoke) URL.revokeObjectURL(audioUrl);
        });
        
        setCurrentAudio(audio);
        audio.play();
        
        toast({
          title: "TTS uspešan",
          description: "Tekst se reprodukuje",
        });
      } else {
        throw new Error('TTS failed');
      }
    } catch (error) {
      console.error("TTS error:", error);
      setIsAudioPlaying(false);
      setCurrentAudio(null);
      toast({
        title: "TTS greška",
        description: "Pokušajte ponovo",
        variant: "destructive",
      });
    }
  };

  const handleSwapLanguages = () => {
    setSourceLang(targetLang);
    setTargetLang(sourceLang);
    setSourceText(translatedText);
    setTranslatedText(sourceText);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeaderLogo />
          </div>
          
          <div className="flex items-center gap-4">
            {isRegistered && (
              <TokenMeter used={usedTokens} total={totalTokens} className="hidden md:flex" />
            )}
            <Button variant="outline" size="sm" className="font-medium">
              Prijavi se
            </Button>
            <Button size="sm" className="font-medium bg-primary hover:bg-primary-hover">
              Registruj se
            </Button>
          </div>
        </div>
      </header>

      {/* Main Translator */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="translator-surface p-6 mb-8">
          {/* Language Selection */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <LanguageSelector value={sourceLang} onChange={setSourceLang} />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSwapLanguages}
              className="p-2 hover:bg-secondary"
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            <LanguageSelector value={targetLang} onChange={setTargetLang} />
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
              <div className={`translator-input bg-muted min-h-[120px] text-foreground relative ${
                isTranslating ? 'animate-pulse border-2 border-primary/50 border-dashed' : ''
              }`}>
                <div className="relative group">
                  {translatedText || "Prevod će se pojaviti ovde..."}
                  {translatedText && (
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(translatedText);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        } catch (err) {
                          console.error('Failed to copy:', err);
                        }
                      }}
                      className="absolute -top-1 -right-1 p-1 rounded hover:bg-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-muted-foreground" />}
                    </button>
                  )}
                </div>
              </div>
               {translatedText && (
                 <div className="flex justify-between items-center">
                   <TTSButton 
                     text={translatedText}
                     isListening={isAudioPlaying}
                     isRegistered={true}
                     isPremium={isPremium}
                     onPlay={() => handleTTSPlay(translatedText)}
                   />
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* Token Meter Mobile */}
        {isRegistered && (
          <div className="md:hidden mb-6">
            <TokenMeter used={usedTokens} total={totalTokens} />
          </div>
        )}

        {/* Conversion Banners */}
        <div className="space-y-4 mb-8">
          {!isRegistered && (
            <div className="bg-card border border-card-border rounded-lg p-4 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Headphones className="h-5 w-5 text-primary" />
                <span className="font-medium">Čuvaj svoje prevode i slušaj ih kad god poželiš</span>
              </div>
              <p className="text-muted-foreground mb-3">Registruj se besplatno</p>
              <Button className="bg-primary hover:bg-primary-hover">
                Registruj se besplatno
              </Button>
            </div>
          )}

          {isRegistered && !isPremium && (
            <div className="premium-gradient text-white rounded-lg p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="h-5 w-5" />
                <span className="font-bold text-lg">Želiš više minuta i različite glasove?</span>
              </div>
              <p className="mb-4 opacity-90">Pređi na Premium za samo 9.99€ mesečno</p>
              <Button variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                Pređi na Premium
              </Button>
            </div>
          )}
        </div>

        {/* Quick Language Shortcuts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Link to="/prevodilac-engleski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Engleskog
            </Button>
          </Link>
          <Link to="/prevodilac-nemacki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Nemačkog
            </Button>
          </Link>
          <Link to="/prevodilac-francuski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Francuskog
            </Button>
          </Link>
          <Link to="/prevodilac-italijanski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Italijanskog
            </Button>
          </Link>
          <Link to="/prevodilac-spanski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Španskog
            </Button>
          </Link>
          <Link to="/prevodilac-ruski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Ruskog
            </Button>
          </Link>
          <Link to="/prevodilac-grcki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Grčkog
            </Button>
          </Link>
          <Link to="/prevodilac-madjarski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Mađarskog
            </Button>
          </Link>
          <Link to="/prevodilac-rumunski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Rumunskog
            </Button>
          </Link>
          <Link to="/prevodilac-bugarski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Bugarskog
            </Button>
          </Link>
          <Link to="/prevodilac-kineski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Kineskog
            </Button>
          </Link>
          <Link to="/prevodilac-japanski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Japanskog
            </Button>
          </Link>
          <Link to="/prevodilac-korejski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Korejskog
            </Button>
          </Link>
          <Link to="/prevodilac-turski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Turskog
            </Button>
          </Link>
          <Link to="/prevodilac-arapski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Arapskog
            </Button>
          </Link>
          <Link to="/prevodilac-holandski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Holandskog
            </Button>
          </Link>
          <Link to="/prevodilac-ceski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Češkog
            </Button>
          </Link>
          <Link to="/prevodilac-slovacki-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Slovačkog
            </Button>
          </Link>
          <Link to="/prevodilac-poljski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Poljskog
            </Button>
          </Link>
          <Link to="/prevodilac-portugalski-srpski" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Prevod sa Portugalskog
            </Button>
          </Link>
          <Link to="/tekst-u-govor" className="block">
            <Button variant="outline" className="w-full h-12 text-sm font-medium">
              Tekst u govor
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;