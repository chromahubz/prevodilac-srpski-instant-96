import { Link } from "react-router-dom";
import { Clock, Book, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogPrevodjenjeUPoslovnom = () => {
  const isRegistered = false;
  const usedTokens = 2;
  const totalTokens = 5;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader isRegistered={isRegistered} usedTokens={usedTokens} totalTokens={totalTokens} />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="mb-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Prevođenje u poslovnom svetu: Kako profesionalni prevod utiče na uspeh kompanije
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>12 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Poslovni prevod</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>SEO optimizovano</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              U današnjem globalizovanom poslovnom okruženju, <strong>profesionalni prevod</strong> predstavlja
              kritični faktor uspešnosti međunarodnog poslovanja. Bez kvalitetnog prevoda, kompanije gube
              priliku za ekspanziju na nova tržišta i mogu čak ugroziti svoj reputation.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-card-border mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-primary" />
                Zašto je poslovni prevod ključan za uspeh?
              </h2>
              <p className="text-muted-foreground">
                Istraživanja pokazuju da kompanije koje investiraju u kvalitetan prevod povećavaju svoje
                prihode u inostranstvu za čak 70%. Naš <strong>online prevodilac</strong> omogućava brzу
                proveru prevoda i pomoć u svakodnevnom poslovanju.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Oblasti gde je profesionalni prevod nezamenljiv</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">1. Marketing i reklama</h3>
                <p className="text-muted-foreground mb-3">
                  Marketinške kampanje zahtevaju kulturološku adaptaciju, ne samo lингвистички prevod.
                  Jedan pogrešan prevod može koštati kompaniju miliona dolara.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Slogani i reklamne poruke</li>
                  <li>Sadržaj za društvene mreže</li>
                  <li>Proizvodni katalozi</li>
                  <li>Web stranice i landing page-ovi</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">2. Pravni dokumeni</h3>
                <p className="text-muted-foreground mb-3">
                  Ugovori, patenti i pravne dokumentacije zahtevaju apsolutну preciznost.
                  Jedan pogrešan termin može dovesti do milionskih gubitaka.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Međunarodni ugovori</li>
                  <li>Patentna dokumentacija</li>
                  <li>Poslovni propisi i regulacije</li>
                  <li>Sudska dokumentа</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">3. Tehnička dokumentacija</h3>
                <p className="text-muted-foreground mb-3">
                  Priručnici za upotrebu, tehnические specifikacije i bezbедnosna uputstva
                  moraju biti kristalno jasni da би се избегле nesreće i odgovornosti.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Korisnički priručnici</li>
                  <li>Instalaciona uputstva</li>
                  <li>Bezbednosni protokoli</li>
                  <li>Softverska dokumentacija</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-primary">4. Finansijski izveštaji</h3>
                <p className="text-muted-foreground mb-3">
                  Godишњи izveštaji, audit dokumenti i finansijske prognoze moraju biti
                  prevedeni sa максималnom preciznošću za međunarodne investitore.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Godišnji finansijski izveštaji</li>
                  <li>Investor relations materijali</li>
                  <li>Budžetske projekcije</li>
                  <li>Audit izveštaji</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Slučaj iz prakse</h3>
              <p className="text-yellow-700">
                HSBC банка је 2009. godine потрошила 10 милиона долара на ребрендирање због
                лошег превода њиховог слогана "Assume Nothing" који је на многим језицима
                звучао као "Do Nothing" (не ради ништа).
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Kako изабрати правог партнера за превод</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-lg font-semibold mb-3 text-green-600">✅ Шта тражити</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Сертификовање прекладача</li>
                  <li>• Специјализацију за вашу индустрију</li>
                  <li>• Референце претходних клијената</li>
                  <li>• Гарантију квалитета</li>
                  <li>• Поштовање рокова</li>
                </ul>
              </div>
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-lg font-semibold mb-3 text-red-600">❌ Чувајте се</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Превише јефтиних понуда</li>
                  <li>• Недостајуће референце</li>
                  <li>• Нереални рокови</li>
                  <li>• Недостатак специјализације</li>
                  <li>• Нема ревизије и контроле</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">ROI професионалног превода</h2>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">70%</div>
                  <p className="text-sm text-muted-foreground">Повећање прихода на страним тржиштима</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
                  <p className="text-sm text-muted-foreground">Већа конверзија на локализованим сајтовима</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">45%</div>
                  <p className="text-sm text-muted-foreground">Смањење времена за улазак на тржиште</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Будућност пословног превођења</h2>

            <p className="text-muted-foreground mb-4">
              Технологије попут AI и machine learning револуционишу индустрију превођења.
              Наш <strong>напредни преводилац</strong> користи најновије технологије за брже
              и прецизније преводе пословних докумената.
            </p>

            <div className="bg-card rounded-lg p-6 border border-card-border mb-8">
              <h3 className="text-lg font-semibold mb-3">Трендови за 2024. годину:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• AI-потпомогнут превод са људском ревизијом</li>
                <li>• Реалтајм превод видео конференција</li>
                <li>• Интеграција са CRM и ERP системима</li>
                <li>• Персонализовани преводи за индустрије</li>
                <li>• Блокчејн верификација превода</li>
              </ul>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Унапредите своје пословно комуницирање</h2>
          <p className="text-muted-foreground mb-6">
            Искористите наш напредни преводилац за брзе и прецизне пословне преводе
          </p>
          <Link to="/">
            <Button size="lg" className="bg-primary hover:bg-primary-hover mr-4">
              Пробајте преводилац
            </Button>
          </Link>
          <Link to="/tekst-u-govor">
            <Button variant="outline" size="lg">
              Текст у говор
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPrevodjenjeUPoslovnom;