import { createI18n } from 'vue-i18n'
import en from './en.json'
import pl from './pl.json'
import ru from './ru.json'
import ua from './ua.json'
const i18n = createI18n({
    legacy: false, // you must set `false`, to use Compostion API
  locale: 'pl', // установите язык по умолчанию
  messages: {
    en:en, 
    pl:pl,
    ru: ru,
    ua: ua
    // добавьте здесь другие языки
  }
})
export default i18n
