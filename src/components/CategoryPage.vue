[17:55] Piyush Kumar Nayan
<template>
    <div class="container">
      <div v-for="item in items" :key="item.id" :class="{ 'selected': item.selected }" class="box">
        <input type="checkbox" v-model="item.selected" class="checkbox">
        <img :src="item.imageSrc" alt="Image" class="image">
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const items = ref([
        { id: 1, imageSrc: 'path_to_image_1.jpg', selected: false },
        { id: 2, imageSrc: 'path_to_image_2.jpg', selected: false },
        { id: 3, imageSrc: 'path_to_image_3.jpg', selected: false },
        { id: 4, imageSrc: 'path_to_image_4.jpg', selected: false },
        { id: 5, imageSrc: 'path_to_image_5.jpg', selected: false },
        { id: 6, imageSrc: 'path_to_image_6.jpg', selected: false },
        { id: 7, imageSrc: 'path_to_image_7.jpg', selected: false },
        { id: 8, imageSrc: 'path_to_image_8.jpg', selected: false },
        { id: 9, imageSrc: 'path_to_image_9.jpg', selected: false },
        { id: 10, imageSrc: 'path_to_image_10.jpg', selected: false },
      ]);
  
      return { items };
    },
  };
  </script>
  
  <style scoped>
    .container {
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
  
    .selected {
      border-color: #3498db;
    }
  </style>
  