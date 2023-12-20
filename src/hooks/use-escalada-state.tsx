import { create } from "zustand";
import { EquipoType } from "./use-equipo-state";

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
  escaladas: [],
  setEscalada: (escalada) =>
    set((state) => ({ escaladas: [...state.escaladas, escalada] })),
}));
