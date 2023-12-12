

// const feedDomain = "http://10.20.3.163:8091/quora"
// const profileDomain =  "http://10.20.3.163:8088/quora"


const header = {
    'Content-Type': 'application/json',
    "authorization":sessionStorage.getItem("token")
};
 const apiUrls = {

    getHome: `/quora/feed/answer/getHome`,
    addQuestion: `/quora/feed/question/addQuestion`,
    getQuestions: `/quora/feed/question/getQuestionsByCategory`,
    addAnswer: `/quora/feed/answer/addAnswer`,

    updateUpvotes : `/quora/feed/answer/updateUpvotes`,
    updateDownvotes : `/quora/feed/answer/updateDownvotes`,
    getAllAnswersByQuestionId: `/quora/feed/answer/getAnswers`,

    fetchCommentsUrl: `/quora/feed/comment/getComments`,
    addComment:`/quora/feed/comment/addComment`,
    
    fetchReplies :`/quora/feed/comment/getReplies`,
    addReply:`/quora/feed/comment/addReply`,

    addUser : `/quora/feed/profile/addProfile`,
    addCategories :`/quora/feed/profile/addCategories`,
    getUser: `/quora/profile/getProfile`,

  };

  export {
    apiUrls,

    header
  }
 