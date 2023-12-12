import { defineStore } from "pinia";
import { ref } from "vue";
import { apiUrls ,header} from "@/components/apiUrls";

export const useProfileStore = defineStore("profile", () => {
    const profile = ref(null);
    const firebaseUser = ref(null)

    const updateUserAfterAuth = (user)=>{
      firebaseUser.value = user;
    }
    
    const  GET_USER_FROM_DB = async() =>{
      const userId = sessionStorage.getItem("userId")
      const apiUrl = apiUrls.getUser;
      const res = await fetch(`${apiUrl}/${userId}`);
    
      const jsonnew = await res.json();
      
      console.log("profileData",jsonnew)
      profile.value = jsonnew;
    }
  const ADD_USER_TO_DB = async (profileData) => {
    const apiUrl = apiUrls.addUser;
    const head = {
      method: 'POST',
      body: JSON.stringify(
        profileData
      ),
      headers: header
  }
    const res = await fetch(apiUrl,head);
    
    const jsonnew = await res.json();
    profile.value = profileData;
    console.log("profileData",profile.value)
    console.log(jsonnew);
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