import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  url: string;
  difficulty: string;
}

export function GameCard({
  title,
  description,
  url,
  difficulty,
}: GameCardProps) {
  return (
    <Link
      href={url}
      className="group border-border bg-card hover:border-foreground block rounded-lg border transition-all duration-200"
    >
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <h3 className="text-card-foreground text-2xl font-bold tracking-tight">
            {title}
          </h3>
          <span className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
            {difficulty}
          </span>
        </div>
        <p className="text-muted-foreground mb-6 text-sm leading-relaxed text-pretty">
          {description}
        </p>
        <div className="text-foreground flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
          Play now
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
