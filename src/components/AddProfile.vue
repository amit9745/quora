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
      <input
        v-model="description"
        type="text"
        placeholder="Enter user description"
        class="description-input"
      />
      <div>
    <h3>
      Select type of account
      <select v-model="selected">
        <option value="" selected disabled>
          Choose
        </option>
        <option v-for="item in options" :key="item">
          {{ item }}
        </option>
      </select>
      
    </h3>
  </div>
      <button class="button" @click="addProfile">Next</button>

    
    </div>
  </template>
  
  <script>
  import { computed, ref } from 'vue';
  import { useRouter } from 'vue-router';
  import {useProfileStore} from "../store/profile-store.js"
  import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';

  export default {
    setup() {
      const router = useRouter()
      const avatar = ref('')
      const image = ref(null);
      const username = ref('');
      const userDesc = ref('')
      const profileStore = useProfileStore()
      const firebaseUser = computed(()=>profileStore.firebaseUser)
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
          uploadFile(file)
        }
      };



      const uploadFile = async (selectedFile) => {
      try {
        const storage = getStorage();
        const storageReference = storageRef(storage, 'quora/' + selectedFile.name);
        await uploadBytes(storageReference, selectedFile);
        
        console.log('File uploaded successfully!', storageReference.fullPath);
        avatar.value = storageReference.fullPath
      } catch (error) {
        console.error('Error uploading file:', error.message);
      }
    };



     const addProfile = async ()=>{
      // console.log("token",firebaseUser.value.stsTokenManager.accessToken)
      const profileData =   {
          points: 0,
          "profileAvatar": avatar.value,
          "profileDesc": userDesc.value,
          "profileEmail": firebaseUser.value.email,
          "profileId": firebaseUser.value.uid,
          "profileName": username.value,
          "profileStatus": "active",
          "profileType": "public",
          "role": "owner"
        }

        await profileStore.ADD_USER_TO_DB(profileData)
        router.replace("./addCategory")
     }

     
      return {
        image,
        username,
        selectImage,
        addProfile,
        userDesc,
        uploadFile,
        avatar,
        selected: '', 
        options: ['private', 'public'] 

      };

    },
  }
  </script>
  
  <style scoped>
  .profile-container {
   margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin-top: 90px;
    background: #fff;
    padding: 28px;
    width: 43%;
    
    box-shadow: 0px 0px 7px 2px;
   

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
    margin-top: 30px;
    padding: 8px;
    font-size: 16px;
    width: 80%;
  }
 
  .description-input {
    margin-top: 10px;
    padding: 8px;
    font-size: 16px;
    width: 80%;
    margin-bottom: 10%;
  }
  .button {
    display: inline-block;
    margin-top: 41px;
    padding: 6px 43px;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #545a58;
    border: none;
    border-radius: 15px;
    box-shadow: -2px 2px #999;
}

.button:hover {background-color: #737473}

.button:active {
  background-color: #d4d4d4;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
  </style>
  