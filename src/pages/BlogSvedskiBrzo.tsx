import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { SiteHeader } from "@/components/ui/site-header";

const BlogSvedskiBrzo = () => {
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
                <span>5. decembar 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>Lars Andersson</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>6 min čitanja</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-foreground mb-6">
              10 saveta kako naučiti švedski brzo i efikasno
            </h1>
            <p className="text-xl text-muted-foreground">
              Otkrijte najbrže metode za savladavanje švedskog jezika kroz praktične tehnike i korisne resurse.
            </p>
          </div>

          <div className="space-y-6 text-foreground">
            <p>
              Švedski jezik je jedan od lakših jezika za govornike srpskog zbog sličnosti sa engleskim. 
              Ovih 10 saveta će vam pomoći da brže napredujete.
            </p>

            <h2 className="text-2xl font-bold">1. Iskoristite sličnosti sa engleskim</h2>
            <p>
              Švedski deli mnoge reči sa engleskim jezikom - oko 1000 najčešćih švedskih reči 
              ima sličnosti sa engleskim, što značajno ubrzava učenje.
            </p>

            <h2 className="text-2xl font-bold">2. Fokusirajte se na najčešće reči</h2>
            <p>
              Počnite sa 300 najčešćih švedskih reči - one pokrivaju 80% svakodnevne komunikacije.
            </p>

            <div className="bg-card border border-card-border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-3">Hej då! (Doviđenja!)</h3>
              <p className="text-muted-foreground mb-4">
                Pokušajte naš švedski prevodilac da vežbate osnovne fraze dok učite.
              </p>
              <Link to="/prevodilac-svedski-srpski">
                <Button className="bg-primary hover:bg-primary-hover">
                  Isprobajte švedski prevodilac
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

export default BlogSvedskiBrzo;