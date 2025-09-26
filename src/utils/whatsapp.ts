// Utilidades de WhatsApp para mensajes personalizados

export const whatsappNumber = "5356851846"; // Número de WhatsApp de Cuba Paradise

export type MessageType = 'alojamiento' | 'tours' | 'excursiones' | 'servicios' | 'paquetes-tours' | 'paquetes-excursiones' | 'renta-auto' | 'clases-salsa' | 'masaje-terapeutico';

export function getWhatsAppMessage(type: MessageType, title?: string, customMessage?: string): string {
    // Si hay un mensaje personalizado, usarlo
    if (customMessage) {
        return encodeURIComponent(customMessage);
    }
    
    // Si no, usar los mensajes por defecto
    const messages = {
        alojamiento: `Hola! Quiero más información sobre ${title || 'alojamiento'}. ¿Podrían ayudarme con disponibilidad y precios?`,
        tours: `Hola! Me interesa ${title || 'tours'}. ¿Pueden darme más información sobre itinerario y precios?`,
        excursiones: `Hola! Quisiera información sobre ${title || 'excursiones'}. ¿Qué incluye y cuándo está disponible?`,
        servicios: `Hola! Necesito información sobre ${title || 'servicios'}. ¿Podrían darme detalles del servicio?`,
        'paquetes-tours': `Hola! Me interesa ${title || 'paquetes de tours'}. ¿Pueden darme más información sobre itinerarios y precios?`,
        'paquetes-excursiones': `Hola! Quisiera información sobre ${title || 'paquetes de excursiones'}. ¿Qué incluyen y cuándo están disponibles?`,
        'renta-auto': `Hola! Quiero información sobre renta de autos. ¿Qué vehículos tienen disponibles y cuáles son las tarifas?`,
        'clases-salsa': `Hola! Me interesa tomar clases de salsa cubana. ¿Podrían darme información sobre horarios y precios?`,
        'masaje-terapeutico': `Hola! Necesito información sobre masajes terapéuticos. ¿Qué tipos de masajes ofrecen y cuáles son los precios?`
    };
    
    return encodeURIComponent(messages[type]);
}

export function getWhatsAppUrl(type: MessageType, title?: string, customMessage?: string): string {
    const message = getWhatsAppMessage(type, title, customMessage);
    return `https://wa.me/${whatsappNumber}?text=${message}`;
}