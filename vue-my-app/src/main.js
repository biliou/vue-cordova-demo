// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
    optionTestKey: 'optionTestValue'
})

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    data: function() {
        return {
            cordova: Vue.cordova
        }
    }
})