import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold tracking-tight text-foreground">
              mcclowes puzzles
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#games"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Games
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="https://mcclowes.com"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
