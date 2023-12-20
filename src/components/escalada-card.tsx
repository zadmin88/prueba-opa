// import { EquipoType } from "@/hooks/use-equipo-state";
import ItemCard from "./equipos-card";
import { EscaladaType } from "@/hooks/use-escalada-state";

const EscaladaCard = ({ item }: { item: EscaladaType }) => {
  return (
    <div className="rounded-md border border-stone-400 flex  p-2 flex-col">
      <h1 className="font-semibold text-xl capitalize">{item.nombre}</h1>
      <p className="text-base ">Peso maximo: {item.pesoMaximo}</p>
      <p>Calorias minimas: {item.caloriasMinimas}</p>
      <p>Peso del equipo: {item.sumatoriaPeso}</p>
      <p>Calorias del equipo: {item.sumariaCalorias}</p>
      <div className="grid grid-cols-3  gap-4 mt-2">
        {item.equipo.map((item, idx) => (
          <ItemCard item={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default EscaladaCard;
