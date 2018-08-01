<template>
    <div class="item-container col-3 d-flex flex-column" v-bind:class="[selectItem.bg]" v-on:click="routerToPage">
            <div class="item-title">
                {{selectItem.title}}
            </div>
            <div class="item-content">
                {{selectItem.content}}
            </div>
            <div class="item-icon mt-auto ml-auto">
                <span class="iconfont" v-bind:class="[selectItem.icon]"></span>
            </div>
    </div>
</template>
<script>
export default {
  name: "main-item",
  props: {
    type: Number
  },
  data: function() {
    return {
      list: [
        {
          title: "部门计划",
          content:
            "部门计划是根据对未来的项目决策，部门和部门内不同成员，在未来一定时期内关于行动方向、内容和方式安排的管理事件",
          icon: "icon-gerentishengjihua",
          bg: "plan-bg"
        },
        {
          title: "项目进程",
          content:
            "项目是由一些列项目阶段所构成的一个完整过程，而各个项目阶段又是由一系列具体活动构成的一个工作过程",
          icon: "icon-guochengguanli",
          bg: "progress-bg"
        },
        {
          title: "完成项目",
          content:
            "项目是一系列具有特定目标，有明确开始和终止日期，资金有限，消耗资源的活动和任务。",
          icon: "icon-chakanxiangqing",
          bg: "detail-bg"
        }
      ],
      selectItem: ""
    };
  },
  mounted: function() {
    this.selectItem = this.list[this.type];
  },
  watch: {
    type: function(newVal) {
      if (newVal > -1) {
        this.showItem = this.list[newVal];
      }
    }
  },
  filters: {},
  methods: {
    routerToPage: function() {
      console.log("页面跳转："+this.type);
      var path = "";
      switch (parseInt(this.type)) {
        case 0:
            path="/home/plan";
          break;
        case 1:
            path="/home/progress";
          break;
        case 2:
          path = "/home/projects";
          break;
        default:
          break;
      }
      console.log("跳转路径："+path)
      this.$router.push(path);
    }
  }
};
</script>
<style scoped>
.item-container {
  margin: 8px 16px;
  height: 360px;
  padding: 16px 32px;
  color: white;
  text-align: left;
}
.item-title {
  font-size: 42px;
}
.item-content {
  font-size: 24px;
}
.item-icon .iconfont {
  font-size: 80px;
}
.plan-bg {
  background-color: rgb(255, 157, 138);
}
.progress-bg {
  background-color: rgb(119, 198, 248);
}
.detail-bg {
  background-color: rgb(188, 153, 253);
}
</style>


