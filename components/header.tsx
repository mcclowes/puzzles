import Link from "next/link";

export function Header() {
  return (
    <header className="border-border bg-background border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-foreground text-2xl font-bold tracking-tight">
              mcclowes puzzles
            </div>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#games"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Games
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="https://mcclowes.com"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
