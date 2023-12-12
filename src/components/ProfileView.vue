<template>

  <div @click="takeMeToProfile" class="top-div">
          <div class="top-left-div">
            <img
              class="img"
              src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
              alt=""
            />
          </div>
          <div class="top-right-div">
            <!-- <h2>{{ cardItem.profileData.profileName }}</h2> -->
            <h2>Piyush</h2>
            <p>@beginner</p>
          </div>
        </div>
</template>

     
<script>
import router from '@/router';
import { defineComponent, onBeforeMount, ref } from 'vue';
import { apiUrls } from './apiUrls';
import { getStorage, ref as storageRef,  getDownloadURL } from 'firebase/storage';

export default defineComponent({
  props: {
    userId: {
      type: String,
      required: true,
    },

  },
  setup() {

    const profile = ref(null)
    const imageUrl = ref('https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw=');
    const FETCH_USER = async () => {

      const apiUrl = apiUrls.getUser;
      // console.log("apiurl in profile",apiUrl)
      
      const res = await fetch(`${apiUrl}/${sessionStorage.getItem('userId')}`);
      // const res = await fetch(`${apiUrl}/MrfPnsKlpJQqjpOtLmJ5R2r23oJ3}`);
      
      const jsonnew = await res.json();

      console.log("profileData", jsonnew)
      profile.value = jsonnew;


      const storage = getStorage();
      if(profile.value.profileAvatar){
        const storageReference = storageRef(storage, profile.value.profileAvatar);
  
      // const storageReference = storageRef(storage, "/quora/follower3.jpeg");
      imageUrl.value = await getDownloadURL(storageReference);
      console.log(imageUrl.value)
      }
      
    };
    
    onBeforeMount(async () => {
     await FETCH_USER()
    })

    const takeMeToProfile = () => {
      router.push("/userprofile")
    }

    return {
      takeMeToProfile,
      imageUrl
    }
  }

});

</script>
     
<style scoped>
.top-div {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.top-left-div {
  height: 60px;
  width: 60px;
  border-radius: 3px;

}

.top-left-div img {
  width: 100%;
  height: 100%;
  border-radius: 50%;

  object-fit:cover;

}

.top-right-div {
  margin-left: 20px;
}

.top-right-div h2 {
  text-align: justify;
  font-size: larger;
}

.top-right-div p {
  text-align: justify;
  font-size: small;
}
</style>
    has context menu
    Compose