<template>
  <div class="dialog-overlay" v-if="isOpen">
    <div class="dialog-box">
      <h2>Add Question</h2>
      <form>
        <div class="form-group">
          <label for="question-category">Question Category</label><br />
          <select id="question-category" v-model="selectedCategory">
            <option value="food">Food</option>
            <option value="music">Music</option>
            <option value="sports">Sports</option>
            <option value="travel">Travel</option>
            <option value="entertainment">Entertainment</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question-body">Question Body</label><br />
          <textarea v-model="questionBody" id="question-body" rows="10" cols="10" placeholder="Enter your question here"></textarea>
        </div>
      </form>
      <div class="button-container">
        <button @click="cancel" class="btn btn-cancel">Cancel</button>
        <button @click="post" class="btn btn-post">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: {
    isOpen: Boolean,
    close: Function,
    postQuestion: Function,
  },
  setup(props) {
    const selectedCategory = ref('food');
    const questionBody = ref('');

    const cancel = () => {
      props.close();
      reset();
    };

    const post = () => {
      props.postQuestion({
        category: selectedCategory.value,
        body: questionBody.value,
      });
      props.close();
      reset();
    };

    const reset = () => {
      selectedCategory.value = 'food';
      questionBody.value = '';
    };

    return {
      selectedCategory,
      questionBody,
      cancel,
      post,
    };
  },
};
</script>

<style scoped>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.dialog-box {
  background: #ffffff;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 100px;
  padding-right: 100px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
}

form {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: table;
}

select,
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.button-container {
  display: flex;
  justify-content: flex-end;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-cancel {
  background-color: #ccc;
  color: #333;
  margin-right: 10px;
}

.btn-post {
  background-color: #4285f4;
  color: #fff;
}
</style>