import { askNumber } from './libs/inputs';

export function main() {
  const x = askNumber('Zadejte číslo v intervalu', 0, 10);
  console.log(`Zadal jste ${x}, dvojnásobek je ${x * 2}.`);
}

if (require.main === module) {
  main();
}
