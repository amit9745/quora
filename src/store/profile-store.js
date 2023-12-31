import { defineStore } from "pinia";
import { ref } from "vue";
import { apiUrls ,header} from "@/components/apiUrls";

export const useProfileStore = defineStore("profile", () => {
    
    const profile = ref(null);

    const currentProfile = ref(null);
    const firebaseUser = ref(null)
    const authstatus = ref(false);

    const updateCurrentProfileId = (profile)=>{
      console.log("received",profile)
      currentProfile.value = profile;
    }
    const updateAuthStatus = (authValue)=>{
      authstatus.value = authValue;
    }
    const updateUserAfterAuth = (user)=>{
      firebaseUser.value = user;
    }
    
    const  GET_USERVIEW_FROM_DB = async() =>{
      const userId = sessionStorage.getItem("userId")
      const apiUrl = apiUrls.getMyProfile;
      const res = await fetch(`${apiUrl}/${userId}`);
    
      const jsonnew = await res.json();
      
      console.log("CurrentprofileData",jsonnew)
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
    GET_USERVIEW_FROM_DB,
    updateUserAfterAuth,
    profile,
    updateAuthStatus,
    authstatus,
    currentProfile,
    updateCurrentProfileId
  }

});

export default useProfileStore;