import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/prevodilac-logo-main.png";

const BlogJapanskiSamostalno = () => {
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
              <span>8. decembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Miša Tanaka</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Učenje jezika</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Kako naučiti japanski samostalno - vodič za početnike
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">10 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Japanski jezik može delovati zastrašujuće zbog svojih tri pisma, ali sa sistematskim pristupom i dobrim japanski srpski prevodiocеm, možete početi svoju avanturu učenja već danas.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto učiti japanski jezik?</h2>
          <p className="text-muted-foreground mb-6">
            Japanski govori preko 125 miliona ljudi i otvara vrata ka bogatoj kulturi, animeu, manzi, tehnologiji i poslovnim prilikama. Sa dobrim prevodiocеm japanskog na srpski, možete početi da istražujete ovaj fascinantan jezik odmah.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Prvi koraci - hiragana i katakana</h2>
          <p className="text-muted-foreground mb-6">
            Početnije sa hiraganom, osnovnim japanskim pismom. Google prevodilac može pomoći, ali specijalizovani japanski srpski prevodilac pruža bolje objašnjenja za učenje. Svakog dana učite po 5 novih znakova koristeći naš prevodilac sa japanskog na srpski.
          </p>

          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Osnovne japonske fraze za početnike:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>こんにちは (Konnichiwa) - Dobar dan</li>
              <li>ありがとう (Arigatou) - Hvala</li>
              <li>すみません (Sumimasen) - Izvinite</li>
              <li>はじめまして (Hajimemashite) - Drago mi je</li>
              <li>わかりません (Wakarimasen) - Ne razumem</li>
              <li>日本語を話せません (Nihongo wo hanasemasen) - Ne govorim japanski</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Struktura japanske rečenice</h2>
          <p className="text-muted-foreground mb-6">
            Japanski ima SOV (Subjekat-Objekat-Glagol) strukturu, što je drugačije od srpskog. Online prevodilac srpski japanski vam pomaže da razumete ove razlike kroz praktične primere. Učenje osnovne gramatike je ključno za napredak.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Stvaranje dnevne rutine</h2>
          <p className="text-muted-foreground mb-6">
            Postavite rutinu: 20 minuta dnevno sa hiraganom i katakanom, 10 minuta sa japanskim prevodiocеm, 15 minuta slušanja japanske muzike ili anime sa titlovima. Koristite prevodilac japanski srpski za nove reči koje čujete.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kanji - izazov i nagrada</h2>
          <p className="text-muted-foreground mb-6">
            Kada savladate hiraganu i katakanu, vreme je za kanji. Počnite sa najčešćim znakovima. Google prevodilac japanski srpski može pomoći, ali specijalizovani alati daju bolje rezultate za učenje značenja i čitanja kanji.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Korišćenje tehnologije</h2>
          <p className="text-muted-foreground mb-6">
            Kombinujte različite izvore - koristite naš prevodilac za osnove, gledajte japanske filmove sa titlovima na srpskom, slušajte japanske podkaste. Ne oslanjajte se samo na Google prevodilac sa japanskog na srpski; raznolikost izvora je bitna za bolje učenje.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Učenje kroz kulturu</h2>
          <div className="bg-secondary/50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-4">Idealni resursi za savladavanje japanskog:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Anime sa titlovima - učite česte reči kroz kontekst</li>
              <li>J-pop muzika - zapamtite reči kroz ritam</li>
              <li>Manga - vizuelni kontekst za kanji</li>
              <li>Japanski YouTube kanali - savremena upotreba jezika</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Česti izazovi početnika</h2>
          <p className="text-muted-foreground mb-6">
            Izbegavajte fokusiranje na učenje kanji pre hiragane. Japanski zahteva postupno učenje, ali brzina nije bitna kao konzistentnost. Koristite prevodilac srpski na japanski za praćenje vašeg napretka, ali nikad ne zaboravite da vežbate govor.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Zaključak</h3>
            <p className="text-muted-foreground">
              Učenje japanskog jezika zahteva strpljenje i redovno vežbanje. Sa našim prevodiocеm japanski na srpski i kombinovanjem različitih resursa, možete postići značajan napredak. Ključ je u konzistentnosti i korišćenju pravilnih alata za učenje.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Počnite učenje japanskog danas!</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš japanski-srpski prevodilac za efikasno učenje
            </p>
            <Link to="/prevodilac-japanski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Japanski-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogJapanskiSamostalno;