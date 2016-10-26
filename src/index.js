/**
 * Created by Layman <anysome@gmail.com> (http://github.com/anysome) on 16/10/26.
 */

var Vue // bind on install
import airloy from 'airloy'

function install (_Vue) {
  if (Vue) {
    console.error(
      '[airloy] already installed. Vue.use(VueAriloy) should be called only once.'
    )
    return
  }
  Vue = _Vue
  Object.defineProperty(Vue.prototype, '$airloy', {
    get () { return airloy }
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  configure: airloy.configure,
  use: airloy.use
}
