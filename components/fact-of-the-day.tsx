"use client";

const facts = [
  "The word 'set' has the most definitions of any English word, with over 430 different meanings.",
  "The dot over the letters 'i' and 'j' is called a 'tittle'.",
  "The shortest complete sentence in English is 'I am' or 'Go.'",
  "The word 'queue' is the only word that is pronounced the same when the last four letters are removed.",
  "The longest word you can type using only the top row of a keyboard is 'typewriter'.",
  "The word 'alphabet' comes from the first two letters of the Greek alphabet: alpha and beta.",
  "The word 'bookkeeper' is the only unhyphenated English word with three consecutive double letters.",
  "The word 'dreamt' is the only English word that ends in 'mt'.",
  "The word 'underground' is the only word that begins and ends with 'und'.",
  "The word 'stewardesses' is the longest word typed with only the left hand on a QWERTY keyboard.",
  "The word 'lollipop' is the longest word typed with only the right hand on a QWERTY keyboard.",
  "There is no word in English that rhymes with 'month', 'orange', 'silver', or 'purple'.",
  "The word 'rhythm' is the longest English word without a vowel.",
  "The word 'therein' contains thirteen words spelled with consecutive letters: the, he, her, er, here, I, there, ere, rein, re, in, therein, and herein.",
  "The word 'strengths' is the longest word with only one vowel.",
  "The sentence 'The quick brown fox jumps over the lazy dog' uses every letter of the alphabet.",
  "The word 'uncopyrightable' is the longest common English word with no repeated letters.",
  "The word 'facetious' contains all five vowels in alphabetical order.",
  "The word 'almost' is the longest common word with all letters in alphabetical order.",
  "The word 'feedback' was first used in 1920 to describe a circuit in electronics.",
  "The term 'OK' is the most widely recognized word in the world.",
  "The word 'gadget' was first used in 1886 by sailors to refer to small mechanical devices.",
  "The ampersand (&) used to be the 27th letter of the alphabet.",
  "A pangram is a sentence that contains every letter of the alphabet at least once.",
  "The word 'quiz' was allegedly invented in 1791 by a Dublin theater owner as a bet.",
  "English has more words than most languages, with approximately 170,000 words in current use.",
  "The word 'goodbye' is a contraction of 'God be with ye'.",
  "The word 'muscle' comes from the Latin 'musculus', meaning 'little mouse'.",
  "The word 'disaster' comes from Greek words meaning 'bad star'.",
  "The word 'salary' comes from 'sal', the Latin word for salt.",
  "The longest one-syllable word in English is 'screeched'.",
];

function getDailyFact(): string {
  const today = new Date();
  const dayOfYear = Math.floor(
    (today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );
  return facts[dayOfYear % facts.length];
}

export function FactOfTheDay() {
  const fact = getDailyFact();

  return (
    <section className="border-border bg-background border-t">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="text-center">
          <h2 className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
            Fact of the Day
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed">
            {fact}
          </p>
        </div>
      </div>
    </section>
  );
}
