<template>
    <div class="profile-container">
      <div class="profile-header" @click="selectImage">
        <img v-if="image" :src="image" alt="Profile Image" />
        <div v-else class="default-image">Select Image</div>
      </div>
      <input
        v-model="username"
        type="text"
        placeholder="Enter your username"
        class="username-input"
      />
      <button @click="addProfile">Next</button>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  export default {
    setup() {
        const router = useRouter()
      const image = ref(null);
      const username = ref('');
  
      const selectImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.addEventListener('change', handleImageSelect);
        input.click();
      };
  
      const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            image.value = reader.result;
          };
          reader.readAsDataURL(file);
        }
      };
     const addProfile = ()=>{
        router.replace("./addCategory")
     }

     
      return {
        image,
        username,
        selectImage,
        addProfile
      };

    },
  };
  </script>
  
  <style scoped>
  .profile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .profile-header {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .profile-header img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .default-image {
    font-size: 14px;
    color: #555;
  }
  
  .username-input {
    margin-top: 10px;
    padding: 8px;
    font-size: 16px;
  }
  </style>
  