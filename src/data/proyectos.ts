import type { ProyectoData } from "../types";

export const proyectos: ProyectoData[] = [
  {
    titulo: "Afipiti",
    descripcion: "Aplicación web desarrollada con <strong>Next.js</strong>, integrada con <strong>Sanity</strong> como sistema de gestión de contenido headless.",
    repositorio: "https://github.com/miguifer/afipiti",
    demo: "https://afipiti.com",
    imagenes: ["/images/proyectos/afipiti/1.png", "/images/proyectos/afipiti/2.png"],
    tecnologias: [
      { nombre: "Next.js", logo: "/tech/next.svg", url: "https://nextjs.org" },
      { nombre: "Sanity", logo: "/tech/sanity.svg", url: "https://sanity.io" },
      { nombre: "Tailwind CSS", logo: "/tech/tailwind.svg", url: "https://tailwindcss.com" },
      { nombre: "Resend", logo: "/tech/resend.svg", url: "https://resend.com" },
    ],
    enDesarrollo: false,
  },
  {
    titulo: "Scrollvideo",
    descripcion: "Plugin para WordPress que permite reproducir videos sincronizados con el scroll.",
    repositorio: "https://github.com/miguifer/scrollvideo",
    demo: "https://wordpress.org/plugins/sleek-scroll-video/",
    icono: "/images/proyectos/scrollvideo/icon.png",
    tecnologias: [
      { nombre: "WordPress", logo: "/tech/wordpress.svg", url: "https://wordpress.org" },
      { nombre: "Apache Subversion", logo: "/tech/apache-subversion.svg", url: "https://subversion.apache.org/" },
    ],
    enDesarrollo: false,
  },
];
