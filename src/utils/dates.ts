import type { Puesto, Empresa } from "../types";

const meses = [
  "ene.",
  "feb.",
  "mar.",
  "abr.",
  "may.",
  "jun.",
  "jul.",
  "ago.",
  "sept.",
  "oct.",
  "nov.",
  "dic.",
];

export function calcularDuracion(inicio: Date, fin: Date): string {
  let totalMeses =
    (fin.getFullYear() - inicio.getFullYear()) * 12 +
    (fin.getMonth() - inicio.getMonth());
  if (fin.getDate() >= inicio.getDate()) totalMeses++;
  const años = Math.floor(totalMeses / 12);
  const mesesR = totalMeses % 12;
  if (años > 0 && mesesR > 0)
    return `${años} año${años > 1 ? "s" : ""} ${mesesR} mes${mesesR > 1 ? "es" : ""}`;
  if (años > 0) return `${años} año${años > 1 ? "s" : ""}`;
  return `${mesesR} mes${mesesR > 1 ? "es" : ""}`;
}

export function formatFecha(fecha: Date): string {
  return `${meses[fecha.getMonth()]} ${fecha.getFullYear()}`;
}

export function formatPeriodo(puesto: Puesto): string {
  const fin = puesto.actual ? new Date() : puesto.fin!;
  const finLabel = puesto.actual ? "actualidad" : formatFecha(puesto.fin!);
  const duracion = calcularDuracion(puesto.inicio, fin);
  return `${formatFecha(puesto.inicio)} – ${finLabel} · ${duracion}`;
}

export function duracionTotal(empresa: Empresa): string {
  const ahora = new Date();
  const fin = empresa.puestos.some((p) => p.actual)
    ? ahora
    : empresa.puestos.reduce(
        (max, p) => (p.fin && p.fin > max ? p.fin : max),
        empresa.inicio,
      );
  return calcularDuracion(empresa.inicio, fin);
}

export function calcularTiempoExperiencia(startDate: Date): string {
  const now = new Date();
  const diffTime = now.getTime() - startDate.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);
  const days = diffDays % 30;

  if (years > 0) return `${years} años, ${months} meses`;
  if (months > 0) return `${months} meses, ${days} días`;
  return `${days} días`;
}
