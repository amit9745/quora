import { defineStore } from "pinia";
import { ref } from "vue";
import { apiUrls } from "@/components/apiUrls";

export const useHomeStore = defineStore("home", () => {
    const home = ref(null);


  const FETCH_HOME = async () => {

    const apiUrl = apiUrls.getHome;
    // console.log(apiUrl)

    const queryParams = new URLSearchParams();
    queryParams.set("userId","dsfsdfd");
    queryParams.set("page",0);
    queryParams.set("size",4);

    const res = await fetch(`${apiUrl}?${queryParams.toString()}`);
    
    const jsonnew = await res.json();
    home.value = jsonnew.resultData;
    console.log(home.value)
  };

  return{
    FETCH_HOME,
    home
  }

});

export default useHomeStore;