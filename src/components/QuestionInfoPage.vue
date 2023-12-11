<template>
    <main class="main-div">
    
    <div class="master-question">
        <h2 class="question">Question for alluestion for all.</h2>
    </div>
    <div class="">
       <CardPage v-for = "(item,index) in home" @upvoteClicked ="updateUpvote"  :key="index" :cardItem = "item" :index="index"  class="left-div"/>
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
   
   .main-div{
       margin-top: 50px;
   }
   .master-question{
    
    width: 60%;
    margin: auto;
    margin-top: 92px;
    margin-left: 52px;
    padding: 2px;
    display: flex;
    align-items: center;
    border-style: groove;
    min-height: 60px;
   
   }
   .question{
    margin-left: 20px;
    text-align: justify;
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
   
   