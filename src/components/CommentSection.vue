<template>
    <div class="container">
  <div class="top-div">
      <div class="top-left-div">
        <img
          class="img"
          src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
          alt=""
        />
      </div>
      <div class="top-right-div">
        <h2>Amit kumar</h2>
        <p>Answered 3 days ago</p>
       
      </div>

    </div>
    <p>Answer </p>
    <button @click="isReplying =!isReplying">Reply</button>
    <div v-if="isReplying">
    <textarea v-model="message" placeholder="reply"></textarea>

    </div>

</div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
   
setup(){
    const isReplying = ref(false);


return{
    isReplying
}
}

})
</script>


<style scoped>

.top-div {
  display: flex;
  align-items: center;
  
}
.top-left-div {
   height: 40px;
  width: 40px;
  border-radius: 3px;
}
.top-left-div img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}
.top-right-div {
  margin-left: 20px;
}
.top-right-div h2 {
  text-align: justify;
}
</style>