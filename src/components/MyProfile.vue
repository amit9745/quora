<template>
    <div class="profile-container">
        <img src="../assets/profile-img.jpeg" class="profile-img">
        <div class="text-container">
            <div class="user-info">
                <p class="user-name">Amit Kumar</p>
                <p class="followers-following">
                    <span> 10k Followers     </span>
                    <span> 5 Following</span>
                </p>
            </div>

            <button class="edit" @click="goToSignIn">Logout</button>

        </div>
    </div>
      
    <div class="tab">
        <button class="tablinks" @click="changeTab('followers')" :class="{ active: activeTab === 'followers'}">Followers</button>
        <button class="tablinks" @click="changeTab('following')" :class="{ active: activeTab === 'following'}">Following</button>
        <button class="tablinks" @click="changeTab('questions')" :class="{ active: activeTab === 'questions'}">Questions</button>
        <button class="tablinks" @click="changeTab('answers')" :class="{ active: activeTab === 'answers'}">Answers</button>
    </div>

    <div v-if="activeTab === 'followers'">
        <FollowersComp />
    </div>

    <div v-if="activeTab === 'following'">
        <FollowingComp />
    </div>

    <div v-if="activeTab === 'questions'">
        <QuestionsComp />
    </div>

    <div v-if="activeTab === 'answers'">
        <AnswersComp />
    </div>

</template>
  
<script>
    import { ref } from 'vue';
    import { defineComponent } from 'vue';
    import FollowersComp from './FollowersComp.vue';
    import FollowingComp from './FollowingComp.vue';
    import QuestionsComp from './QuestionsComp.vue';
    import AnswersComp from './AnswersComp.vue';
import { useRouter } from 'vue-router';

  export default defineComponent({
    components: {
    FollowersComp,
    FollowingComp,
    QuestionsComp,
    AnswersComp

  },
 
    setup() {
        const activeTab = ref('followers');
        const route = useRouter()
        const changeTab = (tab) => {
            activeTab.value = tab;
        };

        const goToSignIn = () => {
            route.push('/login')
        }
        return {
            activeTab,
            changeTab,
            goToSignIn
        }
    }
  });

  </script>

  <style scoped>
    .profile-img {
        float: left;
        border-radius: 50%;
        max-height: 185px;
        width: 185px;
    }

    .profile-container {
        margin: 50px;;
    }
    .text-container {
        /* float :right;
        display: flex; */
        color: black;
        font-size: 18px;
    }

    .tab {
        overflow: hidden;
        
        /*background-color: #f1f1f1; */
        display: flex;
        justify-content: space-evenly;
        margin: 50px;
        margin-top: 80px;
    }

    .tab button {
        background-color: inherit;
        float: left;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 14px 16px;
        transition: 0.3s;
        font-size: 17px;
    }

    .edit {
        margin: 30px;
        display: inline-block;
        padding: 13px 25px;
        font-size: 15px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #292d32;
        border: none;
        border-radius: 15px;
        margin-bottom: 0px;
        margin-left: 300px;
    }

    .followers-following {
        margin: 10px;
        display: flex;
    }

    .tab button.active {
        color: rgb(247, 111, 111);
    border-bottom: 1px solid rgb(161, 158, 158);
    }

    .tabcontent {
        display: none;
        padding: 6px 12px;
        border: 1px solid #ccc;
        border-top: none;
    }

    @media screen and (max-width: 600px) {
    .tab {
        flex-direction: column;
        align-items: stretch;
    }

    .tab button {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
    }
}

.profile-img {
  float: left;
  border-radius: 50%;
  max-height: 200px;
  width: 200px;
}

.profile-container {
  margin: 50px;
  display: flex; 
  margin-top: 80px;
 
}

.text-container {
  display: flex;
  align-items: center;
  margin-left: 20px; 
}

.user-info {
  margin-right: 20px; 
}

.user-name {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 30px;
}


.edit {
  margin: 0;
  display: inline-block;
  padding: 13px 25px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #292d32;
  border: none;
  border-radius: 15px;
  margin-bottom: 0px;
  margin-left: 800px;
}

</style> 




