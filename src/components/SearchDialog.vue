<template>
    <div class="dialog-overlay" v-if="isOpen">
      <div class="dialog-content">
          {{ searchedValue }}
        <div class="button-container" >
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import { computed } from "vue";
import {useSearchStore} from "../store/search-store.js";
  
  export default {
    props: {
      isOpen: Boolean,
      close: Function,
    },
    setup(){
      const  searchStore = useSearchStore();
     const searchedValue = computed(()=>searchStore.searchData)

     return{
      searchedValue
     }
    }
  

    }
  </script>
  
  <style scoped>
  .dialog-overlay {
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dialog-content {
    background: #ffffff;
    padding-top: 660px;
    padding-bottom: 100px;
    padding-left: 400px;
    padding-right: 200px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    width: 100%;
  }
  
  .search-input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  .button-container {
    display: flex;
    justify-content: flex-end;
  }
  
  .btn {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 10px;
  }
  
  .btn-search {
    background-color: #4285f4;
    color: #fff;
  }
  
  .btn-cancel {
    background-color: #ccc;
    color: #333;
  }
  </style>
  
