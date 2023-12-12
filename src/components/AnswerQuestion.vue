<template>
 
  <div class="app">
    <main>
      <h2>Questions for you</h2>
      <!-- {{ questions }} -->
      <div>
        <div v-for="(question, index) in questions" :key="index" class="question">
          <p>{{ question.question }}</p>
          <button @click="openDialog(index,question.questionId)" class="submit-btn">Answer</button>
        </div>
      </div>
    </main>
    <!-- {{ questions }} -->
    <div v-if="isDialogVisible" class="dialog-overlay">
      <div class="dialog-content">
        <p style="display:inline-block;">
          <img src="" alt="Profile Image">
          Profile Name
        </p>
        <h3>Sample Question</h3>
        <textarea
          placeholder="Write your answer"
          id="answer"
          v-model="currentAnswer"
          class="textarea"
          rows="10"
          cols="80"
        ></textarea>
        <div>
          <button @click="closeDialog" class="submit-btn">Cancel</button>
          <button @click="postAnswer" class="submit-btn">Post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import {computed, ref} from 'vue';
//  import questionStore, { question } from '@/store/question-store.js'
import questionStore from '@/store/question-store.js'
export default {
  setup() {
    
    // const questions = [
    //   { text: "Sample Questiotryryytn" },
    //   { text: "Sample Question" },
    //   { text: "Sample Question" },
    // ];

  

const qs = questionStore();

    // qs.FETCH_QUESTION();
    qs.FETCH_QUESTIONS_BY_CATEGORY();
    const questions = computed(()=> qs.questions)
    const selectedQuestionId = ref(null)
    const isDialogVisible = ref(false);
    const currentAnswer = ref("");
    let currentQuestionIndex = ref(null);

    const openDialog = (index,) => {
      isDialogVisible.value = true;
      currentQuestionIndex.value = index;
      selectedQuestionId.value = questions.value[index].questionId
      
    };

    const closeDialog = () => {
      currentAnswer.value = "";
      isDialogVisible.value = false;
    };    

    // const postAnswer = () => {
    //   console.log("Posting answer:", currentAnswer.value);
    //   closeDialog();
    // };

    // const answers = ref([]);
    // const FETCH_ANSWERS_BY_QUESTIONID = async (questionId) => {
    //   const apiUrl = `http://10.20.3.163:8091/answer/getAnswers/${questionId}`;
    //   const res = await fetch(apiUrl);
    //   const jsonnew = await res.json();
    //   answers.value = jsonnew.resultData;
    //   console.log(answers.value);
    // }
    const answer = ref("")
    const postAnswer = async () => {
      const head = {
        method: 'POST',
        body: JSON.stringify({
          answer: currentAnswer.value,
          createdAt: "2023-12-11T06:47:19.431Z",
          downvotes: 0,
          questionId: selectedQuestionId.value,
          upvotes: 0,
          userId: "uid14"
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      
        const res = await fetch("http://10.20.3.163:8091/quora/answer/addAnswer", head)
        const parsedResponse = await res.json()
        console.log('Answer posted', parsedResponse)
      }
  
 
    return {
      // questions,
     
      isDialogVisible,
      currentAnswer,
      openDialog,
      closeDialog,
      postAnswer,
      questions,
      answer
    };
  }
};
</script>

<style scoped>
  .app{
    margin-top: 90px;
  }
  .body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .main {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
  }
  
  .h2 {
    color: #4285f4;
  }
  
  .question {
    background-color: #f5f5f5;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .textarea {
    width: 80%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  .submit-btn {
    background-color: #4285f4;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 10px;
  }
  
  .dialog-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background: #fff;
    padding-bottom: 100px;
    padding-top:100px;
    padding-left:40px ;
    padding-right: 40px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  </style>
@/store/question-store.js