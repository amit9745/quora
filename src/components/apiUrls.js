

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

    updateUpvotes : `${feedDomain}/answer/updateUpvotes`,

    updateDownvotes : `${feedDomain}/answer/updateDownvotes`,
    getAllAnswersByQuestionId: `${feedDomain}/answer/getAnswers`,

    fetchCommentsUrl: `${feedDomain}/comment/getComments`,
    addComment:`${feedDomain}/comment/addComment`,
    
    fetchReplies :`${feedDomain}/comment/getReplies`,
    addReply:`${feedDomain}/comment/addReply`,

    addUser : `${profileDomain}/profile/addProfile`
    addCategories :`${profileDomain}/profile/addCategories`,
    getUser: `${profileDomain}/profile/getProfile`,

  };

  export {
    apiUrls,
    feedDomain,
    header
  }
 