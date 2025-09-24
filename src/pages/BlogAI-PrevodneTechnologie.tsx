import { Link } from "react-router-dom";
import { Clock, Book, Brain, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogAIPrevodneTechnologie = () => {
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
              AI prevodne technologie 2024: Kako mašinsko učenje revolucionira tradukciju
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>15 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>AI Tehnologije</span>
              </div>
              <div className="flex items-center gap-1">
                <Brain className="h-4 w-4" />
                <span>Machine Learning</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Veštačka inteligencija transformiše način na koji pristupamo prevodima.
              Naš <strong>AI-powered prevodilac</strong> koristi najnovije neural machine
              translation (NMT) tehnologije za precizne i kontekstualne prevode.
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Brain className="h-6 w-6 text-blue-600" />
                Zašto je AI prevod budućnost?
              </h2>
              <p className="text-muted-foreground">
                AI prevodilaci dostižу ljudsku tačnost od 94% у proseku, dok istovremeno
                nude brzinu od preko 500 reči po sekundi. To је revolution u komunikaciji!
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Napredne AI tehnike u modernom prevođenju</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  1. Transformer Architecture
                </h3>
                <p className="text-muted-foreground mb-3">
                  Revolucionarна архитектура која омогућава разумевање контекста у реченици.
                  Transformer модели као што је BERT и GPT су основа најбољих преводилаца.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                  <li>Self-attention механизми за контекстуално разумевање</li>
                  <li>Паралелна обрада за већу брзину</li>
                  <li>Encoder-decoder архитектура за најбоље резултате</li>
                  <li>Multi-head attention за различите аспекте језика</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  2. Контекстуално учење (In-Context Learning)
                </h3>
                <p className="text-muted-foreground mb-3">
                  AI системи могу да науче нове језичке парове и специјализоване термине
                  без додатног тренинга, само на основу примера у контексту.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-green-50 p-3 rounded border border-green-200">
                    <strong className="text-green-800">Пример улаза:</strong>
                    <p className="text-green-700 text-sm mt-1">
                      "Machine learning је област AI-ја која се бави..."
                    </p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border border-blue-200">
                    <strong className="text-blue-800">AI излаз:</strong>
                    <p className="text-blue-700 text-sm mt-1">
                      "Machine learning is a field of AI that deals with..."
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-xl font-semibold mb-3 text-purple-600">3. Multimodalni prevod</h3>
                <p className="text-muted-foreground mb-3">
                  Најновији AI системи могу да обрађују текст, слике, и аудио симултано
                  за комплетно разумевање контекста превода.
                </p>
                <div className="grid md:grid-cols-3 gap-3 mt-4">
                  <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="text-purple-800 font-medium">Текст</div>
                    <div className="text-purple-600 text-sm">OCR + NLP</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl mb-2">🖼️</div>
                    <div className="text-purple-800 font-medium">Слике</div>
                    <div className="text-purple-600 text-sm">Computer Vision</div>
                  </div>
                  <div className="text-center p-3 bg-purple-50 rounded border border-purple-200">
                    <div className="text-2xl mb-2">🎵</div>
                    <div className="text-purple-800 font-medium">Аудио</div>
                    <div className="text-purple-600 text-sm">Speech Recognition</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">4. Real-time адаптација</h3>
                <p className="text-muted-foreground mb-3">
                  Modern AI prevodilac može da se prilagodi stilу pisanja,
                  industrijskoj terminologiji i културним nüansama tokom korišćenja.
                </p>
                <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400 mt-4">
                  <div className="font-medium text-orange-800 mb-2">Primer personalizacije:</div>
                  <div className="text-orange-700 text-sm space-y-1">
                    <div>• Medical prevodi → Automatski prepoznavanje stručnih termina</div>
                    <div>• Legal dokumenti → Formalni stil i pravna terminologija</div>
                    <div>• Marketing → Kreativni i persuasivni ton</div>
                    <div>• Technical → Preciznost i jasnoća instrukcija</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4 text-center">Statistike AI prevoda u 2024.</h2>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">94%</div>
                  <p className="text-sm text-gray-300">Tačnost AI prevoda</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                  <p className="text-sm text-gray-300">Reči po sekundi</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
                  <p className="text-sm text-gray-300">Podržanih jezika</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                  <p className="text-sm text-gray-300">Dostupnost</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Buduće inovacije u AI prevođenju</h2>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-800 mb-2">🚀 Quantum-Enhanced Translation</h3>
                <p className="text-indigo-700 text-sm">
                  Kvantni računari će omogućiti obradu kompleksnjih jezičkih modela za tačnost blizu 99%
                </p>
              </div>

              <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-4 rounded-lg border border-emerald-200">
                <h3 className="font-semibold text-emerald-800 mb-2">🧠 Neuromorphic Processors</h3>
                <p className="text-emerald-700 text-sm">
                  Čipovi koji опонашавају људски мозак ће драстично смањити потрошњу енергије за AI prevod
                </p>
              </div>

              <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-4 rounded-lg border border-violet-200">
                <h3 className="font-semibold text-violet-800 mb-2">🌐 Universal Language Model</h3>
                <p className="text-violet-700 text-sm">
                  Jedan AI model који ће разумети све светске језике укључујући дијалекте и мртве језике
                </p>
              </div>

              <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-4 rounded-lg border border-rose-200">
                <h3 className="font-semibold text-rose-800 mb-2">🎭 Emotion-Aware Translation</h3>
                <p className="text-rose-700 text-sm">
                  AI који препознаје емоционални тон и прилагођава превод према расположењу текста
                </p>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Naш AI преводилац данас</h2>
              <p className="text-muted-foreground mb-4">
                Iskusite moć најnovијих AI технологија са нашим напредним преводилацем који комбинује:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Neural Machine Translation (NMT)</li>
                  <li>✅ Contextual understanding</li>
                  <li>✅ Real-time optimization</li>
                  <li>✅ Industry-specific adaptations</li>
                </ul>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✅ Multi-language support</li>
                  <li>✅ Voice synthesis integration</li>
                  <li>✅ Continuous learning</li>
                  <li>✅ Privacy-focused processing</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Testirajte našu AI prevodnu tehnologiju</h2>
          <p className="text-muted-foreground mb-6">
            Поживите будућност превођења са нашим AI-powered преводилацем
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                AI Преводилац
              </Button>
            </Link>
            <Link to="/tekst-u-govor">
              <Button variant="outline" size="lg">
                AI Text-to-Speech
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogAIPrevodneTechnologie;