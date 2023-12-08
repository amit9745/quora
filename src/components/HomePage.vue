<template>
 <main class="main">



 <CardPage/>
</main>
</template>






<script>
import CardPage from '@/components/CardPage';
import { defineComponent } from 'vue';
export default defineComponent({
    components:{
        CardPage
    }
})
</script>

<style scoped>

.main{
    margin-top: 80px;
}

</style>

