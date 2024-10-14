'use server'

import { cookies } from 'next/headers'
import { Locale, LOCALE_COOKIE_NAME, defaultLocale } from './config'

const localeManager = {
  async getUserLocale() {
    return cookies().get(LOCALE_COOKIE_NAME)?.value || defaultLocale
  },

  async setUserLocale(locale: Locale) {
    cookies().set(LOCALE_COOKIE_NAME, locale)
  },
}

export default localeManager
