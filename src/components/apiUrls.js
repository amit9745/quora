const domain = "http://10.20.3.163:8091/quora"
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
    getAllAnswersByQuestionId: `${domain}/answer/getAnswers`,

    addUser : `${domain}/profile/addProfile`

  };

  export {
    apiUrls,
    domain,
    header
  }
 