
<template>
  <div class="container">
    <div v-for="item in items" :key="item.id" :class="{ 'selected': item.selected }" class="box">
      <input type="checkbox" v-model="item.selected" class="checkbox">
      <img :src="item.imageSrc" alt="Image" class="image">
      <p class="title"> {{ item?.title }}</p>
    </div>
    <Button @click="onNextButtonClicked">Next</Button>
  </div>
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

export default {
  setup() {
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
        if(element.selected){
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
        router.replace("/")

    }

    return { items, image_1, image_2, image_3, image_4, image_5, image_6,onNextButtonClicked };
  },
};
</script>
  
<style scoped>
.container {
  margin-top: 90px;
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
</style>
  