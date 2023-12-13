<template>
 <main class="main">

 <!-- {{ home }} -->


 <div class="left">
    <CardPage v-for = "(item,index) in home" @upvoteClicked ="updateUpvote" :key="index" :cardItem = "item" :index="index"  class="left-div"/>
   
 </div>
 <div class="right-div"> Ads</div>
 <!-- <div class="right">
    <div class="right-div"></div>
 </div> -->

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
        const updateUpvote = (index)=>{
            home.value[index].upvoteCount++;
        }
      
        // console.log(home.value)
        return{
            home,
            updateUpvote
        }
    }
    

})
</script>
<style scoped>
 
.main{
    margin-top: 80px;
    display: flex;
}
.left-div{
    width:90%;
    background-color: white;
    padding: 2%;
    
}
.right-div{
    width: 160%;
    background-color: white;
    margin-right: 55px;
    height: 432px;
    margin-top: 16px;
}
 
.img-div img{
   
    height: 432px;
    width: 100%;
}
@media screen and (min-width: 360px) and (max-width: 900px) {
    .right-div {
    background-color: white;
    height: 419px;
    margin-top: 10px;
    margin-left: -99px;
    margin-right: 12px;
}
.container {
    margin-top: 10px;
    margin-left: 9px;
    margin-right: 15px;
}
.left-div {
    width: 71%;
    background-color: white;
    padding: 2%;
    min-width: 246px;
}
}
</style>

