<template>
  <div class="WA-cnt">
    <!-- <NavBar/> -->
    <div v-if="authStatus"> <NavBar/></div>
  <router-view/>
</div>
</template>


<script>
import NavBar from '@/components/NavBar';
import { defineComponent,computed } from 'vue';
import { useProfileStore } from "./store/profile-store.js"
import router from './router';


export default defineComponent({
  
  components: {
    NavBar
  },
  setup(){
   
    const profileStore = useProfileStore()
    const authStatus = computed(()=>profileStore.authstatus)

    if(sessionStorage.getItem("userId")){
      profileStore.updateAuthStatus(true);
      router.replace("/home")
    }else{
      router.replace("/login")
    }
    // const profileStore = useProfileStore();
    // if(sessionStorage.getItem('userId')){
    //   profileStore.GET_USER_FROM_DB();
    // }
    return{
      authStatus
    }
  }
});


</script>




<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow-x: hidden;
  
}
.WA-cnt {
  margin: 0;

}

body {
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  background-color: rgb(228, 223, 223);
}


</style>