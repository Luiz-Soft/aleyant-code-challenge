import { createI18n } from 'vue-i18n'
import eng from '@/translations/eng.json'
import pt from '@/translations/pt.json'

const i18n = createI18n({
  legacy: false,
  locale: 'eng',
  fallbackLocale: 'eng',
  messages: {
    eng,
    pt
  }
})

export default i18n
