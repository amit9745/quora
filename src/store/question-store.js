import { apiUrls } from "@/components/apiUrls";
import { defineStore } from "pinia";
import { ref } from "vue";


export const question = defineStore("question", () => {
    // const questions = ref(null);
    const questions = ref([]);


  // const FETCH_QUESTION = async () => {
  //   // const question = await fetch("https://run.mocky.io/v3/43ff7a70-c9e8-4886-b810-530705275143");
  //   const question = await fetch("http://10.20.3.163:8091/quora/question/getQuestion/e1bab2a0-c60c-42f4-82ec-a867978d2e5b")
  //   const jsonnew = await question.json();
  //   questions.value = jsonnew.resultData;
  //   console.log("in store",questions.value.resultData)
  // };


  const FETCH_QUESTIONS_BY_CATEGORY = async () => {
    const apiUrl = apiUrls.getQuestions;
    // const apiUrl = "http://10.20.3.163:8091/quora/question/getQuestionsByCategory";
    const queryParams = new URLSearchParams();
    queryParams.set("userId","uid14");
    const res = await fetch(`${apiUrl}?${queryParams.toString()}`);
    const jsonnew = await res.json();
    questions.value = jsonnew.resultData;
    console.log(questions.value);
  };



  return{
    // FETCH_QUESTION,
    questions,
    FETCH_QUESTIONS_BY_CATEGORY,
    question, 
  }

});

export default question;