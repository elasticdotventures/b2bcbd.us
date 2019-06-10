import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'

import VueRouter from 'vue-router';


// import EVA from './config.js'
// the phone number, language, etc. will all pull from the config.
// and this global object will eventually be stored in a vue-x repo (i think)
// the purpose is to allow a customer to login and see information 
// i.e. your customer phone number is # connected to the CRM system. 





Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

// https://www.npmjs.com/package/vue-cookie
var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);
// From some method in one of your Vue components
// this.$cookie.set('test', 'Hello world!', 1);
// This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day
// To get the value of a cookie use
// this.$cookie.get('test');
// To delete a cookie use
// this.$cookie.delete('test');
// Setting the cookie Domain
/*
ADVANCED: 

this.$cookie.set('test', 'Random value', {expires: 1, domain: 'localhost'});
 
// As this cookie is set with a domain then if you wish to delete it you have to provide the domain when calling delete
this.$cookie.delete('test', {domain: 'localhost'});
 
// Customizing expires
var date = new Date;
date.setDate(date.getDate() + 21);
 
this.$cookie.set('dateObject', 'A date object', { expires: date });
this.$cookie.set('dateString', 'A parsable date string', { expires: date.toGMTString() });
this.$cookie.set('integer', 'Seven days later', { expires: 7 });
this.$cookie.set('stringSuffixY', 'One year later', { expires: '1Y' });
this.$cookie.set('stringSuffixM', 'One month later', { expires: '1M' });
this.$cookie.set('stringSuffixD', 'One day later', { expires: '1D' });
this.$cookie.set('stringSuffixh', 'One hour later', { expires: '1h' });
this.$cookie.set('stringSuffixm', 'Ten minutes later', { expires: '10m' });
this.$cookie.set('stringSuffixs', 'Thirty seconds later', { expires: '30s' });
*/ 


