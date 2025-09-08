import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import logo from "@/assets/prevodilac-logo-main.png";

const BlogRuskiNeprevodi = () => {
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
              <span>12. decembar 2024</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              <span>Igor Petković</span>
            </div>
            <span className="text-xs bg-secondary px-2 py-1 rounded">Prevođenje</span>
          </div>

          <h1 className="text-4xl font-bold text-foreground mb-6">
            Prevodi na ruski - zašto su neke reči skoro nemoguće prevesti
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
              Ruski jezik je bogat jedinstvenim pojmovima koji nemaju direktne ekvivalente u srpskom. Analiziramo zašto prevodilac ruski srpski ponekad ne može da prenese puno značenje određenih reči.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kulturno specifične reči</h2>
          <p className="text-muted-foreground mb-6">
            Riječ "тоска" (toska) je primer reči koju je gotovo nemoguće precizno prevesti. Prevodilac sa ruskog na srpski obično je prevodi kao "tuga" ili "čeznja", ali pravo značenje je mnogo dublje - to je specifičan oblik duševne boli koji kombinuje nostalgiju, tugu i egzistencijalnu prazninu.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Reči bez direktnih ekvivalenata</h2>
          <div className="bg-muted rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Nepreviodne ruske reči:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-3">
              <li><strong>Авось</strong> - nada da će se nešto dogoditi samo od sebe, bez napora</li>
              <li><strong>Пошлость</strong> - kombinacija vulgarnošću i lažnog ukusa</li>
              <li><strong>Разлука</strong> - rastanak koji boli, ali nije konačan</li>
              <li><strong>Домоуправиться</strong> - rešiti nešto kućnim, improvizovanim sredstvima</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-4">Zašto Google prevodilac griješi</h2>
          <p className="text-muted-foreground mb-6">
            Google prevodilac ruski srpski često pravi greške sa ovim rečima jer ne razume kulturni kontekst. Naš prevodilac sa ruskog na srpski pokušava da objasni značenje umesto da jednostavno prevodi reč za reč.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Gramatičke specifičnosti</h2>
          <p className="text-muted-foreground mb-6">
            Ruski jezik ima specifične gramatičke konstrukcije koje nemaju ekvivalente u srpskom. Povratni glagoli kao "собираться" (намеravati) imaju нијаnse koje ruski srpski prevodilac teško prenosi.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Dijalektne varijante</h2>
          <p className="text-muted-foreground mb-6">
            Ruski jezik ima regionalne varijante koje dodacno komplikuju prevođenje. Online prevodilac srpski ruski može da bude zbunjen regionalizmima koji su karakteristični za određene delove Rusije.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Kako raditi sa neprevoidnim rečima</h2>
          <p className="text-muted-foreground mb-6">
            Kada koristite prevodilac na ruski, najbolje je da kontekstualno objasnite značenje umesto da tražite direktan prevod. Naš prevodilac ruski srpski pokušava da pruži objašnjenja, ne samo prevod.
          </p>

          <h2 className="text-2xl font-bold text-foreground mb-4">Književnost i poezija</h2>
          <p className="text-muted-foreground mb-6">
            U ruskoj književnosti, reči poput "удаль" (hrabrost pomešana sa bezobзирношћу) ili "воля" (sloboda koja prelazi običnu slobodu) представљују посебan изazов. Google prevodilac sa ruskog na srpski ne može da prenese poetsku dubinu ovih termina.
          </p>

          <div className="bg-secondary/50 rounded-lg p-6 mb-6">
            <h4 className="font-semibold mb-4">Савети за боље превођење:</h4>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Tražite objašnjenja konteksta, ne samo direktne prevode</li>
              <li>Koristite nekoliko različitih prevodilaca za poređenje</li>
              <li>Čitajte ruske tekstove u originalу kad god je mogu</li>
              <li>Proučavajte rusku kulturu da razumete pozadinu reči</li>
            </ul>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Заког</h3>
            <p className="text-muted-foreground">
              Neki ruski pojmovi prosto nemaju direktne prevode jer predstavљају jedinstvene kulturne i duhovne koncepе. Najbolji prevodilac ruski srpski je onaj koji poкушava да објасни, a ne samo да преведе. Razumејвање konteksta je ključ za uspešno savladavanje ovih jezičkih nijаnsi.
            </p>
          </div>
        </article>

        <div className="border-t border-card-border pt-8 mt-12">
          <div className="text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Istražite ruski jezik dublje</h3>
            <p className="text-muted-foreground mb-6">
              Koristite naš napredni ruski-srpski prevodilac sa kontekstualnim objaшњењима
            </p>
            <Link to="/prevodilac-ruski-srpski">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Ruski-srpski prevodilac
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogRuskiNeprevodi;