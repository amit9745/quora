<template>
  <div class="nav-cnt">
    <div class="nav-left">
       
      <a @click="takeMeHome">Quora</a>
    </div>
    <div class="nav-left">
      <a class="answer" @click="takeMeAnswer">Answer</a>
    </div>

    <div
      :class="{
        'search-cnt-loggedin': logedIn,
        'search-cnt-loggedout': !logedIn,
      }"
    >
      <div class="search">
        <input
          type="text"
          class="search-input"
          placeholder="Search Quora!!"
          v-model="searchInput"
        />
        <button class="search-button-icon" @click="searchNow"><img class="icon" :src="search" /></button>
      </div>
    </div>

    <div class="nav-right">
      <div class="dropdown">
        <button class="dropbtn">=</button>
        <div class="dropdown-content">
          <div class="sub-menu">
            <p @click="goToProfile" class="flex">
              <img class="icon" :src="ordericon" />Profile
            </p>
          </div>
          <div class="sub-menu">
            <button @click="openAddQuestionDialog"  class="search-button">Add Question</button>
          </div>
          <!-- <p>Hi! {{ userName }}</p> -->
        </div>
      </div>
    </div>
    <AddQuestionDialog
      :is-open="isQuestionDialogueOpen"
      :close="closeAddQuestionDialog"
      :post-question="postQuestion"
    ></AddQuestionDialog>
    <SearchDialog :is-open="isSearchDialogOpen" :close="closeSearchDialog" /> 
  </div>
</template>
   
<script>
  
import search from "@/assets/search.svg"
import { defineComponent ,ref} from "vue"
import AddQuestionDialog from "./AddQuestionDialog.vue"
// import SearchDialog  from "./SearchDialog.vue"
import { useRouter } from "vue-router"
import {useSearchStore} from "../store/search-store.js";
  export default defineComponent({
   components:{
    "AddQuestionDialog":AddQuestionDialog,
    // SearchDialog
   },
    setup() {
      const router = useRouter()
      const isQuestionDialogueOpen = ref(false);
 
      // const isSearchDialogOpen = ref(false);
      const searchInput = ref('');
  
      // const openSearchDialog = () => {
      //   isSearchDialogOpen.value = true;
      // };
  
      // const closeSearchDialog = () => {
      //   isSearchDialogOpen.value = false;
      // };
      const takeMeHome=()=>{
        router.push("/")
       }
       const takeMeAnswer=()=>{
        router.push("/answer")
       }
       const takeMeQuestion=()=>{
        router.push("/question")
       }
       const goToProfile = () => {
        router.push("/profile")
      } 
      const openAddQuestionDialog = ()=>{
        isQuestionDialogueOpen.value = true;
      }
      const closeAddQuestionDialog = ()=>{
        isQuestionDialogueOpen.value = false;
      }
      
        const searchStore = useSearchStore();
        
        const searchNow = (()=>{
          searchStore.FETCH_Search();

        })
      

        return {
            search,
            takeMeAnswer,
            takeMeHome,
            takeMeQuestion,
            goToProfile,
            openAddQuestionDialog,
            closeAddQuestionDialog,
            isQuestionDialogueOpen,
            // openSearchDialog,
            // closeSearchDialog,
            // isSearchDialogOpen,
            searchInput,
            searchNow
        }
    },
})

</script>
  <style scoped>
.search-cnt-loggedin {
  flex: 0.8;
  padding: auto;
}

.dropbtn {
  display: none;
}

.search-cnt-loggedout {
  flex: 1;
}

.nav-cnt {
    max-width: 1500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0px 2px 5px #f3f3f3;
  position: fixed;
  top: 0px;
  z-index: 999;
  width: 100%;
}

.dropdown-content {
  display: contents;
}

.dropdown {
  display: flex;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.sub-menu {
  display: flex;
  /* margin-right: 2rem; */
}



.sub-menu p {
  margin: auto 0.8rem;
}

.nav-left {
  display: flex;
  cursor: pointer;
}

.nav-right {
  display: flex;
  padding: 0 1rem;
  align-items: center;
}

.icon {
  width: 1.2rem;
  margin: 0.3rem;
}

.icon-new {
  width: 1.2rem;
}

.search-cnt {
  flex: 0.7;
}

.search-input {
  width: 50%;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  margin: 0.5rem;
  background-color: #f3f3f3;
  z-index: 5;
}

.search-button-icon{
    position: absolute;
    margin: 10px;
  padding:6px;
  border-radius: 1rem;
  border: none;
 
  cursor: pointer;
  
}
.search-button {
  padding: 0.8rem;
  border-radius: 1rem;
  border: none;
  background-color: #292d32;
  color: #fff;
  cursor: pointer;
}

.nav-cnt a {
  padding: 0 1rem;
  font-weight: 800;
  font-size: 1.1rem;
  margin-left: -8px;
}

@media screen and (min-width: 360px) and (max-width: 900px) {
  .search {
    min-width: 250px;
    margin-left: -72px;
  }

  .nav-cnt a {
  padding: 13px;
  font-weight: 800;
  font-size: 1.1rem;
}

  /* .nav-cnt a {
  margin-left: -1px;
} */

.answer{
    margin-left: -20px;
}

  .dropbtn {
    display: block;
  }

  .dropbtn {
    background-color: #626262;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    margin-left: -10px;
  }

  

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;

    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    right: 0;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #626262;
  }

  .search-button {
  padding: 9px;
  border-radius: 1rem;
  border: none;
  background-color: #292d32;
  color: #fff;
  cursor: pointer;
}
}
</style>