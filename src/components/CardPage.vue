<template>
  <!-- {{ cardItem }} -->
  <div class="container">
    <ProfileView :userId = "cardItem.userId" />
    <div class="middle-div">
      <div class="middle-top-div">
        <h3 @click="routeMeToQuestionInfoPage">
          {{ cardItem.question }} 
        </h3>
      </div>
      <div class="middle-bottom-div">
        <p>
          {{ cardItem.answer }}
        </p>
      </div>
    </div>
   
    <div class="bottom-div">
      <div class="bottom-left-div">
        <div class="left" @click="callParent(index)">
          <div class="up"><img class="icon" :src="like" @click="upvoteAnswer"/></div>

          <div class="upvote">
            <p>Upvote</p>
          </div>
        </div>
        <div class="upvote-count">{{ votes?.upvotesId.length }}</div>
        <div class="down"><img class="icon" :src="dislike" @click="downvoteAnswer"/></div>
        <div class="dislike-count">{{  votes?.downvotesId.length }}</div>
      </div>
      <div class="bottom-right-div">
        <div class="comment" @click="switchCommenting(cardItem.answerId)">
          <img class="icon" :src="commentIcon" />
        </div>
        <div class="comment-count">{{ comments.length }}</div>
      </div>
    </div>

    <div v-if="isCommenting">
      <div class="comment-div">
        <ProfileIcon :avatar  = "avatar"/>
        <!-- <div class="img-div">
          <img
            class="img"
            src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
            alt=""
          />
        </div> -->

        <input
          type="text"
          class="search-input"
          placeholder="Add a comment..."
          v-model="comment"
        />

        <div>
          <button class="search-button" @click="addComment">
            Comment
          </button>
        </div>
      </div>
      <!-- <div>This is below div to check </div> -->
      <div v-for="(comment,index) in comments  " :key="index">
        <CommentSection :comment="comment" />
        <!-- <hr> -->
      </div>
      <!-- -->
    </div>
    <div></div>
  </div>
</template>

<script>
import CommentSection from "@/components/CommentSection.vue";
import { defineComponent, ref,computed } from "vue";
import like from "@/assets/like.svg";
import dislike from "@/assets/dislike.svg";
import commentIcon from "@/assets/comment.svg";
import router from "../router/index.js";
import ProfileView from "./ProfileView.vue";
import { useAnswerStore } from "../store/answer-store"
import { header,apiUrls } from "./apiUrls";
import ProfileIcon from "./ProfileIcon.vue";
import useProfileStore from "@/store/profile-store";



export default defineComponent({
  components: {
    CommentSection,
    ProfileView,
    ProfileIcon
},
  props: {
    cardItem: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  emits: ["upvoteClicked"],

  setup(props, context) {
    
    const profilStore = useProfileStore()
    const answerStore = useAnswerStore();
    const comments = ref([]);
    const votes = ref(null)
    const avatar = computed(()=>profilStore.profile?.profileAvatar)
    const commentsLength = computed(()=>props.cardItem?.comments?.length)
   
    const FETCH_COMMENTS_BY_ANSWERID = async (answerId) => {
      const fetchCommentsUrl = apiUrls.fetchCommentsUrl;
      const apiUrl = `${fetchCommentsUrl}/${answerId}`;

      const res = await fetch(apiUrl);

      const jsonnew = await res.json();
      comments.value = jsonnew.resultData;
      // props.cardItem.cardItem = comments.value
      // propscardItem.commentIds = comments.value
      console.log(comments.value);
    };
    
    const FETCH_VOTES_BY_ANSWERID = async (answerId) => {
      const fetchVotesUrl = apiUrls.getVotes;
      const apiUrl = `${fetchVotesUrl}/${answerId}`;

      const res = await fetch(apiUrl);

      const jsonnew = await res.json();
      votes.value = jsonnew.resultData;
      console.log(votes.value);
    };

    
    FETCH_VOTES_BY_ANSWERID(props.cardItem.answerId)
    FETCH_COMMENTS_BY_ANSWERID(props.cardItem.answerId)

    const comment = ref("")
    const isCommenting = ref(false);
    const switchCommenting = async ()=>{
        isCommenting.value=!isCommenting.value;
        // await FETCH_COMMENTS_BY_ANSWERID(answerId)
    }
    
    const routeMeToQuestionInfoPage = () => {
      
      answerStore.updateQuestionInfo( props.cardItem.questionId );
      answerStore.updateQuestionName( props.cardItem.question );
      console.log('selected Question Id', props.cardItem.questionId )
      router.push("/questioninfopage"); 
    };
    
    const addComment = async () => {
    
        const head = {
            // mode: 'no-cors',
            method: 'POST',
            body: JSON.stringify({
                answerId:props.cardItem.answerId,
                commentTypes : "default",
                content: comment.value,
                userId:sessionStorage.getItem("userId")
            }),
            headers: header
        }
        const apiUrl = apiUrls.addComment
        const res = await fetch(apiUrl, head)
        const parsedResponse = await res.json()
        // window.location.reload()
        console.log('comment added', parsedResponse)
        comment.value='';
        await FETCH_COMMENTS_BY_ANSWERID(props.cardItem.answerId)
    }

  const upvoteAnswer = async () => {
    if(!votes.value.upvotesId.includes(sessionStorage.getItem("userId"))){
      const head = {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(
          {
            
          }
        ),
        headers: header
    }
    const queryParams = new URLSearchParams();

    queryParams.set("userId",sessionStorage.getItem("userId"));
    queryParams.set("answerId",props.cardItem.answerId)
    const apiUrl = apiUrls.updateUpvotes

    const res = await fetch(`${apiUrl}?${queryParams.toString()}`, head)
    const parsedResponse = await res.json()
    // window.location.reload()
    console.log('upvote added', parsedResponse)

    await FETCH_VOTES_BY_ANSWERID(props.cardItem.answerId)
    }else{
      alert("you have already voted")
    }
    
}


const downvoteAnswer = async () => {
  if(!votes.value.upvotesId.includes(sessionStorage.getItem("userId"))){
      const head = {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify(
          {
            
          }
        ),
        headers: header
    }
    const queryParams = new URLSearchParams();

    queryParams.set("userId",sessionStorage.getItem("userId"));
    queryParams.set("answerId",props.cardItem.answerId)
    const apiUrl = apiUrls.downvoteAnswer

    const res = await fetch(`${apiUrl}?${queryParams.toString()}`, head)
    const parsedResponse = await res.json()
    // window.location.reload()
    console.log('downvote added', parsedResponse)

    await FETCH_VOTES_BY_ANSWERID(props.cardItem.answerId)
    }else{
      alert("you have already downvoted")
    }
  
}







    const callParent = () => context.emit("upvoteClicked", props.index,
);


    return {
      like,
      dislike,
      comments,
      callParent,
      isCommenting,
      routeMeToQuestionInfoPage,
      FETCH_COMMENTS_BY_ANSWERID,
      FETCH_VOTES_BY_ANSWERID,
      switchCommenting,
      commentIcon,
      comment,
      addComment,
      votes,
      commentsLength,
      upvoteAnswer,
      downvoteAnswer,
      avatar
      // selectedQuestionId
      //   onUpvoteClicked
    };
  },
});
</script>

<style scoped>
.container {
  margin-top: 16px;
  margin-left: 50px;
  margin-right: 50px;
}

.middle-div {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.middle-top-div h3 {
  text-align: justify;
  margin-bottom: 15px;
  font-size: larger;
  cursor: pointer;
}
.middle-bottom-div p {
  text-align: justify;
  font-size: medium;
}
.bottom-div {
  margin-top: 4%;
  border-style: groove;
  padding: 2px;
  display: flex;
  align-items: center;
}
.bottom-left-div {
  border-style: groove;
  display: flex;
  padding: 10px;
  display: flex;
  border-radius: 37px;
  height: 43px;
}
.bottom-right-div {
  margin-left: 2%;
  padding: 10px;
  display: flex;
  margin-top: 8px;
  width: 30%;
}
.up {
  height: 20px;
  width: 30px;
}

.down {
  margin-left: 40px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.comment {
  height: 30px;
  width: 30px;
  margin-right: 10px;
  cursor: pointer;
}
.left {
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 1px;
}
.dislike-count {
  margin-left: 10px;
}

.comment-div {
  display: flex;

  margin-top: 15px;
}
.img-div {
  height: 40px;
  width: 40px;
  border-radius: 3px;
}
.img-div img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit:cover;
}
.search-input {
  width: 73%;
  border-radius: 1rem;
  border: none;
  padding: 1rem;
  background-color: #f3f3f3;
  margin: 0 15px;
  border-radius: 12px;
}

.search-button {
  position: absolute;
  padding: 0.8rem;
  border-radius: 1rem;
  border: none;
  background-color: #292d32;
  color: #fff;
  cursor: pointer;
}




@media screen and (min-width: 360px) and (max-width: 900px) {
.bottom-left-div {
    border-style: groove;
    padding: 10px;
    display: flex;
    border-radius: 37px;
    height: 43px;
}

.down {
  margin-left: 15px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}


.up{
  width: 15px;
  margin-left:-15px;
 
}
.upvote{
  font-size: small;
  margin-left: 1px;
}
.upvote-count{
  margin-left: -6px;
}
.dislike-count{
  margin-left: -4px;
}
.search-input{
  width: 46%;
    border-radius: 1rem;
    border: none;
    padding: 0rem;
    background-color: #f3f3f3;
    margin: 3px 5px;
    border-radius: 12px;
}
.search-button{
  position: absolute;
    border-radius: 12px;
    border: none;
    background-color: #292d32;
    color: #fff;
    cursor: pointer;
    padding: 10px 1px;
}


}

.up-clicked {
  color: red;
}
</style>