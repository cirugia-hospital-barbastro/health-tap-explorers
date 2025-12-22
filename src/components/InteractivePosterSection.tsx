import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractivePosterSectionProps {
  title: string;
  content: string[];
  variant?: "pink" | "green" | "blue";
  className?: string;
  icon?: string;
  roundIcon?: boolean;
  largeIcon?: boolean;
  extraLargeIcon?: boolean;
  fadeRight?: boolean;
}

const InteractivePosterSection = ({
  title,
  content,
  variant = "green",
  className,
  icon,
  roundIcon = false,
  largeIcon = false,
  extraLargeIcon = false,
  fadeRight = false,
}: InteractivePosterSectionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const variantStyles = {
    pink: "bg-[hsl(var(--medical-rose))] hover:bg-[hsl(340,50%,82%)] border-[hsl(340,50%,70%)]",
    green: "bg-[hsl(var(--medical-mint))] hover:bg-[hsl(160,40%,80%)] border-[hsl(160,35%,65%)]",
    blue: "bg-[hsl(195,40%,90%)] hover:bg-[hsl(195,40%,85%)] border-[hsl(195,50%,60%)]",
  };

  return (
    <div
      className={cn(
        "rounded-3xl border-2 p-4 md:p-6 cursor-pointer transition-all duration-300",
        "shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)]",
        variantStyles[variant],
        isExpanded && "scale-[1.02]",
        className
      )}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          {icon && (
            <img 
              src={icon} 
              alt="" 
              className={cn(
                "object-contain flex-shrink-0",
                extraLargeIcon ? "w-20 h-20 md:w-24 md:h-24" : largeIcon ? "w-12 h-12 md:w-16 md:h-16" : "w-8 h-8 md:w-10 md:h-10",
                roundIcon && "rounded-full"
              )}
              style={fadeRight ? {
                maskImage: 'linear-gradient(to right, black 70%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, black 70%, transparent 100%)'
              } : undefined}
            />
          )}
          <h3 className="text-base md:text-lg font-bold text-foreground uppercase tracking-wide">
            {title}
          </h3>
        </div>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-foreground transition-transform duration-300 flex-shrink-0",
            isExpanded && "rotate-180"
          )}
        />
      </div>
      
      {isExpanded && (
        <div className="mt-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {content.map((item, index) => (
            <p
              key={index}
              className="text-sm md:text-base text-foreground/90 leading-relaxed pl-3 border-l-2 border-foreground/30"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractivePosterSection;
