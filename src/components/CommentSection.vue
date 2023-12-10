<template>
  <div class="section">
    <div class="top-div">
      <div class="top-left-div">
        <img
          class="img"
          src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
          alt=""
        />
      </div>
      <div class="top-right-div">
        <h4>Amit kumar</h4>
        <p>Answered 3 days ago</p>
      </div>
    </div>
    <p class="para">
      I'm 22, an unemployed graduate, preparing for government exams. So let me
      tell you how lonely I am? I recharge for unlimited calls and talk to
      nobody. This is how lonely I am 😅. I have no friend circle, not even a
      
    </p>
    <div v-if="isReplying">
        <div class="reply" v-if="isReplying">
        <textarea
            class="textarea"
            v-model="message"
            placeholder="  Reply..."
        ></textarea>
      <button class="button" v-bind:disabled="!isDisabled">Reply</button>
    </div></div>
    <div v-else>
        <button @click="isReplying = !isReplying" class="reply-button">Reply</button>
    </div>
    
    <ReplySection/>
    <ReplySection/>
    <ReplySection/>
    <ReplySection/>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ReplySection from "./ReplySection.vue";
export default defineComponent({
components: {
    ReplySection,
  },
  setup() {
    
    const message = ref("");
    const isDisabled = () => {
      return message.value > 0;
    };
    const isReplying = ref(false);

    return {
      isReplying,
      isDisabled,
    };
  },
});
</script>


<style scoped>
.section{
    margin-left: 40px;
    margin-top: 15px;
}

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
  text-align: left;
  font-size: small;
}
.top-right-div h2 {
  text-align: justify;
}
.para {
  text-align: justify;
  margin-left: 55px;
}
.reply {
  display: flex;
  margin-top: 5px;
  justify-content: flex-start;
}
.reply-button{
    display: block;
    text-align: left;
    margin-left:55px ;
    margin-top: 5px;
    padding: 6px;
}
.textarea {
  width: 80%;
  border-radius: 12px;
  margin-right: 10px;
  height: 30px;
  padding: 6px;

  background-color: #f3f3f3;
  z-index: 5;
}
.button {
  border-radius: 12px;
  width: 20%;
  background-color: aqua;
}
</style>