<template>

    <div @click="takeMeToProfile" class="top-div">
      <div class="top-left-div">
        <img
          class="img"
          :src="imageUrl"
          alt=""
        />
      </div>
      
    </div>
  </template>
  
       
  <script>

  import { defineComponent, computed } from 'vue';

//   import { getStorage, ref as storageRef,  getDownloadURL } from 'firebase/storage';
  
  export default defineComponent({
    props: {
      avatar: {
        type: String,
        required: true,
      },
  
    },
    setup(props) {

      const imageUrl = computed(()=>props.avatar);
      
    //   const FETCH_AVATAR = async () => {
    //     imageUrl.value = props.avatar;
        // console.log("avatar here",props.avatar)
  
  
        // const storage = getStorage();
        // // if(props.avatar){
        //   const storageReference = storageRef(storage, props.avatar);
          
        // // const storageReference = storageRef(storage, "/quora/follower3.jpeg");
        //   imageUrl.value = await getDownloadURL(storageReference);
        //   console.log(imageUrl.value)
        // }
        
    //   };
    //   onMounted(()=>{
    //      FETCH_AVATAR()
    //   })
    //   FETCH_AVATAR()
    //   onBeforeMount(async () => {
    //    await FETCH_AVATAR()
    //   })

  
      return {
        imageUrl,
        // FETCH_AVATAR
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