import { Link } from "react-router-dom";
import { Globe, Book, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Blog10SavetaEngleski = () => {
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
        <article className="mb-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              10 saveta kako brzo naučiti engleski jezik - prevodilac engleskog na srpski
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Učenje jezika</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Učenje engleskog jezika može biti izazovno, ali sa pravilnim pristupom i našim 
              <strong> prevodiocem engleskog na srpski</strong>, možete značajno ubrzati proces. 
              Evo 10 efikasnih saveta koji će vam pomoći da brže savladate engleski jezik.
            </p>

            <div className="bg-card rounded-lg p-6 border border-card-border mb-8">
              <h2 className="text-2xl font-bold mb-6">Zašto je važno naučiti engleski?</h2>
              <p className="text-muted-foreground">
                Engleski jezik je globalni jezik komunikacije. Sa našim <strong>prevodiocem sa engleskog na srpski</strong>, 
                možete lakše razumeti sadržaje na engleskom i postupno učiti novi vokabular.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">10 saveta za brže učenje engleskog</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">1. Koristite engleski srpski prevodilac svakodnevno</h3>
                <p className="text-muted-foreground">
                  Naš <strong>engleski srpski prevodilac</strong> vam omogućava da brzo prevedete nepoznate reči i fraze. 
                  Umesto da se zaglavite na nepoznatoj reči, jednostavno je prevedite i nastavite sa čitanjem.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">2. Gledajte filmove sa titlovima</h3>
                <p className="text-muted-foreground">
                  Kombinujte gledanje filmova na engleskom sa korišćenjem našeg <strong>prevodioca engleski srpski</strong> 
                  za prevod nepoznatih izraza. Ovo će vam pomoći da razvijete sluh za jezik.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">3. Čitajte engleski sadržaj redovno</h3>
                <p className="text-muted-foreground">
                  Čitajte vesti, blogove i knjige na engleskom. Koristite naš <strong>prevodilac englesko srpski</strong> 
                  kada naiđete na složene rečenice ili idiome.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">4. Pratite engleske YouTube kanale</h3>
                <p className="text-muted-foreground">
                  Pronađite kanale koji vas zanimaju i redovno ih pratite. Naš <strong>englesko srpski prevodilac</strong> 
                  može da vam pomogne da razumete komentare i opise videa.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">5. Komunicirajte na engleskom online</h3>
                <p className="text-muted-foreground">
                  Pridružite se forum-ima i chat grupama. Koristite naš <strong>prevodilac sa eng na srpski</strong> 
                  da brzo formulišete odgovore i razumete poruke drugih.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">6. Slušajte podcast-ove</h3>
                <p className="text-muted-foreground">
                  Podcast-ovi su odličan način da se navikavate na različite akcente i brzinu govora. 
                  Transkripcije možete prevesti pomoću našeg <strong>prevodioca eng srpski</strong>.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">7. Vodite beležnice novih reči</h3>
                <p className="text-muted-foreground">
                  Svaki put kada koristite naš <strong>prevodilac sa engleskog na srpski najbolji</strong>, 
                  zapišite novu reč u svoju beležnicu i pokušajte da je koristite u kontekstu.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">8. Postavite telefon na engleski</h3>
                <p className="text-muted-foreground">
                  Promenite jezik telefona na engleski. Kada naiđete na nepoznate termine, 
                  koristite naš prevodilac da ih brzo prevedete.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">9. Igrajte igre na engleskom</h3>
                <p className="text-muted-foreground">
                  Video igre su zabavan način učenja. Instrukcije i dijaloge možete prevesti 
                  pomoću našeg prevodioca da bolje razumete priču.
                </p>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3">10. Budite strpljivi i konzistentni</h3>
                <p className="text-muted-foreground">
                  Učenje jezika je maraton, ne sprint. Koristite naš prevodilac kao pomoćno sredstvo, 
                  ali ne zaboravite da aktivno vežbate govor i pisanje.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Zašto je naš prevodilac najbolji za učenje?</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>✅ Tačan prevod konteksta, ne samo reči</li>
                <li>✅ Brž od Google prevodilaca</li>
                <li>✅ Optimizovan za srpski jezik</li>
                <li>✅ Besplatan za osnovnu upotrebu</li>
                <li>✅ Mogućnost čuvanja čestih prevoda</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="text-center bg-card rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Počnite sa učenjem već danas</h2>
          <p className="text-muted-foreground mb-6">
            Koristite naš prevodilac da ubrzate proces učenja engleskog jezika
          </p>
          <Link to="/prevodilac-engleski-srpski">
            <Button size="lg" className="bg-primary hover:bg-primary-hover">
              Probajte prevodilac
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

export default Blog10SavetaEngleski;