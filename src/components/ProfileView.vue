<template>
    {{ userId }}
    <div class="top-div">
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
            <p>Answered 3 days ago</p>
          </div>
        </div>
     
    </template>
     
    <script>
    import { defineComponent, onBeforeMount ,ref} from 'vue';
     
    export default defineComponent({
    props: {
        userId: {
          type: String,
          required: true,
        },
        
      },
    setup(props){
        const profile = ref(null)
        const FETCH_USER = async (userId) => {
        console.log(userId)
        const res = await fetch("https://run.mocky.io/v3/2b126cf3-8778-40ea-afbd-3663287f05d7");
        const jsonnew = await res.json();
        profile.value = jsonnew.resulData;
        console.log(profile.value)
      };
      onBeforeMount(()=>{
        FETCH_USER(props.userId)
      })
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
      border-radius: 20%;
    }
    </style>
    has context menu
    Compose