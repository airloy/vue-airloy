/**
 * VueAirloy v0.9.6
 * (c) 2016 Layman
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('airloy')) :
  typeof define === 'function' && define.amd ? define(['airloy'], factory) :
  (global.VueAirloy = factory(global.airloy));
}(this, (function (airloy) { 'use strict';

airloy = 'default' in airloy ? airloy['default'] : airloy;

/**
 * Created by Layman <anysome@gmail.com> (http://github.com/anysome) on 16/10/26.
 */

var Vue; // bind on install
function install (_Vue) {
  if (Vue) {
    console.error(
      '[airloy] already installed. Vue.use(VueAriloy) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  Object.defineProperty(Vue.prototype, '$airloy', {
    get () { return airloy }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var index = {
  install,
  configure: airloy.configure,
  use: airloy.use
};

return index;

})));
