import { EquipoType } from "@/hooks/use-equipo-state";
import ItemCard from "./equipos-card";

import { Button } from "./ui/button";
import { useModal } from "@/hooks/use-modal-store";

const EquiposContainer = ({ equipo }: { equipo: EquipoType[] }) => {
  const { onOpen } = useModal();
  return (
    <div className="rounded-md  bg-white mx-4 md:mx-0 py-4 px-4  flex flex-col gap-4 w-full items-center">
      {equipo.length === 0 ? (
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg text-muted-foreground">
            Aun no tienes equipo para escalar!
          </p>
          <Button className="mt-4" onClick={() => onOpen("agregarEquipo")}>
            Agregar Equipo
          </Button>
        </div>
      ) : (
        <>
          <h1 className="font-semibold text-lg">Equipo Disponible</h1>
          <div className="flex flex-wrap gap-4 justify-center  max-w-screen-md ">
            {equipo.map((item, idx) => (
              <ItemCard item={item} key={idx} />
            ))}
          </div>
          <Button className="mt-4" onClick={() => onOpen("agregarEquipo")}>
            Agregar Equipo
          </Button>
        </>
      )}
    </div>
  );
};

export default EquiposContainer;
