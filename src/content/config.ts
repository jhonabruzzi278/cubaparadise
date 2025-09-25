// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const alojamiento = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // slug: z.string(),
    tipo: z.string(),
    ubicacion: z.string(),
    destacado: z.boolean(),
    
    duracion: z.string(),
    capacidad: z.number(),
    descripcion: z.string(),
    img: z.string(),
  }),
});

const tours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // slug: z.string(),
    categoria: z.string(),
    destacado: z.boolean(),
    
    duracion: z.string(),
    incluye: z.string().optional(),
    guia: z.string().optional(),
    descripcion: z.string(),
    img: z.string(),
  }),
});

const excursiones = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // slug: z.string(),
    categoria: z.string(),
    destacado: z.boolean(),
    
    duracion: z.string(),
    grupo: z.string().optional(),
    descripcion: z.string(),
    img: z.string(),
  }),
});

const servicios = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tipo: z.string().optional(),
    destacado: z.boolean().optional(),
    
    duracion: z.string().optional(),
    descripcion: z.string(),
    img: z.string().optional(),
  }),
});

const paquetesExcursiones = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    duracion: z.string(),
    incluye: z.string(),
    
    img: z.string(),
    idiomas: z.string().optional(),
    notas_precio: z.string().optional(),
    destacado: z.boolean().optional(),
  }),
});

const paquetesTours = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descripcion: z.string(),
    duracion: z.string(),
    incluye: z.string(),
    
    img: z.string(),
    idiomas: z.string().optional(),
    notas_precio: z.string().optional(),
    destacado: z.boolean().optional(),
  }),
});

// declara solo colecciones que realmente tengan archivos:
export const collections = {
  alojamiento,
  tours,
  excursiones,
  servicios,
  'excursiones-paquetes': paquetesExcursiones,
  'tours-paquetes': paquetesTours,
};
