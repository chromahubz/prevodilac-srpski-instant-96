import { useState } from "react";
import { ChevronDown, Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "en", name: "Engleski", flag: "🇺🇸" },
  { code: "sr", name: "Srpski", flag: "🇷🇸" },
  { code: "de", name: "Nemački", flag: "🇩🇪" },
  { code: "fr", name: "Francuski", flag: "🇫🇷" },
  { code: "it", name: "Italijanski", flag: "🇮🇹" },
  { code: "es", name: "Španski", flag: "🇪🇸" },
  { code: "ru", name: "Ruski", flag: "🇷🇺" },
  { code: "el", name: "Grčki", flag: "🇬🇷" },
  { code: "hu", name: "Mađarski", flag: "🇭🇺" },
  { code: "ro", name: "Rumunski", flag: "🇷🇴" },
  { code: "bg", name: "Bugarski", flag: "🇧🇬" },
  { code: "sl", name: "Slovenski", flag: "🇸🇮" },
  { code: "hr", name: "Hrvatski", flag: "🇭🇷" },
  { code: "bs", name: "Bosanski", flag: "🇧🇦" },
  { code: "me", name: "Crnogorski", flag: "🇲🇪" },
  { code: "sv", name: "Švedski", flag: "🇸🇪" },
  { code: "no", name: "Norveški", flag: "🇳🇴" },
  { code: "da", name: "Danski", flag: "🇩🇰" },
  { code: "fi", name: "Finski", flag: "🇫🇮" },
  { code: "zh", name: "Kineski", flag: "🇨🇳" },
  { code: "ja", name: "Japanski", flag: "🇯🇵" },
  { code: "ko", name: "Korejski", flag: "🇰🇷" },
  { code: "tr", name: "Turski", flag: "🇹🇷" },
  { code: "ar", name: "Arapski", flag: "🇸🇦" },
  { code: "nl", name: "Holandski", flag: "🇳🇱" },
  { code: "cs", name: "Češki", flag: "🇨🇿" },
  { code: "sk", name: "Slovački", flag: "🇸🇰" },
  { code: "pl", name: "Poljski", flag: "🇵🇱" },
  { code: "pt", name: "Portugalski", flag: "🇵🇹" },
];

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function LanguageSelector({ value, onChange, label }: LanguageSelectorProps) {
  const selectedLanguage = languages.find(lang => lang.code === value) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-12 px-4 justify-between min-w-[140px] bg-card border-card-border hover:bg-secondary">
          <div className="flex items-center gap-2">
            <span className="text-base">{selectedLanguage.flag}</span>
            <span className="font-medium text-card-foreground">{selectedLanguage.name}</span>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-48 max-h-64 overflow-y-auto bg-card border-card-border shadow-md"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => onChange(language.code)}
            className={`flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-secondary ${
              value === language.code ? 'bg-secondary' : ''
            }`}
          >
            <span className="text-base">{language.flag}</span>
            <span className="font-medium">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}