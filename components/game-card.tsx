import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface GameCardProps {
  title: string
  description: string
  url: string
  difficulty: string
}

export function GameCard({ title, description, url, difficulty }: GameCardProps) {
  return (
    <Link
      href={url}
      className="group block border border-border bg-card hover:border-foreground transition-all duration-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl font-bold text-card-foreground tracking-tight">
            {title}
          </h3>
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {difficulty}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground mb-6 text-pretty">
          {description}
        </p>
        <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
          Play now
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
