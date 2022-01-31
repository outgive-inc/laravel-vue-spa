import Vue from 'vue'
import store from '~/store'
import router from '~/router'
import i18n from '~/plugins/i18n'
import App from '~/components/App'

import '~/plugins'
import '~/components'

Vue.config.productionTip = false

window.axios = require('axios');
window._ = require('lodash');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/* eslint-disable no-new */
new Vue({
  i18n,
  store,
  router,
  ...App
})
