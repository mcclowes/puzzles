import { GameCard } from "./game-card";

const games = [
  {
    title: "Prefix",
    description:
      "Find words that share a common prefix. A daily challenge that tests your vocabulary and pattern recognition.",
    url: "https://prefix.mcclowes.com/",
    difficulty: "Medium",
  },
  {
    title: "Lynx Mini",
    description:
      "Connect words through clever associations. A compact version of our classic linking game, perfect for quick breaks.",
    url: "https://lynx-mini.mcclowes.com/",
    difficulty: "Easy",
  },
  {
    title: "Lynx",
    description:
      "The ultimate word connection challenge. Link words across multiple levels in this engaging puzzle experience.",
    url: "https://lynx.mcclowes.com/",
    difficulty: "Hard",
  },
];

export function GameGrid() {
  return (
    <section id="games" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12">
          <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Today's puzzles
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base">
            Three unique word games, updated daily. Choose your challenge.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
