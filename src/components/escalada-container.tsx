import { EscaladaType } from "@/hooks/use-escalada-state";
import { Button } from "./ui/button";
import { useModal } from "@/hooks/use-modal-store";
import EscaladaCard from "./escalada-card";

const EscaladaContainer = ({ escaladas }: { escaladas: EscaladaType[] }) => {
  const { onOpen } = useModal();

  return (
    <div className="rounded-md bg-white  mx-4 md:mx-0 py-4 w-full px-0 md:px-8">
      {escaladas.length === 0 ? (
        <div className="flex flex-col gap-4 items-center">
          <p className="text-lg text-muted-foreground">
            Aun no tienes escaladas guardadas!
          </p>
          <Button className="mt-4" onClick={() => onOpen("calcularEscalada")}>
            Calcular Escalada
          </Button>
        </div>
      ) : (
        <div className=" py-4 px-8 flex flex-col gap-4 items-center">
          <h1 className="font-semibold text-lg">Escaladas</h1>
          <Button className="mt-4" onClick={() => onOpen("calcularEscalada")}>
            Calcular escalada
          </Button>
          <div className="flex flex-wrap gap-4   md:justify-center  ">
            {escaladas.map((item, idx) => (
              <EscaladaCard item={item} key={idx} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default EscaladaContainer;
