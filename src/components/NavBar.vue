<template>
  <div class="nav-cnt">
    <div class="nav-left">
       
      <a @click="takeMeHome">Quora</a>
    </div>
    <div class="nav-left">
      <a @click="takeMeAnswer">Answer</a>
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
        <button class="search-button-icon" @click="takeMeToSearch"><img class="icon" :src="search" /></button>
      </div>
    </div>

    <div class="nav-right">
      <div class="dropdown">
        <button class="dropbtn">=</button>
        <div class="dropdown-content">
          <div class="sub-menu">
            <p @click="takeMeOrder" class="flex">
              <img class="icon" :src="ordericon" />Profile
            </p>
          </div>
          <div class="sub-menu">
            <button class="search-button" @click="openAddQuestionDialog">Add Question</button>
          </div>
        </div>
      </div>
    </div>
    <add-question-dialog
      :is-open="isAddQuestionDialogOpen"
      :close="closeAddQuestionDialog"
      :post-question="postQuestion"
    ></add-question-dialog>
  </div>
</template>


<script>
import search from "@/assets/search.svg"
import router from "@/router"
import { defineComponent } from "vue"
import AddQuestionDialogue from "./AddQuestionDialogue.vue";
 
  export default{
    components:{
      'add-question-dialog': AddQuestionDialogue,
    },
    data() {
    return {
      isAddQuestionDialogOpen: false,
    };
  },
  methods: {
    openAddQuestionDialog() {
      this.isAddQuestionDialogOpen = true;
    },
    closeAddQuestionDialog() {
      this.isAddQuestionDialogOpen = false;
    },
  },
};
  
  defineComponent({
   
    setup() {
 
      const takeMeHome=()=>{
        router.push("/")
       }
       const takeMeAnswer=()=>{
        router.push("/answer")
       }
  
       
        return {
            search,
            takeMeAnswer,
            takeMeHome
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
}

@media screen and (min-width: 360px) and (max-width: 900px) {
  .search {
    min-width: 250px;
    margin-left: -30px;
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

  .nav-cnt {
    margin-left: -14px;
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
}
</style>