<template>
  <NavBar/>
  <router-view/>
</template>


<script>
import NavBar from '@/components/NavBar';
import { defineComponent } from 'vue';

export default defineComponent({
  components:{
    NavBar
  }
})
</script>




<style>

</style>
