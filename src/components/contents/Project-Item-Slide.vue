<template>
    <div class="carousel-item d-flex flex-wrap justify-content-center">
        <div  v-for="(project,index) in slideProject" v-bind:style='{"background-color":getRandomColor()}' 
        class=" project-item col-2 d-flex flex-column" :key="index" v-on:click="routerToDetail(project.TabIDStr)">
            <div class="project-title">
                {{project.ProjectName}}
            </div> 
            <div class="project-info">
                 {{project.ProjectBrief}}
            </div>
           <div class="mt-auto ml-auto" > <span class="iconfont icon-tiaozhuan"></span></div>
        </div>
    </div>
</template>
<script>
export default {
  name: "projectItemSlide",
  props: {
    slideProject: {
      type: Array,
      default: function(){
          return []
      }
    }
  },
  data: function() {
    return {};
  },
  methods: {
    getRandomColor: function() {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += ((Math.random() * 16) | 0).toString(16);
      }
      return color;
    },
    routerToDetail:function(id){
        this.$router.push({
            name:'detail',
            params:{
                id:id
            }
        });
    }
  }
};
</script>
<style scoped>
.project-item{
    height: 200px;
    margin: 8px;
    padding: 8px 20px;
}
.iconfont.icon-tiaozhuan{
    font-size: 36px;
}
.project-title,
.project-info{
    text-align: left
}
.project-title{
    font-size: 24px;
}
.project-info{
    padding: 8px 0;
    font-size: 18px;
}
</style>

