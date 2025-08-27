export const categories = [
  {
    id: "alojamiento",
    name: "Alojamiento",
    subcategories: [
      {
        id: "casa-playa",
        name: "Casa en la playa",
        icon: "beach",
        link: "/alojamiento/casa-playa",
      },
      {
        id: "casa-campo",
        name: "Casa en el campo",
        icon: "cabin",
        link: "/alojamiento/casa-campo",
      },
      {
        id: "apartamento",
        name: "Apartamento",
        icon: "apartment",
        link: "/alojamiento/apartamento",
      },
    ],
  },
  {
    id: "renta-auto",
    label: "Renta de Auto",
    icon: "car",
    link: "/renta-auto",

    subcategories: [
      {
        id: "renta-presencial",
        label: "Renta de auto (trato presencial)",
        icon: "car",
        link: "/renta-auto/renta-presencial",
      },
      {
        id: "renta-catalogo",
        label: "Renta de auto con catálogo",
        icon: "car",
        link: "/renta-auto/renta-catalogo",
      },
      {
        id: "ver-mas-wasap",
        label: "Ver más, trato directo a WhatsApp",
        icon: "whatsapp",
        link: "/renta-auto/ver-mas-wasap",
      },
      {
        id: "auto-clasico",
        label: "Auto clásico",
        icon: "car",
        link: "/renta-auto/auto-clasico",
      },
      {
        id: "auto-taxi",
        label: "Auto taxi",
        icon: "car",
        link: "/renta-auto/auto-taxi",
      },
    ],
  },
  {
    id: "tour-guiado",
    label: "Tour Guiado",
    icon: "tour",
    link: "/tour-guiado",
    subcategories: [
      {
        id: "tour-ciudad",
        label: "Ciudad",
        icon: "tour",
        link: "/tour-guiado/tour-ciudad",
      },
      {
        id: "tour-provincias",
        label: "Provincias",
        icon: "tour",
        link: "/tour-guiado/tour-provincias",
      },
      {
        id: "tour-paquetes",
        label: "Paquetes",
        icon: "tour",
        link: "/tour-guiado/tour-paquetes",
      },
    ],
  },
  {
    id: "excursiones",
    label: "Excursiones Experiencia",
    icon: "explore",
    link: "/excursiones",
    subcategories: [
      {
        id: "excursion-provincias",
        label: "Provincias",
        icon: "explore",
        link: "/excursiones/excursion-provincias",
      },
      {
        id: "excursion-paquetes",
        label: "Paquetes",
        icon: "explore",
        link: "/excursiones/excursion-paquetes",
      },
    ],
  },
  {
    id: "clases",
    label: "Clases",
    icon: "school",
    link: "/clases",
    subcategories: [
      {
        id: "clases-casino",
        label: "Clases de casino",
        icon: "school",
        link: "/clases/clases-casino",
      },
      {
        id: "clases-espanol",
        label: "Clases de español",
        icon: "school",
        link: "/clases/clases-espanol",
      },
    ],
  },
];
