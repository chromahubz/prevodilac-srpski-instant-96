import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { SiteHeader } from "@/components/ui/site-header";

const BlogRuskiNeprevodi = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary-hover mb-8">
          <ArrowLeft className="h-4 w-4" />
          Nazad na blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>12. decembar 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Vladimir Petrov</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>7 min čitanja</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Prevodi na ruski: zašto su neke reči skoro nemoguće prevesti
            </h1>
            <p className="text-xl text-muted-foreground">
              Istražujemo kulturološke i jezičke barijere koje čine određene ruske reči neprevozljivima na srpski.
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <p>
              Ruski jezik, sa svojom bogatom kulturnom pozadinom, sadrži reči koje nemaju direktne ekvivalente u srpskom. 
              Ove "neprevozljive" reči predstavljaju fascinantan uvid u rusku dušu i mentalitet.
            </p>

            <h2 className="text-2xl font-bold">Najpoznatije neprevozljive ruske reči</h2>

            <h3 className="text-xl font-semibold">1. Тоска (Toska)</h3>
            <p>
              Vladimir Nabokov je opisao "tosku" kao "duhovno mučenje" koje nema ekvivalenta u drugim jezicima. 
              Ova reč opisuje duboku melanholiju i čežnju koja se ne može precizno definisati.
            </p>

            <h3 className="text-xl font-semibold">2. Авось (Avos')</h3>
            <p>
              "Avos'" predstavlja rusku filozofiju oslanjanja na sreću i slučaj. Najbliži srpski prevod bi bio 
              "možda će proći", ali ne prenosi potpunu suštinu ovog koncepta.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-3">Želite da naučite više o ruskom jeziku?</h3>
              <p className="text-muted-foreground mb-4">
                Otkrijte naš ruski prevodilac i počnite da istražujete bogatstvo ruskog vokabulara.
              </p>
              <Link to="/prevodilac-ruski-srpski">
                <Button className="bg-primary hover:bg-primary-hover">
                  Isprobajte ruski prevodilac
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogRuskiNeprevodi;