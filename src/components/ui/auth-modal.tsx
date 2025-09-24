import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
// import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: 'login' | 'signup';
}

export function AuthModal({ isOpen, onClose, defaultMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'signup'>(defaultMode);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === 'login') {
        const { error } = await signIn(email, password);
        if (error) {
          alert('Greška pri prijavljivanju: ' + error.message);
        } else {
          alert('Uspešno ste se prijavili!');
          onClose();
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          alert('Greška pri registraciji: ' + error.message);
        } else {
          alert('Uspešno ste se registrovali! Proverite email za potvrdu.');
          onClose();
        }
      }
    } catch (error) {
      alert('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setLoading(false);
  };

  const switchMode = () => {
    setMode(mode === 'login' ? 'signup' : 'login');
    resetForm();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {mode === 'login' ? 'Prijavite se' : 'Registrujte se'}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vas-email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Lozinka</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Unesite lozinku"
              required
              minLength={6}
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Molimo sačekajte...' : (mode === 'login' ? 'Prijavite se' : 'Registrujte se')}
          </Button>
        </form>

        <div className="text-center">
          <Button
            variant="link"
            onClick={switchMode}
            className="text-sm"
          >
            {mode === 'login'
              ? 'Nemate nalog? Registrujte se'
              : 'Već imate nalog? Prijavite se'
            }
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}