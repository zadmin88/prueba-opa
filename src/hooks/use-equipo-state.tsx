import { create } from "zustand";

export type EquipoType = {
  nombre: string;
  peso: number;
  calorias: number;
};

type EquipoState = {
  equipo: EquipoType[];
  setEquipo: (equipo: EquipoType) => void;
  //   findCombination: (targetCalories: number, maxWeight: number) => EquipoType[];
};

export const useEquipoState = create<EquipoState>((set) => ({
  equipo: [
    { nombre: "e1", peso: 5, calorias: 3 },
    { nombre: "e2", peso: 3, calorias: 5 },
    { nombre: "e3", peso: 5, calorias: 2 },
    { nombre: "e4", peso: 1, calorias: 8 },
    { nombre: "e5", peso: 2, calorias: 3 },
  ],
  setEquipo: (equipo) =>
    set((state) => ({ equipo: [...state.equipo, equipo] })),
}));
