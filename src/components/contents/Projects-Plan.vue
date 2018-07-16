<template>
    <div class="plan-container d-flex flex-column">
         <ContentHeader v-bind:headType="parseInt(0)" v-on:periodType="getPeriodType" v-on:addType="getAddType"></ContentHeader>
         <div class="plan-content flex-grow-1 d-flex">
             <date-period v-bind:periodType="periodType" v-on:selectPeriod="getSelectPeriod"></date-period>
             <plan-list v-bind:planList="planList"></plan-list>
         </div>
    </div>
</template>
<script>
import ContentHeader from "./Content-Header";
import DatePeriod from "../../views/Date-Period";
import PlanList from "./Plan-List";
import { Const } from "../../assets/js/const";
export default {
  name: "plan",
  components: {
    ContentHeader,
    "date-period": DatePeriod,
    "plan-list": PlanList
  },
  props: {
    isPlanAdd: {
      default: false,
      type: Boolean
    }
  },
  data: function() {
    return {
      periodType: 0, //0周计划 1月计划 2季度计划
      planList: [],
      selectPeriod: ""
    };
  },
  mounted: function() {},
  watch: {
    isPlanAdd: function(newVal) {
      if (newVal) {
        this.getPlanList();
      }
    },
    periodType: function() {
      this.getPlanList();
    },
    selectPeriod: function() {
      this.getPlanList();
    }
  },
  methods: {
    getPlanList: function() {
      Const.request(
        Const.PLANS,
        {
          UIDstr: Const.getSessionStorage(Const.ACCOUNT_INFO).AccountID,
          PageIndex: 1,
          PageSize: 0,
          Date: this.selectPeriod,
          PlanStatus: this.periodType
        },
        function(response) {
          this.$emit("listPanAdd");
          console.log("获取的计划结果：" + JSON.stringify(response));
          if (response.ResultCode == 200) {
            this.planList = response.Data_Obj.List;
          } else {
            this.planList = [];
          }
        }.bind(this)
      );
    },
    getPeriodType: function(periodType) {
      console.log("获取的选择的计划类型：" + periodType);
      this.periodType = periodType;
    },
    getAddType: function(addType) {
      console.log("获取的添加类型：" + addType);
      this.$emit("addType", addType);
    },
    getSelectPeriod: function(period) {
      console.log("获取的选择时间：" + period);
      this.selectPeriod = period;
    }
  }
};
</script>
<style scoped>
.plan-container {
  color: white;
  margin: 36px 60px;
}
.plan-content {
  padding: 80px 120px;
}
</style>
