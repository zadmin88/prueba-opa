import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { EquipoType } from "@/hooks/use-equipo-state";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function combinacionDeEquipo({
  equipo,
  caloriasMinimas,
  pesoMaximo,
}: {
  equipo: EquipoType[];
  caloriasMinimas: number;
  pesoMaximo: number;
}): EquipoType[] {
  const n = equipo.length;
  const dp: number[][] = Array(n + 1)
    .fill(0)
    .map(() => Array(caloriasMinimas + 1).fill(Infinity));
  const opciones: boolean[][] = Array(n + 1)
    .fill(false)
    .map(() => Array(caloriasMinimas + 1).fill(false));
  dp[0][0] = 0;

  for (let i = 1; i <= n; i++) {
    const { peso, calorias } = equipo[i - 1];
    for (let j = 0; j <= caloriasMinimas; j++) {
      if (j < calorias) {
        dp[i][j] = dp[i - 1][j];
      } else {
        if (dp[i - 1][j] > dp[i - 1][j - calorias] + peso) {
          dp[i][j] = dp[i - 1][j - calorias] + peso;
          opciones[i][j] = true;
        } else {
          dp[i][j] = dp[i - 1][j];
        }
      }
    }
  }

  let maxCalories = 0;
  for (let j = 0; j <= caloriasMinimas; j++) {
    if (dp[n][j] <= pesoMaximo) {
      maxCalories = j;
    }
  }

  const result: EquipoType[] = [];
  let i = n,
    j = maxCalories;
  while (i > 0 && j > 0) {
    if (opciones[i][j]) {
      result.push(equipo[i - 1]);
      j -= equipo[i - 1].calorias;
    }
    i--;
  }

  return result;
}
