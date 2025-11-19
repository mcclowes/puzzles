import { GameCard } from "./game-card";

type Game = {
  title: string;
  description: string;
  url: string;
  difficulty: string;
};

type GameGenre = {
  name: string;
  games: Game[];
};

const gameGenres: GameGenre[] = [
  {
    name: "Word up",
    games: [
      {
        title: "Prefix",
        description:
          "Find words that share a common prefix. A daily challenge that tests your vocabulary and pattern recognition.",
        url: "https://prefix.mcclowes.com/",
        difficulty: "Hard",
      },
      {
        title: "Fictionary",
        description:
          "Spot the real words and match them to definitions. A daily vocabulary challenge that separates fact from fiction.",
        url: "https://fictionary.mcclowes.com/",
        difficulty: "Medium",
      },
    ],
  },
  {
    name: "Think laterally",
    games: [
      {
        title: "Minute Cryptic",
        description:
          "Solve today's cryptic crossword clue. A daily brain teaser that challenges your wordplay and lateral thinking skills.",
        url: "https://cryptic.mcclowes.com/",
        difficulty: "Hard",
      },
      {
        title: "Ditloids",
        description:
          "Decode number-letter puzzles like '24 H in a D'. A fun daily challenge that tests your knowledge and wordplay skills.",
        url: "https://ditloids.mcclowes.com/",
        difficulty: "Medium",
      },
      {
        title: "Lynx",
        description:
          "The ultimate word connection challenge. Link words across multiple levels in this engaging puzzle experience.",
        url: "https://lynx.mcclowes.com/",
        difficulty: "Easy",
      },
      {
        title: "Lynx Mini",
        description:
          "Connect words through clever associations. A compact version of our classic linking game, perfect for quick breaks.",
        url: "https://lynx-mini.mcclowes.com/",
        difficulty: "Easy",
      },
    ],
  },
  {
    name: "What do you know?",
    games: [
      {
        title: "Landmarks",
        description:
          "Identify famous landmarks from around the world. Test your geography knowledge with daily landmark challenges.",
        url: "https://landmarks.mcclowes.com/",
        difficulty: "Easy",
      },
    ],
  },
];

export function GameGrid() {
  return (
    <section id="games" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12">
          <h2 className="text-primary text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Today's puzzles
          </h2>
          <p className="text-primary mt-4 max-w-2xl text-base">
            Seven unique puzzle games, updated daily. Choose your challenge.
          </p>
        </div>
        <div className="space-y-16">
          {gameGenres.map((genre) => (
            <div key={genre.name}>
              <h3 className="text-primary mb-6 text-2xl font-semibold tracking-tight">
                {genre.name}
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {genre.games.map((game) => (
                  <GameCard key={game.title} {...game} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
