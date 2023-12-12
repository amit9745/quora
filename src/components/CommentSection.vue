<template>
  <div class="section">
    <div class="top-div">
      <div class="top-left-div">
        <img
          class="img"
          src="https://media.istockphoto.com/id/1476170969/photo/portrait-of-young-man-ready-for-job-business-concept.webp?b=1&s=170667a&w=0&k=20&c=FycdXoKn5StpYCKJ7PdkyJo9G5wfNgmSLBWk3dI35Zw="
          alt=""
        />
      </div>
      <div class="top-right-div">
        <h4>Amit kumar</h4>
        <p>Answered 3 days ago</p>
      </div>
    </div>
    <p class="para">
     {{ comment.content }}
      
    </p>
    <div v-if="isReplying">
        <div class="reply" v-if="isReplying">
        <input
        v-model="reply"
            class="textarea"
            
            placeholder="Reply.."
        />
      <button @click="addReply" class="button" >Reply</button>
    </div></div>
    <div v-else>
        <button @click="switchReplying(comment.commentId)" class="reply-button">Reply</button>
    </div>
    <div v-for="(reply,index) in replies  " :key="index">
        <ReplySection :reply="reply" />
        <!-- <hr> -->
      </div>
   
    
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { apiUrls } from "./apiUrls";
import ReplySection from "./ReplySection.vue";
export default defineComponent({
components: {
    ReplySection,
  },
  props:{
    comment:{
        type:Object,
        required:false
    },
   
  },
  setup(props) {

    const reply = ref("");
    const isReplying = ref(false);

    const replies = ref([]);
   
    const FETCH_REPLIES_BY_COMMENTID = async (commentId) => {
      const fetchReplyUrl = apiUrls.fetchReplies;
      const apiUrl = `${fetchReplyUrl}/${commentId}`;

      const res = await fetch(apiUrl);

      const jsonnew = await res.json();
      replies.value = jsonnew.resultData;
      console.log(replies.value);
    };
    const switchReplying = async (commentId)=>{
        isReplying.value=!isReplying.value;
        await FETCH_REPLIES_BY_COMMENTID(commentId)
    }
    
    const addReply = async () => {
    
    const head = {
        // mode: 'no-cors',
        method: 'POST',
        body: JSON.stringify({
            commentId:props.comment.commentId,
            message: reply.value,
            userId:"dasf"
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const addReply = apiUrls.addReply;
    const res = await fetch(addReply, head)
    const parsedResponse = await res.json()
    // window.location.reload()
    console.log('reply added', parsedResponse)
    reply.value=''
    await FETCH_REPLIES_BY_COMMENTID(props.comment.commentId)
}



    return {
      isReplying,
      
      FETCH_REPLIES_BY_COMMENTID,
      replies,
      switchReplying,
      addReply,
      reply
    };
  },
});
</script>


<style scoped>
.section{
    margin-left: 40px;
    margin-top: 15px;
}

.top-div {
  display: flex;
  align-items: center;
}
.top-left-div {
  height: 40px;
  width: 40px;
  border-radius: 3px;
}
.top-left-div img {
  width: 100%;
  height: 100%;
  border-radius: 50px;
}
.top-right-div {
  margin-left: 20px;
  text-align: left;
  font-size: small;
}
.top-right-div h2 {
  text-align: justify;
  font-size: large;
}

.top-right-div h4 {
  text-align: justify;
}
.para {
  text-align: justify;
  margin-left: 60px;
  font-size: small;
}
.reply {
  display: flex;
  margin-top: 5px;

  justify-content: flex-start;
}
.reply-button{
    display: block;
    text-align: left;
    margin-left:60px ;
    margin-top: 5px;
    padding: 6px;
}
.textarea {
    border: none;
    width: 86%;
    border-radius: 12px;
    margin-right: 11px;
    margin-left: 55px;
    height: 30px;
    padding: 6px;
    background-color: #f3f3f3;
    z-index: 5;
    padding-left: 18px;
}
.button {
    width: 12%;
    border-radius: 1rem;
    border: none;
    background-color: #292d32;
    color: #fff;
    cursor: pointer;
}

@media screen and (min-width: 360px) and (max-width: 900px) {
.para{
  width: 65%;
  font-size: x-small;
}
.reply {
  display: flex;
  margin-top: 5px;
  justify-content: flex-start;
}
.reply-button{
    display: block;
    text-align: left;
    margin-left:55px ;
    margin-top: 5px;
    padding: 2px;
    
}
.textarea{
  border: none;
    width: 50%;
    border-radius: 12px;
    margin-right: 6px;
    margin-left: 55px;
    height: 28px;
    padding: 6px;
    background-color: #f3f3f3;
    z-index: 5;
    padding-left: 12px;
    font-size: small;
}
.button {
    width: 24%;
    border-radius: 0;
    font-size: x-small;
}
}

</style>