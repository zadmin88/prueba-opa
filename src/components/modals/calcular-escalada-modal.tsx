import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";

import { useForm } from "react-hook-form";
import { useModal } from "@/hooks/use-modal-store";
import { combinacionDeEquipo } from "@/lib/utils";
import { useEquipoState } from "@/hooks/use-equipo-state";
import { useEscaladaState } from "@/hooks/use-escalada-state";
import { v4 as uuidv4 } from "uuid";

import {
  Dialog,
  DialogContent,
  //   DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
  nombre: z.string().min(1, {
    message: "Campo Nombre requerido",
  }),
  pesoMaximo: z.coerce
    .number()
    .positive({ message: "Peso debe ser mayor a 1" })
    .min(1, {
      message: "Campo Peso requerido",
    }),
  caloriasMinimas: z.coerce
    .number()
    .positive({ message: "Calorias debe ser mayor a 1" })
    .min(1, {
      message: "Campo Calorias requerido",
    }),
});

const CalcularEscaladaModal = () => {
  const { isOpen, onClose, type } = useModal();
  // const [escalada, setEscalada] = useState([]);
  const { equipo } = useEquipoState();
  //   const { setEquipo } = useEquipoState();
  const { setEscalada } = useEscaladaState();

  const isModalOpen = isOpen && type === "calcularEscalada";

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      pesoMaximo: 0,
      caloriasMinimas: 0,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const resultado = combinacionDeEquipo({
      equipo,
      caloriasMinimas: values.caloriasMinimas,
      pesoMaximo: values.pesoMaximo,
    });

    const { sumariaCalorias, sumatoriaPeso } = resultado.reduce(
      (acc, item) => {
        acc.sumariaCalorias += item.calorias;
        acc.sumatoriaPeso += item.peso;
        return acc;
      },
      { sumariaCalorias: 0, sumatoriaPeso: 0 }
    );

    const escalada = {
      id: uuidv4(),
      equipo: [...resultado],
      nombre: values.nombre,
      pesoMaximo: values.pesoMaximo,
      caloriasMinimas: values.caloriasMinimas,
      sumatoriaPeso,
      sumariaCalorias,
    };

    setEscalada(escalada);
    onClose();
    form.reset();
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white text-black md:p-0 py-10 px-0 w-full   ">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Calcular equipo de escalada
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6 px-6">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Nombre del cerro
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black
                         focus-visible:ring-offset-0"
                        placeholder="Ingresa nombre del cerro"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pesoMaximo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Peso Maximo
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black
                         focus-visible:ring-offset-0"
                        placeholder="Ingresa peso maximo"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="caloriasMinimas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
                      Calorias minimas
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={isLoading}
                        className="bg-zinc-300/50 border-0 focus-visible:ring-0 text-black
                         focus-visible:ring-offset-0"
                        placeholder="Ingresa calorias minimas"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className=" px-6 py-4">
              <Button variant="default" disabled={isLoading}>
                Calcular
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CalcularEscaladaModal;
