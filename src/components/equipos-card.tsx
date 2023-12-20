import { EquipoType } from "@/hooks/use-equipo-state";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import { useEquipoState } from "@/hooks/use-equipo-state";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ItemCard = ({
  item,
  escalada,
}: {
  item: EquipoType;
  escalada?: boolean;
}) => {
  const { removeEquipo } = useEquipoState();

  return (
    <Card>
      <CardHeader className="pb-1 pt-4 flex gap-1 flex-row items-center justify-between">
        <CardTitle className="text-xl capitalize">{item.nombre}</CardTitle>
        {!escalada && (
          <DropdownMenu>
            <DropdownMenuTrigger className="">
              <ChevronDown className="h-5 w-5 ml-8 md:ml-auto" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => removeEquipo(item.id)}>
                Eliminar
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-base ">Peso: {item.peso}</p>
        <p>Calorias: {item.calorias}</p>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
