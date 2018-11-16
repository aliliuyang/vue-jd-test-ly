<template>
    <div class="category">
        <CategoryHeaderView></CategoryHeaderView>
        <CategoryMainView></CategoryMainView>
    </div>
</template>

<script>
    import CategoryHeaderView from './CategoryHeader'
    import CategoryMainView from './CategoryMain'
    export default {
        data (){
            return {}
        },
        components:{
            CategoryHeaderView,
            CategoryMainView
        }
    }
</script>

<style>
</style>