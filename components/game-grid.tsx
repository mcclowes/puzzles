import { GameCard } from './game-card'

const games = [
  {
    title: 'Prefix',
    description:
      'Find words that share a common prefix. A daily challenge that tests your vocabulary and pattern recognition.',
    url: 'https://prefix.mcclowes.com/',
    difficulty: 'Medium',
  },
  {
    title: 'Lynx Mini',
    description:
      'Connect words through clever associations. A compact version of our classic linking game, perfect for quick breaks.',
    url: 'https://lynx-mini.mcclowes.com/',
    difficulty: 'Easy',
  },
  {
    title: 'Lynx',
    description:
      'The ultimate word connection challenge. Link words across multiple levels in this engaging puzzle experience.',
    url: 'https://lynx.mcclowes.com/',
    difficulty: 'Hard',
  },
]

export function GameGrid() {
  return (
    <section id="games" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Today's puzzles
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
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
  )
}
