import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/prevodilac-logo-main.png";

const BlogMadjarskiSamostalno = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Prevodilac Srpski" className="h-8 w-8" />
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
        <div className="mb-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-6">
            <ArrowLeft className="h-4 w-4" />
            Nazad na blog
          </Link>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2. decembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Zoltán Kovač</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Učenje jezika</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Kako naučiti mađarski jezik samostalno
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">9 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Mađarski jezik je jedinsten i izazovan, ali sa sistematskim pristupom i kvalitetnim mađarski srpski prevodiocеm, možete ga savladati. Evo kompletnog vodiča za samostalno učenje.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto je mađarski poseban</h2>
          <p className="text-muted-foreground mb-6">
            Mađarski pripada ugro-finskoj porodici jezika, što ga čini potpuno drugačijim od srpskog. Nema srodnost sa slovenskim jezicima, što zahteva potpuno nov pristup. Prevodilac mađarski srpski će vam pokazati koliko je jezik jedinreven.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Prvi koraci sa aglutinacijom</h2>
          <p className="text-muted-foreground mb-6">
            Mađarski koristi aglutinaciju - dodaje nastavke na reči da izmeni značenje. Google prevodilac može biti zbunjujuć, ali specijalizovani prevodilac sa mađarskog na srpski objašnjava ove složene strukture kroz primere.
          </p>

          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Osnovne mađarske fraze za početak:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Szia - Zdravo (neformalno)</li>
              <li>Köszönöm - Hvala</li>
              <li>Elnézést - Izvinite</li>
              <li>Örülök, hogy megismertem - Drago mi je</li>
              <li>Nem értem - Ne razumem</li>
              <li>Beszél angolul? - Govorite li engleski?</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Razumevanje padežnog sistema</h2>
          <p className="text-muted-foreground mb-6">
            Mađarski ima omkring 25 padežnih nastavaka. Ovo je razlog zašto mađarski srpski prevodilac ponekad daje čudne rezultate. Učite postupno, po nekoliko padežnih oblika mesečno, koristeći naš prevodilac za praktične primere.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Savladavanje izgovora</h2>
          <p className="text-muted-foreground mb-6">
            Mađarski ima specifičan izgovor sa dolgim i kratkim vokalima. Online prevodilac srpski mađarski ima audio funkciju koja vam pomaže da razumete razliku između "a/á", "e/é", "i/í" itd. Vežbajte svakodnevno.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Korisni resursi za učenje</h2>
          <p className="text-muted-foreground mb-6">
            Kombinujte različite alate - koristite naš prevodilac za osnove, slušajte mađarske pesme, gledajte mađarske filmove sa titlovima. Google prevodilac mađarski srpski možete koristiti za brže provere, ali za dublje razumevanje birajte specijalizovane alate.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kreiranje dnevne rutine</h2>
          <p className="text-muted-foreground mb-6">
            Postavite sistematsku rutinu: 20 minuta dnevno sa mađarskim prevodiocеm za nove reči, 15 minuta slušanja mađarskih vesti ili muzike, i 10 minuta vežbanja gramatike. Koristite prevodilac srpski na mađarski za vežbanje pisanja.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Zaključak</h3>
            <p className="text-muted-foreground">
              Mađarski jezik zahteva strpljenje i posvećenost, ali rezultati vreden truda. Sa našim prevodiocеm mađarski srpski i redovnim vežbanjem, možete savladati ovaj fascinantan jezik. Ključ je u konzistentnosti i korišćenju pravilnih resursa.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Počnite učenje mađarskog danas!</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš mađarski-srpski prevodilac za efikasno učenje
            </p>
            <Link to="/prevodilac-madjarski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Mađarski-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogMadjarskiSamostalno;