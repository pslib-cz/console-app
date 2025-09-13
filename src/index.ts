import readlineSync from 'readline-sync';

function askNumber(prompt: string, min: number, max: number): number {
  let n: number;
  do {
    const input = readlineSync.question(`${prompt} <${min}; ${max}>: `);
    n = Number(input);
  } while (Number.isNaN(n) || n < min || n > max);
  return n;
}

export function main() {
  const x = askNumber('Zadejte číslo v intervalu', 0, 10);
  console.log(`Zadal jste ${x}, dvojnásobek je ${x * 2}.`);
}

if (require.main === module) {
  main();
}
