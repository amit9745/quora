<template>
  <h1>question</h1>
  

</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    question: {
      type: Object,
      required: true,
    },
  },
  setup(props) {},
});
</script>