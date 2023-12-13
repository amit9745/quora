<template>
    <main class="main">

        <!-- {{ home }} -->


        <div class="left">
            <CardPage v-for="(item, index) in home" @upvoteClicked="updateUpvote" :key="index" :cardItem="item"
                :index="index" class="left-div" />

        </div>
        <!-- <div class="right-div"> Ads</div> -->
<!-- {{ ad }} -->
        <div @click="redirectToExternalLink" class="right-div">
            <div class="img-div">
                <img :src="ad?.imageLink" alt="">
            </div>
        </div>
        <!-- <div class="right">
    <div class="right-div"></div>
 </div> -->

    </main>
</template>






<script>
import CardPage from '@/components/CardPage';
import { computed, defineComponent } from 'vue';
import { useHomeStore } from "../store/home-store.js"
import { useAdStore } from "../store/ads-store.js"

export default defineComponent({
    components: {
        CardPage
    },
    setup() {
        const homeStore = useHomeStore();
        homeStore.FETCH_HOME();

        const home = computed(() => homeStore.home);
        const updateUpvote = (index) => {
            home.value[index].upvoteCount++;
        }

        const adStore = useAdStore();
        adStore.FETCH_ADS_BY_CATEGORY('food');

        const ad = computed(() => adStore.ad);

        const redirectToExternalLink=()=>{
          
            // var link = 'https://www.blibli.com/';
            window.location.assign(ad?.value.externalLink);
        }

        // console.log(home.value)
        return {
            home,
            updateUpvote,
            ad,
            redirectToExternalLink
        }
    }


})
</script>

<style scoped>
.main {
    margin-top: 80px;
    display: flex;
    margin-bottom: 30px;
}

.left-div {
    width: 90%;
    background-color: white;
    padding: 2%;

}

.right-div {
    /* width: 160%; */
    /* background-color: white; */
    margin-right: 55px;
    /* display: inline-block; */
    /* height: 100px; */
    margin-top: 16px;
}


.img-div img {
    /* height: 100%; */
    width: 100%;
    object-fit: scale-down;
}
   

    @media screen and (min-width: 360px) and (max-width: 900px) {
        .right-div {
            background-color: white;
            height: 20%;
            margin-top: 10px;
            margin-left: -89px;
            margin-right: 7px;
        }

        .container {
            margin-top: 10px;
            margin-left: 9px;
            margin-right: 15px;
        }

        .left-div {
            width: 71%;
            background-color: white;
            padding: 2%;
            min-width: 246px;
        }
    }</style>

