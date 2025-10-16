import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EnglishSerbianTranslator from "./pages/EnglishSerbianTranslator";
import SerbianEnglishTranslator from "./pages/SerbianEnglishTranslator";
import GermanSerbianTranslator from "./pages/GermanSerbianTranslator";
import SerbianGermanTranslator from "./pages/SerbianGermanTranslator";
import FrenchSerbianTranslator from "./pages/FrenchSerbianTranslator";
import SerbianFrenchTranslator from "./pages/SerbianFrenchTranslator";
import ItalianSerbianTranslator from "./pages/ItalianSerbianTranslator";
import SerbianItalianTranslator from "./pages/SerbianItalianTranslator";
import SpanishSerbianTranslator from "./pages/SpanishSerbianTranslator";
import SerbianSpanishTranslator from "./pages/SerbianSpanishTranslator";
import RussianSerbianTranslator from "./pages/RussianSerbianTranslator";
import SerbianRussianTranslator from "./pages/SerbianRussianTranslator";
import SerbianChineseTranslator from "./pages/SerbianChineseTranslator";
import GreekSerbianTranslator from "./pages/GreekSerbianTranslator";
import SerbianGreekTranslator from "./pages/SerbianGreekTranslator";
import HungarianSerbianTranslator from "./pages/HungarianSerbianTranslator";
import SerbianHungarianTranslator from "./pages/SerbianHungarianTranslator";
import RomanianSerbianTranslator from "./pages/RomanianSerbianTranslator";
import SerbianRomanianTranslator from "./pages/SerbianRomanianTranslator";
import BulgarianSerbianTranslator from "./pages/BulgarianSerbianTranslator";
import SerbianBulgarianTranslator from "./pages/SerbianBulgarianTranslator";
import SlovenianSerbianTranslator from "./pages/SlovenianSerbianTranslator";
import SerbianSlovenianTranslator from "./pages/SerbianSlovenianTranslator";
import SwedishSerbianTranslator from "./pages/SwedishSerbianTranslator";
import SerbianSwedishTranslator from "./pages/SerbianSwedishTranslator";
import NorwegianSerbianTranslator from "./pages/NorwegianSerbianTranslator";
import SerbianNorwegianTranslator from "./pages/SerbianNorwegianTranslator";
import DanishSerbianTranslator from "./pages/DanishSerbianTranslator";
import SerbianDanishTranslator from "./pages/SerbianDanishTranslator";
import FinnishSerbianTranslator from "./pages/FinnishSerbianTranslator";
import SerbianFinnishTranslator from "./pages/SerbianFinnishTranslator";
import ChineseSerbianTranslator from "./pages/ChineseSerbianTranslator";
import About from "./pages/About";
import Premium from "./pages/Premium";
import FAQ from "./pages/FAQ";
import TextToSpeech from "./pages/TextToSpeech";
import Contact from "./pages/Contact";
import OnlinePrevodilac from "./pages/OnlinePrevodilac";
import BesplatanPrevodTeksta from "./pages/BesplatanPrevodTeksta";
import Blog10SavetaEngleski from "./pages/Blog10SavetaEngleski";
import Blog from "./pages/Blog";
import BlogNemackiSamostalno from "./pages/BlogNemackiSamostalno";
import BlogGreskeEngleski from "./pages/BlogGreskeEngleski";
import BlogPoslovniDokumenti from "./pages/BlogPoslovniDokumenti";
import BlogFrancuskiPocetnici from "./pages/BlogFrancuskiPocetnici";
import BlogAIvsLjudski from "./pages/BlogAIvsLjudski";
import BlogSlovenackiJezik from "./pages/BlogSlovenackiJezik";
import BlogRuskiNeprevodi from "./pages/BlogRuskiNeprevodi";
import BlogJapanskiSamostalno from "./pages/BlogJapanskiSamostalno";
import BlogSvedskiBrzo from "./pages/BlogSvedskiBrzo";
import BlogMadjarskiSamostalno from "./pages/BlogMadjarskiSamostalno";
import BlogPrevodjenjeUPoslovnom from "./pages/BlogPrevodjenjeUPoslovnom";
import BlogAIPrevodneTechnologie from "./pages/BlogAI-PrevodneTechnologie";
import BlogOnlinePrevodneTrend2024 from "./pages/BlogOnlinePrevodneTrend2024";
import BlogBesplatniPrevodiOnline from "./pages/BlogBesplatniPrevodiOnline";
import BlogTekstUGovorSrpski from "./pages/BlogTekstUGovorSrpski";
import BlogLokalizacijaVebStranica from "./pages/BlogLokalizacijaVebStranica";
import BlogMasinskiVsLjudskiPrevod from "./pages/BlogMasinskiVsLjudskiPrevod";
import BlogProfesionalniPrevodilac from "./pages/BlogProfesionalniPrevodilac";
import BlogOnlinePrevodiociAlati from "./pages/BlogOnlinePrevodiociAlati";
import BlogSrpskiJezikUcenje from "./pages/BlogSrpskiJezikUcenje";
import BlogPrevodilackiPosao from "./pages/BlogPrevodilackiPosao";
import BlogPrevodDokumenata from "./pages/BlogPrevodDokumenata";
import BlogVisejeznaComunikacija from "./pages/BlogVisejeznaComunikacija";
import JapaneseSerbianTranslator from "./pages/JapaneseSerbianTranslator";
import SerbianJapaneseTranslator from "./pages/SerbianJapaneseTranslator";
import KoreanSerbianTranslator from "./pages/KoreanSerbianTranslator";
import SerbianKoreanTranslator from "./pages/SerbianKoreanTranslator";
import TurkishSerbianTranslator from "./pages/TurkishSerbianTranslator";
import SerbianTurkishTranslator from "./pages/SerbianTurkishTranslator";
import ArabicSerbianTranslator from "./pages/ArabicSerbianTranslator";
import SerbianArabicTranslator from "./pages/SerbianArabicTranslator";
import DutchSerbianTranslator from "./pages/DutchSerbianTranslator";
import SerbianDutchTranslator from "./pages/SerbianDutchTranslator";
import CzechSerbianTranslator from "./pages/CzechSerbianTranslator";
import SerbianCzechTranslator from "./pages/SerbianCzechTranslator";
import SlovakSerbianTranslator from "./pages/SlovakSerbianTranslator";
import SerbianSlovakTranslator from "./pages/SerbianSlovakTranslator";
import PolishSerbianTranslator from "./pages/PolishSerbianTranslator";
import SerbianPolishTranslator from "./pages/SerbianPolishTranslator";
import PortugueseSerbianTranslator from "./pages/PortugueseSerbianTranslator";
import SerbianPortugueseTranslator from "./pages/SerbianPortugueseTranslator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Analytics />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/prevodilac-engleski-srpski" element={<EnglishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-engleski" element={<SerbianEnglishTranslator />} />
          <Route path="/prevodilac-nemacki-srpski" element={<GermanSerbianTranslator />} />
          <Route path="/prevodilac-srpski-nemacki" element={<SerbianGermanTranslator />} />
          <Route path="/prevodilac-francuski-srpski" element={<FrenchSerbianTranslator />} />
          <Route path="/prevodilac-srpski-francuski" element={<SerbianFrenchTranslator />} />
          <Route path="/prevodilac-italijanski-srpski" element={<ItalianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-italijanski" element={<SerbianItalianTranslator />} />
          <Route path="/prevodilac-spanski-srpski" element={<SpanishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-spanski" element={<SerbianSpanishTranslator />} />
          <Route path="/prevodilac-ruski-srpski" element={<RussianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-ruski" element={<SerbianRussianTranslator />} />
          <Route path="/prevodilac-grcki-srpski" element={<GreekSerbianTranslator />} />
          <Route path="/prevodilac-srpski-grcki" element={<SerbianGreekTranslator />} />
          <Route path="/prevodilac-madjarski-srpski" element={<HungarianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-madjarski" element={<SerbianHungarianTranslator />} />
          <Route path="/prevodilac-rumunski-srpski" element={<RomanianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-rumunski" element={<SerbianRomanianTranslator />} />
          <Route path="/prevodilac-bugarski-srpski" element={<BulgarianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-bugarski" element={<SerbianBulgarianTranslator />} />
          <Route path="/prevodilac-slovenski-srpski" element={<SlovenianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-slovenski" element={<SerbianSlovenianTranslator />} />
          <Route path="/prevodilac-svedski-srpski" element={<SwedishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-svedski" element={<SerbianSwedishTranslator />} />
          <Route path="/prevodilac-norveski-srpski" element={<NorwegianSerbianTranslator />} />
          <Route path="/prevodilac-srpski-norveski" element={<SerbianNorwegianTranslator />} />
          <Route path="/prevodilac-danski-srpski" element={<DanishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-danski" element={<SerbianDanishTranslator />} />
          <Route path="/prevodilac-finski-srpski" element={<FinnishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-finski" element={<SerbianFinnishTranslator />} />
          <Route path="/prevodilac-kineski-srpski" element={<ChineseSerbianTranslator />} />
          <Route path="/prevodilac-srpski-kineski" element={<SerbianChineseTranslator />} />
          <Route path="/tekst-u-govor" element={<TextToSpeech />} />
          <Route path="/o-nama" element={<About />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/online-prevodilac" element={<OnlinePrevodilac />} />
          <Route path="/besplatan-prevod-teksta" element={<BesplatanPrevodTeksta />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/10-saveta-kako-brzo-nauciti-engleski" element={<Blog10SavetaEngleski />} />
          <Route path="/blog/kako-nauciti-nemacki-samostalno" element={<BlogNemackiSamostalno />} />
          <Route path="/blog/najcesce-greske-u-engleskom-prevodu" element={<BlogGreskeEngleski />} />
          <Route path="/blog/kako-prevesti-poslovne-dokumente" element={<BlogPoslovniDokumenti />} />
          <Route path="/blog/francuski-za-pocetnike" element={<BlogFrancuskiPocetnici />} />
          <Route path="/blog/ai-prevodenje-vs-ljudski-prevodilac" element={<BlogAIvsLjudski />} />
          <Route path="/blog/kako-brzo-nauciti-slovenacki-jezik" element={<BlogSlovenackiJezik />} />
          <Route path="/blog/prevodi-na-ruski-zasto-su-neke-reci-skoro-nemoguce-prevesti" element={<BlogRuskiNeprevodi />} />
          <Route path="/blog/kako-nauciti-japanski-samostalno-vodic-za-pocetnike" element={<BlogJapanskiSamostalno />} />
          <Route path="/blog/10-saveta-kako-nauciti-svedski-brzo-i-efikasno" element={<BlogSvedskiBrzo />} />
          <Route path="/blog/kako-nauciti-madjarski-jezik-samostalno" element={<BlogMadjarskiSamostalno />} />
          <Route path="/blog/prevodenje-u-poslovnom-svetu" element={<BlogPrevodjenjeUPoslovnom />} />
          <Route path="/blog/ai-prevodne-tehnologije-2024" element={<BlogAIPrevodneTechnologie />} />
          <Route path="/blog/online-prevodni-trendovi-2024" element={<BlogOnlinePrevodneTrend2024 />} />
          <Route path="/blog/besplatni-prevodi-online" element={<BlogBesplatniPrevodiOnline />} />
          <Route path="/blog/tekst-u-govor-srpski" element={<BlogTekstUGovorSrpski />} />
          <Route path="/blog/lokalizacija-veb-stranica" element={<BlogLokalizacijaVebStranica />} />
          <Route path="/blog/masinski-vs-ljudski-prevod" element={<BlogMasinskiVsLjudskiPrevod />} />
          <Route path="/blog/profesionalni-prevodilac" element={<BlogProfesionalniPrevodilac />} />
          <Route path="/blog/online-prevodilac-alati" element={<BlogOnlinePrevodiociAlati />} />
          <Route path="/blog/srpski-jezik-ucenje" element={<BlogSrpskiJezikUcenje />} />
          <Route path="/blog/prevodilacki-posao" element={<BlogPrevodilackiPosao />} />
          <Route path="/blog/prevod-dokumenata" element={<BlogPrevodDokumenata />} />
          <Route path="/blog/visejeznicu-komunikacija" element={<BlogVisejeznaComunikacija />} />
          <Route path="/prevodilac-japanski-srpski" element={<JapaneseSerbianTranslator />} />
          <Route path="/prevodilac-srpski-japanski" element={<SerbianJapaneseTranslator />} />
          <Route path="/prevodilac-korejski-srpski" element={<KoreanSerbianTranslator />} />
          <Route path="/prevodilac-srpski-korejski" element={<SerbianKoreanTranslator />} />
          <Route path="/prevodilac-turski-srpski" element={<TurkishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-turski" element={<SerbianTurkishTranslator />} />
          <Route path="/prevodilac-arapski-srpski" element={<ArabicSerbianTranslator />} />
          <Route path="/prevodilac-srpski-arapski" element={<SerbianArabicTranslator />} />
          <Route path="/prevodilac-holandski-srpski" element={<DutchSerbianTranslator />} />
          <Route path="/prevodilac-srpski-holandski" element={<SerbianDutchTranslator />} />
          <Route path="/prevodilac-ceski-srpski" element={<CzechSerbianTranslator />} />
          <Route path="/prevodilac-srpski-ceski" element={<SerbianCzechTranslator />} />
          <Route path="/prevodilac-slovacki-srpski" element={<SlovakSerbianTranslator />} />
          <Route path="/prevodilac-srpski-slovacki" element={<SerbianSlovakTranslator />} />
          <Route path="/prevodilac-poljski-srpski" element={<PolishSerbianTranslator />} />
          <Route path="/prevodilac-srpski-poljski" element={<SerbianPolishTranslator />} />
          <Route path="/prevodilac-portugalski-srpski" element={<PortugueseSerbianTranslator />} />
          <Route path="/prevodilac-srpski-portugalski" element={<SerbianPortugueseTranslator />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
