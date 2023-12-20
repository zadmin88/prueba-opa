import { EscaladaType } from "@/hooks/use-escalada-state";
import { Button } from "./ui/button";
import { useModal } from "@/hooks/use-modal-store";
import EscaladaCard from "./escalada-card";

const EscaladaContainer = ({ escaladas }: { escaladas: EscaladaType[] }) => {
  const { onOpen } = useModal();

  return (
    <div className="rounded-md border border-stone-300 px-4 py-8">
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
          <div className="grid grid-flow-col auto-cols-max gap-4">
            {escaladas.map((item, idx) => (
              <EscaladaCard item={item} key={idx} />
            ))}
          </div>
          <Button className="mt-4" onClick={() => onOpen("calcularEscalada")}>
            Calcular escalada
          </Button>
        </div>
      )}
    </div>
  );
};

export default EscaladaContainer;
