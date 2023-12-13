
<template>
    <h3 class="main">Select Category</h3>
  <div class="container">
    <div v-for="item in items" :key="item.id" :class="{ 'selected': item.selected }" class="box">
      <input type="checkbox" v-model="item.selected" class="checkbox">
      <img :src="item.imageSrc" alt="Image" class="image">
      <p class="title"> {{ item?.title }}</p>
    </div>
   
  </div>

  <Button class="button" @click="onNextButtonClicked">Next</Button>
</template>
  
<script>
import { ref } from 'vue';
import image_1 from "../assets/image_1.jpeg";
import image_2 from "../assets/image_2.jpeg";
import image_3 from "../assets/image_3.png";
import image_4 from "../assets/image_4.jpeg";
import image_5 from "../assets/image_5.jpeg";
import image_6 from "../assets/image_6.jpeg";

import { apiUrls, header } from './apiUrls.js';
import router from '@/router';
import useProfileStore from '@/store/profile-store';

export default {
  setup() {
    const profileStore = useProfileStore()
    const items = ref([
      { id: 1, imageSrc: image_1, selected: false, title: "Food" },
      { id: 2, imageSrc: image_2, selected: false, title: "Music" },
      { id: 3, imageSrc: image_3, selected: false, title: "Sports" },
      { id: 4, imageSrc: image_4, selected: false, title: "Travel" },
      { id: 5, imageSrc: image_5, selected: false, title: "Fashion" },
      { id: 6, imageSrc: image_6, selected: false, title: "Entertainment" },

    ]);

    const onNextButtonClicked = async ()=>{
      const categories = [];
      items.value.forEach(element => {
        if(element.selected===true){
          categories.push(element.title)
        }
        
      });
      const head = {
            // mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify(
             categories
            ),
            headers: header
        }

        const apiUrl = apiUrls.addCategories
        const queryParams = new URLSearchParams();
  
        queryParams.set("profileId",sessionStorage.getItem("userId"));
        // queryParams.set("profileId","piyush")
        const res = await fetch(`${apiUrl}?${queryParams.toString()}`,head);

        const parsedResponse = await res.json()
        // window.location.reload()
        console.log('categories added', parsedResponse)

        router.replace("/home")
        profileStore.updateAuthStatus(true);

    }

    return { items, image_1, image_2, image_3, image_4, image_5, image_6,onNextButtonClicked };
  },
};
</script>
  
<style scoped>
.main{
  margin-top: 90px;
}
.container {
  margin-top: 10px;
  margin-left: 10%;
  margin-right: 10%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

.box {
  width: 200px;
  height: 200px;
  position: relative;
  margin: 10px;
  border: 2px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
}

.checkbox {
  position: absolute;
  top: 0;
  right: 0;
  margin: 5px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  position: absolute;
  top: 0;
  font-weight: bold;

}

.selected {
  border-color: #3498db;
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
    margin-bottom: 40px;
}
.button:hover {background-color: #737473}

.button:active {
  background-color: #d4d4d4;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
  