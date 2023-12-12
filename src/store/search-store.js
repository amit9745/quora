import { defineStore } from "pinia";
import { ref } from "vue";

 
export const useSearchStore = defineStore("Search", () => {

    const searchData = ref(null);


    const FETCH_Search = async (searchQuery) => {
      if(searchQuery?.length>2){
        console.log("searchQuery here",searchQuery)

        const queryParams = new URLSearchParams();
        
        const apiUrl = "http://10.20.3.177:8089/quora/search-service/searchterm"
        queryParams.set("searchTerm",searchQuery);
        const res = await fetch(`${apiUrl}?${queryParams.toString()}`);

        const jsonnew = await res.json();
        searchData.value = jsonnew
        console.log("searchValues", searchData.value)
      }else{
        searchData.value=null
      }
    
  };
 
  return{
    FETCH_Search,
    searchData
  }
 
});
 
export default useSearchStore;