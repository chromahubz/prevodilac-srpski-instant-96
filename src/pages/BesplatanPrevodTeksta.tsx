import { Link } from "react-router-dom";
import { Heart, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderLogo } from "@/components/ui/header-logo";

const BesplatanPrevodTeksta = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <HeaderLogo />
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Besplatan prevod teksta na srpski - bez ograničenja
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Koristite naš besplatan prevodilac za prevod teksta na srpski jezik. 
            Bez skrivenih troškova, registracije ili ograničenja karaktera.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card rounded-lg p-6 border border-card-border text-center">
            <Heart className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">100% Besplatan</h2>
            <p className="text-sm text-muted-foreground">
              Nikada nećemo naplatiti osnovne funkcije prevodioca
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-card-border text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">Visok kvalitet</h2>
            <p className="text-sm text-muted-foreground">
              AI tehnologija za najkvalitetniji prevod
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-card-border text-center">
            <Users className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-lg font-semibold mb-2">Hiljade korisnika</h2>
            <p className="text-sm text-muted-foreground">
              Već nam veruje preko 50.000 korisnika
            </p>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border border-card-border mb-12">
          <h2 className="text-2xl font-bold mb-6">Kako funkcioniše besplatan prevod?</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold mb-1">Unesite tekst</h3>
                <p className="text-muted-foreground">Ukucajte ili nalepite tekst koji želite da prevedete</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold mb-1">Izaberite jezik</h3>
                <p className="text-muted-foreground">Postavite izvorni jezik i jezik na koji želite da prevedete</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold mb-1">Dobijte prevod</h3>
                <p className="text-muted-foreground">Trenutno dobijate tačan prevod na srpski jezik</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg p-8 border border-card-border mb-12">
          <h2 className="text-2xl font-bold mb-6">Najtraženiji prevodi</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link to="/prevodilac-engleski-srpski" className="block p-4 rounded-lg border border-card-border hover:bg-secondary transition-colors">
              <h3 className="font-semibold">Engleski na srpski</h3>
              <p className="text-sm text-muted-foreground">Najčešći zahtev za prevod</p>
            </Link>
            <Link to="/prevodilac-nemacki-srpski" className="block p-4 rounded-lg border border-card-border hover:bg-secondary transition-colors">
              <h3 className="font-semibold">Nemački na srpski</h3>
              <p className="text-sm text-muted-foreground">Popular za studente i posao</p>
            </Link>
            <Link to="/prevodilac-francuski-srpski" className="block p-4 rounded-lg border border-card-border hover:bg-secondary transition-colors">
              <h3 className="font-semibold">Francuski na srpski</h3>
              <p className="text-sm text-muted-foreground">Za ljubitelje francuskog jezika</p>
            </Link>
            <Link to="/prevodilac-italijanski-srpski" className="block p-4 rounded-lg border border-card-border hover:bg-secondary transition-colors">
              <h3 className="font-semibold">Italijanski na srpski</h3>
              <p className="text-sm text-muted-foreground">Mediteranski šarm</p>
            </Link>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Počnite sa besplatnim prevodom</h2>
          <p className="text-muted-foreground mb-6">
            Jednostavan, brz i potpuno besplatan prevod teksta
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Započni prevod
            </Button>
          </Link>
        </div>
      </main>

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

export default BesplatanPrevodTeksta;