import { create } from "zustand";
import { EquipoType } from "./use-equipo-state";

const $LOCAL_STORAGE_KEY = "escalada";

const getEscaladaFromLocalStorage = (): EscaladaType[] => {
  const escalada = localStorage.getItem($LOCAL_STORAGE_KEY);
  if (escalada) {
    return JSON.parse(escalada);
  }
  return [];
};

export type EscaladaType = {
  equipo: EquipoType[];
  nombre: string;
  pesoMaximo: number;
  caloriasMinimas: number;
  sumatoriaPeso: number;
  sumariaCalorias: number;
};

type EscaladaState = {
  escaladas: EscaladaType[];
  setEscalada: (escalada: EscaladaType) => void;
};

export const useEscaladaState = create<EscaladaState>((set) => ({
  escaladas: getEscaladaFromLocalStorage() || [],
  setEscalada: (escalada) =>
    set((state) => {
      localStorage.setItem(
        $LOCAL_STORAGE_KEY,
        JSON.stringify([...state.escaladas, escalada])
      );
      return { escaladas: [...state.escaladas, escalada] };
    }),
}));
