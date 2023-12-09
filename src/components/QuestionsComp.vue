<template>
    <div class="questions-container">
      
        <div v-for="question in questions" :key="question.id" class="question-header">

          <div class="question">
        <p class="question-content">
          {{question.content}}
        </p>

      </div>
  </div>
      <!-- Repeat the structure for more questions -->
  
    </div>
  </template>
  
  <script>
 import {ref} from 'vue';
  
  export default {
    setup() {
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
  
      return {
        questions,
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
  </style>
  