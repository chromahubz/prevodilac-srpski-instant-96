import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Da li je prevod tačan?",
      answer: "Naš AI prevodilac koristi najnovije tehnologije za obezbeđivanje visokog kvaliteta prevoda. Tačnost je obično između 90-95%, zavisno od složenosti teksta."
    },
    {
      question: "Koliko košta korišćenje prevodioca?",
      answer: "Osnovne funkcije su besplatne. Premium pretplata košta 9.99€ mesečno i uključuje neograničen prevod, TTS funkcije i dodatne jezike."
    },
    {
      question: "Koje jezike podržavate?",
      answer: "Trenutno podržavamo prevod sa i na srpski jezik iz više od 25 jezika: engleski, nemački, francuski, italijanski, španski, ruski, grčki, mađarski, rumunski, bugarski, slovenski, hrvatski, bosanski, crnogorski, švedski, norveški, danski, finski, kineski, japanski, korejski, turski, arapski, holandski, češki, slovački, poljski i portugalski."
    },
    {
      question: "Kako funkcioniše tekst-u-govor (TTS)?",
      answer: "Registrovani korisnici mogu da slušaju prevode koristeći našu TTS tehnologiju. Besplatni korisnici imaju 5 slušanja dnevno, dok Premium korisnici imaju neograničen pristup."
    },
    {
      question: "Da li čuvate moje tekstove?",
      answer: "Ne, poštujemo vašu privatnost. Tekstovi se obrađuju samo za potrebe prevoda i ne čuvaju se na našim serverima nakon završetka sesije."
    },
    {
      question: "Mogu li da otkazujem Premium pretplatu?",
      answer: "Da, možete otkazati Premium pretplatu bilo kada bez penala. Otkazivanje je moguće kroz vaš korisnički profil."
    },
    {
      question: "Da li postoji mobilna aplikacija?",
      answer: "Naša web aplikacija je optimizovana za mobilne uređaje. Trenutno ne planiramo zasebnu mobilnu aplikaciju jer web verzija odlično radi na svim uređajima."
    },
    {
      question: "Kako mogu da kontaktiram podršku?",
      answer: "Možete nas kontaktirati putem email-a na kontakt@prevodilacsrpski.com ili preko kontakt forme na našoj web stranici."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Prevodilac Srpski</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Često postavljana pitanja</h1>
          <p className="text-xl text-muted-foreground">
            Odgovori na najčešća pitanja o Prevodilac Srpski
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-card-border rounded-lg">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-secondary transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-card border border-card-border rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Niste pronašli odgovor?</h2>
          <p className="text-muted-foreground mb-6">
            Kontaktirajte našu podršku i odgovoriće vam u roku od 24 sata.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/kontakt">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Kontaktiraj podršku
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Povratak na prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FAQ;