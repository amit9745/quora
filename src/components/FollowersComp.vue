<template>
    <div class="followers-container">
      <div v-for="follower in followers" :key="follower.id" class="follower-item">
        
        <div class="profile">
        <img :src="follower.imgUrl" class="profile-img">
        <p class="name">{{ follower.name }}</p>
      </div>
        <div class="follower-details">
          
          <button class="unfollow">Follow</button>
        </div>
       
      </div>
      
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import follower1 from "../assets/follower1.jpeg";
  export default {
    setup() {
      // /Users/amitkumar/Desktop/quora/src/assets/follower1.jpeg
      const followers = ref([
        {
          imgUrl: follower1,
          name: 'karan karan',
        },
        {
          imgUrl: follower1,
          name: 'kunal',
        },
        {
          imgUrl: follower1,
          name: 'raj',
        },
        {
          imgUrl: follower1,
          name: 'rajiu',
        },
      ]);
  
      return {
        followers,
      };
    },
  };
  </script>
  
  <style scoped>
  .unfollow {
    padding: 10px 15px;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #292d32;
    border: none;
    border-radius: 15px;
  }
  
  .followers-container {
    margin: 50px;
  }
  .profile{
    display: flex;

  }
  .profile-img {
    width: 50px; 
    height: 50px;
    border-radius: 50%;
    margin-right: 15px; 
  }
  
  .follower-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;

  }
  
  .name {
    margin-bottom: 10px; 
  }
  
  .follower-item {
    display: flex;
    margin-bottom: 28px;
    width: 30%;
   
    align-items: center;
    justify-content: space-between;
   
  }
  </style>
