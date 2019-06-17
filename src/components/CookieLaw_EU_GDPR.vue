<!--

Purpose: GDPR compliance. 
mostly from 
https://www.npmjs.com/package/vue-cookie-law

TODO: link to <a href="tos.html">Learn more</a>

-->


<template>
  <header>
    <cookie-law theme="dark-lime" position="top" v-on:accept="AcceptMethod()" v-on:close="DeclineMethod()">
 
  <div style="text-align: left" slot-scope="props">
    <p>This site uses browser cookies so we can monitor our advertising effectiveness. </p>
    <button class="skew btn-primary" @click="props.accept"><span>That's fine</span></button>
    <button class="skew btn-danger" @click="props.close"><span>Please stop</span></button>
  </div>
         
    </cookie-law>
  </header>
</template>
 
<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw },
    methods: {
        AcceptMethod: ()=>{
            this.$ga.event('button','click','CookieLaw_EU_GDPR_Accept',1);
        },
        DeclineMethod: ()=>{
            alert('please have a nice day.')
            this.$ga.event('button','click','CookieLaw_EU_GDPR_Decline',0);
        }
    }
  }
</script>