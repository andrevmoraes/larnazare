export const SITE_URL = "https://larnazare.com.br";

export const ORG_NAME = "Lar Espírita Maria de Nazaré";
export const ORG_LEGAL_NAME = "Associação Espírita Jesus e Caridade";
export const ORG_CNPJ = "44.935.253/0001-09";
export const ORG_FOUNDING_YEAR = "1973";

export const ADDRESS_LINE_1 = "Av. Nelson Patelli, 79 - Parque da Imprensa";
export const ADDRESS_CITY = "Mogi Mirim";
export const ADDRESS_STATE = "SP";
export const ADDRESS_POSTAL_CODE = "13806-305";
export const ADDRESS_LINE_2 = `${ADDRESS_CITY} - ${ADDRESS_STATE}, CEP ${ADDRESS_POSTAL_CODE}`;
export const ADDRESS_FULL = `${ADDRESS_LINE_1}, ${ADDRESS_LINE_2}`;

export const PHONE_DISPLAY = "(19) 3862-1448";
export const PHONE_TEL = "+551938621448";

export const VISIT_HOURS_LABEL = "Todos os dias, das 09h00 às 16h00";
export const VISIT_HOURS_OPEN = "09:00";
export const VISIT_HOURS_CLOSE = "16:00";

export const INSTAGRAM_URL = "https://www.instagram.com/larespiritamarianazare/?hl=pt";
export const FACEBOOK_URL = "https://www.facebook.com/aejesusecaridade/";

export const SITE_TAGLINE = "Acolhendo com Amor e Caridade desde 1973";
export const SITE_DESCRIPTION = `${SITE_TAGLINE}. Hospital especializado conveniado ao SUS em ${ADDRESS_CITY} - ${ADDRESS_STATE}.`;

export const MAPS_QUERY = encodeURIComponent(ADDRESS_FULL);
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
