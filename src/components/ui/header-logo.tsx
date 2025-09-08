import { Link } from "react-router-dom";
import logo from "@/assets/prevodilac-logo-main.png";

interface HeaderLogoProps {
  className?: string;
}

export function HeaderLogo({ className = "" }: HeaderLogoProps) {
  return (
    <Link to="/" className={`flex items-center gap-3 ${className}`}>
      <img src={logo} alt="Prevodilac Srpski" className="h-8 w-8" />
      <h1 className="text-2xl font-bold text-foreground">Prevodilac Srpski</h1>
    </Link>
  );
}