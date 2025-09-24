import { Link } from "react-router-dom";
import { Clock, Book, Star, Brain, Target, Users, BookOpen, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogSrpskiJezikUcenje = () => {
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
              Srpski jezik učenje: Kompletni vodič za savladavanje srpskog jezika 2025
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>15 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Učenje jezika</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                <span>Stručni vodič</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              **Srpski jezik učenje** postaje sve popularnije širom sveta. Bilo da učite iz poslovnih razloga,
              zbog putovanja ili kulturnih interesovanja, ovaj vodič će vam pomoći da efikasno
              savladate jedan od najlepših slovenskih jezika.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-6 border border-red-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="h-6 w-6 text-red-500" />
                Zašto učiti srpski jezik?
              </h2>
              <p className="text-muted-foreground">
                **Srpski jezik** govori preko **12 milijuna ljudi** u Srbiji, Bosni i Hercegovini,
                Crnoj Gori i Hrvatskim zajednicama širom sveta. To je ključ za razumevanje
                bogate kulture, povijesti i poslovnih mogućnosti na Balkanu.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Osnove srpskog jezika</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  1. Pisma i izgovor
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Srpski jezik** koristi dva pisma: **ćirilicu** i **latinicu**. Ova jedinstvena
                  karakteristika čini ga posebnim među svetskim jezicima.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <div className="font-medium text-purple-800 mb-2">🇷🇸 Ćirilica (zvanična)</div>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• 30 slova</li>
                      <li>• Fonetsko pismo</li>
                      <li>• Jedno slovo = jedan glas</li>
                      <li>• Lakše za izgovor</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <div className="font-medium text-purple-800 mb-2">🌐 Latinica (popularna)</div>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• 30 slova</li>
                      <li>• Poznatija strancima</li>
                      <li>• Digitalno pristupačna</li>
                      <li>• Internet komunikacija</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  2. Gramatička struktura
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Srpska gramatika** ima složenu strukturu sa padeži, ali logična pravila
                  čine ju predvidljivom za učenje.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl mb-2">7</div>
                    <div className="font-medium">Padeži</div>
                    <div className="text-sm text-muted-foreground">Nominativ do Instrumental</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl mb-2">3</div>
                    <div className="font-medium">Roda</div>
                    <div className="text-sm text-muted-foreground">Muški, ženski, srednji</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded border border-green-200">
                    <div className="text-2xl mb-2">2</div>
                    <div className="font-medium">Broja</div>
                    <div className="text-sm text-muted-foreground">Jednina i množina</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Headphones className="h-5 w-5" />
                  3. Izgovor i akcenat
                </h3>
                <p className="text-muted-foreground mb-4">
                  **Srpski izgovor** je relativno jednostavan jer je jezik fonetski -
                  čita se kako se piše!
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                    <span className="text-blue-600 text-xl">🎵</span>
                    <div>
                      <div className="font-medium text-blue-800">Tonski akcenat</div>
                      <div className="text-sm text-blue-700">4 vrste akcenta menjaju značenje reči</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                    <span className="text-blue-600 text-xl">📝</span>
                    <div>
                      <div className="font-medium text-blue-800">Fonetsko pismo</div>
                      <div className="text-sm text-blue-700">Kako se piše, tako se čita</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-blue-50 rounded border border-blue-200">
                    <span className="text-blue-600 text-xl">🗣️</span>
                    <div>
                      <div className="font-medium text-blue-800">Dijalekti</div>
                      <div className="text-sm text-blue-700">Štokavski, čakavski, kajkavski</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Strategije za učenje srpskog jezika</h2>

            <div className="bg-gray-900 text-white rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4 text-center">Plan učenja po nivoima</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3">Nivo</th>
                      <th className="text-center py-3">Vreme</th>
                      <th className="text-center py-3">Fokus</th>
                      <th className="text-center py-3">Ciljevi</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium text-green-400">A1 - Početnik</td>
                      <td className="text-center py-3">2-3 meseca</td>
                      <td className="text-center py-3">Osnove, izgovor</td>
                      <td className="text-center py-3">500 reči, osnovne fraze</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium text-blue-400">A2 - Elementaran</td>
                      <td className="text-center py-3">3-4 meseca</td>
                      <td className="text-center py-3">Gramatika, padeži</td>
                      <td className="text-center py-3">1000 reči, prosti razgovori</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium text-yellow-400">B1 - Srednji</td>
                      <td className="text-center py-3">4-6 meseci</td>
                      <td className="text-center py-3">Složene rečenice</td>
                      <td className="text-center py-3">2000 reči, tekst razumevanje</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="py-3 font-medium text-orange-400">B2 - Viši srednji</td>
                      <td className="text-center py-3">6-8 meseci</td>
                      <td className="text-center py-3">Stručni tekstovi</td>
                      <td className="text-center py-3">4000 reči, abstrakte teme</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-red-400">C1/C2 - Napredni</td>
                      <td className="text-center py-3">8-12 meseci</td>
                      <td className="text-center py-3">Književnost, kultura</td>
                      <td className="text-center py-3">8000+ reči, tečno govor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Najbolji resursi za učenje</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">📱 Digitalni alati:</h3>
                <div className="space-y-3">
                  <div className="bg-card p-4 rounded-lg border border-card-border">
                    <div className="font-medium mb-2 text-primary">Naš AI prevodilac</div>
                    <div className="text-sm text-muted-foreground mb-2">Idealan za brzo prevođenje i učenje novih reči</div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Instant prevod sa/na srpski</li>
                      <li>• Text-to-Speech funkcija</li>
                      <li>• Razumevanje konteksta</li>
                    </ul>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-card-border">
                    <div className="font-medium mb-2 text-primary">Duolingo srpski</div>
                    <div className="text-sm text-muted-foreground mb-2">Interaktivne lekcije sa gamifikacijom</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-card-border">
                    <div className="font-medium mb-2 text-primary">Babbel srpski</div>
                    <div className="text-sm text-muted-foreground mb-2">Strukturisan kurs sa razgovorna situacija</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-blue-600">📚 Tradicionalni resursi:</h3>
                <div className="space-y-3">
                  <div className="bg-card p-4 rounded-lg border border-card-border">
                    <div className="font-medium mb-2 text-primary">Udžbenici</div>
                    <div className="text-sm text-muted-foreground">"Serbian: An Essential Grammar" - Lila Hammond</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-card-border">
                    <div className="font-medium mb-2 text-primary">Online kursevi</div>
                    <div className="text-sm text-muted-foreground">Univerzitet u Beogradu - srpski za strance</div>
                  </div>
                  <div className="bg-card p-4 rounded-lg border border-card-border">
                    <div className="font-medium mb-2 text-primary">Privatni časovi</div>
                    <div className="text-sm text-muted-foreground">1-na-1 lekcije sa izvornim govornicima</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Praktični saveti za brže učenje</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  1. Imerzivne metode
                </h3>
                <p className="text-muted-foreground mb-4">
                  Uronite se u srpsku kulturu kroz medije, muziku i razgovor sa izvornim govornicima.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <div className="text-lg mb-1">🎵</div>
                    <div className="text-sm text-orange-700">Srpska muzika</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <div className="text-lg mb-1">📺</div>
                    <div className="text-sm text-orange-700">Filmovi/serije</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <div className="text-lg mb-1">📻</div>
                    <div className="text-sm text-orange-700">Radio stanice</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded border border-orange-200">
                    <div className="text-lg mb-1">👥</div>
                    <div className="text-sm text-orange-700">Jezička razmena</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">2. Dnevna rutina učenja</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl mb-2">🌅</div>
                    <div className="font-medium">Jutro (15 min)</div>
                    <div className="text-sm text-muted-foreground">Nove reči, ponavljanje</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl mb-2">☀️</div>
                    <div className="font-medium">Dan (20 min)</div>
                    <div className="text-sm text-muted-foreground">Gramatika, vežbe</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl mb-2">🌙</div>
                    <div className="font-medium">Veče (10 min)</div>
                    <div className="text-sm text-muted-foreground">Slušanje, čitanje</div>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Česte greške stranih učenika</h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-red-600">❌ Česte greške:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Pogrešno korišćenje padeža</li>
                  <li>• Mešanje muških/ženskih rodova</li>
                  <li>• Zanemarivanje akcenta</li>
                  <li>• Previse fokusa na gramatiku</li>
                  <li>• Učenje samo jednog pisma</li>
                  <li>• Ignorisanje dijalekata</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-green-600">✅ Kako ih izbegnuti:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Učiti padeže kroz primere</li>
                  <li>• Uvek učiti rod uz reč</li>
                  <li>• Slušati izvorni govornik</li>
                  <li>• 70% razgovor, 30% gramatika</li>
                  <li>• Naučiti oba pisma paralelno</li>
                  <li>• Eksponirati se različitim akcentima</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200 mb-8">
              <h2 className="text-2xl font-bold mb-4">Kako naš AI prevodilac pomaže u učenju</h2>
              <p className="text-muted-foreground mb-4">
                **Naš srpski prevodilac** nije samo alat za prevođenje - to je vaš lični
                asistent za učenje srpskog jezika 24/7.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-blue-600">🎯 Za početnici:</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Instant prevod novih reči</li>
                    <li>• Text-to-Speech za izgovor</li>
                    <li>• Razumevanje konteksta</li>
                    <li>• Oba pisma podržana</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-green-600">📈 Za napredne:</h3>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Složene rečenice</li>
                    <li>• Idiomatski izrazi</li>
                    <li>• Kulturni kontekst</li>
                    <li>• Stručna terminologija</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Testiranje vašeg napredovanja</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-card p-4 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2 text-primary">📝 Online testovi</h3>
                <p className="text-muted-foreground text-sm">
                  Koristite besplatne online testove za procenu vašeg nivoa srpskog jezika.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2 text-primary">🎓 Zvanični sertifikati</h3>
                <p className="text-muted-foreground text-sm">
                  Sertifikat o znanju srpskog jezika izdaje Univerzitet u Beogradu.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-card-border">
                <h3 className="font-semibold mb-2 text-primary">🗣️ Praktični testovi</h3>
                <p className="text-muted-foreground text-sm">
                  Razgovarajte sa izvornim govornicima za realne situacije.
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Zaključak</h2>
              <p className="text-muted-foreground mb-4">
                **Srpski jezik učenje** zahteva strpljenje, ali sa pravim pristupom i alatima,
                možete postići tečnost za 12-18 meseci redovnog učenja. Ključ je u konstantnoj
                praksi i korišćenja različitih resursa.
              </p>
              <p className="text-muted-foreground">
                Naš AI prevodilac je savršen kompanjon na vašem jezičkom putovanju -
                dostupan 24/7 za sve vaše potrebe prevođenja i učenja.
              </p>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Počnite vaše srpski jezik učenje danas</h2>
          <p className="text-muted-foreground mb-6">
            Koristite naš napredni AI prevodilac kao pomoć u učenju srpskog jezika
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Besplatni prevodilac
              </Button>
            </Link>
            <Link to="/tekst-u-govor">
              <Button variant="outline" size="lg">
                Probajte izgovor
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogSrpskiJezikUcenje;