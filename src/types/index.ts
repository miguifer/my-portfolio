export interface Tecnologia {
  nombre: string;
  logo: string;
  url: string;
}

export interface ProyectoData {
  titulo: string;
  descripcion: string;
  repositorio?: string;
  demo?: string;
  imagenes?: string | string[];
  icono?: string;
  tecnologias: Tecnologia[];
  enDesarrollo?: boolean;
}

export interface Puesto {
  titulo: string;
  tipo: string;
  inicio: Date;
  fin?: Date;
  actual?: boolean;
}

export interface Empresa {
  nombre: string;
  ubicacion: string;
  inicio: Date;
  puestos: Puesto[];
}
