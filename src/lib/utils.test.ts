// import { combinacionDeEquipo } from "./utils";

// describe("combinacionDeEquipo", () => {
//   it("should return an empty array if total calories is less than caloriasMinimas", () => {
//     const equipo = [
//       { peso: 10, calorias: 100 },
//       { peso: 20, calorias: 200 },
//       { peso: 30, calorias: 300 },
//     ];
//     const caloriasMinimas = 1000;
//     const pesoMaximo = 100;
//     const result = combinacionDeEquipo({ equipo, caloriasMinimas, pesoMaximo });
//     expect(result).toEqual([]);
//   });

//   it("should return the correct combination of items that meet the criteria", () => {
//     const equipo = [
//       { peso: 10, calorias: 100 },
//       { peso: 20, calorias: 200 },
//       { peso: 30, calorias: 300 },
//     ];
//     const caloriasMinimas = 500;
//     const pesoMaximo = 50;
//     const result = combinacionDeEquipo({ equipo, caloriasMinimas, pesoMaximo });
//     expect(result).toEqual([
//       { peso: 10, calorias: 100 },
//       { peso: 20, calorias: 200 },
//     ]);
//   });

//   it("should return an empty array if no combination of items meet the criteria", () => {
//     const equipo = [
//       { peso: 10, calorias: 100 },
//       { peso: 20, calorias: 200 },
//       { peso: 30, calorias: 300 },
//     ];
//     const caloriasMinimas = 1000;
//     const pesoMaximo = 10;
//     const result = combinacionDeEquipo({ equipo, caloriasMinimas, pesoMaximo });
//     expect(result).toEqual([]);
//   });
// });
