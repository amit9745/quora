<template>
  <div @click="takeMeToProfile" class="top-div">
    <ProfileIcon :avatar="profile?.profileAvatar"></ProfileIcon>
    <!-- {{ profile }} -->
    <div class="top-right-div">
      <!-- <h2>{{ cardItem.profileData.profileName }}</h2> -->
      <h2>{{ profile?.profileName }}</h2>
      <p>@beginner</p>
    </div>
  </div>
</template>

     
<script>
import router from '@/router';
import { defineComponent, ref } from 'vue';
import { apiUrls } from './apiUrls';
import ProfileIcon from './ProfileIcon.vue';
import useProfileStore from '@/store/profile-store';
export default defineComponent(
  {
    components: {
      ProfileIcon
    },
    props: {
      userId: {
        type: String,
        required: true,
      },

    },

    setup(props) {
      
      const profileStore = useProfileStore()
      const profile = ref(null)
      // watch(()=>props.userId,(newPropsValue,)=>{
      //   FETCH_USER(newPropsValue) 
      //       })
      const FETCH_USER = async () => {
        const apiUrl = apiUrls.getUser;


        const res = await fetch(`${apiUrl}/${props.userId}`);

        const jsonnew = await res.json();
        profile.value = jsonnew;

      };

        FETCH_USER(props.userId)


      const takeMeToProfile = () => {

        profileStore.updateCurrentProfileId(profile.value)
        router.push("/userprofile")
      }

      return {
        takeMeToProfile,
        FETCH_USER,
        profile
      }
    }

  });

</script>
     
<style scoped>
.top-div {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
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

  object-fit: cover;

}

.top-right-div {
  margin-left: 18px;
    margin-top: -23px;
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