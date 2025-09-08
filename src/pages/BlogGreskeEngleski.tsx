import { Link } from "react-router-dom";
import { Globe, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const BlogGreskeEngleski = () => {
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
              <span>5. novembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Milica Jovanović</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Prevođenje</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Najčešće greške u engleskom prevodu
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Podeli
            </Button>
            <span className="text-sm text-muted-foreground">4 min čitanja</span>
          </div>
        </div>

        <article className="prose prose-lg max-w-none">
          <div className="bg-card border border-card-border rounded-lg p-6 mb-8">
            <p className="text-xl text-muted-foreground">
              Analiziramo najčešće greške koje prave govornici srpskog jezika kada koriste prevodilac engleskog na srpski ili prevodilac sa engleskog na srpski. Učite kako da ih izbegnete.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">1. Doslovan prevod fraza</h2>
          <p className="text-muted-foreground mb-6">
            Najčešća greška je doslovno prevođenje engleskih izraza. Engleski srpski prevodilac ponekad može dati doslovan prevod koji ne zvuči prirodno na srpskom. Na primer, "I'm fine" se često prevodi kao "Fin sam", umesto "Dobro sam".
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">2. Pogrešan redosled reči</h2>
          <p className="text-muted-foreground mb-6">
            Google prevodilac engleskog na srpski ponekad čuva engleski redosled reči. Umesto da kažemo "velika kuća crvena", pravilno je "velika crvena kuća". Najbolji prevodilac sa engleskog na srpski će ovo automatski popraviti.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">3. Nerazumevanje konteksta</h2>
          <p className="text-muted-foreground mb-6">
            Prevodilac eng srpski može pogrešiti kada reč ima više značenja. Reč "bank" može značiti "banka" ili "obala", a Google prevodilac sa engleskog na srpski neće uvek izabrati pravo značenje bez konteksta.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">4. Ignoring cultural differences</h2>
          <p className="text-muted-foreground mb-6">
            Prevodilac sa eng na srpski često ne uzima u obzir kulturne razlike. Neki izrazi nemaju direktnu kulturnu ekvivalentu u srpskom jeziku. Prevodilac sa engleskim na srpski treba da adaptira sadržaj za našu kulturu.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">5. Tehnički termini</h2>
          <p className="text-muted-foreground mb-6">
            Online prevodilac srpski engleski često pogrešno prevodi stručne termine. IT termini se posebno često pogrešno prevode - "software" se ponekad prevodi kao "meki deo" umesto "softver".
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kako izbećи greške</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Uvek proverite prevod kroz više izvora</li>
              <li>Koristite specijalizovane prevodioce za stručne termine</li>
              <li>Čitajte prevod naglas da proverite da li zvuči prirodno</li>
              <li>Kombinujte Google prevodilac srpski engleski sa drugim alatima</li>
              <li>Učite česte fraze i idiome posebno</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Prevodilac srpski na engleski - česte zamke</h2>
          <p className="text-muted-foreground mb-6">
            Kada koristite prevodilac sa srpskog na engleski, često se pravi greška sa glagolskim vremenima. Srpski jezik ima drugačiju strukturu vremena od engleskog, što može dovesti do zabune kod automatskog prevođenja.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Chat GPT srpski kao pomoć</h2>
          <p className="text-muted-foreground mb-6">
            Chat GPT srpski može biti korisna dopuna tradicionalnim prevodiocima. Možete da postavite pitanja o kontekstu i dobijete objašnjenja zašto je određeni prevod bolji od drugog.
          </p>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Zaključak</h3>
            <p className="text-muted-foreground">
              Prevodilac engleski srpski je moćan alat, ali treba ga koristiti pažljivo. Kombinovanje različitih resursa i razumevanje čestih grešaka će vam pomoći da dobijate kvalitetniji prevod. Naš napredni prevodilac uzima u obzir ove česte probleme i pruža precizniji prevod.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Dobijte precizan prevod</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš napredni prevodilac koji izbegava česte greške
            </p>
            <Link to="/prevodilac-engleski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Engleski-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogGreskeEngleski;