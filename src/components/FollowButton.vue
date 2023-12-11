<template>
  <button class="unfollow">Follow</button>
  

</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    UserId: {
      type: Object,
      required: true,
    },
  },
  setup() {

  },
});
</script>

<style scoped>
 .unfollow {
    padding: 10px 15px;
    font-size: 15px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #292d32;
    border: none;
    border-radius: 15px;
  }
</style>