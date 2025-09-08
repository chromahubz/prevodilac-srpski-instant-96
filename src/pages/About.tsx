import { Globe, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <HeaderLogo />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">O nama</h1>
          <p className="text-xl text-muted-foreground">
            Prevodilac Srpski je vodeći online prevodilac za srpski jezik
          </p>
        </div>

        <div className="prose max-w-none mb-12">
          <div className="bg-card border border-card-border rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Naša misija</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cilj Prevodilac Srpski je da postane najbolji i najprecizniji online prevodilac za srpski jezik. 
              Verujemo da jezičke barijere ne treba da budu prepreka u komunikaciji, učenju ili poslovanju.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Naš tim radi na tome da obezbedi brze, tačne i kontekstualno ispravne prevode koji pomažu 
              korisnicima da se sporazumeju bez obzira na jezik koji govore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-card-border rounded-lg p-6">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Privatnost i bezbednost</h3>
              <p className="text-muted-foreground">
                Vaši tekstovi se obrađuju bezbedno i ne čuvaju se na našim serverima. 
                Poštujemo vašu privatnost i garantujemo sigurnost vaših podataka.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Brzina i efikasnost</h3>
              <p className="text-muted-foreground">
                Naša tehnologija omogućava trenutne prevode bez čekanja. 
                Jednostavno unesite tekst i odmah dobijte precizan prevod.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6">
              <Users className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Podrška zajednice</h3>
              <p className="text-muted-foreground">
                Naš tim je uvek dostupan za pomoć. Konstantno poboljšavamo uslugu 
                na osnovu povratnih informacija naših korisnika.
              </p>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-6">
              <Globe className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">Više od 10 jezika</h3>
              <p className="text-muted-foreground">
                Podržavamo prevod sa i na srpski jezik iz više od 10 različitih jezika, 
                uključujući engleski, nemački, francuski i mnoge druge.
              </p>
            </div>
          </div>

          <div className="bg-card border border-card-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Pridružite se tisućama zadovoljnih korisnika</h2>
            <p className="text-muted-foreground mb-6">
              Registrujte se besplatno i dobijte pristup dodatnim funkcijama kao što su 
              slušanje prevoda i čuvanje istorije prevoda.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Registruj se besplatno
              </Button>
              <Link to="/premium">
                <Button variant="outline" size="lg">
                  Saznaj više o Premium
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;