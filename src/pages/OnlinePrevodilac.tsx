import { Link } from "react-router-dom";
import { Globe, Clock, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const OnlinePrevodilac = () => {
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
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Online prevodilac srpski - Najbolji prevodilac na srpski jezik
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            PrevodilacSrpski je najnapredniji online prevodilac za srpski jezik. Brže i preciznije od Google prevodilaca, 
            sa podrškom za preko 30 jezika i mogućnostima tekst-u-govor funkcionalnosti.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <Zap className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Brzina i preciznost</h2>
            <p className="text-muted-foreground">
              Naš AI algoritam prepoznaje kontekst i nanse srpskog jezika bolje od bilo kog drugog 
              online prevodioca. Rezultate dobijate u realnom vremenu.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <Shield className="h-8 w-8 text-primary mb-4" />
            <h2 className="text-xl font-semibold mb-3">Privatnost garantovana</h2>
            <p className="text-muted-foreground">
              Vaš tekst se ne čuva na našim serverima. Svi prevodi se obrađuju sigurno i 
              privatno, bez beleženja ličnih podataka.
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border border-card-border mb-12">
          <h2 className="text-2xl font-bold mb-6">Zašto izabrati PrevodilacSrpski?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">30+ jezika</h3>
              <p className="text-sm text-muted-foreground">
                Podržava sve glavne svetske jezike sa fokusom na balkansku regiju
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Besplatan za korišćenje</h3>
              <p className="text-sm text-muted-foreground">
                Osnovne funkcije prevodioca su potpuno besplatne
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tekst u govor</h3>
              <p className="text-sm text-muted-foreground">
                Slušajte svoj prevod sa prirodnim glasom
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Spremni da počnete?</h2>
          <p className="text-muted-foreground mb-6">
            Počnite da koristite najnapredniji srpski prevodilac već danas
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Počni sa prevodom
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OnlinePrevodilac;