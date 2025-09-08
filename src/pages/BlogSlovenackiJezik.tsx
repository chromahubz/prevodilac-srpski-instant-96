import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/prevodilac-logo-main.png";

const BlogSlovenackiJezik = () => {
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
              <span>15. decembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Ana Milosavljević</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Učenje jezika</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Kako brzo naučiti slovenački jezik
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">8 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Slovenački jezik je jedan od najlakših južnoslovenskih jezika za srpske govornike. Uz pravi pristup i dobar slovenački srpski prevodilac, možete ga savladati relativno brzo.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto je slovenački lakši za Srbe</h2>
          <p className="text-muted-foreground mb-6">
            Slovenački pripada istoj jezičkoj porodici kao srpski. Mnoge reči su slične ili identične, što značajno olakšava učenje. Prevodilac slovenački srpski će vam pokazati koliko je jezika zapravo blisko.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Korišćenje prevodilaca u učenju</h2>
          <p className="text-muted-foreground mb-6">
            Počnite sa osnovnim frazama koristeći slovenački srpski prevodilac. Google prevodilac može biti koristan, ali specijalizovani prevodilac sa slovenačkog na srpski pruža bolje rezultate i objašnjava nijanse jezika.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Praktičan pristup učenju</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Osnovne slovenačke fraze:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Zdravo - Zdravo</li>
              <li>Hvala - Hvala</li>
              <li>Prosim - Molim</li>
              <li>Oprostite - Izvinite</li>
              <li>Kako ste? - Kako ste?</li>
              <li>Ne govorim slovensko - Ne govorim slovenački</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Svakodnevna rutina učenja</h2>
          <p className="text-muted-foreground mb-6">
            Postavite rutinu: 15 minuta dnevno sa prevodiocем slovenačkog na srpski, čitanje slovenskih vesti, i slušanje slovenske muzike. Naš prevodilac srpski slovenački vam pomaže da vežbate u oba smera.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Najčešće razlike</h2>
          <p className="text-muted-foreground mb-6">
            Glavne razlike su u izgovoru i određenim gramatičkim strukturama. Online prevodilac srpski slovenački će vam pomoći da prepoznate ove razlike kroz praktične primere.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Resursi za napredovanje</h2>
          <p className="text-muted-foreground mb-6">
            Kombinujte različite alate - koristite naš prevodilac za osnove, gledajte slovenske filmove sa titlovima, i pridružite se slovenskim grupama na društvenim mrežama. Google prevodilac slovenački srpski možete koristiti za brze provere.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Časni izzavi početnika</h2>
          <div className="bg-secondary/50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-4">Česte greške:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Miješanje deklinacija sa srpskim</li>
              <li>Pogrešan akcent na riječima</li>
              <li>Zanemarivanje dvoglasa</li>
              <li>Konfuzija s ličnim zamenicama</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Zaključak</h3>
            <p className="text-muted-foreground">
              Slovenački jezik možete naučiti brže nego što mislite. Sa našim prevodiocем slovenački srpski i redovnim vežbanjem, rezultati će doći kroz nekoliko meseci. Ključ je u konstantnosti i korišćenju pravilnih alata.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Počnite učenje slovenačkog danas!</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš slovenački-srpski prevodilac za efikasno učenje
            </p>
            <Link to="/prevodilac-slovenski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Slovenački-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogSlovenackiJezik;