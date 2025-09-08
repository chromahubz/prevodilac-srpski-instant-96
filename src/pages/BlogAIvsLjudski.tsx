import { Link } from "react-router-dom";
import { Globe, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const BlogAIvsLjudski = () => {
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
              <span>20. oktobar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Nikola Radović</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Tehnologija</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            AI prevođenje vs. ljudski prevodilac
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
              Uporedba AI prevodilaca poput Google prevodioca sa tradicionalnim ljudskim prevodiocem. Kada koristiti koji pristup i koje su prednosti svakog?
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Evolucija AI prevodilaca</h2>
          <p className="text-muted-foreground mb-6">
            Google prevodilac engleskog na srpski je prošao dug put od jednostavnih reč-za-reč prevoda do naprednih AI sistema. Današnji prevodilac sa engleskog na srpski koristi neuronske mreže i mašinsko učenje za precizniji prevod.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Prednosti AI prevodilaca</h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-green-800 mb-4">Zašto koristiti AI prevodilac:</h4>
            <ul className="list-disc pl-6 text-green-700 space-y-2">
              <li><strong>Brzina:</strong> Prevodilac engleski srpski radi instantno</li>
              <li><strong>Dostupnost:</strong> Google prevodilac na srpski radi 24/7</li>
              <li><strong>Cena:</strong> Većina AI prevodilaca je besplatna</li>
              <li><strong>Više jezika:</strong> Najbolji prevodilac sa engleskog na srpski podržava preko 100 jezika</li>
              <li><strong>Konstantno poboljšanje:</strong> AI se kontinuirano unapređuje</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Ograničenja AI prevodilaca</h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-red-800 mb-4">Kada AI prevodilac grešи:</h4>
            <ul className="list-disc pl-6 text-red-700 space-y-2">
              <li><strong>Kontekst:</strong> Google prevodilac sa engleskog na srpski često ne razume kontekst</li>
              <li><strong>Kulturne reference:</strong> Prevodilac eng srpski ne poznaje kulturne specifičnosti</li>
              <li><strong>Kreativnost:</strong> AI ne može da prenese ton i stil autora</li>
              <li><strong>Stručni termini:</strong> Specifična terminologija često se pogrešno prevodi</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kada koristiti ljudskog prevodioca</h2>
          <p className="text-muted-foreground mb-6">
            Za važne dokumente, kreativni sadržaj ili precizne stručne termine, ljudski prevodilac je nezamenljiv. Dok prevodilac sa eng na srpski može dati osnovnu ideju, ljudski prevodilac razume nijanse jezika.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Hibridni pristup - najbolje od oba sveta</h2>
          <p className="text-muted-foreground mb-6">
            Moderni pristup kombinuje AI i ljudske prevodiоce. Početni prevod se pravi pomoću naprednog prevodioca sa engleskim na srpski, a zatim se ljudski prevodilac fokusira na finalizaciju i kulturno prilagođavanje.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Chat GPT srpski kao nova opcija</h2>
          <p className="text-muted-foreground mb-6">
            Chat GPT srpski predstavlja novu generaciju AI prevodilaca. Za razliku od tradicionalnog Google prevodioca srpski engleski, Chat GPT može da objasni prevod i da adaptira ton komunikacije.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Budućnost prevođenja</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <p className="text-blue-700">
              Budućnost leži u kombinaciji AI tehnologije sa ljudskim prevodiocem. Online prevodilac srpski engleski će postajati sve precizniji, ali ljudski element ostaje ključan za kreativni i kulturno osetljiv sadržaj.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Praktični saveti za izbor</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Kada koristiti AI prevodilac:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Brza komunikacija i razumevanje</li>
              <li>Prevod osnovnih informacija</li>
              <li>Prvi nacrt dužeg teksta</li>
              <li>Učenje novih jezika</li>
            </ul>
            
            <h4 className="font-semibold mb-4">Kada angažovati ljudskog prevodioca:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Pravni i medicinski dokumentи</li>
              <li>Marketing materijali</li>
              <li>Književni tekstovi</li>
              <li>Zvanične prezentacije</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Zaključak</h3>
            <p className="text-muted-foreground">
              I AI i ljudski prevodilac imaju svoje mesto u modernom svetu. Prevodilac srpski na engleski je odličan za brze potrebe, dok ljudski prevodilac ostaje nezamenljiv za kompleksne i kreativne zadatke. Kombinovanje oba pristupa daje najbolje rezultate.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Probajte naš napredni AI prevodilac</h3>
            <p className="text-muted-foreground mb-6">
              Kombinuje najbolje od AI tehnologije sa intuitivnim interfejsom
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

export default BlogAIvsLjudski;