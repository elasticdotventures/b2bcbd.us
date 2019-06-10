 
<template>
  <footer>
    <cookie-law theme="dark-lime"  v-on:accept="ThankYouMethod()">
 
  <div style="text-align: left" slot-scope="props">
    <p>This site uses browser cookies so we can monitor our advertising effectiveness. <a href="tos.html">Learn more</a></p>
    <button class="skew btn-primary" @click="props.accept"><span>That's fine</span></button>
    <button class="skew btn-danger" @click="props.close"><span>Please stop</span></button>
  </div>
         
    </cookie-law>
  </footer>
</template>
 
<script>
  import CookieLaw from 'vue-cookie-law'
  export default {
    components: { CookieLaw },
    methods: {
        ThankYouMethod: ()=>{
            alert('thanks buddy')
        }
    }
  }
</script>