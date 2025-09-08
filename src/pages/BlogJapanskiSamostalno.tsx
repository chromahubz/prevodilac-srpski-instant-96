import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { SiteHeader } from "@/components/ui/site-header";

const BlogJapanskiSamostalno = () => {
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
                <span>8. decembar 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Saki Tanaka</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>9 min čitanja</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Kako naučiti japanski samostalno: vodič za početnike
            </h1>
            <p className="text-xl text-muted-foreground">
              Potpuni vodič kroz osnove japanskog jezika sa resursima za samostalno učenje hiragane, katakane i kanji.
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <p>
              Japanski jezik može delovati zastrašujuće zbog svojih tri pisma, ali sa pravilnim pristupom 
              možete savladati osnove. Ovaj vodič će vam pokazati kako da počnete.
            </p>

            <h2 className="text-2xl font-bold">Korak 1: Savladajte hiraganu (ひらがな)</h2>
            <p>
              Hiragana je fonetsko pismo koje se koristi za japanske reči. Ima 46 osnovnih znakova 
              i to je prva stvar koju treba naučiti.
            </p>

            <h2 className="text-2xl font-bold">Korak 2: Naučite katakanu (カタカナ)</h2>
            <p>
              Katakana se koristi za strane reči, imena i onomatopeje. Ima isti broj znakova kao hiragana.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-3">Počnite danas!</h3>
              <p className="text-muted-foreground mb-4">
                Koristite naš japanski prevodilac da istražite osnovne reči i fraze dok učite.
              </p>
              <Link to="/prevodilac-japanski-srpski">
                <Button className="bg-primary hover:bg-primary-hover">
                  Isprobajte japanski prevodilac
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

export default BlogJapanskiSamostalno;