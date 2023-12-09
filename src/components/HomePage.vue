<template>
 <main class="main">

 <!-- {{ home }} -->
 <div class="">
    <CardPage v-for = "item,index in home" :key="index" :cardItem = "item" class="left-div"/>
    <div class="right-div"></div>
 </div>
 

</main>
</template>






<script>
import CardPage from '@/components/CardPage';
import { computed, defineComponent } from 'vue';
import { useHomeStore } from "../store/home-store.js"
export default defineComponent({
    components:{
        CardPage
    },
    setup(){
        const homeStore = useHomeStore();
        homeStore.FETCH_HOME();
        const home = computed(() => homeStore.home);
        // console.log(home.value)
        return{
            home
        }
    }
    

})
</script>

<style scoped>

.main{
    margin-top: 80px;
}
.left-div{
    width:60%;
    background-color: white;
    padding: 2%;
    
}
.right-div{
width:25%
}

</style>

