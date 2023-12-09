<template>
    <div class="followers-container">
      <div v-for="follower in followers" :key="follower.id" class="follower-item">
        <img :src="follower.imgUrl" class="profile-img">
        <div class="follower-details">
          <p class="name">{{ follower.name }}</p>
          <button class="unfollow">Follow</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const followers = ref([
        {
          imgUrl: './src/assets/follower1.jpeg',
          name: 'karan',
        },
        {
          imgUrl: './src/assets/follower1.jpeg',
          name: 'kunal',
        },
        {
          imgUrl: './src/assets/follower1.jpeg',
          name: 'raj',
        },
        {
          imgUrl: '',
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
  
  .profile-img {
    width: 55px; 
    border-radius: 50%;
    margin-right: 15px; 
  }
  
  .follower-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .name {
    margin-bottom: 10px; 
  }
  
  .follower-item {
    display: flex;
    align-items: center;
    margin-bottom: 15px; 
  }
  </style>
