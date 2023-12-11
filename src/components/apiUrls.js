

const feedDomain = "http://172.20.10.3:8091/quora"
const profileDomain =  "http://172.20.10.3:8088/quora"

const header = {
    'Content-Type': 'application/json',
    
};
 const apiUrls = {

    getHome: `${feedDomain}/answer/getHome`,
    addQuestion: `${feedDomain}/question/addQuestion`,
    getQuestions: `${feedDomain}/question/getQuestionsByCategory`,
    addAnswer: `${feedDomain}/answer/addAnswer`,
    updateDownvotes : `${feedDomain}/answer/updateDownvotes`,
    updateUpvotes : `${feedDomain}/answer/updateUpvotes`,
    getAllAnswersByQuestionId: `${feedDomain}/answer/getAnswers`,


    addUser : `${profileDomain}/profile/addProfile`,
    addCategories :`${profileDomain}/profile/addCategories`,
    getUser: `${profileDomain}/profile/getProfile`,

  };

  export {
    apiUrls,
    feedDomain,
    header
  }
 