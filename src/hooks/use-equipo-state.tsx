import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

export type EquipoType = {
  id: string;
  nombre: string;
  peso: number;
  calorias: number;
};

const $LOCAL_STORAGE_KEY = "equipo";

const getEquipoFromLocalStorage = (): EquipoType[] => {
  const equipo = localStorage.getItem($LOCAL_STORAGE_KEY);
  if (equipo) {
    return JSON.parse(equipo);
  }
  return [];
};

type EquipoState = {
  equipo: EquipoType[];
  setEquipo: (equipo: EquipoType) => void;
  removeEquipo: (id: string) => void;
  //   findCombination: (targetCalories: number, maxWeight: number) => EquipoType[];
};

export const useEquipoState = create<EquipoState>((set) => ({
  equipo: getEquipoFromLocalStorage() || [
    { id: uuidv4(), nombre: "e1", peso: 5, calorias: 3 },
    { id: uuidv4(), nombre: "e2", peso: 3, calorias: 5 },
    { id: uuidv4(), nombre: "e3", peso: 5, calorias: 2 },
    { id: uuidv4(), nombre: "e4", peso: 1, calorias: 8 },
    { id: uuidv4(), nombre: "e5", peso: 2, calorias: 3 },
  ],
  setEquipo: (equipo) =>
    set((state) => {
      localStorage.setItem(
        $LOCAL_STORAGE_KEY,
        JSON.stringify([...state.equipo, equipo])
      );

      return { equipo: [...state.equipo, equipo] };
    }),
  removeEquipo: (id) =>
    set((state) => {
      const equipo = state.equipo.filter((item) => item.id !== id);
      localStorage.setItem($LOCAL_STORAGE_KEY, JSON.stringify(equipo));
      return { equipo };
    }),
}));
