

const feedDomain = "http://10.20.3.163:8765/quora/feed/"
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
    getAllAnswersByQuestionId: `${feedDomain}/answer/getAnswers`,

    fetchCommentsUrl: `${feedDomain}/comment/getComments`,
    addComment:`${feedDomain}/comment/addComment`,
    
    fetchReplies :`${feedDomain}/comment/getReplies`,
    addReply:`${feedDomain}/comment/addReply`,

    addUser : `${profileDomain}/profile/addProfile`,
    addCategories :`${profileDomain}/profile/addCategories`,
    getUser: `${profileDomain}/profile/getProfile`,

  };

  export {
    apiUrls,
    feedDomain,
    header
  }
 