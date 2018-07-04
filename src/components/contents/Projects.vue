<template>
    <div class="projects-container">
        <div class="projects-header d-flex align-items-center">
            <div class="devider-container"></div>
            <div class="projects-detail">项目详情</div>
            <div class="ml-auto"><span>+</span>新增项目</div>
        </div>
        <div class="projects-content">
        </div>
    </div>
</template>
<script>
export default {
    name:'projects'
}
</script>
<style scoped>
    .projects-container{
        color: white;
        margin: 36px 60px;
    }
    .projects-detail{
        font-size: 26px;
    }
    .devider-container{
        width: 2px;
        height: 40px;
        background-color: white;
        margin-right: 16px;
    }
</style>


