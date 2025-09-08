import { useState } from "react";
import { ChevronDown, Play, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export interface Voice {
  id: string;
  name: string;
  gender: "muški" | "ženski";
  language: string;
}

const voices: Voice[] = [
  { id: "aria", name: "Aria", gender: "ženski", language: "en" },
  { id: "roger", name: "Roger", gender: "muški", language: "en" },
  { id: "sarah", name: "Sarah", gender: "ženski", language: "en" },
  { id: "laura", name: "Laura", gender: "ženski", language: "en" },
  { id: "charlie", name: "Charlie", gender: "muški", language: "en" },
  { id: "george", name: "George", gender: "muški", language: "en" },
  { id: "callum", name: "Callum", gender: "muški", language: "en" },
  { id: "river", name: "River", gender: "ženski", language: "en" },
  { id: "liam", name: "Liam", gender: "muški", language: "en" },
  { id: "charlotte", name: "Charlotte", gender: "ženski", language: "en" },
  { id: "alice", name: "Alice", gender: "ženski", language: "en" },
  { id: "matilda", name: "Matilda", gender: "ženski", language: "en" },
  { id: "will", name: "Will", gender: "muški", language: "en" },
  { id: "jessica", name: "Jessica", gender: "ženski", language: "en" },
  { id: "eric", name: "Eric", gender: "muški", language: "en" },
  { id: "chris", name: "Chris", gender: "muški", language: "en" },
  { id: "brian", name: "Brian", gender: "muški", language: "en" },
  { id: "daniel", name: "Daniel", gender: "muški", language: "en" },
  { id: "lily", name: "Lily", gender: "ženski", language: "en" },
  { id: "bill", name: "Bill", gender: "muški", language: "en" },
];

interface VoiceSelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function VoiceSelector({ value, onChange }: VoiceSelectorProps) {
  const selectedVoice = voices.find(voice => voice.id === value) || voices[0];

  const handlePlayVoice = (voiceId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement voice preview functionality
    console.log("Playing voice preview for:", voiceId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-12 px-4 justify-between min-w-[180px] bg-card border-card-border hover:bg-secondary">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col items-start">
              <span className="font-medium text-card-foreground text-sm">{selectedVoice.name}</span>
              <span className="text-xs text-muted-foreground">{selectedVoice.gender}</span>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="start" 
        className="w-64 max-h-64 overflow-y-auto bg-card border-card-border shadow-md"
      >
        {voices.map((voice) => (
          <DropdownMenuItem
            key={voice.id}
            onClick={() => onChange(voice.id)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-secondary ${
              value === voice.id ? 'bg-secondary' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <User className="h-4 w-4 text-muted-foreground" />
              <div className="flex flex-col">
                <span className="font-medium text-sm">{voice.name}</span>
                <span className="text-xs text-muted-foreground">{voice.gender}</span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => handlePlayVoice(voice.id, e)}
              className="h-8 w-8 p-0 hover:bg-secondary-hover"
            >
              <Play className="h-3 w-3" />
            </Button>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}