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
    <div className=" h-full min-h-screen flex justify-center items-center bg-stone-100 pb-8">
      <div className="flex flex-col max-w-screen-lg  items-center gap-4  ">
        <AgregarEquipoModal />
        <CalcularEscaladaModal />
        <h1 className="text-3xl font-semibold mt-8">Planea tu escalada</h1>
        <EquiposContainer equipo={equipo} />
        <EscaladaContainer escaladas={escaladas} />
      </div>
    </div>
  );
};

export default Home;
