<template>
    <div>
      <!-- Search bar (commented out) -->
      <!-- <div class="search-bar" :class="{ active: searchBarActive }" @click="toggleSearchBar">
        <input type="text" placeholder="Search..." class="search-input" v-model="searchText" @input="onSearch" />
        <div v-if="searchText || searchBarActive" class="clear-text" @click.stop="clearText">Clear</div>
      </div> -->
  
      <!-- Display search results as div elements -->
      <div class="search-results" v-if="searchValues.length > 0">
        <div v-for="(searchValue, index) in searchValues" :key="index" class="result-item">
            <div v-if="searchValue?.profileId !== null" > 
                <ProfileView></ProfileView>
            </div>
            <div v-if="searchValue?.questionId !=null">{{ searchValue.searchTerm }}</div>
            <div v-if="searchValue?.businessProfileId !==null"><ProfileView/> {{  searchValue.searchTerm  }}</div>
          
        </div>
      </div>
      <div v-else>
        No results found.
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  import useSearchStore from '@/store/search-store';
import ProfileView from './ProfileView.vue';
  // import debounce from 'lodash.debounce';

  export default {
    setup() {
        const searchBarActive = ref(false);
        const searchText = ref('');
        const searchStore = useSearchStore();
        // searchStore.FETCH_Search();
        const searchValues = computed(() => {
            return searchStore.searchData;
        });
        return {
            searchBarActive,
            searchText,
            searchValues,
        };
    },
    components: { ProfileView }
};
  </script>
  
  <style scoped>
  .search {
    margin-top: 90px;
  }
  
  /* Styles for the search results */
  .search-results {
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    align-content: stretch;
    flex-direction: column;
   align-items: center;
  }
  
  .result-item {
    border: 1px solid;
    margin: 10px;
    padding: 10px;
    width: 700px; /* Adjust the width as needed */
  }
  
  /* Add more styles based on your design preferences */
  </style>
  