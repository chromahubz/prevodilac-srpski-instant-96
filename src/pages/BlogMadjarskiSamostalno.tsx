import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { SiteHeader } from "@/components/ui/site-header";

const BlogMadjarskiSamostalno = () => {
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
                <span>2. decembar 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Zoltán Nagy</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>8 min čitanja</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Kako naučiti mađarski jezik samostalno
            </h1>
            <p className="text-xl text-muted-foreground">
              Saveti za savladavanje jednog od najteži evropskih jezika uz praktične metode i strategije učenja.
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <p>
              Mađarski jezik smatra se jednim od najkompleksnijih jezika u Evropi. Sa svojih 18-21 padeža, 
              specifičnom gramatikom i unique vokabularom, predstavlja pravi izazov.
            </p>

            <h2 className="text-2xl font-bold">Zašto je mađarski težak?</h2>
            <p>
              Mađarski je aglutinativan jezik - reči se grade dodavanjem suffiksa. Takođe ima vokalu harmoniju 
              i određenu/neodređenu konjugaciju glagola.
            </p>

            <h2 className="text-2xl font-bold">Plan učenja</h2>
            <p>
              Očekujte 2-3 godine za razgovorni nivo. Počnite sa osnovama izgovora i najčešćim rečima, 
              zatim postepeno dodajte padeje i gramatiku.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-3">Jó tanulást! (Srećno učenje!)</h3>
              <p className="text-muted-foreground mb-4">
                Koristite naš mađarski prevodilac da istražite osnovne reči i fraze dok učite.
              </p>
              <Link to="/prevodilac-madjarski-srpski">
                <Button className="bg-primary hover:bg-primary-hover">
                  Isprobajte mađarski prevodilac
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

export default BlogMadjarskiSamostalno;