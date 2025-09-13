import readlineSync from 'readline-sync';

function askNumber(prompt: string, min: number, max: number): number {
  while (true) {
    const input = readlineSync.question(`${prompt} `);
    const n = Number(input);
    if (!Number.isNaN(n) && n >= min && n <= max) return n;
    console.log(`Zadejte číslo v intervalu <${min}; ${max}>.`);
  }
}

export function main() {
  const x = askNumber('Zadejte číslo 0–10:', 0, 10);
  console.log(`Zadal jste ${x}, dvojnásobek je ${x * 2}.`);
}

if (require.main === module) {
  main();
}
