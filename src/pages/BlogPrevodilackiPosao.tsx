import { Link } from "react-router-dom";
import { Clock, Book, Star, DollarSign, Briefcase, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogPrevodilackiPosao = () => {
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
              Prevodilački posao: Kako pokrenuti uspešnu karijeru u prevođenju 2025
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>13 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Karijerni vodič</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Biznis saveti</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              **Prevodilački posao** postaje sve atraktivnija karijera u digitalnom dobu.
              Sa rastom globalnih komunikacija i digitalizacije, potreba za kvalitetnim
              prevodima je veća nego ikad. Otkrijte kako da izgradite uspešnu karijeru u ovoj oblasti.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-500" />
                Tržište prevođenja u 2025. godini
              </h2>
              <p className="text-muted-foreground">
                Globalno tržište prevodilačkih usluga vredi preko **56 milijardi dolara**
                i raste po stopi od 7.5% godišnje. **Prevodilački posao** nudi stabilnost
                i mogućnost rada na daljinu uz konkurentne zarade.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Tipovi prevodilačkih poslova</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-green-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  1. Freelance prevodilac
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Freelance prevodilački posao** omogućava najveću fleksibilnost i kontrolu
                  nad radnim vremenom i klijentima.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">✅ Prednosti:</div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Fleksibilno radno vreme</li>
                      <li>• Rad od kuće</li>
                      <li>• Različiti projekti</li>
                      <li>• Direktan kontakt sa klijentima</li>
                      <li>• Potencijalno višlje zarade</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded border border-red-200">
                    <div className="font-medium text-red-800 mb-2">⚠️ Izazovi:</div>
                    <ul className="text-sm text-red-700 space-y-1">
                      <li>• Nestabilni prihodi</li>
                      <li>• Potrebno samostalno marketing</li>
                      <li>• Nema plaćen odmor</li>
                      <li>• Administrativni poslovi</li>
                      <li>• Potreba za rezervnim fondom</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  2. Zaposleni prevodilac
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Stalni prevodilački posao** u kompaniji ili prevodilačkoj agenciji pruža
                  stabilnost i predvidljive prihode.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">🏢</div>
                    <div className="text-sm text-green-700">Korporacije</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">🏛️</div>
                    <div className="text-sm text-green-700">Državne institucije</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">🌐</div>
                    <div className="text-sm text-green-700">Međunarodne organizacije</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="text-lg mb-1">📰</div>
                    <div className="text-sm text-green-700">Mediji</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  3. Specijalizovane oblasti
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Specijalizovani prevodilački posao** nudi višlje zarade ali zahteva dodatno obrazovanje.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-purple-600 text-xl">⚖️</span>
                    <div>
                      <div className="font-medium text-purple-800">Pravni prevodi</div>
                      <div className="text-sm text-purple-700">Ugovori, sudski presude, zakoni</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-purple-600 text-xl">🏥</span>
                    <div>
                      <div className="font-medium text-purple-800">Medicinski prevodi</div>
                      <div className="text-sm text-purple-700">Medicinska dokumentacija, istraživanja</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-purple-600 text-xl">⚙️</span>
                    <div>
                      <div className="font-medium text-purple-800">Tehnički prevodi</div>
                      <div className="text-sm text-purple-700">Manuali, softver, inženjerstvo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Zarade u prevodilačkom poslu</h2>

            <div className="bg-gray-900 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Prosečne zarade prevodioca u Srbiji (2025)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3">Tip posla</th>
                      <th className="text-center py-3">Početnik</th>
                      <th className="text-center py-3">Iskusan</th>
                      <th className="text-center py-3">Ekspert</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium">Freelance (po stranici)</td>
                      <td className="text-center py-3 text-yellow-400">800-1200 RSD</td>
                      <td className="text-center py-3 text-green-400">1200-2000 RSD</td>
                      <td className="text-center py-3 text-green-400">2000-3500 RSD</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium">Zaposleni (mesečno)</td>
                      <td className="text-center py-3 text-yellow-400">60.000-80.000 RSD</td>
                      <td className="text-center py-3 text-green-400">80.000-120.000 RSD</td>
                      <td className="text-center py-3 text-green-400">120.000-200.000 RSD</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium">Ovlašćeni prevod</td>
                      <td className="text-center py-3 text-green-400">1500-2500 RSD</td>
                      <td className="text-center py-3 text-green-400">2500-3500 RSD</td>
                      <td className="text-center py-3 text-green-400">3500-5000 RSD</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">Konferencijski tolmač</td>
                      <td className="text-center py-3 text-green-400">15.000-25.000 RSD/dan</td>
                      <td className="text-center py-3 text-green-400">25.000-40.000 RSD/dan</td>
                      <td className="text-center py-3 text-green-400">40.000-80.000 RSD/dan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Kako početi prevodilačku karijeru</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="font-bold mb-3">1. Obrazovanje</h3>
                <ul className="text-muted-foreground text-sm space-y-2 text-left">
                  <li>• Filološki fakultet</li>
                  <li>• Kursevi prevođenja</li>
                  <li>• Sertifikacije (SDL, CAT alati)</li>
                  <li>• Specijalizovani kursevi</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl mb-4">🛠️</div>
                <h3 className="font-bold mb-3">2. Alati i tehnologije</h3>
                <ul className="text-muted-foreground text-sm space-y-2 text-left">
                  <li>• CAT alati (SDL Trados)</li>
                  <li>• Online prevodilac za pomoć</li>
                  <li>• Terminology baze</li>
                  <li>• Project management software</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-card-border text-center">
                <div className="text-3xl mb-4">📈</div>
                <h3 className="font-bold mb-3">3. Razvoj karijere</h3>
                <ul className="text-muted-foreground text-sm space-y-2 text-left">
                  <li>• Portfolio buildovanje</li>
                  <li>• Networking</li>
                  <li>• Kontinuirano učenje</li>
                  <li>• Specijalizacija</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Potrebne veštine za uspeh</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">🎯 Jezičke veštine:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Odličo poznavanje maternjeg jezika</li>
                  <li>• Napedno znanje stranih jezika</li>
                  <li>• Kulturno razumevanje</li>
                  <li>• Specijalizovana terminologija</li>
                  <li>• Kontinuirno usavršavanje</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">💼 Poslovne veštine:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Upravljanje vremenom</li>
                  <li>• Komunikacija sa klijentima</li>
                  <li>• Marketing i prodaja</li>
                  <li>• Finansijsko upravljanje</li>
                  <li>• Kontrola kvaliteta</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Izazovi moderne prevodilačke industrije</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">🤖 AI i mašinsko prevođenje</h3>
                <p className="text-muted-foreground mb-4">
                  **AI prevodilac** tehnologije menjaju industriju, ali stvaraju i nove mogućnosti.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="font-medium text-orange-800 mb-2">⚠️ Izazovi:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Konkurencija AI-a za osnovne prevode</li>
                      <li>• Pad cena za jednostavne tekstove</li>
                      <li>• Potreba za prespecijalizacijom</li>
                    </ul>
                  </div>
                  <div>
                    <div className="font-medium text-orange-800 mb-2">✅ Mogućnosti:</div>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Post-editing AI prevoda</li>
                      <li>• Specijalizovani sadržaj</li>
                      <li>• Kreativni prevodi</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">📱 Digitalizacija</h3>
                <p className="text-muted-foreground mb-4">
                  **Prevodilački posao** postaje sve više digitalan sa novim alatima i procesima.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">☁️</div>
                    <div className="text-sm text-purple-700">Cloud platfome</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🤝</div>
                    <div className="text-sm text-purple-700">Kolaboracija</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">📊</div>
                    <div className="text-sm text-purple-700">Analytics</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">⚡</div>
                    <div className="text-sm text-purple-700">Automatizacija</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Buduće perspektive</h2>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200 mb-8">
              <h3 className="text-xl font-bold mb-4">Trendovi za 2025-2030</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">📈 Rastući segmenti:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Lokalizacija video sadržaja</li>
                    <li>• AI-assisted translation</li>
                    <li>• Real-time prevođenje</li>
                    <li>• Multimedijalni sadržaj</li>
                    <li>• E-learning materijali</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">🎯 Nove mogućnosti:</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Konsultantske usluge</li>
                    <li>• Cultural adaptation</li>
                    <li>• Quality assurance</li>
                    <li>• Training AI sistema</li>
                    <li>• Project management</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Kako naš AI prevodilac podržava prevodiace</h2>

            <div className="bg-card rounded-lg p-6 border border-card-border mb-8">
              <p className="text-muted-foreground mb-4">
                **Naš srpski prevodilac** nije konkurent već pomoćnik profesionalnim prevodiocima.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-medium">Prva verzija</div>
                  <div className="text-sm text-muted-foreground">Brž početak rada</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded">
                  <div className="text-2xl mb-2">🔍</div>
                  <div className="font-medium">Terminologija</div>
                  <div className="text-sm text-muted-foreground">Provera konzistentnosti</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-medium">Reference</div>
                  <div className="text-sm text-muted-foreground">Brža provera významu</div>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Zaključak</h2>
              <p className="text-muted-foreground mb-4">
                **Prevodilački posao** ostaje atraktivna karijera sa dobrim perspektivama.
                Ključ uspeha je u kontinuiranom učenju, specijalizaciji i adaptaciji na
                nove tehnologije kao što su AI prevodilac alati.
              </p>
              <p className="text-muted-foreground">
                Kombinacija ljudske kreativnosti sa naprednom tehnologijom otvara nove
                mogućnosti za prevodiace u digitalnom dobu.
              </p>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Podržite svoj prevodilački rad</h2>
          <p className="text-muted-foreground mb-6">
            Koristite naš AI prevodilac kao pomoćni alat u vašoj prevodilačkoj praksi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Probajte AI prevodilac
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outline" size="lg">
                Kontakt za saradnju
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPrevodilackiPosao;