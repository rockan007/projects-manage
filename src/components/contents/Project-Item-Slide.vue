<template>
    <div class="carousel-item">
        <div class="d-block w-100 h-100 d-flex justify-content-around flex-wrap">
            <div  v-for="(project,index) in slideProject" v-bind:style='{"background-color":getRandomColor()}' 
        class=" project-item col-2 d-flex flex-column" :key="index" v-on:click="routerToDetail(project.ID)">
                <div class="project-title single-line">
                    {{project.ProjectName}}
                </div> 
                <div class="project-info triple-line flex-shrink-1">
                    {{project.ProjectBrief}}
                </div>
                <div class="mt-auto ml-auto" > <span class="iconfont icon-tiaozhuan"></span></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "projectItemSlide",
  props: {
    slideProject: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data: function() {
    return {};
  },
  watch: {
    slideProject: function(newVal) {}
  },
  methods: {
    getRandomColor: function() {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += ((Math.random() * 16) | 0).toString(16);
      }
      return color;
    },
    routerToDetail: function(id) {
      this.$router.push({
        name: "detail",
        params: {
          id: id
        }
      });
    }
  }
};
</script>
<style scoped>
.project-item {
  height: 200px;
  margin: 32px;
  padding: 8px 20px;
}
.iconfont.icon-tiaozhuan {
  font-size: 36px;
}
.project-title,
.project-info {
  text-align: left;
}
.project-title {
  font-size: 24px;
}
.project-info {
  padding: 8px 0;
  font-size: 18px;
}
.single-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.triple-line {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
</style>

