<template>
  <div class="dialog-overlay" v-if="isOpen">
    <div class="dialog-box">
      <h2>Add Question</h2>
      <form>
        <div class="form-group">
          <label for="question-category">Question Category</label><br />
          <select id="question-category" v-model="selectedCategory">
            <option value="Food">Food</option>
            <option value="Music">Music</option>
            <option value="Sports">Sports</option>
            <option value="Travel">Travel</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Fashion">Fashion</option>
          </select>
        </div>
        <div class="form-group">
          <label for="question-body">Question Body</label><br />
          <textarea v-model="questionBody" id="question-body" rows="10" cols="10" placeholder="Enter your question here" ></textarea>
        </div>
      </form>
      <div class="button-container">
        <button @click="cancel" class="btn btn-cancel">Cancel</button>
        <button @click="addQuestion" class="btn btn-post" >Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { apiUrls,header } from './apiUrls';
export default {
  props: {
    isOpen: Boolean,
    close: Function,
    postQuestion: Function,
  },
  setup(props) {
    const selectedCategory = ref('Food');
    const questionBody = ref('');

    const cancel = () => {
      props.close();
      reset();
    };

   

    const reset = () => {
      selectedCategory.value = 'Food';
      questionBody.value = '';
    };


  const addQuestion = async () => {
    try{
      const head = {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
            createdAt:"2023-12-10T13:28:46.028Z",              
            question:questionBody.value,
            status : "default",
            topicName: selectedCategory.value,
            userId:sessionStorage.getItem("userId")
        }),
        headers: header
    }
    const res = await fetch(apiUrls.addQuestion, head)
    const parsedResponse = await res.json()
    console.log("head",head)
    console.log('question added', parsedResponse)
    props.close()
    reset();
    }catch(e){
      console.log(e)
    }
    

}

    return {
      selectedCategory,
      questionBody,
      cancel,
      addQuestion,
      
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