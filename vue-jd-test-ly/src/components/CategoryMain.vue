<template>
    <div class="main">
        <CategoryMainLeftView></CategoryMainLeftView>
        <CategoryMainRgihtView></CategoryMainRgihtView>
    </div>
</template>

<script>
    import CategoryMainLeftView from './CategoryMainLeft'
    import CategoryMainRgihtView from './CategoryMainRgiht'
    export default {
        data (){
            return {}
        },
        components:{
            CategoryMainLeftView,
            CategoryMainRgihtView
        }
    }
</script>

<style scoped>
    .main{
        display: flex;
    }
</style>