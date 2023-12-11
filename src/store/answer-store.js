import { apiUrls } from "@/components/apiUrls";
import { defineStore } from "pinia";
import { ref } from "vue";


export const useAnswerStore = defineStore("answer", () => {

    const answers = ref([]);
    const questionInfoId = ref('')
    const question = ref('')

    const updateQuestionInfo = (questionId) => {
        questionInfoId.value = questionId;
    }

    const updateQuestionName = (questionTitle) => {
        question.value = questionTitle;
    }

    const FETCH_ANSWERS_BY_QUESTION = async () => {
    const apiUrl = apiUrls.getAllAnswersByQuestionId;
    const queryParams = new URLSearchParams();
    queryParams.set("questionId", questionInfoId.value);
    const res = await fetch(`${apiUrl}?${queryParams.toString()}`);
    const jsonnew = await res.json();
    answers.value = jsonnew.resultData;
    console.log(answers.value);
  };

  return{
    answers,
    FETCH_ANSWERS_BY_QUESTION,
    updateQuestionInfo,
    questionInfoId,
    updateQuestionName,
    question
  }

});

export default useAnswerStore;