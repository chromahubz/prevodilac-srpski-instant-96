import { Link } from "react-router-dom";
import { Clock, Book, Star, FileText, Shield, Award, AlertTriangle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogPrevodDokumenata = () => {
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
              Prevod dokumenata: Kompletan vodič za zvanične i poslovne dokumente 2025
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>16 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Zvanični dokumenti</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Pravni vodič</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              **Prevod dokumenata** je kritičan proces koji zahteva preciznost i stručnost.
              Bilo da vam je potreban **ovlašćeni prevod** za državne institucije ili
              **poslovni prevod** za međunarodnu saradnju, ovaj vodič će vam objasniti sve
              što trebate da znate.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6 border border-red-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-6 w-6 text-red-500" />
                Važnost preciznog prevoda dokumenata
              </h2>
              <p className="text-muted-foreground">
                **Pogrešan prevod dokumenata** može da dovede do ozbiljnih pravnih,
                finansijskih ili personalnih problema. Preko **87% slučajeva** odbacivanja
                zahteva na ambasadama nastaje zbog neadekvatnog prevoda dokumentacije.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Tipovi prevoda dokumenata</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  1. Ovlašćeni prevod dokumenata
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Ovlašćeni prevod** je jedini pravno valjan prevod za zvanične svrhe
                  i mora se raditi kod sertifikovanog prevodioca.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-2">📋 Dokumenti koji zahtevaju:</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Lična dokumenta (pasoš, lična karta)</li>
                      <li>• Diplome i svedočanstva</li>
                      <li>• Izvodi iz matičnih knjiga</li>
                      <li>• Medicinska uverenja</li>
                      <li>• Sudski presude</li>
                      <li>• Ugovori za državne organe</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-2">🏛️ Gde se koristi:</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Ministarstva Republike Srbije</li>
                      <li>• Ambasade i konzulati</li>
                      <li>• Sudovi i tužilaštva</li>
                      <li>• Univerziteti</li>
                      <li>• Registri i agencije</li>
                      <li>• Međunarodne organizacije</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  2. Poslovni prevod dokumenata
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Poslovni prevod** služi za komercijalne svrhe i ne mora biti ovlašćen,
                  ali i dalje zahteva visoku preciznost.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <div className="text-lg mb-1">📊</div>
                    <div className="text-sm text-blue-700">Finansijski izveštaji</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <div className="text-lg mb-1">📄</div>
                    <div className="text-sm text-blue-700">Poslovni ugovori</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <div className="text-lg mb-1">📈</div>
                    <div className="text-sm text-blue-700">Marketing materijali</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <div className="text-lg mb-1">⚙️</div>
                    <div className="text-sm text-blue-700">Tehnička dokumentacija</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  3. Informativni prevod dokumenata
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Informativni prevod** služi za ličnu upotrebu i ne mora da bude sertifikovan.
                  Ovde može pomoći i kvalitetan AI prevodilac.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-purple-600 text-xl">📰</span>
                    <div>
                      <div className="font-medium text-purple-800">Novinski članci</div>
                      <div className="text-sm text-purple-700">Za ličnu informisanost</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-purple-600 text-xl">📧</span>
                    <div>
                      <div className="font-medium text-purple-800">Email korespondencija</div>
                      <div className="text-sm text-purple-700">Neformalna komunikacija</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-purple-600 text-xl">📋</span>
                    <div>
                      <div className="font-medium text-purple-800">Interna dokumenta</div>
                      <div className="text-sm text-purple-700">Bez pravnih posledica</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Postupak ovlašćenog prevoda</h2>

            <div className="bg-gray-900 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Korak po korak proces</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-2xl mb-2">1️⃣</div>
                  <div className="font-medium mb-2">Pronalaženje prevodioca</div>
                  <div className="text-sm text-gray-300">Proverite listu na sajtu Ministarstva pravde</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-2xl mb-2">2️⃣</div>
                  <div className="font-medium mb-2">Dostavljanje dokumenata</div>
                  <div className="text-sm text-gray-300">Originali ili overen kopije</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-2xl mb-2">3️⃣</div>
                  <div className="font-medium mb-2">Prevođenje i overavanje</div>
                  <div className="text-sm text-gray-300">Prevodilac stavlja pečat i potpis</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded">
                  <div className="text-2xl mb-2">4️⃣</div>
                  <div className="font-medium mb-2">Preuzimanje</div>
                  <div className="text-sm text-gray-300">Gotov prevod sa zvaničnim pečatom</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Cene prevoda dokumenata u Srbiji</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full bg-card rounded-lg border border-card-border">
                <thead>
                  <tr className="border-b border-card-border">
                    <th className="text-left p-4">Tip dokumenta</th>
                    <th className="text-center p-4">Ovlašćeni prevod</th>
                    <th className="text-center p-4">Poslovni prevod</th>
                    <th className="text-center p-4">Hitno (24h)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Lični dokumenti (1 strana)</td>
                    <td className="text-center p-4">1500-2000 RSD</td>
                    <td className="text-center p-4">800-1200 RSD</td>
                    <td className="text-center p-4">2500-3000 RSD</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Diplome i svedočanstva</td>
                    <td className="text-center p-4">2000-2500 RSD</td>
                    <td className="text-center p-4">1000-1500 RSD</td>
                    <td className="text-center p-4">3000-4000 RSD</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Ugovori (po strani)</td>
                    <td className="text-center p-4">2500-3500 RSD</td>
                    <td className="text-center p-4">1500-2500 RSD</td>
                    <td className="text-center p-4">4000-5000 RSD</td>
                  </tr>
                  <tr className="border-b border-card-border">
                    <td className="p-4">Medicinski nalazi</td>
                    <td className="text-center p-4">2000-3000 RSD</td>
                    <td className="text-center p-4">1200-1800 RSD</td>
                    <td className="text-center p-4">3500-4500 RSD</td>
                  </tr>
                  <tr>
                    <td className="p-4">Tehnička dokumentacija</td>
                    <td className="text-center p-4">3000-5000 RSD</td>
                    <td className="text-center p-4">2000-3500 RSD</td>
                    <td className="text-center p-4">5000-7000 RSD</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Najčešće greške u prevodu dokumenata</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-600">❌ Kritične greške:</h3>
                <div className="space-y-3">
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <div className="font-medium text-red-800 mb-1">Pogrešni lični podaci</div>
                    <div className="text-sm text-red-700">Imena, datumi, brojevi dokumenata</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <div className="font-medium text-red-800 mb-1">Netačan prevod termina</div>
                    <div className="text-sm text-red-700">Pravni i medicinski izrazi</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <div className="font-medium text-red-800 mb-1">Nedostaju pečati/potpisi</div>
                    <div className="text-sm text-red-700">Dokument nije pravno valjan</div>
                  </div>
                  <div className="bg-red-50 p-3 rounded border border-red-200">
                    <div className="font-medium text-red-800 mb-1">Neovlašćeni prevodilac</div>
                    <div className="text-sm text-red-700">Prevod se ne priznaje</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">✅ Kako ih izbegnuti:</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-1">Dvostruka provera podataka</div>
                    <div className="text-sm text-green-700">Porediti original sa prevodom</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-1">Specijalizovani prevodilac</div>
                    <div className="text-sm text-green-700">Birati prema oblasti dokumenta</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-1">Provera ovlašćenja</div>
                    <div className="text-sm text-green-700">Lista na sajtu Ministarstva</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-1">Profesionalna revizija</div>
                    <div className="text-sm text-green-700">Drugi prevodilac proverava</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Digitalizacija prevoda dokumenata</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">🌐 Online platforme za prevod</h3>
                <p className="text-muted-foreground mb-4">
                  Moderni **prevod dokumenata** sve više se oslanja na digitalne platforme
                  za upravljanje projektima i kvalitetu.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded border border-blue-200">
                    <div className="text-2xl mb-2">📤</div>
                    <div className="font-medium">Online upload</div>
                    <div className="text-sm text-muted-foreground">Bezbedno slanje dokumenata</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded border border-blue-200">
                    <div className="text-2xl mb-2">🔍</div>
                    <div className="font-medium">Real-time praćenje</div>
                    <div className="text-sm text-muted-foreground">Status prevođenja</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded border border-blue-200">
                    <div className="text-2xl mb-2">💳</div>
                    <div className="font-medium">Online plaćanje</div>
                    <div className="text-sm text-muted-foreground">Kartice, PayPal</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">🤖 Uloga AI u prevodu dokumenata</h3>
                <p className="text-muted-foreground mb-4">
                  **AI prevodilac** može biti koristan podrška, ali ne može zameniti
                  ovlašćenog prevodioca za zvanične dokumente.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-orange-800 mb-2">🟢 Može pomoći sa:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Prvom verzijom prevoda</li>
                      <li>• Terminologijom i rečnicima</li>
                      <li>• Brzom preglеdom sadržaja</li>
                      <li>• Identifikacijom ključnih reči</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-orange-800 mb-2">🔴 Ne može da zameni:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ovlašćenog prevodioca</li>
                      <li>• Pravnu validnost</li>
                      <li>• Stručno poznavanje oblasti</li>
                      <li>• Kulturni kontekst</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-bold text-yellow-800 mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Važno upozorenje
              </h3>
              <p className="text-yellow-700 mb-3">
                **Prevod dokumenata za zvanične svrhe** mora se raditi kod ovlašćenog prevodioca
                registrovanog kod Ministarstva pravde Republike Srbije.
              </p>
              <div className="bg-yellow-100 p-3 rounded border border-yellow-300">
                <div className="font-medium text-yellow-800 mb-2">⚠️ Pre slanja dokumenata:</div>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Proverite da li je prevodilac ovlašćen</li>
                  <li>• Potvrdite jezike za koje ima dozvolu</li>
                  <li>• Usaglasите cenu i rokove unapred</li>
                  <li>• Tražite pismenu potvrdu o priјemu</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Budućnost prevoda dokumenata</h2>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 border border-purple-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Trendovi za 2025-2030</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-purple-600">🚀 Tehnološki razvoj:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Blockchain verifikacija prevoda</li>
                    <li>• AI-assisted quality control</li>
                    <li>• Biometrijska autentifikacija</li>
                    <li>• Real-time kolaboracija</li>
                    <li>• Smart contracts za plaćanje</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📋 Pravni okvir:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• EU standardizacija</li>
                    <li>• Digitalni potpisi</li>
                    <li>• Cross-border priznavanje</li>
                    <li>• Automatsko archiviranje</li>
                    <li>• Improved traceability</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Kako naš AI prevodilac pomaže</h2>

            <div className="bg-card rounded-lg p-6 border border-card-border mb-8">
              <p className="text-muted-foreground mb-4">
                **Naš srpski prevodilac** je koristan alat za pripremu i razumevanje dokumenata,
                ali uvek preporučujemo ovlašćenog prevodioca za zvanične svrhe.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded">
                  <div className="text-2xl mb-2">📋</div>
                  <div className="font-medium">Pregled sadržaja</div>
                  <div className="text-sm text-muted-foreground">Brzo razumevanje dokumenta</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded">
                  <div className="text-2xl mb-2">💭</div>
                  <div className="font-medium">Priprema za prevodioce</div>
                  <div className="text-sm text-muted-foreground">Prva verzija za reviziju</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="font-medium">Terminologija</div>
                  <div className="text-sm text-muted-foreground">Provera stručnih termina</div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Zaključak</h2>
              <p className="text-muted-foreground mb-4">
                **Prevod dokumenata** je ozbiljan posao koji zahteva pažljivu pripremu i izbor
                pravog prevodioca. Za zvanične svrhe uvek koristite ovlašćenog prevodioca,
                a za informativne potrebe možete se osloniti na kvalitetan AI prevodilac.
              </p>
              <p className="text-muted-foreground">
                Kombinacija moderne tehnologije sa profesionalnom ekspertizom omogućava
                najbolje rezultate za sve vaše potrebe prevoda dokumenata.
              </p>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Počnite sa prevodom dokumenata</h2>
          <p className="text-muted-foreground mb-6">
            Koristite naš AI prevodilac za pripremu ili informativni prevod dokumenata
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Probajte AI prevodilac
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outline" size="lg">
                Kontakt za ovlašćeni prevod
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPrevodDokumenata;