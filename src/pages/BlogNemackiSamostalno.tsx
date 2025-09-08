import { Link } from "react-router-dom";
import { Globe, Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/logo.png";

const BlogNemackiSamostalno = () => {
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
              <span>10. novembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Marko Petrović</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Učenje jezika</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Kako naučiti nemački samostalno
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
              Nemački jezik može delovati složeno, ali sa pravilnim pristupom i alatima, možete ga savladati samostalno. Evo kompletnog vodiča sa praktičnim savetima i resursima.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto je važan prevodilac nemacki srpski</h2>
          <p className="text-muted-foreground mb-6">
            Prevodilac sa nemackog na srpski je vaš najbolji prijatelj u početku učenja. Google prevodilac vam može pomoći da razumete osnove, ali specijalizovani nemacko srpski prevodilac pruža precizniji prevod i bolje razumevanje konteksta.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Početni koraci sa prevodom</h2>
          <p className="text-muted-foreground mb-6">
            Počnite sa jednostavnim tekstovima koristeći prevodilac sa nemackog na srpski. Naš online prevodilac vam omogućava da prevedete osnovne fraze i postepeno građate rečnik. Svaki dan pročitajte nekoliko nemačkih reči i prevedite ih pomoću našeg alata.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Gramatika kroz praksu</h2>
          <p className="text-muted-foreground mb-6">
            Nemacko srpski prevodilac vam pomaže da razumete gramatičke strukture. Kada prevodite rečenice sa nemačkog na srpski, obratite pažnju na redosled reči i padeže. Ovo je ključno za razumevanje nemačke gramatike.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kombinovanje resursa</h2>
          <p className="text-muted-foreground mb-6">
            Ne oslanjajte se samo na Google prevodilac. Kombinujte više alata - koristite naš prevodilac srpski na nemacki za vežbanje, čitajte nemačke tekstove i slušajte nemačku muziku i podkaste.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Svakodnevna rutina</h2>
          <p className="text-muted-foreground mb-6">
            Postavite dnevnu rutinu: 15 minuta čitanja nemačkih tekstova sa našim prevodiоcem, 10 minuta slušanja nemačkih podkasta, i 5 minuta pisanja kratkih rečenica na nemačkom.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Praktični saveti za brže napredovanje</h2>
          <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
            <li>Koristite prevodilac nemacki srpski za nove reči koje čujete</li>
            <li>Gledajte nemačke filmove sa titlovima</li>
            <li>Napravite flashkards sa najčešćim rečima</li>
            <li>Pridružite se online zajednicama za učenje nemačkog</li>
            <li>Vežbajte izgovor koristeći audio funkcije prevodilaca</li>
          </ul>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Zaključak</h3>
            <p className="text-muted-foreground">
              Učenje nemačkog jezika samostalno je moguće uz odgovarajuće alate i disciplinu. Naš prevodilac sa nemackog na srpski će vam biti neprocenjiva pomoć na ovom putu. Redovno vežbanje i korišćenje različitih resursa garantuje uspeh.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Počnite učenje nemačkog danas!</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš napredni prevodilac za efikasno učenje nemačkog jezika
            </p>
            <Link to="/prevodilac-nemacki-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Prevodilac nemački-srpski
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogNemackiSamostalno;