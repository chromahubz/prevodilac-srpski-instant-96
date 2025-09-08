import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/prevodilac-logo-main.png";

const BlogSvedskiBrzo = () => {
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
              <span>5. decembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Erik Lindqvist</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Učenje jezika</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            10 saveta kako naučiti švedski brzo i efikasno
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">7 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Švedski jezik je jedan od najlakših germanskih jezika za učenje. Sa našim savetima i dobrim švedski srpski prevodiocеm, možete postići zavidne rezultate u kratkom vremenu.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">1. Koristite najbolji prevodilac švedski srpski</h2>
          <p className="text-muted-foreground mb-6">
            Počnite sa kvalitetnim prevodiocеm švedskog na srpski. Google prevodilac može biti koristan, ali specijalizovani švedski srpski prevodilac pruža bolje rezultate za učenje osnovnih fraza i gramatike.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">2. Savladajte švedske glasove</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Osnovne švedske fraze za početak:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Hej - Zdravo</li>
              <li>Tack - Hvala</li>
              <li>Ursäkta - Izvinite</li>
              <li>Trevligt att träffas - Drago mi je</li>
              <li>Jag förstår inte - Ne razumem</li>
              <li>Talar du engelska? - Govoriš li engleski?</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">3. Fokusirajte se na muzikalnost jezika</h2>
          <p className="text-muted-foreground mb-6">
            Švedski ima melodijski akcent koji je ključan za razumevanje. Slušajte švedsku muziku i koristite prevodilac sa švedskog na srpski da razumete tekstove. Ovo vam pomaže da steknete osećaj za ritam jezika.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">4. Gledajte švedske filmove i serije</h2>
          <p className="text-muted-foreground mb-6">
            Skandinavske kriminalističke serije su odličan resurs. Gledajte sa srpskim titlovima i koristite online prevodilac srpski švedski za reči koje ne razumete. Ovaj pristup kombinuje zabavu sa učenjem.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">5. Učite kroz IKEA kataloge</h2>
          <p className="text-muted-foreground mb-6">
            Kreativno rešenje! IKEA katalozi sadrže svakodnevne reči na švedskom. Koristite prevodilac srpski na švedski da prevedete nazive namestaja i ukucite nove reči kroz praktichne predmete.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">6. Pratite švedske jutjubere</h2>
          <p className="text-muted-foreground mb-6">
            Jutjub kanali na švedskom pružaju savremenu upotrebu jezika. Kombinujte ovo sa našim prevodiocеm švedski srpski za razumevanje slanga i savremenih израza.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">7. Koristite švedske aplikacije za učenje jezika</h2>
          <p className="text-muted-foreground mb-6">
            Duolingo, Babbel i slične aplikacije uz naš Google prevodilac švedski srpski čine snažnu kombinaciju. Redovno vežbajte i proveravajte značenja reči kroz naš sistem.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">8. Pridružite se online zajednicama</h2>
          <p className="text-muted-foreground mb-6">
            Reddit, Facebook grupe za učenje švedskog su odličen resurs. Koristite prevodilac sa srpskog na švedski kad pišete postove i komunicirajte sa rođenim govornicima.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">9. Čitajte švedske vesti sa prevodom</h2>
          <p className="text-muted-foreground mb-6">
            SVT Nyheter i podobni portali nude jednostavne vesti. Kombinski ovo sa našim online prevodiocеm srpski švedski za razumevanje aktuelnih događaja i učenje novih termina.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">10. Postavite realne ciljeve</h2>
          <div className="bg-secondary/50 rounded-lg p-6 mb-6">
            <p className="font-semibold mb-4">Sedmična rutina za brzo učenje:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Ponedelak: 30 minuta sa švedskim prevodiocеm - nove reči</li>
              <li>Utorak: Gledanje švedskih serija sa titlovima</li>
              <li>Sreda: Čitanje švedskih vesti</li>
              <li>Četvrtak: Slušanje švedske muzike i podkasta</li>
              <li>Petak: Praktikovanje sa jutjub kanalima</li>
              <li>Vikend: Konverzacija sa rođenim govornicima online</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Bonus savet</h3>
            <p className="text-muted-foreground">
              Grčaj Sverige kao "sverjе" a ne kao "švedska". Mali delотovi u izgovoru mogu masivno poboljšati vaše razumeваnie. Kombinujte све ових tehnika са našim prevodiocеm švedski srpski za najbolje rezultate u najkraćem vremenu.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Počnite să učenjem švedskog danas!</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš švedski-srpski prevodilac za efikasno учење
            </p>
            <Link to="/prevodilac-svedski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Švedski-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogSvedskiBrzo;