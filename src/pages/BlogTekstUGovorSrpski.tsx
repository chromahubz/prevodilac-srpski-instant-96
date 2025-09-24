import { Link } from "react-router-dom";
import { Clock, Book, Mic, Volume2, Play, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogTekstUGovorSrpski = () => {
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
              Tekst u govor srpski: Najbolji TTS alati za prirodan srpski izgovor 2024
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>9 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>TTS Tehnologija</span>
              </div>
              <div className="flex items-center gap-1">
                <Volume2 className="h-4 w-4" />
                <span>Audio</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Tekst u govor srpski</strong> tehnologija doživljava revoluciju zahvaljujući
              AI napretku. Naš <strong>TTS srpski</strong> alat generiše prirodan, čist izgovor
              koji je nezamenjiv za učenje, pristupačnost i profesionalnu upotrebu.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Volume2 className="h-6 w-6 text-blue-600" />
                Zašto je srpski TTS sve popularniji?
              </h2>
              <p className="text-muted-foreground">
                Više od 500.000 ljudi mesečno koristi <strong>srpski tekst u govor</strong> alate.
                Razlog je jednostavan: AI je konačno naučio da pravilno izgovara srpske glasove,
                naglasak i intonaciju.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Prednosti kvalitetnog srpskog TTS-a</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  1. Prirodan srpski izgovor
                </h3>
                <p className="text-muted-foreground mb-4">
                  Moderni <strong>govor u tekst srpski</strong> sistemi koriste neural networks
                  da reprodukuju autentičan srpski akcenat sa pravilnim naglascima.
                </p>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">95%</div>
                      <div className="text-sm text-green-700">Tačnost izgovora</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">4</div>
                      <div className="text-sm text-green-700">Srpska naglaska</div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-white rounded border border-green-300">
                    <div className="text-sm text-green-800 font-medium mb-2">Primer kvaliteta:</div>
                    <div className="text-green-700 italic">
                      "Добродошли у свет напредних технологија за српски језик"
                    </div>
                    <div className="text-xs text-green-600 mt-1">
                      ✅ Правилан изговор свих дугих и кратких самогласника
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Mic className="h-5 w-5" />
                  2. Podrška za ćirilicu i latinicu
                </h3>
                <p className="text-muted-foreground mb-4">
                  Naš <strong>tekst u govor na srpskom</strong> automatski prepoznaje i čita
                  oba pisma bez potrebe za podešavanjem.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">🔤 Ćirilica</div>
                    <div className="text-blue-700 text-sm mb-2">
                      "Ово је пример ћириличног текста који ће бити изговорен природно."
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600">Слушај пример</span>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">🔠 Latinica</div>
                    <div className="text-blue-700 text-sm mb-2">
                      "Ovo je primer latiničnog teksta koji će biti izgovoren identično."
                    </div>
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4 text-blue-600" />
                      <span className="text-xs text-blue-600">Слушај пример</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">3. Različiti glasovi i stilovi</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Srpski TTS online</strong> nudi izbor između muških i ženskih glasova
                  sa različitim tonovima prikladnim za različite namene.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-2xl">👩</span>
                    <div className="flex-1">
                      <div className="font-medium text-purple-800">Ženski glas - Ana</div>
                      <div className="text-sm text-purple-700">Topao, prijatan glas idealjan za edukacijski sadržaj</div>
                    </div>
                    <Play className="h-5 w-5 text-purple-600 cursor-pointer hover:text-purple-800" />
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-2xl">👨</span>
                    <div className="flex-1">
                      <div className="font-medium text-purple-800">Muški glas - Marko</div>
                      <div className="text-sm text-purple-700">Autoritativan glas savršen za poslovne prezentacije</div>
                    </div>
                    <Play className="h-5 w-5 text-purple-600 cursor-pointer hover:text-purple-800" />
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-2xl">🎭</span>
                    <div className="flex-1">
                      <div className="font-medium text-purple-800">Naratorski glas</div>
                      <div className="text-sm text-purple-700">Profesionalni glas za audiobook-ove i dokumentarce</div>
                    </div>
                    <Play className="h-5 w-5 text-purple-600 cursor-pointer hover:text-purple-800" />
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">4. Savršeno za pristupačnost</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Text to speech srpski</strong> omogućava osobama sa poteškoćama u čitanju
                  da pristupe digitalnom sadržaju na srpskom jeziku.
                </p>
                <div className="bg-orange-50 p-4 rounded border border-orange-200">
                  <div className="font-medium text-orange-800 mb-3">Korisno za:</div>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <ul className="space-y-2 text-orange-700">
                      <li>• 👁️ Osobe sa oštećenjem vida</li>
                      <li>• 📖 Disleksiju</li>
                      <li>• 🧠 Teškoće u učenju</li>
                      <li>• 👴 Starije osobe</li>
                    </ul>
                    <ul className="space-y-2 text-orange-700">
                      <li>• 📱 Multitasking</li>
                      <li>• 🚗 Vožnju</li>
                      <li>• 🏃 Trčanje/vežbanje</li>
                      <li>• 📚 Učenje jezika</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Poređenje TTS rešenja za srpski</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3">Platform</th>
                      <th className="text-center py-3">Kvalitet glasa</th>
                      <th className="text-center py-3">Ćirilica</th>
                      <th className="text-center py-3">Latinica</th>
                      <th className="text-center py-3">Besplatno</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium">Naš TTS</td>
                      <td className="text-center py-3">
                        <span className="text-green-400">⭐⭐⭐⭐⭐</span>
                      </td>
                      <td className="text-center py-3 text-green-400">✅</td>
                      <td className="text-center py-3 text-green-400">✅</td>
                      <td className="text-center py-3 text-green-400">✅</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Google TTS</td>
                      <td className="text-center py-3">
                        <span className="text-yellow-400">⭐⭐⭐⭐</span>
                      </td>
                      <td className="text-center py-3 text-yellow-400">⚠️</td>
                      <td className="text-center py-3 text-green-400">✅</td>
                      <td className="text-center py-3 text-green-400">✅</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Windows TTS</td>
                      <td className="text-center py-3">
                        <span className="text-orange-400">⭐⭐⭐</span>
                      </td>
                      <td className="text-center py-3 text-red-400">❌</td>
                      <td className="text-center py-3 text-yellow-400">⚠️</td>
                      <td className="text-center py-3 text-green-400">✅</td>
                    </tr>
                    <tr>
                      <td className="py-3">Amazon Polly</td>
                      <td className="text-center py-3">
                        <span className="text-red-400">⭐⭐</span>
                      </td>
                      <td className="text-center py-3 text-red-400">❌</td>
                      <td className="text-center py-3 text-red-400">❌</td>
                      <td className="text-center py-3 text-red-400">❌</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Praktične primene srpskog TTS-a</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">🎓 Obrazovanje:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Kreiranje audio lekcija na srpskom</li>
                  <li>• Podrška studentima sa poteškoćama</li>
                  <li>• Izgovor stručnih termina</li>
                  <li>• Interaktivni edukacijski sadržaj</li>
                  <li>• Online kursevi i webinari</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">💼 Biznis:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Automatski IVR sistemi</li>
                  <li>• Čitanje email-ova na srpskom</li>
                  <li>• Prezentacije sa naratorom</li>
                  <li>• Marketing audio sadržaj</li>
                  <li>• Korporativni treninzi</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">💡 Pro Tip</h3>
              <p className="text-yellow-700 text-sm">
                Za najbolje rezultate sa <strong>srpskim TTS</strong>, koristite kratke rečenice,
                izbegavajte neobične skraćenice, i postavite interpunkciju pravilno.
                Ovo pomaže AI-u da generiše prirodniji izgovor sa boljim pauzama.
              </p>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Naš srpski TTS - Tehničke specifikacije</h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">48kHz</div>
                  <p className="text-sm text-muted-foreground">Kvalitet audio</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">2s</div>
                  <p className="text-sm text-muted-foreground">Vreme generisanja</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">10K</div>
                  <p className="text-sm text-muted-foreground">Karaktera po zahtevu</p>
                </div>
              </div>
              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <div>✅ Podržava sve Unicode karaktere srpskog jezika</div>
                <div>✅ Neural network obučen na 500+ sati srpskog govora</div>
                <div>✅ Automatska optimizacija za različite uređaje</div>
                <div>✅ Export u MP3, WAV, i OGG formatima</div>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Probajte naš srpski TTS već danas</h2>
          <p className="text-muted-foreground mb-6">
            Генеришите природан српски говор за било који текст у секундама
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tekst-u-govor">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                🎤 Tekst u govor
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Prevodilac + TTS
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogTekstUGovorSrpski;