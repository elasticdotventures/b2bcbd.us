

<template>
  <div id="app">
    <B2bHeader msg="this is a property"/>
     <B2bIntro />
<!--
    <VueDemo />
    <B2bAbout />
    <B2bServices />
 -->
     <B2bContactForm />
    <B2bFooter />
    <CookieLaw />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import B2bHeader from './components/B2bHeader.vue';
import B2bIntro from './components/B2bIntro.vue';
import B2bAbout from './components/B2bAbout.vue';
import B2bServices from './components/B2bServices.vue';
import B2bContactForm from './components/B2bContactForm.vue';
import B2bFooter from './components/B2bFooter.vue';
import CookieLaw from './components/CookieLaw_EU_GDPR.vue'
// import VueDemo from './components/Demo.vue';

@Component({
  components: {
    B2bHeader, B2bIntro, B2bAbout, B2bServices, B2bContactForm, B2bFooter, CookieLaw
  },
})
export default class App extends Vue {}


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

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
