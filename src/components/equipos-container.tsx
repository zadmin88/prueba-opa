import { EquipoType } from "@/hooks/use-equipo-state";
import ItemCard from "./equipos-card";

import { Button } from "./ui/button";
import { useModal } from "@/hooks/use-modal-store";

const EquiposContainer = ({ equipo }: { equipo: EquipoType[] }) => {
  const { onOpen } = useModal();
  return (
    <div className="rounded-md border-stone-300 border py-4 px-8 flex flex-col gap-4 items-center">
      <h1 className="font-semibold text-lg">Equipo Disponible</h1>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
        {equipo.map((item, idx) => (
          <ItemCard item={item} key={idx} />
        ))}
      </div>
      <Button className="mt-4" onClick={() => onOpen("agregarEquipo")}>
        Agregar Equipo
      </Button>
    </div>
  );
};

export default EquiposContainer;
