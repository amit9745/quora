import { defineStore } from "pinia";
import { ref } from "vue";


export const question = defineStore("question", () => {
    const questions = ref(null);


  const FETCH_QUESTION = async () => {
    const question = await fetch("https://run.mocky.io/v3/43ff7a70-c9e8-4886-b810-530705275143");
    const jsonnew = await question.json();
    questions.value = jsonnew.resultData;
    console.log("in store",questions.value.resultData)
  };

  return{
    FETCH_QUESTION,
    questions
  }

});

export default question;