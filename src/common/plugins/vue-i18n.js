import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { locale as vn } from '@/common/config/i18n/vn'
import { locale as cn } from '@/common/config/i18n/cn'
Vue.use(VueI18n)
let messages = {}
messages = { ...messages, vn, cn }
const lang = localStorage.getItem('language') || 'cn'
const i18n = new VueI18n({
  locale: lang,
  messages,
})
export default i18n