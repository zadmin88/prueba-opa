import { EquipoType } from "@/hooks/use-equipo-state";

const ItemCard = ({ item }: { item: EquipoType }) => {
  return (
    <div className="rounded-md border border-stone-400 flex  p-2 flex-col">
      <h1 className="font-semibold text-xl capitalize">{item.nombre}</h1>
      <p className="text-base ">Peso: {item.peso}</p>
      <p>Calorias: {item.calorias}</p>
    </div>
  );
};

export default ItemCard;
