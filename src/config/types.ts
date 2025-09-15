/**
 * TIPOS TYPESCRIPT SIMPLIFICADOS
 * Solo incluye interfaces realmente utilizadas en el proyecto
 */

// ==============================================
// TIPOS PARA CARDS Y COMPONENTES (realmente utilizados)
// ==============================================

export interface CardItem {
  title: string;
  description: string;
  icon?: string;
  link: string;
  image?: string;
  categoria?: string;
  duracion?: string;
  precio?: string;
  moneda?: string;
  destacado?: boolean;
  tipo?: string;
}

export interface BaseCardProps {
  sectionTitle?: string;
  sectionSubtitle?: string;
  cardType?: 'service' | 'catalog' | 'accommodation';
  items: CardItem[];
  showImages?: boolean;
  showBadges?: boolean;
  showMetadata?: boolean;
  columnsLg?: number;
  columnsMd?: number;
  columnsSm?: number;
}