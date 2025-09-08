import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-card-border bg-card mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Prevodilac</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/online-prevodilac" className="hover:text-foreground">Online prevodilac</Link></li>
              <li><Link to="/besplatan-prevod-teksta" className="hover:text-foreground">Besplatan prevod</Link></li>
              <li><Link to="/tekst-u-govor" className="hover:text-foreground">Tekst u govor</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Jezici</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><Link to="/prevodilac-engleski-srpski" className="hover:text-foreground">Engleski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-nemacki-srpski" className="hover:text-foreground">Nemački ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-francuski-srpski" className="hover:text-foreground">Francuski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-italijanski-srpski" className="hover:text-foreground">Italijanski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-spanski-srpski" className="hover:text-foreground">Španski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-ruski-srpski" className="hover:text-foreground">Ruski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-grcki-srpski" className="hover:text-foreground">Grčki ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-madjarski-srpski" className="hover:text-foreground">Mađarski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-rumunski-srpski" className="hover:text-foreground">Rumunski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-bugarski-srpski" className="hover:text-foreground">Bugarski ↔ Srpski</Link></li>
              </ul>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li><Link to="/prevodilac-kineski-srpski" className="hover:text-foreground">Kineski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-japanski-srpski" className="hover:text-foreground">Japanski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-korejski-srpski" className="hover:text-foreground">Korejski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-turski-srpski" className="hover:text-foreground">Turski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-arapski-srpski" className="hover:text-foreground">Arapski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-holandski-srpski" className="hover:text-foreground">Holandski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-ceski-srpski" className="hover:text-foreground">Češki ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-slovacki-srpski" className="hover:text-foreground">Slovački ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-poljski-srpski" className="hover:text-foreground">Poljski ↔ Srpski</Link></li>
                <li><Link to="/prevodilac-portugalski-srpski" className="hover:text-foreground">Portugalski ↔ Srpski</Link></li>
              </ul>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Podrška</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/o-nama" className="hover:text-foreground">O nama</Link></li>
              <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
              <li><Link to="/faq" className="hover:text-foreground">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-foreground">Blog</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-card-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Prevodilac Srpski. Sva prava zadržana.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;