

import Vue from 'vue'


/* 
The vue-router object

The router object, accessed using this.$router 
  from any component when the Vue Router is installed in the root 
  Vue components

Usage: make the app navigate to a new route using
    
    // push() is used to go to a new route,  
    // adding a new item to the browser history. 
    this.$router.push() 
    this.$router.push('about') //named route, see later
    this.$router.push({ path: 'about' })
    //using query parameters (post?post_slug=hello-world)
    this.$router.push({ path: 'post', query: { post_slug: 'hello-world' } }) 
        
    // replace() is the same, except it does not push a new state to the history.
    // which resemble the pushState, 
    // replaceState and go methods of the Browser History API.
    this.$router.replace()
    this.$router.replace({ path: 'about' })
    this.$router.go()
    this.$router.go(-1) //go back 1 step
    this.$router.go(1) //go forward 1 step

After you call Vue.use() passing the router object, in any component of the app you have access to these objects:

    this.$router is the router object
    this.$route is the current route object

 */
import VueRouter from 'vue-router'

import store from './store' // this is vue-x
import App from './App.vue'
import Eva from './Eva.vue'
import './registerServiceWorker'

// import EVA from './config.js'
// the phone number, language, etc. will all pull from the config.
// and this global object will eventually be stored in a vue-x repo (i think)
// the purpose is to allow a customer to login and see information 
// i.e. your customer phone number is # connected to the CRM system. 

Vue.config.productionTip = false

// TODO: select which application we are loading via vue-router.
// but first we need to setup vue-router.

// Define route components.
// App : 'Website'
// Eva : 'Intranet'
// These can be imported from other files
const LoginBox = { template: '<div>foo</div>' }
const AboutBox = { template: '<div>bar</div>' }

// Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  // { path: '/xyz', redirect: '/zyx'}
  { path: '/', component: App },
  { path: '/eva', component: Eva },
  { path: '/about', component: AboutBox }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  // mode: 'history',
  // base: __dirname, 
  routes // short for `routes: routes`
})

Vue.use(VueRouter)


new Vue({
  store,  // vue-x (global object)
  router, // By injecting the router, yei get access to it as this.$router as well as the current route as this.$route inside of any component:
  render: h => h(App)
}).$mount('#app')

// the app has started! 

/* 
vue-analytics 
https://matteogabriele.gitbooks.io/vue-analytics/content/
https://github.com/MatteoGabriele/vue-analytics/blob/master/docs/installation.md
https://qiita.com/geerpm/items/ae4f3df8703d31236968  <-- typescript support ??  (need to go back and review this)


https://github.com/MatteoGabriele/vue-analytics/blob/HEAD/docs/opt-out.md

VueAnalytics API(s)  event  ecommerce set page query screenview time require exception social

methods: {
  blah() {
    this.$ga.event({eventCategory:'counter', eventAction:'increase', eventValue: this.counter });
  }
  }
}

*/

Vue.config.productionTip = false;
const isProd = process.env.NODE_ENV == 'production';
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-54542129-5',
  autoTracking: {
    exception: true// creates Vue.config.errorHandler that track all errors within the component, and listen to global errors fired by browser. 
  },
  debug: {
    enabled: !isProd,
    sendHitTask: isProd,
  },
  disableScriptLoader: true
})

// check to see if they have a cookie; and which site they are on.
// this.$ga.set({ fieldName: fieldValue })
// this.$ga.event('category', 'action', 'label', 123);


// if no cookie; then assign one -- a or b version? 
// output (or read) google analytics tag
// selectively show content


// https://www.npmjs.com/package/tiny-cookie
// *tiny-cookie is used in vue-cookie-law and CookieLaw_EU_GDPR.vue 
// You can import all methods.
// import * as Cookies from 'tiny-cookie'

// Or, you can import the methods as needed.
// import { isEnabled, get, set, remove } from 'tiny-cookie'
 
// No alias required, just imports.
// import { isCookieEnabled, getCookie, setCookie, removeCookie } from 'tiny-cookie'

// ** OR **

// https://www.npmjs.com/package/vue-cookie
// var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
// Vue.use(VueCookie);
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


