<template>
  <div class="WA-cnt">
  <NavBar/>
  <router-view/>
</div>
</template>


<script>
import NavBar from '@/components/NavBar';
import { defineComponent } from 'vue';
// import { useProfileStore } from "./store/profile-store.js"


export default defineComponent({
  
  components: {
    NavBar
  },
  setup(){
    // const profileStore = useProfileStore();
    // if(sessionStorage.getItem('userId')){
    //   profileStore.GET_USER_FROM_DB();
    // }
    
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