import { Link } from "react-router-dom";
import { Clock, Book, TrendingUp, Globe2, Users, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogOnlinePrevodneTrend2024 = () => {
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
              Online prevodni trendovi 2024: Digitalna transformacija jezika u eri globalizacije
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>10 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Digital Trends</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="h-4 w-4" />
                <span>Market Analysis</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Tržište <strong>online prevođenja</strong> doživljava eksponencijalni rast sa
              projekcijama od 56 milijardi dolara do 2028. Naš <strong>besplatni online prevodilac</strong>
              prati sve najnovije trendove i inovacije u digitalnom prevođenju.
            </p>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-green-600" />
                Zašто су онлајн преводи све популарнији?
              </h2>
              <p className="text-muted-foreground">
                За последње 3 године, коришћење онлајн преводилаца се повећало за чак 340%.
                Брзина, доступност 24/7 и AI тачност чине их незаменљивим алатом у дигиталном свету.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Кључни трендови у онлајн превођењу за 2024.</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Smartphone className="h-5 w-5" />
                  1. Mobile-First приступ
                </h3>
                <p className="text-muted-foreground mb-4">
                  Преко 78% корисника приступа онлајн преводилацима преко мобилних уређаја.
                  Модеран преводилац мора бити потпуно оптимизован за телефоне и таблете.
                </p>
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">78%</div>
                      <div className="text-sm text-blue-700">Mobile трафик</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">3.2s</div>
                      <div className="text-sm text-blue-700">Просечна брзина</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full -mr-8 -mt-8"></div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Globe2 className="h-5 w-5" />
                  2. Вишејезичка интеграција
                </h3>
                <p className="text-muted-foreground mb-4">
                  Корисници очекују подршку за све светске језике укључујући регионалне дијалекте.
                  Наш преводилац подржава преко 100+ језичких парова.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <div className="text-lg font-bold text-green-600">100+</div>
                    <div className="text-sm text-green-700">Језика</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <div className="text-lg font-bold text-green-600">50+</div>
                    <div className="text-sm text-green-700">Дијалеката</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded border border-green-200">
                    <div className="text-lg font-bold text-green-600">24/7</div>
                    <div className="text-sm text-green-700">Доступност</div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  3. Collaborative Translation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Тимски рад на преводима постаје стандард. Компаније траже платформе које
                  омогућавају више корисника да истовремено раде на великим документима.
                </p>
                <div className="bg-purple-50 p-4 rounded border border-purple-200">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-purple-700">Real-time collaboration</span>
                      <span className="text-purple-600 font-medium">85% тражења</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Version control</span>
                      <span className="text-purple-600 font-medium">72% тражења</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-700">Comment система</span>
                      <span className="text-purple-600 font-medium">68% тражења</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">4. Voice & Video интеграција</h3>
                <p className="text-muted-foreground mb-4">
                  Аудио и видео превођење постају неизоставни део онлајн преводилаца.
                  Корисници очекују могућност учитавања аудио фајлова и добијања преведеног текста.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-4 rounded border border-orange-200">
                    <div className="font-medium text-orange-800 mb-2">🎤 Audio Features</div>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Speech-to-text превод</li>
                      <li>• Real-time voice translation</li>
                      <li>• Мulti-speaker recognition</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded border border-orange-200">
                    <div className="font-medium text-orange-800 mb-2">🎥 Video Features</div>
                    <ul className="text-sm text-orange-700 space-y-1">
                      <li>• Subtitle генерисање</li>
                      <li>• Video dubbing</li>
                      <li>• Automatic timestamps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Статистике онлајн превод тржишта</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">$56B</div>
                  <p className="text-sm text-gray-300">Вредност тржишта до 2028.</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">340%</div>
                  <p className="text-sm text-gray-300">Раст у последње 3 године</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">2.5M</div>
                  <p className="text-sm text-gray-300">Дневни корисници</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">150</div>
                  <p className="text-sm text-gray-300">Милиона превода месечно</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Будућност онлајн превођења</h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg border border-indigo-200">
                <div className="text-2xl">🚀</div>
                <div>
                  <h3 className="font-semibold text-indigo-800 mb-1">Quantum Translation</h3>
                  <p className="text-indigo-700 text-sm">
                    Квантни рачунари ће омогућити тренутни превод целих књига са тачношћу од 99.9%
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                <div className="text-2xl">🧠</div>
                <div>
                  <h3 className="font-semibold text-emerald-800 mb-1">Neuro-Linguistic Processing</h3>
                  <p className="text-emerald-700 text-sm">
                    AI који разуме емоције и нијансе говора ће пружити превод који чува осећај оригинала
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-200">
                <div className="text-2xl">🌍</div>
                <div>
                  <h3 className="font-semibold text-violet-800 mb-1">Universal Communication</h3>
                  <p className="text-violet-700 text-sm">
                    Јединствена платформа за комуникацију која аутоматски превози све језике у реал тајму
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg border border-rose-200">
                <div className="text-2xl">👁️</div>
                <div>
                  <h3 className="font-semibold text-rose-800 mb-1">AR/VR Translation</h3>
                  <p className="text-rose-700 text-sm">
                    Проширена стварност ће омогућити превод текста у реал тајму преко паметних наочара
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Зашто одабрати наш онлајн преводилац?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Технолошке предности:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ Најновији AI алгоритми</li>
                    <li>✅ Mobile-first дизајн</li>
                    <li>✅ Real-time превођење</li>
                    <li>✅ Voice интеграција</li>
                    <li>✅ Privacy focused</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Корисничко искуство:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>✅ Интуитиван интерфејс</li>
                    <li>✅ Брза брзина одговора</li>
                    <li>✅ Подршка за 100+ језика</li>
                    <li>✅ Бесплатна основна верзија</li>
                    <li>✅ 24/7 доступност</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Искусите тренд онлајн превођења данас</h2>
          <p className="text-muted-foreground mb-6">
            Придружите се милионима корисника који користе најнапреднији онлајн преводилац
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                Започни превод
              </Button>
            </Link>
            <Link to="/tekst-u-govor">
              <Button variant="outline" size="lg">
                Текст у говор
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogOnlinePrevodneTrend2024;