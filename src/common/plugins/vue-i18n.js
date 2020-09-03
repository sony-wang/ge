import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { locale as vn } from '@/common/config/i18n/vn'
import { locale as tw } from '@/common/config/i18n/tw'
Vue.use(VueI18n)
let messages = {}
messages = { ...messages, vn, tw }
const lang = localStorage.getItem('language') || 'vn'
const i18n = new VueI18n({
  locale: lang,
  messages,
})
export default i18n