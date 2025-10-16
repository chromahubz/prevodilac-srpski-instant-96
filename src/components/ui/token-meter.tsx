interface TokenMeterProps {
  used: number;
  total: number;
  className?: string;
}

export function TokenMeter({ used, total, className = "" }: TokenMeterProps) {
  const percentage = (used / total) * 100;
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1">
        <div className="token-meter">
          <div 
            className="token-fill" 
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>
      <div className="text-sm text-token-text font-medium whitespace-nowrap">
        {used}/{total}
      </div>
    </div>
  );
}