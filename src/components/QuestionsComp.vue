<template>
    <div class="questions-container">
      <!-- {{ questions1 }} -->
        <div v-for="question in questions1" :key="question.id" class="question-header">
          <div class="question">
        <p class="question-content">
          {{question.question}}
        </p>

      </div>
  </div>
      <!-- Repeat the structure for more questions -->
  
    </div>
  </template>
  
  <script>
 import {ref} from 'vue';
  import { apiUrls } from './apiUrls';
  export default {
    setup() {
      const questions1 = ref(null)
      const questions = ref([
        {
          content: 'What is the most expensive thing?',
        },
        {
          content: 'How is life in recent times?',
        },
        {
          content: 'What is the one thing that you treasure the most?',
        },
        {
          content: 'What is the best way to learn Vue.js for beginners?',
        },
      ]);
      const FETCH_QUESTIONS_BY_USER = async () => {
        const apiUrl = apiUrls.getQuestionsByUser;
        // const apiUrl = "http://10.20.3.163:8091/quora/question/getQuestionsByCategory";
        const queryParams = new URLSearchParams();
        queryParams.set("userId", sessionStorage.getItem("userId"));
        const res = await fetch(`${apiUrl}?${queryParams.toString()}`);
        const jsonnew = await res.json();
        questions1.value = jsonnew;
        console.log(questions1.value);
      }; 
      FETCH_QUESTIONS_BY_USER()
      return {
        questions,
        questions1
      };
    },
  
  };
  </script>
  
  <style scoped>
  .questions-container {
    max-width: 600px;
    margin: auto;
    margin-top: 50px;
  }
  
  .question {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 30px;
    margin-bottom: 16px;
    width: 100%;
  }
  
  .question-header {
    display: flex;
    align-items: center;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .user-info {
    flex-grow: 1;
  }
  
  .user-name {
    font-weight: bold;
    margin: 0;
  }
  
  .question-time {
    color: #666;
    margin: 0;
  }
  
  .question-content {
    margin-top: 10px;
  }
  
  .question-actions {
    margin-top: 10px;
    display: flex;
    gap: 10px;
  }
  
  .action-btn {
    padding: 8px 12px;
    background-color: #0077cc;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  @media screen and (min-width: 360px) and (max-width: 900px) {
    .questions-container {
      width: 90%; 
      padding: 20px; 
    }
}
  </style>
  