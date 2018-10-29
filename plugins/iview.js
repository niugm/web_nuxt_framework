import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/zh-CN'
export default () => {
  Vue.use(iView, { locale })
}
