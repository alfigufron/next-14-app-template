import { useTranslations } from 'next-intl'
import React from 'react'

export default function MainPage() {
  const t = useTranslations('MainPage')

  return <div>{t('title')}</div>
}
