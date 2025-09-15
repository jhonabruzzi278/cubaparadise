/**
 * CONFIGURACIÓN SIMPLIFICADA CUBA PARADISE
 * Solo incluye las funciones realmente utilizadas en el proyecto
 */

/**
 * Genera rutas dinámicas para contenido
 * Única función utilizada de toda la configuración anterior
 */
export function generateContentRoute(category: string, type: string, slug: string): string {
  if (category === 'tours') return `/tours/paquetes/${slug}`;
  if (category === 'excursiones') return `/excursiones/paquetes/${slug}`;
  if (type === 'apartamento') return `/alojamiento/apartamento/${slug}`;
  if (type === 'casa-en-el-campo') return `/alojamiento/casa-en-el-campo/${slug}`;
  if (type === 'casa-en-la-playa') return `/alojamiento/casa-en-la-playa/${slug}`;
  return '#';
}