<template>
    <div id="progressesContainer" class="carousel slide d-flex flex-column" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#progressesContainer" v-for="index in totalPage" :key="index-1" :data-slide-to="index-1" :class='{"active":(index-1)==activeIndex}'></li>
        </ol>
        <div class="carousel-inner flex-grow-1 d-flex">
            <progress-item-slide v-on:addProgress="getAddProgress" v-for="(slideProgress,index) in slideProgresses" v-bind:slideProgress="slideProgress" :key="index" 
            :class="{'active':index==activeIndex}"></progress-item-slide>
        </div>
        <a class="carousel-control-prev" href="#progressesContainer" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#progressesContainer" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>
<script>
import $ from "jquery";
import { Const } from "../../assets/js/const.js";
import ProgressItemSlide from "./Progress-Item-Slide";
export default {
  name: "slideContainer",
  components: {
    "progress-item-slide": ProgressItemSlide
  },
  props: {
    isProgressAdd: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return {
      accountInfo: "",
      progresses: "",
      totalPage: 0,
      activeIndex: 0,
      slideProgresses: []
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
    isProgressAdd: function(newVal) {
      if (newVal) {
        this.getProgresses();
      }
    },
    accountInfo: function() {
      this.getProgresses();
    },
    progresses: {
      deep: true,
      handler: function() {
        this.getSlideProgresses();
      }
    },
    slideProgresses: {
      deep: true,
      handler: function(newVal) {
        console.log("获取的项目进度：" + JSON.stringify(newVal));
        this.$nextTick(function() {
          $(".carousel").carousel();
        });
      }
    }
  },
  methods: {
    getProgresses: function() {
      console.log("获取项目列表信息");
      Const.request(
        Const.PROJECTS,
        {
          UIDstr: this.accountInfo.AccountID,
          PageIndex: 1,
          PageSize: 0
        },
        function(response) {
          console.log(
            "获取的项目进程列表数据信息：" + JSON.stringify(response)
          );
          if (response.ResultCode == 200) {
            this.progresses = response.Data_Obj.List;
          } else {
            this.progresses = [];
          }
          this.totalPage = Math.ceil(this.progresses.length / 3.0);
          this.$emit("listProgressAdd");
        }.bind(this)
      );
    },
    getAccountInfo: function() {
      this.accountInfo = Const.getSessionStorage(Const.ACCOUNT_INFO);
    },
    getSlideProgresses: function() {
     
      
      let sProgresses = [];
      console.log(this.progresses.slice(0, 4));
      for (let i = 0; i < this.totalPage; i++) {
        sProgresses.push(this.progresses.slice(i * 3, (i + 1) * 3));
      }
      this.slideProgresses = sProgresses;
    },
    getAddProgress: function(id) {
      this.$emit("addProgress", id);
    }
  }
};
</script>
<style scoped>
.carousel-inner {
  padding: 50px 100px;
}
</style>

