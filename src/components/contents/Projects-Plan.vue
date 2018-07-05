<template>
    <div class="plan-container d-flex flex-column">
         <ContentHeader v-bind:headType="parseInt(0)" v-on:periodType="getPeriodType" v-on:addType="getAddType"></ContentHeader>
         <div class="plan-content flex-grow-1 d-flex">
             <date-period v-bind:periodType="periodType"></date-period>
         </div>
    </div>
</template>
<script>
import ContentHeader from "./Content-Header";
import DatePeriod from "../../views/Date-Period"
export default {
  name: "plan",
  components: {
    ContentHeader,
    'date-period':DatePeriod
  },
  data: function() {
    return {
      periodType: 0 //0周计划 1月计划 2季度计划
    };
  },
  mounted: function() {},
  methods: {
    getPeriodType: function(periodType) {
      console.log("获取的选择的计划类型：" + periodType);
      this.periodType = periodType;
    },
    getAddType:function(addType){
        console.log("获取的添加类型："+addType);
        this.$emit('addType',addType);
    }
  }
};
</script>
<style scoped>
.plan-container {
  color: white;
  margin: 36px 60px;
}
.plan-content{
    padding: 80px 120px;
}
</style>
