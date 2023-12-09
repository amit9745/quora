<template>
  <!-- {{ cardItem }} -->
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
        <h2>{{ cardItem.profileData.profileName }}</h2>
        <p>Answered 3 days ago</p>
      </div>
    </div>

    <div class="middle-div">
      <div class="middle-top-div">
        <h3>
          {{ cardItem.question }}
        </h3>
      </div>
      <div class="middle-bottom-div">
        <p>
          {{ cardItem.answer }}
        </p>
      </div>
    </div>

    <div class="bottom-div">
     <div class="bottom-left-div">
        <div class="left">
           
            <div class="up"><img class="icon" :src="like" /></div>
            
            <div class="upvote">
                <p>Upvote</p>
            </div>
        </div>
        <div class="upvote-count">{{ cardItem.upvoteCount }}</div>
        <div class="down"><img class="icon" :src="dislike" /></div>
     </div>
     <div class="bottom-right-div">
        <div class="comment"></div>
        <div class="comment-count"></div>
     </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import like from "@/assets/like.svg"
import dislike from "@/assets/dislike.svg"
export default defineComponent({
  props: {
    cardItem: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
            like,
            dislike
        }
  },
});
</script>

<style scoped>
.container {
  margin-top: 90px;
  margin-left: 50px;
  margin-right: 50px;
}
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
.top-right-div {
  margin-left: 20px;
}
.top-right-div h2 {
  text-align: justify;
}
.middle-div {
  display: flex;
  flex-wrap: wrap;
}
.middle-top-div h3 {
  text-align: justify;
  margin-bottom: 15px;
}
.middle-bottom-div p {
  text-align: justify;
}
.bottom-div{
    margin-top: 20%;
    border-style: groove;
    padding: 2px;
}
.bottom-left-div{
    border-style: groove;
    display: flex;
    padding: 10px;
    display: flex;
    align-items: center;
    width: 30%;
    border-radius: 37px;
    height: 38px;
   
}
.up{
  height: 30px;
  width: 30px;
}


.down{
   margin-left: 40px;
  height: 30px;
  width: 30px;
}
.left{
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}


</style>