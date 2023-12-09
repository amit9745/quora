import { defineStore } from "pinia";
import { ref } from "vue";


export const useHomeStore = defineStore("home", () => {
    const home = ref(null);


  const FETCH_HOME = async () => {
    const res = await fetch("https://run.mocky.io/v3/2b126cf3-8778-40ea-afbd-3663287f05d7");
    const jsonnew = await res.json();
    home.value = jsonnew.resulData;
    console.log(home.value)
  };

  return{
    FETCH_HOME,
    home
  }

});

export default useHomeStore;