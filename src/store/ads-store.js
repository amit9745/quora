import { defineStore } from "pinia";
import { ref } from "vue";


export const useAdStore = defineStore("ad", () => {
    const ad = ref(null);

    const FETCH_ADS_BY_CATEGORY = async(category) =>{
        const apiUrl = `http://10.20.4.27:8082/ad/adByCategory/${category}`
        const res = await fetch(apiUrl);
      
        const jsonnew = await res.json();
        
        console.log("profileData", jsonnew)
        ad.value = jsonnew;
    }

    const FETCH_ADS_BY_USER = async(userId) =>{
        const apiUrl = `http://10.20.4.27:8082/ad/adByCategory/${userId}`
        const res = await fetch(apiUrl);    
        const jsonnew = await res.json();
        
        console.log("profileData", jsonnew)
        ad.value = jsonnew;
    }

    return {
        FETCH_ADS_BY_CATEGORY,
        FETCH_ADS_BY_USER,
        ad
    }
});

export default useAdStore;