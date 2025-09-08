import { Link } from "react-router-dom";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import prevodilacLogo from "@/assets/prevodilac-logo.png";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 saveta kako brzo naučiti engleski jezik",
      excerpt: "Otkrijte najefektivnije metode za brzo savladavanje engleskog jezika kroz praktične savete i tehnike.",
      date: "15. novembar 2024",
      author: "Ana Marković",
      category: "Učenje jezika",
      slug: "/blog/10-saveta-kako-brzo-nauciti-engleski",
      readTime: "5 min čitanja",
      image: "📚"
    },
    {
      id: 2,
      title: "Kako naučiti nemački samostalno",
      excerpt: "Kompletni vodič za samostalno učenje nemačkog jezika sa resursima i strategijama.",
      date: "10. novembar 2024",
      author: "Marko Petrović",
      category: "Učenje jezika",
      slug: "/blog/kako-nauciti-nemacki-samostalno",
      readTime: "7 min čitanja",
      image: "🇩🇪"
    },
    {
      id: 3,
      title: "Najčešće greške u engleskom prevodu",
      excerpt: "Analiziramo najčešće greške koje prave govornici srpskog jezika kada prevode na engleski.",
      date: "5. novembar 2024",
      author: "Milica Jovanović",
      category: "Prevođenje",
      slug: "/blog/najcesce-greske-u-engleskom-prevodu",
      readTime: "4 min čitanja",
      image: "❌"
    },
    {
      id: 4,
      title: "Kako prevesti poslovne dokumente",
      excerpt: "Praktični saveti za precizno prevođenje poslovnih dokumenata i korespondencije.",
      date: "30. oktobar 2024",
      author: "Stefan Miković",
      category: "Prevođenje",
      slug: "/blog/kako-prevesti-poslovne-dokumente",
      readTime: "6 min čitanja",
      image: "📄"
    },
    {
      id: 5,
      title: "Francuski za početnike - osnove",
      excerpt: "Započnite svoju avanturu učenja francuskog jezika sa ovim osnovnim smernicama.",
      date: "25. oktobar 2024",
      author: "Jelena Stojanović",
      category: "Učenje jezika",
      slug: "/blog/francuski-za-pocetnike",
      readTime: "5 min čitanja",
      image: "🇫🇷"
    },
      {
        id: 6,
        title: "AI prevođenje vs. ljudski prevodilac",
        excerpt: "Poredimo prednosti i mane AI prevođenja u odnosu na tradicionalno ljudsko prevođenje.",
        date: "20. oktobar 2024",
        author: "Nikola Radović",
        category: "Tehnologija",
        slug: "/blog/ai-prevodenje-vs-ljudski-prevodilac",
        readTime: "8 min čitanja",
        image: "🤖"
      },
      {
        id: 7,
        title: "Kako brzo naučiti slovenački jezik",
        excerpt: "Praktični saveti i strategije za efikasno učenje slovenačkog jezika sa fokusом na najvažnije elemente.",
        date: "15. decembar 2024",
        author: "Marija Nikolić",
        category: "Učenje jezika",
        slug: "/blog/kako-brzo-nauciti-slovenacki-jezik",
        readTime: "6 min čitanja",
        image: "🇸🇮"
      },
      {
        id: 8,
        title: "Prevodi na ruski zašto su neke reči skoro nemoguće prevesti",
        excerpt: "Istražujemo kulturološke i jezičke barijere koje čine određene ruske reči neprevozljivima na srpski.",
        date: "12. decembar 2024", 
        author: "Vladimir Petrov",
        category: "Prevođenje",
        slug: "/blog/prevodi-na-ruski-neprevozljive-reci",
        readTime: "7 min čitanja",
        image: "🇷🇺"
      },
      {
        id: 9,
        title: "Kako naučiti japanski samostalno vodič za početnike",
        excerpt: "Potpuni vodič kroz osnove japanskog jezika sa resursima za samostalno učenje hiragane, katakane i kanji.",
        date: "8. decembar 2024",
        author: "Saki Tanaka",
        category: "Učenje jezika", 
        slug: "/blog/kako-nauciti-japanski-samostalno-vodic",
        readTime: "9 min čitanja",
        image: "🇯🇵"
      },
      {
        id: 10,
        title: "10 saveta kako naučiti švedski brzo i efikasno",
        excerpt: "Otkrijte najbrže metode za savladavanje švedskog jezika kroz prakticne tehnike i korisne resurse.",
        date: "5. decembar 2024",
        author: "Lars Andersson",
        category: "Učenje jezika",
        slug: "/blog/10-saveta-kako-nauciti-svedski-brzo",
        readTime: "6 min čitanja",
        image: "🇸🇪"
      },
      {
        id: 11,
        title: "Kako naučiti mađarski jezik samostalno",
        excerpt: "Saveti za savladavanje jednog od najteži evropskih jezika uz praktične metode i strategije učenja.",
        date: "2. decembar 2024",
        author: "Zoltán Nagy", 
        category: "Učenje jezika",
        slug: "/blog/kako-nauciti-madjarski-jezik-samostalno",
        readTime: "8 min čitanja",
        image: "🇭🇺"
      }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <img src={prevodilacLogo} alt="Prevodilac Srpski" className="h-8 w-auto" />
              <h1 className="text-2xl font-bold text-foreground">Prevodilac Srpski</h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
            <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-6">
            Blog - Saveti i trikovi za prevođenje
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Otkrijte korisne savete, strategije za učenje jezika i najnovije trendove u svetu prevođenja.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
            <Link key={post.id} to={post.slug} className="block">
              <article className="bg-card border border-card-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{post.image}</span>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-hover">
                      Čitaj više
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">Želite da saznate više?</h2>
          <p className="text-muted-foreground mb-6">
            Pridružite se našoj zajednici i redovno dobijajte nove savete za učenje jezika
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary-hover">
            Počnite sa prevodom
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;