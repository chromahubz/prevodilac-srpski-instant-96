import { Link } from "react-router-dom";
import { Globe, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const BlogFrancuskiPocetnici = () => {
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
              <span>25. oktobar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Jelena Stojanović</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Učenje jezika</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Francuski za početnike - osnove
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">5 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Francuski jezik je jedan od najlepših jezika na svetu. Za početnike je ključno imati dobar francuski srpski prevodilac i razumeti osnove. Evo vodiča za prve korake.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto učiti francuski?</h2>
          <p className="text-muted-foreground mb-6">
            Francuski je jezik kulture, diplomatije i ljubavi. Govori ga preko 280 miliona ljudi širom sveta. Sa dobrim prevodiocima poput našeg, možete početi svoju avanturu učenja francuskog jezika već danas.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Prvi koraci sa francuskim prevodiocом</h2>
          <p className="text-muted-foreground mb-6">
            Počnite sa osnovnim frazama koristeći francuski srpski prevodilac. Google prevodilac može biti koristan, ali specijalizovani alati pružaju bolje rezultate za učenje. Prevodilac sa francuskog na srpski vam pomaže da razumete strukturu rečenica.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Osnove francuske gramatike</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Ključne francuske fraze za početnike:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Bonjour - Dobro jutro/Dobar dan</li>
              <li>Merci - Hvala</li>
              <li>S'il vous plaît - Molim vas</li>
              <li>Excusez-moi - Izvinite</li>
              <li>Je ne parle pas français - Ne govorim francuski</li>
              <li>Parlez-vous anglais? - Govorite li engleski?</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Korišćenje prevodilaca u učenju</h2>
          <p className="text-muted-foreground mb-6">
            Francuski srpski prevodilac je najbolji način da počnete. Kada čujete novu reč, odmah je prevedite i zapišite. Online prevodilac vam omogućava da brzo proverite značenje i naučite novu leksiku.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Svakodnevna rutina učenja</h2>
          <p className="text-muted-foreground mb-6">
            Postavite dnevnu rutinu: 10 minuta sa francouzskim prevodiocema, 15 minuta čitanja francuskih tekstova, i 5 minuta slušanja francuske muzike. Ovaj pristup sa prevodiocем sa francuskog na srpski će vam pomoći da brže napredujete.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Izgovor i akcentи</h2>
          <p className="text-muted-foreground mb-6">
            Francuski ima specifične zvukove koje je teško naučiti samo kroz prevodilac srpski francuski. Slušajte kako se reči izgovaraju i vežbajte. Naš prevodilac ima audio funkciju koja vam pomaže sa pravilnim izgovorom.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kombinovanje resursa</h2>
          <p className="text-muted-foreground mb-6">
            Ne oslanjajte se samo na Google prevodilac. Kombinujte različite alate - koristite naš prevodilac za osnove, gledajte francuske filmove sa titlovima, i slušajte francuske podkaste. Chat GPT srpski može biti koristan za vežbanje konverzacije.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Česti početničkи izazovi</h2>
          <div className="bg-secondary/50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-4">Česte greške početnika:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Zanemarivanje roda imenica (le/la)</li>
              <li>Pogrešan izgovor nosnih glasova</li>
              <li>Konfuzija sa glagolskim vremenima</li>
              <li>Previše oslanjanje na doslovni prevod</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Saveti za uspeh</h3>
            <p className="text-muted-foreground mb-4">
              Francuski jezik zahteva strpljenje i redovno vežbanje. Koristite naš prevodilac sa francuskog na srpski svakodnevno, ali ne zaboravite da i slušate i govorite jezik. Kombinovanje našeg prevodilaca sa drugim resursima će vam omogućiti da brže napredujete.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Počnite učenje francuskog danas!</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš francuski-srpski prevodilac za efikasno učenje
            </p>
            <Link to="/prevodilac-francuski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Francuski-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogFrancuskiPocetnici;