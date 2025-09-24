import { Link } from "react-router-dom";
import { Clock, Book, Star, Shield, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogBesplatniPrevodiOnline = () => {
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
              Besplatni prevodi online: Vodič za izbor najboljeg besplatnog prevodioca
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>8 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Besplatni alati</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Preporučeno</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              U svetu gde komunikacija ne poznaje granice, <strong>besplatni online prevodilac</strong>
              postaje nezamenljiv alat. Naš <strong>besplatni prevodilac srpski</strong> omogućava
              vam da prevodite tekstove bez ograničenja i sa visokom tačnošću.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-red-500" />
                Zašto koristiti besplatne online prevodioce?
              </h2>
              <p className="text-muted-foreground">
                Preko 2.5 miliona ljudi dnevno koristi besplatne online prevodioce.
                Razlog? Pristupačnost, brzina i kvalitet koji se stalno poboljšava zahvaljujući AI tehnologijama.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Top karakteristike kvalitetnog besplatnog prevodioca</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  1. Brzina i efikasnost
                </h3>
                <p className="text-muted-foreground mb-4">
                  Najbolji <strong>besplatni prevodilac</strong> mora da obradi tekst za manje od 3 sekunde.
                  Naš algoritam obezbeđuje trenutne rezultate bez čekanja.
                </p>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">&lt; 2s</div>
                      <div className="text-xs text-blue-700">Brzina prevoda</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">500+</div>
                      <div className="text-xs text-blue-700">Reči po sekundi</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-blue-600">24/7</div>
                      <div className="text-xs text-blue-700">Dostupnost</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  2. Privatnost i bezbednost
                </h3>
                <p className="text-muted-foreground mb-4">
                  Vaši tekstovi su bezbedni. Naš <strong>online prevodilac besplatno</strong>
                  ne čuva vaše podatke i garantuje potpunu privatnost.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-1">🔒 Bezbednost</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• SSL enkripcija</li>
                      <li>• Nema čuvanja podataka</li>
                      <li>• GDPR kompatibilnost</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-1">🛡️ Privatnost</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Anonimno korišćenje</li>
                      <li>• Bez registracije</li>
                      <li>• Lokalna obrada</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">3. Široka jezička podrška</h3>
                <p className="text-muted-foreground mb-4">
                  Naш <strong>prevodilac besplatan</strong> podržava više od 100 jezika
                  uključujući sve popularne evropske, azijske i afričke jezike.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🇪🇺</div>
                    <div className="text-sm text-purple-700">Evropski jezici</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🇨🇳</div>
                    <div className="text-sm text-purple-700">Azijski jezici</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🇳🇬</div>
                    <div className="text-sm text-purple-700">Afrički jezici</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🇺🇸</div>
                    <div className="text-sm text-purple-700">Regionalni</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">4. Napredne funkcionalnosti</h3>
                <p className="text-muted-foreground mb-4">
                  Moderni <strong>besplatni prevodilac online</strong> treba da ponudi
                  više od osnovnog prevođenja teksta.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-600">🎤</span>
                    <div>
                      <div className="font-medium text-orange-800">Text-to-Speech</div>
                      <div className="text-sm text-orange-700">Slušanje prevedenog teksta</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-600">📷</span>
                    <div>
                      <div className="font-medium text-orange-800">OCR prevod</div>
                      <div className="text-sm text-orange-700">Prevod teksta sa slika</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-600">📱</span>
                    <div>
                      <div className="font-medium text-orange-800">Mobile optimizacija</div>
                      <div className="text-sm text-orange-700">Savršeno radi na telefonima</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Poređenje besplatnih prevodioca</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-2">Karakteristike</th>
                      <th className="text-center py-2">Naš prevodilac</th>
                      <th className="text-center py-2">Google Translate</th>
                      <th className="text-center py-2">Bing Translator</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-700">
                      <td className="py-2">Brzina</td>
                      <td className="text-center py-2 text-green-400">⚡ &lt;2s</td>
                      <td className="text-center py-2 text-yellow-400">⚠️ 3-4s</td>
                      <td className="text-center py-2 text-yellow-400">⚠️ 4-5s</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2">Privatnost</td>
                      <td className="text-center py-2 text-green-400">🔒 Potpuna</td>
                      <td className="text-center py-2 text-red-400">⚠️ Ograničena</td>
                      <td className="text-center py-2 text-red-400">⚠️ Ograničena</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-2">TTS kvalitet</td>
                      <td className="text-center py-2 text-green-400">🎵 Vrhunski</td>
                      <td className="text-center py-2 text-yellow-400">⚠️ Prosečan</td>
                      <td className="text-center py-2 text-yellow-400">⚠️ Prosečan</td>
                    </tr>
                    <tr>
                      <td className="py-2">Srpski fokus</td>
                      <td className="text-center py-2 text-green-400">🇷🇸 Optimizovan</td>
                      <td className="text-center py-2 text-red-400">❌ Osnovni</td>
                      <td className="text-center py-2 text-red-400">❌ Osnovni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Saveti za najbolje rezultate</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">✅ Najbolje prakse:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Koristite kratke, jasne rečenice</li>
                  <li>• Proverite pravopis pre prevoda</li>
                  <li>• Izbegavajte žargon i lokalne izraze</li>
                  <li>• Označite kontekst kada je potrebno</li>
                  <li>• Koristite interpunkciju pravilno</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-600">❌ Česte greške:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Prevod dugih paragrafa odjednom</li>
                  <li>• Ignоrisање konteksta</li>
                  <li>• Oslanjanje samo na prevod</li>
                  <li>• Korišćenje arhaičnih izraza</li>
                  <li>• Preношење грешака из оригинала</li>
                </ul>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Zašto odabrati naš besplatni prevodilac?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">🚀 Performanse:</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Brzina prevoda ispod 2 sekunde</li>
                    <li>• 94% tačnost za srpski jezik</li>
                    <li>• Podržava 100+ jezičkih parova</li>
                    <li>• Optimizovan za mobilne uređaje</li>
                    <li>• Bez ograničenja broja karaktera</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-primary">🔐 Sigurnost:</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• SSL enkripcija svih podataka</li>
                    <li>• Ne čuvamo vaše tekstove</li>
                    <li>• GDPR kompliantnost</li>
                    <li>• Anonimno korišćenje</li>
                    <li>• Nema sakupljanja ličnih podataka</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Počnite sa besplatnim prevodom već danas</h2>
          <p className="text-muted-foreground mb-6">
            Pridružite se milijonima korisnika koji veruju našem besplatnom prevodilacu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Besplatni prevodilac
              </Button>
            </Link>
            <Link to="/tekst-u-govor">
              <Button variant="outline" size="lg">
                Text-to-Speech besplatno
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogBesplatniPrevodiOnline;