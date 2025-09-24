import { Link } from "react-router-dom";
import { Clock, Book, Star, Award, CheckCircle, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogProfesionalniPrevodilac = () => {
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
              Profesionalni prevodilac srpski: Kako da pronađete idealnog eksperta
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Profesionalne usluge</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Vodič za izbor</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Kada vam je potreban **profesionalni prevodilac srpski**, važno je znati
              kako da pronađete i odaberete pravog eksperta. Ovaj vodič će vam pomoći
              da donesite informisanu odluku za sve vaše potrebe prevođenja.
            </p>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-6 w-6 text-amber-500" />
                Zašto je profesionalni prevodilac važan?
              </h2>
              <p className="text-muted-foreground">
                **Profesionalni prevodilac** ne samo što govori jezik - on je kulturni most
                između naroda. Istraživanja pokazuju da kvalitetan prevod može da poveća
                efikasnost međunarodne komunikacije za **85%**.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Tipovi profesionalnih prevodioca</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  1. Ovlašćeni prevodilac
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Ovlašćeni prevodilac srpski** je jedini koji može da potvrđuje prevode za državne institucije,
                  sudove i druge zvanične potrebe.
                </p>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-blue-800 mb-2">✅ Može da prevodi:</div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Diplome i svedočanstva</li>
                        <li>• Izvode iz matičnih knjiga</li>
                        <li>• Ugovore i sporazume</li>
                        <li>• Medicinsku dokumentaciju</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-blue-800 mb-2">🏛️ Priznaju:</div>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Ministarstva RS</li>
                        <li>• Sudovi</li>
                        <li>• Ambasade</li>
                        <li>• Univerziteti</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  2. Specijalizovani prevodilac
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Specijalizovani prevodilac** je ekspert u određenoj oblasti kao što su
                  medicina, pravo, tehnika ili marketing.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">⚖️</div>
                    <div className="text-sm text-green-700">Pravni</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">🏥</div>
                    <div className="text-sm text-green-700">Medicinski</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">⚙️</div>
                    <div className="text-sm text-green-700">Tehnički</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">💼</div>
                    <div className="text-sm text-green-700">Poslovni</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  3. Freelance prevodilac
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Freelance prevodilac srpski** često nudi kompetitivne cene i fleksibilne rokove,
                  idealan za manje projekte i kontinuiranu saradnju.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="font-medium text-purple-800">✅ Prednosti:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Niže cene</li>
                      <li>• Direktna komunikacija</li>
                      <li>• Fleksibilni rokovi</li>
                      <li>• Personalizovan pristup</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium text-purple-800">⚠️ Pažnja na:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Proveriti referencte</li>
                      <li>• Definisati rokove</li>
                      <li>• Ugovoriti revizije</li>
                      <li>• Čuvati backup komunikacije</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Kako da odaberete pravog prevodioca</h2>

            <div className="bg-gray-900 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Checklist za izbor prevodioca</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-400">🎯 Obavezno proveriti:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Obrazovanje i sertifikati
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Portfolio prethodnih radova
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Reference klijenata
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Specijalizacija u vašoj oblasti
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      Dostupnost i rokovi
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-yellow-400">❓ Pitanja za postavljanje:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Koliko iskustva imate sa mojim tipom teksta?</li>
                    <li>• Da li nudite revizije i korekcije?</li>
                    <li>• Kako garantujete kvalitet prevoda?</li>
                    <li>• Da li imate iskustvo sa zvaničnim dokumentima?</li>
                    <li>• Koji su vaši rokovi za ovaj projekat?</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Cene profesionalnih prevodioca u Srbiji</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-card rounded-lg border border-card-border">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left p-4">Tip prevoda</th>
                    <th className="text-center p-4">Cena po stranici</th>
                    <th className="text-center p-4">Vreme izvršenja</th>
                    <th className="text-center p-4">Napomene</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Opšti tekstovi</td>
                    <td className="text-center p-4">800-1200 RSD</td>
                    <td className="text-center p-4">1-2 dana</td>
                    <td className="text-center p-4">Standardna tarifa</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Ovlašćeni prevod</td>
                    <td className="text-center p-4">1500-2500 RSD</td>
                    <td className="text-center p-4">2-3 dana</td>
                    <td className="text-center p-4">Sa zvaničnim pečatom</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Stručni tekstovi</td>
                    <td className="text-center p-4">1200-2000 RSD</td>
                    <td className="text-center p-4">3-5 dana</td>
                    <td className="text-center p-4">Zahteva specijalizaciju</td>
                  </tr>
                  <tr>
                    <td className="p-4">Hitni prevodi</td>
                    <td className="text-center p-4">+50% na osnovnu cenu</td>
                    <td className="text-center p-4">24h</td>
                    <td className="text-center p-4">Dodatna naknada za hitnost</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ Upozorenje na prevare</h3>
              <p className="text-red-700 mb-3">
                Na tržištu postoje neovlašćeni "prevodilaci" koji nude jeftine usluge ali ne mogu da pruže pravnu valjanost.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <div className="font-medium text-red-800 mb-2">❌ Upozoravajući znaci:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Cene značajno ispod tržišnih</li>
                    <li>• Nema registracije kod suda</li>
                    <li>• Ne može da pokaže sertifikat</li>
                    <li>• Obećava nerealne rokove</li>
                  </ul>
                </div>
                <div>
                  <div className="font-medium text-red-800 mb-2">✅ Kako da se zaštitite:</div>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Tražite broj ovlašćenja</li>
                    <li>• Proverite na sajtu Ministarstva</li>
                    <li>• Insistirajte na ugovoru</li>
                    <li>• Tražite reference</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Alternativno rešenje: AI prevodilac</h2>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Kada je AI prevodilac dovoljno dobar?</h3>
              <p className="text-muted-foreground mb-4">
                Moderni **AI prevodilac srpski** može da bude odličan izbor za mnoge situacije,
                štedejući vam vreme i novac dok održava visok kvalitet.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">🤖 AI prevodilac idealan za:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Brzu komunikaciju putem e-maila</li>
                    <li>• Prevod veb stranica za informacije</li>
                    <li>• Društvene mreže i neformalna pisma</li>
                    <li>• Početno razumevanje dokumenata</li>
                    <li>• Učenje stranih jezika</li>
                    <li>• Turistička komunikacija</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📊 Naš AI prevodilac nudi:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• 94% tačnost za srpski jezik</li>
                    <li>• Trenutno prevođenje</li>
                    <li>• Besplatno osnovne funkcije</li>
                    <li>• Podrška za 100+ jezika</li>
                    <li>• Text-to-Speech funkcija</li>
                    <li>• Mobilna optimizacija</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Naša preporuka</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="font-bold mb-2">Za zvanične dokumente</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Uvek koristite ovlašćenog prevodioca za diplome, ugovore i državne dokumente
                </p>
                <Button variant="outline" size="sm">Pronađi ovlašćenog</Button>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-bold mb-2">Za svakodnevnu upotrebu</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Naš AI prevodilac je savršen za brzu komunikaciju i razumevanje tekstova
                </p>
                <Link to="/">
                  <Button size="sm" className="bg-primary hover:bg-primary-hover">Probajte besplatno</Button>
                </Link>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold mb-2">Za poslovne potrebe</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Kombinirajte AI za brzinu sa profesionalnim pregledom za maksimalan kvalitet
                </p>
                <Button variant="outline" size="sm">Saznajte više</Button>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Zaključak</h2>
              <p className="text-muted-foreground mb-4">
                **Profesionalni prevodilac srpski** je neizbejan za zvanične dokumente i specijalizovane tekstove.
                Međutim, za svakodnevnu komunikaciju, naš napredni AI prevodilac pruža odličnu alternativu
                koja kombinuje brzinu, tačnost i pristupačnost.
              </p>
              <p className="text-muted-foreground">
                Ključ je u prepoznavanju kada je koja opcija najprikladnija za vaše specifične potrebe.
              </p>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Počnite sa našim naprednim AI prevodiocem</h2>
          <p className="text-muted-foreground mb-6">
            Iskusite kvalitet profesionalnog prevoda uz brzinu moderne tehnologije
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Probajte besplatno
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outline" size="lg">
                Kontaktirajte nas
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogProfesionalniPrevodilac;