<template>
  <div class="reply-section">
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
        <p>@beginner</p>
      </div>
    </div>
    <p class="para">
      {{ reply.message }}
    </p>
  </div>
</template>
  
  <script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    reply: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const message = ref("");
    const isDisabled = () => {
      return message.value > 0;
    };

    return {
      isDisabled,
    };
  },
});
</script>
  
  
  <style scoped>
.reply-section {
  margin-left: 60px;
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
  margin-left: 60px;
  font-size: small;
}
.reply {
  display: flex;
  margin-top: 5px;
  justify-content: flex-start;
}
.reply-button {
  display: block;
  text-align: left;
  margin-left: 55px;
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
</style>