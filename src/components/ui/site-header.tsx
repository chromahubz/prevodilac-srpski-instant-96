import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TokenMeter } from "@/components/ui/token-meter";
import { HeaderLogo } from "@/components/ui/header-logo";
import { AuthModal } from "@/components/ui/auth-modal";
import { useAuth } from "@/contexts/AuthContext";

interface SiteHeaderProps {
  isRegistered?: boolean;
  isPremium?: boolean;
  usedTokens?: number;
  totalTokens?: number;
}

export function SiteHeader({
  isRegistered: propIsRegistered,
  usedTokens: propUsedTokens,
  totalTokens: propTotalTokens
}: SiteHeaderProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { isRegistered, usedTokens, totalTokens, signOut } = useAuth();

  // Use auth context values if available, otherwise fall back to props
  const actualIsRegistered = isRegistered ?? propIsRegistered ?? false;
  const actualUsedTokens = usedTokens ?? propUsedTokens ?? 0;
  const actualTotalTokens = totalTokens ?? propTotalTokens ?? 5;

  const handleLogin = () => {
    console.log('Login button clicked!');
    setAuthMode('login');
    setAuthModalOpen(true);
  };

  const handleSignup = () => {
    console.log('Signup button clicked!');
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <header className="border-b border-card-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <HeaderLogo />
        <div className="flex items-center gap-4">
          {actualIsRegistered && (
            <TokenMeter used={actualUsedTokens} total={actualTotalTokens} className="hidden md:flex" />
          )}

          {actualIsRegistered ? (
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="font-medium"
            >
              Odjavi se
            </Button>
          ) : (
            <>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogin}
                className="font-medium"
              >
                Prijavi se
              </Button>
              <Button
                size="sm"
                onClick={handleSignup}
                className="bg-primary hover:bg-primary-hover font-medium"
              >
                Registruj se
              </Button>
            </>
          )}
        </div>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        defaultMode={authMode}
      />
    </header>
  );
}