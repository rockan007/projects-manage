<template>
    <div class="projects-container d-flex flex-column">
        <ContentHeader v-bind:headType="parseInt(2)" v-on:addType="getAddType"></ContentHeader>
        <projects-silde class="flex-grow-1"></projects-silde>
    </div>
</template>
<script>
import ContentHeader from "./Content-Header.vue";
import ProjectsSlide from "./Projects-Slide.vue";
export default {
  name: "projects",
  components: {
    ContentHeader,
    "projects-silde": ProjectsSlide
  },
  data: function() {
    return {
    };
  },
  created:function(){
  },
  watch: {
    accountInfo: function(newVal) {
      console.log("获取账号信息：" + JSON.stringify(newVal));
      this.getProjects();
    }
  },
  methods: {
    getAddType: function(addType) {
      this.$emit("addType", addType);
    },
  }
};
</script>
<style scoped>
.projects-container {
  color: white;
  margin: 36px 60px;
}
</style>


