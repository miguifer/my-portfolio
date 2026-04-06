import type { Empresa } from "../types";

export const experiencias: Empresa[] = [
  {
    nombre: "Brandcode",
    ubicacion: "Logroño, La Rioja, España · Presencial · Jornada completa",
    inicio: new Date("2025-03-01"),
    puestos: [
      {
        titulo: "Desarrollador de software",
        tipo: "Jornada completa",
        inicio: new Date("2025-07-01"),
        actual: true,
      },
      {
        titulo: "Desarrollador de software",
        tipo: "Contrato de prácticas",
        inicio: new Date("2025-03-01"),
        fin: new Date("2025-07-01"),
      },
    ],
  },
];
