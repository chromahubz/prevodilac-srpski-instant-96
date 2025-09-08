import { Mail, Phone, MapPin, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-card-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <Globe className="h-8 w-8 text-primary" />
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
          <h1 className="text-4xl font-bold text-foreground mb-4">Kontaktiraj nas</h1>
          <p className="text-xl text-muted-foreground">
            Imamo pitanje ili predlog? Rado ćemo vam pomoći!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-card-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Pošaljite nam poruku</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Ime i prezime
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input-border bg-input text-input-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-input-border-focus"
                  placeholder="Vaše ime i prezime"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email adresa
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input-border bg-input text-input-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-input-border-focus"
                  placeholder="vasa.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Tema
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input-border bg-input text-input-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-input-border-focus"
                  placeholder="O čemu se radi?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Poruka
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input-border bg-input text-input-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-input-border-focus resize-none"
                  placeholder="Detaljno opišite vaš upit ili problem..."
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover py-3">
                <Send className="h-4 w-4 mr-2" />
                Pošalji poruku
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card border border-card-border rounded-lg p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Kontakt informacije</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email podrška</h3>
                    <p className="text-muted-foreground">kontakt@prevodilacsrpski.com</p>
                    <p className="text-sm text-muted-foreground mt-1">Odgovaramo u roku od 24 sata</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-card-border rounded-lg p-8">
              <h3 className="text-xl font-bold text-foreground mb-4">Česti upiti</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-1">Tehnička podrška</h4>
                  <p className="text-sm text-muted-foreground">
                    Za probleme sa korišćenjem aplikacije ili bug reportove
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Naplaćivanje</h4>
                  <p className="text-sm text-muted-foreground">
                    Pitanja o Premium pretplati, fakturisanju ili refundiranju
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-foreground mb-1">Poslovni upiti</h4>
                  <p className="text-sm text-muted-foreground">
                    Partnerstva, korporativni paketi ili API pristup
                  </p>
                </div>
              </div>
              
              <Link to="/faq" className="block mt-6">
                <Button variant="outline" className="w-full">
                  Pogledaj FAQ sekciju
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;