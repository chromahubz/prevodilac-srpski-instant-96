import { Link } from "react-router-dom";
import { Globe, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const BlogPoslovniDokumenti = () => {
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
              <span>30. oktobar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Stefan Miković</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Prevođenje</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Kako prevesti poslovne dokumente
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">6 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Prevođenje poslovnih dokumenata zahteva posebnu pažnju na preciznost i formalni ton. Evo praktičnih saveta kako da koristite prevodilac na srpski za poslovne potrebe.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto je važan kvalitetan prevodilac srpski engleski</h2>
          <p className="text-muted-foreground mb-6">
            U poslovnom svetu, greška u prevodu može koštati. Prevodilac sa engleskog na srpski mora biti precizan i razumeti poslovnu terminologiju. Google prevodilac često nije dovoljno specifičan za kompleksne poslovne dokumente.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Priprema dokumenta za prevod</h2>
          <p className="text-muted-foreground mb-6">
            Pre korišćenja bilo kog prevodioca, pripremite dokument. Uklonite nepotrebne delove, označite specifične termine koji zahtevaju posebnu pažnju. Engleski srpski prevodilac radi bolje sa strukturiranim tekstom.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Korišćenje naprednih prevodilaca</h2>
          <p className="text-muted-foreground mb-6">
            Najbolji prevodilac sa engleskog na srpski za poslovne dokumente treba da prepozna kontekst. Naš prevodilac engleski srpski je posebno prilagođen za poslovne termine i formalni ton komunikacije.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Česti poslovni termini</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <p className="font-semibold mb-4">Engleski → Srpski prevod čestih termina:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Agreement → Sporazum/Ugovor</li>
              <li>Invoice → Faktura</li>
              <li>Terms and Conditions → Uslovi korišćenja</li>
              <li>Liability → Odgovornost</li>
              <li>Compliance → Usklađenost</li>
              <li>Due diligence → Dubinska analiza</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Provera kvaliteta prevoda</h2>
          <p className="text-muted-foreground mb-6">
            Kada koristite Google prevodilac sa engleskog na srpski ili bilo koji drugi prevodilac eng srpski, uvek proverite rezultat. Čitajte prevod naglas i proverite da li zvuči profesionalno na srpskom jeziku.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Specijalizorani prevodilac za različite oblasti</h2>
          <p className="text-muted-foreground mb-6">
            Različite oblasti poslovanja zahtevaju različite pristupe. Pravni dokumenti zahtevaju prevodilac sa engleskim na srpski koji razume pravnu terminologiju, dok finansijski dokumenti zahtevaju poznavanje finansijskih termina.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kombinovanje alata</h2>
          <p className="text-muted-foreground mb-6">
            Ne oslanjajte se samo na jedan alat. Kombinujte Google prevodilac na srpski sa specijalizovanim alatima. Online prevodilac srpski engleski možete koristiti za brzu proveru, ali za finalne dokumente koristite profesionalne usluge.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Prevodilac srpski na engleski za odlazne dokumente</h2>
          <p className="text-muted-foreground mb-6">
            Kada šaljete dokumente u inostranstvo, koristite prevodilac sa srpskog na engleski. Pazite na kulturne razlike - ono što je uobičajeno u srpskoj poslovnoj komunikaciji možda nije u engleskoj.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Najbolje prakse</h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Uvek dvaput proverite kritične termine</li>
              <li>Sačuvajte original i prevod za buduće reference</li>
              <li>Koristite konzistentnu terminologiju kroz ceo dokument</li>
              <li>Za važne ugovore, angažujte profesionalnog prevodioca</li>
              <li>Testiraјte Google prevodilac srpski engleski na manjim tekstovima prvo</li>
            </ul>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Prevedite vaše poslovne dokumente</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš profesionalni prevodilac za poslovne potrebe
            </p>
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Počnite sa prevodom
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPoslovniDokumenti;