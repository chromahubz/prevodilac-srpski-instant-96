import { Button } from "@/components/ui/button";
import { TokenMeter } from "@/components/ui/token-meter";
import { HeaderLogo } from "@/components/ui/header-logo";

interface SiteHeaderProps {
  isRegistered?: boolean;
  isPremium?: boolean;
  usedTokens?: number;
  totalTokens?: number;
}

export function SiteHeader({ 
  isRegistered = false, 
  usedTokens = 0, 
  totalTokens = 5 
}: SiteHeaderProps) {
  return (
    <header className="border-b border-card-border bg-card">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <HeaderLogo />
        <div className="flex items-center gap-4">
          {isRegistered && <TokenMeter used={usedTokens} total={totalTokens} className="hidden md:flex" />}
          <Button variant="outline" size="sm" className="font-medium">Prijavi se</Button>
          <Button size="sm" className="bg-primary hover:bg-primary-hover font-medium">Registruj se</Button>
        </div>
      </div>
    </header>
  );
}