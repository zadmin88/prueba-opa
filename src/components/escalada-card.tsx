// import { EquipoType } from "@/hooks/use-equipo-state";
import ItemCard from "./equipos-card";
import { EscaladaType } from "@/hooks/use-escalada-state";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const EscaladaCard = ({ item }: { item: EscaladaType }) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl capitalize">{item.nombre}</CardTitle>
        <CardDescription>
          <>
            Peso maximo: {item.pesoMaximo} <br />
            Calorias minimas: {item.caloriasMinimas} <br />
            Peso del equipo: {item.sumatoriaPeso} <br />
            Calorias del equipo: {item.sumariaCalorias}
          </>
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-3  gap-4 mt-2">
        {item.equipo.map((item, idx) => (
          <ItemCard item={item} key={idx} />
        ))}
      </CardContent>
    </Card>
  );
};

export default EscaladaCard;
