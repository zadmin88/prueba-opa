// import { EquipoType } from "@/hooks/use-equipo-state";
import ItemCard from "./equipos-card";
import { EscaladaType } from "@/hooks/use-escalada-state";
import { useEscaladaState } from "@/hooks/use-escalada-state";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EscaladaCard = ({ item }: { item: EscaladaType }) => {
  const { removeEscalada } = useEscaladaState();
  return (
    <Card className="">
      <CardHeader className="pb-2">
        <div className="flex gap-1">
          <CardTitle className="text-xl capitalize">{item.nombre}</CardTitle>

          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <ChevronDown className="h-5 w-5 ml-8 md:ml-auto" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => removeEscalada(item.id)}>
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <CardDescription>
          <>
            Peso maximo: {item.pesoMaximo} <br />
            Calorias minimas: {item.caloriasMinimas} <br />
            Peso del equipo: {item.sumatoriaPeso} <br />
            Calorias del equipo: {item.sumariaCalorias}
          </>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-4 justify-start md:justify-center  max-w-screen-md ">
        {item.equipo.map((item, idx) => (
          <ItemCard item={item} key={idx} escalada={true} />
        ))}
      </CardContent>
    </Card>
  );
};

export default EscaladaCard;
