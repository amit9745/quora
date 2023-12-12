import { defineStore } from "pinia";
import { ref } from "vue";
import { apiUrls} from "@/components/apiUrls";

export const useHomeStore = defineStore("home", () => {
    const home = ref(null);


  const FETCH_HOME = async () => {

    const apiUrl = apiUrls.getHome;
    // console.log(apiUrl)

    const queryParams = new URLSearchParams();
    queryParams.set("authorized",false)
    queryParams.set("userId","dsfsdfd");
    queryParams.set("page",0);
    queryParams.set("size",10);
    queryParams.set("CheckAuth", false)

    const res = await fetch(`${apiUrl}?${queryParams.toString()}`,{
      method: "GET", 
      headers: { 
        "Authorization": sessionStorage.getItem('token'), 
        "Content-Type": "application/json", 
      },
    });
    
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