# Cuba Paradise

Sitio web turistico desarrollado con Astro para promocionar y gestionar experiencias en Cuba: tours, excursiones, alojamiento y servicios complementarios.

## Descripcion del Proyecto

**Cuba Paradise** es una web orientada a conversion para presentar una oferta turistica completa en un solo lugar. El proyecto organiza productos por categorias y facilita el contacto directo con potenciales clientes mediante WhatsApp.

## El Desafio

- Unificar diferentes lineas de negocio turistico en una experiencia web clara.
- Mostrar mucho contenido sin saturar la navegacion.
- Mejorar la conversion con llamados a la accion y contacto inmediato.

## La Solucion

- Arquitectura de paginas por categoria y detalle usando Astro.
- Contenido dinamico con colecciones para escalar nuevos productos facilmente.
- Componentes reutilizables para mantener consistencia visual y tecnica.
- Formularios e integraciones enfocadas en generar leads por WhatsApp.

## Resultados

- Plataforma lista para captar y calificar clientes potenciales.
- Navegacion mas intuitiva entre tours, excursiones, alojamiento y servicios.
- Mejor experiencia responsive en desktop y mobile.
- Base tecnica mantenible para evolucionar el negocio digital.

## Tecnologias

- Astro 6
- TypeScript / JavaScript
- Bootstrap
- Astro Content Collections
- HTML5 + CSS3

## Mejoras Aplicadas

### UX/UI y Conversion
- **Boton WhatsApp sticky global**: Flotante en todas las paginas con tracking de clics.
- **CTA mejorados**: Formulario de contacto con campo `subject` (tipo de viaje) y validaciones.
- **SEO base completo**: Canonical URLs, Open Graph, Twitter Cards en layout principal.
- **Tracking GA4**: Eventos de conversion (clic WhatsApp, envio de formulario).

### Performance y Responsive
- **Carousel optimizado**: Lazy loading, tamanos fluidos, autoplay robusto con pausa en visibilidad.
- **Navbar mejorado**: Breakpoints ajustados para tablet/movil, navegacion mas fluida.
- **Cards optimizadas**: Imagenes con lazy loading, decoding async, tamanos responsivos.
- **Secciones destacadas**: AboutBanner y FeatureStar mejorados para mobile y carga de imagen.

### Tecnico y Estabilidad
- **Migracion Astro v6**: Content collections con nuevo formato (`src/content.config.ts`).
- **Correcciones rutas dinamicas**: Fix en `[slug]` para build estable en todas las paginas.
- **Compatibilidad render**: Actualizacion de `entry.render()` a `render(entry)` para Astro v6.

## Estado Tecnico

- ✅ Build validado con `npm run build` (24 paginas generadas).
- ✅ Sitio en modo `static` (Astro 6).
- ✅ Rutas dinamicas `[slug]` generadas correctamente.
- ✅ Content collections migradas a formato Astro v6.
- ✅ SEO base implementado (canonical, OG, Twitter).
- ✅ Tracking GA4 configurado en layout principal.
- ⚠️ Requiere configurar `GA_MEASUREMENT_ID` real en `DefaultLayout.astro`.

## Requisitos

- Node.js `>= 22.12.0`
- npm `>= 10`

## Estructura del Proyecto

```text
/
|- public/
|- src/
|  |- components/
|  |- content/
|  |- layouts/
|  |- pages/
|  |- styles/
|- src/content.config.ts
|- astro.config.mjs
|- package.json
|- tsconfig.json
```

## Comandos

Todos los comandos se ejecutan desde la raiz del proyecto:

| Comando | Accion |
| --- | --- |
| `npm install` | Instala dependencias |
| `npm run dev` | Inicia el servidor local en `localhost:4321` |
| `npm run build` | Genera la version de produccion en `./dist/` |
| `npm run preview` | Previsualiza la build localmente |

## Puesta en Marcha

```bash
npm install
npm run dev
```

## Nota

Este README esta optimizado para documentacion de portafolio y seguimiento tecnico/comercial del proyecto.
