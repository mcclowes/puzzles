import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-4">
              mcclowes puzzles
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Daily word puzzles designed to challenge and delight. Built with care
              for puzzle enthusiasts everywhere.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
              Games
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://prefix.mcclowes.com/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Prefix
                </Link>
              </li>
              <li>
                <Link
                  href="https://lynx-mini.mcclowes.com/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lynx Mini
                </Link>
              </li>
              <li>
                <Link
                  href="https://lynx.mcclowes.com/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Lynx
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">
              More
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://mcclowes.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About the creator
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to play
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} mcclowes puzzles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
