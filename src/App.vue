<!--


Author: @b

-->
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
    <B2bDevOnly />
    <CookieLaw />
    <router-view></router-view>
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
import B2bDevOnly from './components/B2bDevOnly.vue'
// import VueDemo from './components/Demo.vue';

if (process.env.NODE_ENV == 'DEV') {
  // this code is only run on dev. 
}

@Component({
  components: {
    B2bHeader, B2bIntro, B2bAbout, B2bServices, B2bContactForm, B2bFooter, CookieLaw, B2bDevOnly   // should display on DEV only.
    
  },
})

export default class App extends Vue {
  
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
