import { useEquipoState } from "@/hooks/use-equipo-state";
import EquiposContainer from "@/components/equipos-container";
import AgregarEquipoModal from "@/components/modals/agregar-equipo-modal";
import CalcularEscaladaModal from "@/components/modals/calcular-escalada-modal";
import EscaladaContainer from "@/components/escalada-container";
import { useEscaladaState } from "@/hooks/use-escalada-state";

const Home = () => {
  const { equipo } = useEquipoState();
  const { escaladas } = useEscaladaState();

  return (
    <div className="flex flex-col items-center mt-8 gap-4">
      <AgregarEquipoModal />
      <CalcularEscaladaModal />
      <h1 className="text-3xl">Planea tu escalada</h1>
      <EquiposContainer equipo={equipo} />
      <EscaladaContainer escaladas={escaladas} />
    </div>
  );
};

export default Home;
