<template>
    <div class="d-flex justify-content-center align-items-center">
        <MainItem :type=parseInt(0)></MainItem>
        <MainItem :type=parseInt(1)></MainItem>
        <MainItem :type=parseInt(2)></MainItem>
    </div>
</template>
<script>
import MainItem from './Main-Item';
export default {
    name:'default',
    components:{
        MainItem
    }
}
</script>
<style scoped>

</style>


