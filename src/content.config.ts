import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const alojamiento = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/alojamiento" }),
  schema: z.object({
    title: z.string(),
    tipo: z.string(),
    ubicacion: z.string(),
    destacado: z.boolean(),
    duracion: z.string(),
    capacidad: z.number(),
    descripcion: z.string(),
    img: z.string(),
    whatsappMessage: z.string().optional(),
  }),
});

const tours = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tours" }),
  schema: z.object({
    title: z.string(),
    categoria: z.string(),
    destacado: z.boolean(),
    duracion: z.string(),
    incluye: z.string().optional(),
    guia: z.string().optional(),
    descripcion: z.string(),
    img: z.string(),
    whatsappMessage: z.string().optional(),
  }),
});

const excursiones = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/excursiones" }),
  schema: z.object({
    title: z.string(),
    categoria: z.string(),
    destacado: z.boolean(),
    duracion: z.string(),
    grupo: z.string().optional(),
    descripcion: z.string(),
    img: z.string(),
    whatsappMessage: z.string().optional(),
  }),
});

const servicios = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/servicios" }),
  schema: z.object({
    title: z.string(),
    tipo: z.string().optional(),
    destacado: z.boolean().optional(),
    duracion: z.string().optional(),
    descripcion: z.string(),
    img: z.string().optional(),
    whatsappMessage: z.string().optional(),
  }),
});

const paquetesExcursiones = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/excursiones-paquetes" }),
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    duracion: z.string(),
    incluye: z.string(),
    img: z.string(),
    idiomas: z.string().optional(),
    notas_precio: z.string().optional(),
    destacado: z.boolean().optional(),
    whatsappMessage: z.string().optional(),
  }),
});

const paquetesTours = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/tours-paquetes" }),
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    duracion: z.string(),
    incluye: z.string(),
    img: z.string(),
    idiomas: z.string().optional(),
    notas_precio: z.string().optional(),
    destacado: z.boolean().optional(),
    whatsappMessage: z.string().optional(),
  }),
});

export const collections = {
  alojamiento,
  tours,
  excursiones,
  servicios,
  "excursiones-paquetes": paquetesExcursiones,
  "tours-paquetes": paquetesTours,
};
