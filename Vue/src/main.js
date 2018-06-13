import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import Footer from './components/shared/Footer.vue';
import Header from './components/shared/Header.vue';
import Footer1 from './components/shared/Footer1.vue';
import Header1 from './components/shared/Header1.vue';
import ServerDetails from './components/Server/ServerDetails.vue';
import Servers from './components/Server/Servers.vue';

Vue.component('app-servers', Home);
Vue.component('app-footer', Footer);
Vue.component('app-header', Header);
Vue.component('servers', Servers);
Vue.component('app-serverDetail', ServerDetails);
Vue.component('footers', Footer1);
Vue.component('headers', Header1);

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasReset', age);
    }
  }

});

export const serverBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

