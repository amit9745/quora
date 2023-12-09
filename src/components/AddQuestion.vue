<template>
    <div>
      <main>
        <h1>Add Question</h1>
        <form>
          <div class="form-group">
            <label for="question-category">Question Category</label><br />
            <select id="question-category">
              <option value="food">Food</option>
              <option value="music">Music</option>
              <option value="sports">Sports</option>
              <option value="travel">Travel</option>
              <option value="entertainment">Entertainment</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>
          <div>
            <label for="question-body">Question Body</label><br />
            <textarea id="question-body"></textarea>
          </div>
          <div class="container">
            <button> Cancel </button>
          <button> Post </button>
          </div>
        </form>
      </main>
    </div>
  </template>
  
  <style scoped>
  main {
    margin-top: 200px;
    width: 80%;
   
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .label {
    font-size: 16px;
  }
  
  .select {
    width: 50%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  
  .textarea {
    width: 50%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 10px;
  }
  
  .button {
    background-color: #0f77b7;
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    font-size: 16px;
  }
 
  .container {
            display: flex;
            justify-content: flex-end;
        }
  </style>
has context menu