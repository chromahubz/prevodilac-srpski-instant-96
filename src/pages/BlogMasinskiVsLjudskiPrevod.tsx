import { Link } from "react-router-dom";
import { Clock, Book, Star, Shield, Zap, Users, Brain, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogMasinskiVsLjudskiPrevod = () => {
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
              Mašinski vs ljudski prevod: Kompletan vodič za 2025. godinu
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>12 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Poređenje</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Ekspertska analiza</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              U eri digitalnih transformacija, **mašinski prevod** se razvio iz osnovnog alata
              u sofisticiranu AI tehnologiju. Ali da li može potpuno da zameni **ljudski prevod**?
              Analiziramo prednosti i ograničenja oba pristupa.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="h-6 w-6 text-blue-500" />
                Evolucija mašinskog prevoda
              </h2>
              <p className="text-muted-foreground">
                Od jednostavnih algoritma iz 1950-ih do najnaprednijih neural network sistema,
                mašinski prevod je prešao neverojan put. Danas Google Translate obrađuje preko
                **150 milijardi reči dnevno** na više od 100 jezika.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Mašinski prevod: Prednosti i karakteristike</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  1. Brzina i dostupnost
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Mašinski prevod** omogućava trenutno prevođenje velikih količina teksta
                  24 sata dnevno, 7 dana u nedelji, bez čekanja.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center bg-green-50 p-4 rounded border border-green-200">
                  <div>
                    <div className="text-lg font-bold text-green-600">&lt; 1s</div>
                    <div className="text-xs text-green-700">Vreme obrade</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">24/7</div>
                    <div className="text-xs text-green-700">Dostupnost</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">∞</div>
                    <div className="text-xs text-green-700">Kapacitet</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  2. Cena i skalabilnost
                </h3>
                <p className="text-muted-foreground mb-4">
                  Troškovi **mašinskog prevoda** su značajno niži od ljudskog prevoda,
                  posebno za velike količine sadržaja.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">💰 Troškovi</div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Besplatan osnovni plan</li>
                      <li>• $0.02 po reči (premium)</li>
                      <li>• Bez minimalnih količina</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">📈 Skalabilnost</div>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Neograničene količine</li>
                      <li>• Simultano više jezika</li>
                      <li>• Automatska obrada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Ljudski prevod: Ekspertiza i preciznost</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  1. Kulturno razumevanje
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Ljudski prevodilac** poseduje duboko poznavanje kulture, konteksta i nijansi
                  jezika koje mašina trenutno ne može da reprodukuje.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🎭</div>
                    <div className="text-sm text-purple-700">Kulturni kontekst</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🎨</div>
                    <div className="text-sm text-purple-700">Kreativnost</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">📚</div>
                    <div className="text-sm text-purple-700">Specijalizacija</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded border border-purple-200">
                    <div className="text-lg mb-1">🔍</div>
                    <div className="text-sm text-purple-700">Preciznost</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  2. Specijalizovane oblasti
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Profesionalni prevodilac** je nezamenljiv za specifične oblasti kao što su
                  medicinska dokumentacija, pravni tekstovi ili književnost.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-600">⚖️</span>
                    <div>
                      <div className="font-medium text-orange-800">Pravni prevodi</div>
                      <div className="text-sm text-orange-700">100% tačnost obavezna</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-600">🏥</span>
                    <div>
                      <div className="font-medium text-orange-800">Medicinski tekstovi</div>
                      <div className="text-sm text-orange-700">Stručna terminologija</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border border-orange-200">
                    <span className="text-orange-600">📖</span>
                    <div>
                      <div className="font-medium text-orange-800">Književnost</div>
                      <div className="text-sm text-orange-700">Stil i poetika</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Direktno poređenje: Mašinski vs Ljudski</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3">Karakteristike</th>
                      <th className="text-center py-3">Mašinski prevod</th>
                      <th className="text-center py-3">Ljudski prevod</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Brzina</td>
                      <td className="text-center py-3 text-green-400">⚡ Trenutno</td>
                      <td className="text-center py-3 text-yellow-400">⏳ Sati/dani</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Cena</td>
                      <td className="text-center py-3 text-green-400">💰 Vrlo niska</td>
                      <td className="text-center py-3 text-red-400">💸 Visoka</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Tačnost (opšti tekst)</td>
                      <td className="text-center py-3 text-yellow-400">⚠️ 85-95%</td>
                      <td className="text-center py-3 text-green-400">✅ 98-100%</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Kulturni kontekst</td>
                      <td className="text-center py-3 text-red-400">❌ Ograničeno</td>
                      <td className="text-center py-3 text-green-400">🎯 Odlično</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3">Specijalizacija</td>
                      <td className="text-center py-3 text-yellow-400">⚠️ Osnovno</td>
                      <td className="text-center py-3 text-green-400">🎓 Ekspertsko</td>
                    </tr>
                    <tr>
                      <td className="py-3">Kreativnost</td>
                      <td className="text-center py-3 text-red-400">❌ Ne</td>
                      <td className="text-center py-3 text-green-400">🎨 Da</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Kada koristiti koji pristup?</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">🤖 Mašinski prevod idealan za:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Brze komunikacije i e-mailove</li>
                  <li>• Prevod veb stranica za razumevanje</li>
                  <li>• Velike količine informativnog sadržaja</li>
                  <li>• Početne verzije prevoda</li>
                  <li>• Interno komuniciranje u firmi</li>
                  <li>• Turistička komunikacija</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-purple-600">👨‍💼 Ljudski prevod obavezan za:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pravne dokumente i ugovore</li>
                  <li>• Medicinsku dokumentaciju</li>
                  <li>• Marketing materijale</li>
                  <li>• Književne tekstove</li>
                  <li>• Oficijalne dokumente</li>
                  <li>• Tehnička uputstva (kritična)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mb-8">
              <h2 className="text-2xl font-bold mb-4">Hibridni pristup: Budućnost prevođenja</h2>
              <p className="text-muted-foreground mb-4">
                Najnaprednije organizacije kombinuju **mašinski prevod** za brzinu
                sa **ljudskim pregledom** za preciznost. Ovaj pristup može da poveća
                produktivnost za 40% uz zadržavanje visoke tačnosti.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white p-3 rounded border">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-medium">Mašinski prevod</div>
                  <div className="text-sm text-muted-foreground">Prva verzija</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-2xl mb-2">👤</div>
                  <div className="font-medium">Ljudski pregled</div>
                  <div className="text-sm text-muted-foreground">Korekcija i poliranje</div>
                </div>
                <div className="bg-white p-3 rounded border">
                  <div className="text-2xl mb-2">✅</div>
                  <div className="font-medium">Finalna verzija</div>
                  <div className="text-sm text-muted-foreground">Brzina + kvalitet</div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Trendovi za 2025. godinu</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-card p-4 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2 text-primary">🚀 AI napredak</h3>
                <p className="text-muted-foreground text-sm">
                  GPT-4 i slični modeli dramatično poboljšavaju mašinski prevod,
                  posebno za kreativne i kontekstualne tekstove.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2 text-primary">🔄 Real-time prevod</h3>
                <p className="text-muted-foreground text-sm">
                  Simultani prevod video poziva i live eventi postaju standardni.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2 text-primary">🎯 Specijalizacija</h3>
                <p className="text-muted-foreground text-sm">
                  AI sistemi postaju sve bolji u specifičnim oblastima kao što je medicina i pravo.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Naša preporuka</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">🎯 Za većinu korisnika:</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Koristite mašinski prevod za brzu komunikaciju</li>
                    <li>• Naš srpski prevodilac ima 94% tačnost</li>
                    <li>• Besplatan i dostupan 24/7</li>
                    <li>• Idealan za svakodnevnu upotrebu</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-primary">⚖️ Za kritične dokumente:</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Uvek konsultujte profesionalnog prevodioca</li>
                    <li>• Uložite u kvalitet kada je važno</li>
                    <li>• Kombinujte oba pristupa za najbolje rezultate</li>
                    <li>• Proverite sertifikaciju prevodioca</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Počnite sa našim naprednim prevodiocem</h2>
          <p className="text-muted-foreground mb-6">
            Iskusite najnovije AI tehnologije u mašinskom prevođenju optimizovane za srpski jezik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Besplatni AI prevodilac
              </Button>
            </Link>
            <Link to="/premium">
              <Button variant="outline" size="lg">
                Premium funkcije
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogMasinskiVsLjudskiPrevod;