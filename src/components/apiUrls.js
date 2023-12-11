const domain = "http://172.20.10.11:8091/quora"
const header = {
    'Content-Type': 'application/json',
    
};
 const apiUrls = {
    getHome: `${domain}/answer/getHome`,
    addQuestion: `${domain}/question/addQuestion`,
    getQuestions: `${domain}/question/getQuestionsByCategory`,
    addAnswer: `${domain}/answer/addAnswer`,
    updateUpvotes : `${domain}/answer/updateUpvotes`,
    updateDownvotes : `${domain}/answer/updateDownvotes`,


    addUser : `${domain}/profile//addProfile`

  };

  export {
    apiUrls,
    domain,
    header
  }
 