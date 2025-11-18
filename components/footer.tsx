import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-foreground mb-4 text-lg font-bold">
              mcclowes puzzles
            </h3>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Daily word puzzles designed to challenge and delight. Built with
              care for puzzle enthusiasts everywhere.
            </p>
          </div>
          <div>
            <h4 className="text-foreground mb-4 text-sm font-medium tracking-wider uppercase">
              Games
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://prefix.mcclowes.com/"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Prefix
                </Link>
              </li>
              <li>
                <Link
                  href="https://lynx-mini.mcclowes.com/"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Lynx Mini
                </Link>
              </li>
              <li>
                <Link
                  href="https://lynx.mcclowes.com/"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  Lynx
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-foreground mb-4 text-sm font-medium tracking-wider uppercase">
              More
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="https://mcclowes.com"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  About the creator
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  How to play
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-border mt-12 border-t pt-8">
          <p className="text-muted-foreground text-sm">
            © {currentYear} mcclowes puzzles. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
