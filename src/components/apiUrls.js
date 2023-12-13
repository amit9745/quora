

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

    getVotes :`/quora/feed/answer/getVotes`,

    fetchCommentsUrl: `/quora/feed/comment/getComments`,
    addComment:`/quora/feed/comment/addComment`,
    
    fetchReplies :`/quora/feed/comment/getReplies`,
    addReply:`/quora/feed/comment/addReply`,

    addUser : `/quora/profile/addProfile`,
    addCategories :`/quora/profile/addCategories`,
    getUser: `/quora/profile/getProfile`,


    getMyProfile :`/quora/profile/getProfileView`


  };

  export {
    apiUrls,

    header
  }
 