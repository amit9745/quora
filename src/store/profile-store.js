import { defineStore } from "pinia";
import { ref } from "vue";
import { apiUrls } from "@/components/apiUrls";

export const useProfileStore = defineStore("profile", () => {
    const profile = ref(null);
    const firebaseUser = ref(null)

    const updateUserAfterAuth = (user)=>{
      firebaseUser.value = user;
    }
    const  GET_USER_FROM_DB = async() =>{

    }
  const ADD_USER_TO_DB = async () => {
    const apiUrl = apiUrls.ge;
    const queryParams = new URLSearchParams();
    queryParams.set("userId","dsfsdfd");
    queryParams.set("page",0);
    queryParams.set("size",4);

    const res = await fetch(`${apiUrl}?${queryParams.toString()}`);
    
    const jsonnew = await res.json();
    profile.value = jsonnew.resultData;
    console.log(profile.value)
  };

  return{
    firebaseUser,
    ADD_USER_TO_DB,
    GET_USER_FROM_DB,
    updateUserAfterAuth,
    profile
  }

});

export default useProfileStore;