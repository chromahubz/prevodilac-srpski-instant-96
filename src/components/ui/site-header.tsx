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

export function SiteHeader(props?: SiteHeaderProps) {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const { isRegistered: authIsRegistered, usedTokens: authUsedTokens, totalTokens: authTotalTokens, signOut } = useAuth();

  // Use props if provided, otherwise use auth context
  const isRegistered = props?.isRegistered ?? authIsRegistered ?? false;
  const usedTokens = props?.usedTokens ?? authUsedTokens ?? 0;
  const totalTokens = props?.totalTokens ?? authTotalTokens ?? 5;

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
          {isRegistered && (
            <TokenMeter used={usedTokens} total={totalTokens} className="hidden md:flex" />
          )}

          {isRegistered ? (
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