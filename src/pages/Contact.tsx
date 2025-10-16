import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderLogo } from "@/components/ui/header-logo";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms API - FREE (250 submissions/month)
      // Get your access key from: https://web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with your key from web3forms.com
          from_name: formData.name,
          email: formData.email,
          subject: `[Prevodilac Srpski] ${formData.subject}`,
          message: formData.message,
          to_email: "contact@unitar.app", // Your email
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Poruka poslata!",
          description: "Odgovorićemo vam u najkraćem roku.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Greška pri slanju",
        description: "Molimo pokušajte ponovo ili nam pišite direktno na contact@unitar.app",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          <HeaderLogo />
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

              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover py-3" disabled={isSubmitting}>
                <Send className="h-4 w-4 mr-2" />
                {isSubmitting ? "Šalje se..." : "Pošalji poruku"}
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
                    <p className="text-muted-foreground">contact@unitar.app</p>
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