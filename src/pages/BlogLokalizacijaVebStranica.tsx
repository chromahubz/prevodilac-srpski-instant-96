import { Link } from "react-router-dom";
import { Clock, Book, Globe, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/ui/site-header";
import Footer from "@/components/Footer";

const BlogLokalizacijaVebStranica = () => {
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
              Lokalizacija veb stranica: Kako prilagoditi sajt srpskom tržištu za maksimalne rezultate
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>11 min čitanja</span>
              </div>
              <div className="flex items-center gap-1">
                <Book className="h-4 w-4" />
                <span>Web lokalizacija</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe className="h-4 w-4" />
                <span>Međunarodni marketing</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              <strong>Lokalizacija veb stranica</strong> nije samo prevod - to je potpuna kulturološka
              i jezička adaptacija koja može povećati konverziju za čak 200%. Naš
              <strong>profesionalni prevodilac</strong> pomaže kompanijama da uspešno lokalizuju
              svoje web stranice za srpsko tržište.
            </p>

            <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg p-6 border border-emerald-200 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="h-6 w-6 text-emerald-600" />
                Zašto lokalizacija veb stranica postaje obavezna?
              </h2>
              <p className="text-muted-foreground">
                72% kupaca provede više vremena na web stranicama na svom maternjem jeziku,
                а 55% онлајн купovina прави само на сајтовима на матерњем језику.
                Локализација није луксуз - то је неопходност за успех на глобалном тржишту.
              </p>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Ključni aspekti lokalizacije za srpsko tržište</h2>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full -mr-10 -mt-10"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  1. Jezička локализација
                </h3>
                <p className="text-muted-foreground mb-4">
                  Српски језик има специфичности које захтевају пажљиву локализацију
                  далеко изнад обичног превода.
                </p>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">🔤 Двојност писма</div>
                    <p className="text-blue-700 text-sm mb-2">
                      Српски се пише и ћирилицом и латиницом. Веб сајт треба да подржи оба писма
                      или да има опцију за избор.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="bg-white p-2 rounded border border-blue-300">
                        <strong>Ćirilica:</strong> Добродошли
                      </div>
                      <div className="bg-white p-2 rounded border border-blue-300">
                        <strong>Latinica:</strong> Dobrodošli
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">📍 Регионални дијалекти</div>
                    <p className="text-blue-700 text-sm">
                      Српски варира између региона (екавица/ијекавица).
                      Стандардни српски (екавица) се препоручује за веб сајтове.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">🔢 Формати и јединице</div>
                    <div className="text-blue-700 text-sm space-y-1">
                      <div>• Датуми: дд.мм.гггг (31.12.2024)</div>
                      <div>• Време: 24-часовни формат (15:30)</div>
                      <div>• Валута: РСД (din, динар)</div>
                      <div>• Мере: метрички систем</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-green-600 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  2. Културолошка адаптација
                </h3>
                <p className="text-muted-foreground mb-4">
                  Успешна локализација мора да узме у обзир српске културолошке вредности,
                  понашање корисника и локалне преференце.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-2">🎨 Дизајн и боје</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Црвена, плава, бела (националне боје)</li>
                      <li>• Избегавати албанске симболе</li>
                      <li>• Православне иконе за религијски садржај</li>
                      <li>• Традиционални мотиви за култура/туризам</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <div className="font-medium text-green-800 mb-2">📸 Слике и садржај</div>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Локални модели и лица</li>
                      <li>• Препознатљиви српски локалитети</li>
                      <li>• Избегавати стереотипе</li>
                      <li>• Аутентичан приказ живота у Србији</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">3. Технички аспекти</h3>
                <p className="text-muted-foreground mb-4">
                  Технички део локализације укључује правилну имплементацију српског језика
                  на свим нивоима веб сајта.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-4 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <div className="font-medium text-purple-800">UTF-8 кодирање</div>
                      <div className="text-sm text-purple-700">
                        Обавезно за правилан приказ ћириличних карактера
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <div className="font-medium text-purple-800">Hreflang тагови</div>
                      <div className="text-sm text-purple-700">
                        hreflang="sr-RS" за српски у Србији, "sr-BA" за БиХ
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 p-3 bg-purple-50 rounded border border-purple-200">
                    <span className="text-2xl">📱</span>
                    <div>
                      <div className="font-medium text-purple-800">Респонзивни дизајн</div>
                      <div className="text-sm text-purple-700">
                        Прилагодити за све уређаје, посебно мобилне (85% српских корисника)
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-lg p-6 border border-card-border">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">4. SEO локализација</h3>
                <p className="text-muted-foreground mb-4">
                  Локализација за претраживаче је кључна за видљивост на српском тржишту.
                  Google.rs и локални претраживачи имају специфичне захтеве.
                </p>
                <div className="bg-orange-50 p-4 rounded border border-orange-200">
                  <div className="font-medium text-orange-800 mb-3">Кључне речи на српском:</div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-orange-700 mb-2">Позиционирање:</div>
                      <ul className="space-y-1 text-orange-600">
                        <li>• "купити у Србији"</li>
                        <li>• "најбољи [производ] Београд"</li>
                        <li>• "бесплатна достава Србија"</li>
                        <li>• "плаћање динарима"</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-orange-700 mb-2">Long-tail кључне речи:</div>
                      <ul className="space-y-1 text-orange-600">
                        <li>• "како купити [производ] у Србији"</li>
                        <li>• "где наћи [услугу] у Београду"</li>
                        <li>• "поређење [производа] Србија"</li>
                        <li>• "рецензије [бренда] српски"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-6 text-center">ROI локализације за српско тржиште</h2>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">200%</div>
                  <p className="text-sm text-gray-300">Повећање конверзије</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">150%</div>
                  <p className="text-sm text-gray-300">Више времена на сајту</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">300%</div>
                  <p className="text-sm text-gray-300">Боље органски ранкинг</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
                  <p className="text-sm text-gray-300">Смањење bounce rate-a</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-6">Корак по корак процес локализације</h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-blue-800 mb-1">Анализа циљне публике</h3>
                  <p className="text-blue-700 text-sm">
                    Истражити српско тржиште, demographics, понашање корисника и локалну конкуренцију.
                    Дефинисати buyer персоне за српски market.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-emerald-800 mb-1">Садржајна стратегија</h3>
                  <p className="text-emerald-700 text-sm">
                    Планирати која садржаја треба локализовати, adaptirati или потпуно заменити.
                    Укључити локалне case studies, testimonials и референце.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-purple-50 to-violet-50 rounded-lg border border-purple-200">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-purple-800 mb-1">Професионални превод</h3>
                  <p className="text-purple-700 text-sm">
                    Ангажовати native српске преводиоце са искуством у вашој индустрији.
                    Наш <strong>преводилац</strong> може помоћи у провери квалитета.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
                <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-orange-800 mb-1">Техничка имплементација</h3>
                  <p className="text-orange-700 text-sm">
                    Implementirati србско кодирање, формате, валуте и локалне интеграције
                    (плаћање, достава, правни оквир).
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-200">
                <div className="flex-shrink-0 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                <div>
                  <h3 className="font-semibold text-teal-800 mb-1">Тестирање и оптимизација</h3>
                  <p className="text-teal-700 text-sm">
                    Тестирати на српским корисницима, сакупити feedback и континуирано
                    оптимизовати на основу локалних инсајта.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 my-8">
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Честе грешке које треба избегавати</h3>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Директан превод без културолошке адаптације</li>
                <li>• Занемаривање ћириличне варијанте</li>
                <li>• Непоштовање локалних правних прописа</li>
                <li>• Коришћење страних референци без објашњења</li>
                <li>• Занемаривање локалних плаћања (банковне kartice, IPS)</li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-bold mb-4">Наши услуге локализације</h2>
              <p className="text-muted-foreground mb-4">
                Пратите нас кроз комплетан процес локализације вашег веб сајта за српско тржиште:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <ul className="space-y-1 text-muted-foreground">
                  <li>✅ Професионални превод садржаја</li>
                  <li>✅ Културолошка консултација</li>
                  <li>✅ SEO оптимизација на српском</li>
                  <li>✅ Техничка подршка за кодирање</li>
                </ul>
                <ul className="space-y-1 text-muted-foreground">
                  <li>✅ UI/UX адаптација</li>
                  <li>✅ Тестирање са локалним корисницима</li>
                  <li>✅ Континуирана подршка</li>
                  <li>✅ Performance мониторинг</li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 border border-card-border">
          <h2 className="text-2xl font-bold mb-4">Започните локализацију вашег сајта данас</h2>
          <p className="text-muted-foreground mb-6">
            Претворите ваш веб сајт у моћан алат за освајање српског тржишта
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="bg-primary hover:bg-primary-hover">
                🌐 Започни превод
              </Button>
            </Link>
            <Link to="/o-nama">
              <Button variant="outline" size="lg">
                Сазнај више о услугама
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogLokalizacijaVebStranica;