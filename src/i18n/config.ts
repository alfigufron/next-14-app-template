export type Locale = (typeof locales)[number]

export const locales = ['id', 'en'] as const
export const defaultLocale: Locale = 'id'

export const LOCALE_COOKIE_NAME = 'app_locale'
