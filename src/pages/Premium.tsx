import { Check, Crown, Volume2, Download, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Premium = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Crown className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-bold text-foreground">Prevodilac Srpski Premium</h1>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="premium-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Crown className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">Prevodilac Premium</h1>
          <p className="text-xl text-muted-foreground">
            Otključajte punu snagu našeg prevodioca
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-card-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Besplatna verzija</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Prevod do 500 karaktera</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Osnovni jezici (EN, DE, FR)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>5 dnevno</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">Besplatno</div>
              <Button variant="outline" className="w-full" disabled>
                Trenutno aktivno
              </Button>
            </div>
          </div>

          <div className="bg-card border-2 border-primary rounded-lg p-8 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="premium-gradient px-4 py-2 rounded-full text-white text-sm font-medium">
                Najpopularniji
              </div>
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Premium</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Neograničen prevod</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Svi dostupni jezici</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Neograničeno slušanje</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Download MP3 fajlova</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Različiti glasovi</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Istorija prevoda</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-success" />
                <span>Prioritetna podrška</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground mb-2">9.99€</div>
              <div className="text-muted-foreground mb-4">mesečno</div>
              <Button className="w-full bg-primary hover:bg-primary-hover text-lg py-3">
                Pređi na Premium
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <Volume2 className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Prirodan glas</h3>
            <p className="text-muted-foreground">
              Slušajte prevode prirodnim glasovima visokog kvaliteta
            </p>
          </div>
          <div className="text-center p-6">
            <Download className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">MP3 download</h3>
            <p className="text-muted-foreground">
              Sačuvajte audio prevode i slušajte ih offline
            </p>
          </div>
          <div className="text-center p-6">
            <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-bold text-foreground mb-2">Istorija</h3>
            <p className="text-muted-foreground">
              Pristupite svim vašim prethodnim prevodima
            </p>
          </div>
        </div>

        <div className="bg-card border border-card-border rounded-lg p-8 text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Garantovano zadovoljstvo</h2>
          <p className="text-muted-foreground mb-6">
            Ako niste zadovoljni našim Premium uslugama, možete otkazati pretplatu bilo kada. 
            Bez skrivenih troškova ili obaveza.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Započni besplatnu probu
            </Button>
            <Link to="/faq">
              <Button variant="outline" size="lg">
                Često postavljana pitanja
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Premium;