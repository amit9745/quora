import { defineStore } from "pinia";
import { ref } from "vue";
 
 
export const useSearchStore = defineStore("Search", () => {
    const searchData = ref(null);
 
 
  const FETCH_Search = async () => {
    const res = await fetch("http://10.20.3.177:8088/search-service/searchterm?searchTerm=%2A");
    const jsonnew = await res.json();
    searchData.value=jsonnew
    console.log(searchData.value)
  };
 
  return{
    FETCH_Search,
    searchData
  }
 
});
 
export default useSearchStore;