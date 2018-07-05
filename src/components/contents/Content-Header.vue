<template>
    <div class="projects-header d-flex align-items-center">
            <div class="devider-container"></div>
            <div class="projects-detail">{{headers[headType].title}}</div>
            <PeriodsTitle v-on:periodType="emitPeriodType" v-if="headType==0"></PeriodsTitle>
            <div v-if="headers[headType].subTitle" v-on:click="$emit('addType',headType)" class="ml-auto"><span>+</span>{{headers[headType].subTitle}}</div>
    </div>
</template>
<script>
import PeriodsTitle from "./Periods-Title";
export default {
  name: "contentHeader",
  components:{
      PeriodsTitle,
  },
  props: {
    headType: Number
  },
  data: function() {
    return {
      headers: [
        {
          title: "项目计划",
          subTitle: "新增计划"
        },
        {
          title: "项目进度",
          subTitle: "添加进度"
        },
        {
          title: "项目详情",
          subTitle: ""
        }
      ]
    };
  },
  mounted: function() {},
  methods: {
      emitPeriodType:function(periodType){
            console.log("获取的选择的计划类型："+periodType);
          this.$emit('periodType',periodType)
      }
  }
};
</script>
<style scoped>
.devider-container {
  width: 2px;
  height: 40px;
  background-color: white;
  margin-right: 16px;
}
.projects-detail {
  font-size: 26px;
}
</style>
