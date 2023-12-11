const feedDomain = "http://10.20.3.163:8091/quora"
const profileDomain =  "http://10.20.3.163:8088/quora"
const header = {
    'Content-Type': 'application/json',
    
};
 const apiUrls = {
    getHome: `${feedDomain}/answer/getHome`,
    addQuestion: `${feedDomain}/question/addQuestion`,
    getQuestions: `${feedDomain}/question/getQuestionsByCategory`,
    addAnswer: `${feedDomain}/answer/addAnswer`,
    updateUpvotes : `${feedDomain}/answer/updateUpvotes`,
    updateDownvotes : `${feedDomain}/answer/updateDownvotes`,


    addUser : `${profileDomain}/profile/addProfile`

  };

  export {
    apiUrls,
    feedDomain,
    header
  }
 