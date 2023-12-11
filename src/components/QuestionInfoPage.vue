<template>
    
    <main class="main-div">
    
    <div class="master-question">
        <h2 class="question">{{ question }}</h2>
    </div>
    <div class="">
        <!-- {{ questionInfoId }}
        {{ question }} -->
       <!-- <CardPage v-for = "(item,index) in home" @upvoteClicked ="updateUpvote"  :key="index" :cardItem = "item" :index="index"  class="left-div"/> -->

       <CardPage v-for = "(item,index) in answer" @upvoteClicked ="updateUpvote" :key="index" :cardItem = "item" :index="index"  class="left-div"/>
       <div class="right-div"></div>
    </div>
    
   
   </main>
   </template>
   
   <script>
   import CardPage from '@/components/CardPage';
   import { computed, defineComponent } from 'vue';
   import { useAnswerStore } from "../store/answer-store.js"

   export default defineComponent({
       components:{
           CardPage
       },
       setup(){
        const answerStore = useAnswerStore()
        const questionInfoId = computed(() => answerStore.questionInfoId)
        const question = computed(()=> answerStore.question)
        //    const homeStore = useHomeStore();
        //    homeStore.FETCH_HOME();
        //    const home = computed(() => homeStore.home);
        //    const updateUpvote = (index)=>{
        //        home.value[index].upvoteCount++;
        //    }
        //    // console.log(home.value)
        //    return{
        //        home,
        //        updateUpvote
        //    }

            
            answerStore.FETCH_ANSWERS_BY_QUESTION();
            const answer = computed(() => answerStore.answers);
            console.log(answer.value)
            const updateUpvote = (index)=>{
            answer.value[index].upvoteCount++;
        }   
            return {
                answer,
                updateUpvote,
                questionInfoId,
                question
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
   
   