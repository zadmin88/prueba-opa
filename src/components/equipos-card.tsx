import { EquipoType } from "@/hooks/use-equipo-state";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ItemCard = ({ item }: { item: EquipoType }) => {
  return (
    <Card className="flex items-start flex-col">
      <CardHeader className="pb-1 pt-4">
        <CardTitle className="text-xl capitalize">{item.nombre}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-base ">Peso: {item.peso}</p>
        <p>Calorias: {item.calorias}</p>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
