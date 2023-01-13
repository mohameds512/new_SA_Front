import Vue from 'vue'
import { ToastPlugin, ModalPlugin, TooltipPlugin, VBTooltip, ButtonPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'
export const EventBus = new Vue();
import VueCookie from 'vue-js-cookie'
Vue.use(VueCookie)

//  vue-excel-editor
import VueExcelEditor from './views/components/common/vue-excel-editor/src/main'
Vue.use(VueExcelEditor)

import yearPicker from 'vue-year-picker'

Vue.use(yearPicker);

//vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/clipboard'
import '@/libs/toastification'
import '@/libs/sweet-alerts'
import '@/libs/vue-select'
import '@/libs/tour'

import '@/mixins/mixins'



// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(TooltipPlugin)
Vue.use(ButtonPlugin)
Vue.directive('b-tooltip', VBTooltip)
    // Composition API
Vue.use(VueCompositionAPI)



// Feather font icon - For form-wizard
// * Shall remove it if not using font-icons of feather-icons - For form-wizard
require('@core/assets/fonts/feather/iconfont.css') // For form-wizard

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')