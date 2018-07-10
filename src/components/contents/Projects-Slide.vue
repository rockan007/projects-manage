<template>
    <div id="projectsContainer" class="carousel slide d-flex flex-column" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#projectsContainer" v-for="index in totalPage" :key="index-1" :data-slide-to="index-1" :class='{"active":(index-1)==activeIndex}'></li>
        </ol>
        <div class="carousel-inner flex-grow-1 d-flex">
            <project-item-slide v-for="(slideProject,index) in slideProjects" v-bind:slideProject="slideProject" :key="index" :class="{'active':index==activeIndex}"></project-item-slide>
        </div>
        <a class="carousel-control-prev" href="#projectsContainer" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#projectsContainer" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
import $ from "jquery";
import { Const } from "../../assets/js/const.js";
import ProjectItemSlide from "./Project-Item-Slide";
export default {
  name: "slideContainer",
  components: {
    "project-item-slide": ProjectItemSlide
  },
  data: function() {
    return {
      accountInfo: "",
      projects: "",
      totalPage: 0,
      activeIndex: 0,
      slideProjects: []
    };
  },
  created: function() {
    console.log("当前状态为created");
    this.getAccountInfo();
  },
  mounted: function() {
    console.log("slide-container mounted");
  },
  watch: {
    accountInfo: function() {
      this.getProjects();
    },
    projects: {
      deep: true,
      handler: function() {
        this.getSlideProjects();
      }
    },
    slideProjects: {
      deep: true,
      handler: function() {
        this.$nextTick(function() {
          $(".carousel").carousel();
        });
      }
    }
  },
  methods: {
    getProjects: function() {
      console.log("获取项目列表信息");
      Const.request(
        Const.PROJECTS,
        {
          UIDstr: this.accountInfo.AccountID,
          PageIndex: 1,
          PageSize: 0
        },
        function(response) {
          console.log("获取的项目列表数据信息：" + JSON.stringify(response));
          this.projects = response.Data_Obj.List;
          this.totalPage = Math.ceil(this.projects.length / 8.0);
        }.bind(this)
      );
    },
    getAccountInfo: function() {
      this.accountInfo = Const.getSessionStorage(Const.ACCOUNT_INFO);
    },
    getSlideProjects: function() {
      let sProjects = [];
      for (let i = 0; i < this.totalPage; i++) {
        sProjects.push(this.projects.slice(i * 8, (i + 1) * 8));
      }
      this.slideProjects = sProjects;
    }
  }
};
</script>
<style scoped>
.carousel-inner{
    padding: 50px 100px;
}
</style>

