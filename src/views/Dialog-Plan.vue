<template>
    <div class="dialog-content d-flex flex-column justify-content-center">
        <form style="background-color:transparent" enctype="multipart/form-data" id="submitPlanForm" v-on:submit="submitPlan">
            <div class="form-group row">
                <label for="planTitle" class="col-2 col-form-label" >计划名称<span class="required-sign">*</span></label>
                <div class="col-10">
                <input type="text" class="form-control" name="PlanName" id="planTitle" v-model.trim="title" placeholder="计划名称" required>
                </div>
            </div>
             <div class="form-group row">
                <label for="planInfo" class="col-2 col-form-label" >计划说明</label>
                <div class="col-10">
                <input type="text" class="form-control" name="PlanExplain" id="planInfo" v-model.trim="info" placeholder="计划说明">
                </div>
            </div>
            <fieldset class="form-group" name="PlanStatus">
                <div class="row">
                <legend class="col-form-label col-2 pt-0">计划类型<span class="required-sign">*</span></legend>
                <div class="col-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="0" v-model="periodType" checked>
                    <label class="form-check-label" for="gridRadios1">
                        周计划
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="1" v-model="periodType">
                    <label class="form-check-label" for="gridRadios2">
                        月度计划
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="2" v-model="periodType">
                    <label class="form-check-label" for="gridRadios3">
                        季度计划
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>
             <div class="form-group row">
                <label class="col-2" for="startDate">起始日期<span class="required-sign">*</span></label>
                <div class="col-5">
                     <input  type="date" name="PlanTimeS" v-model="startDate" class="form-control-file" id="startDate" required>
                </div>
               
            </div>
            <div class="form-group row">
                <label class="col-2" for="endDate">结束日期<span class="required-sign">*</span></label>
                <div class="col-5">
                     <input  type="date" name="PlanTimeE" v-model="endDate" class="form-control-file" id="endDate" required>
                </div>
               
            </div>
            <div class="form-group row">
                <label class="col-2" for="extraFile">附件<span class="required-sign">*</span></label>
                <div class="col-5">
                     <input  type="file" name="FileAddress" class="form-control-file" id="extraFile"
                      accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required>
                </div>
               
            </div>
            <button type="submit" class="btn">提交</button>
        </form>
    </div>
</template>
<script>
import { Const } from "../assets/js/const";
import $ from "jquery";
export default {
  name: "dialogPlan",
  data: function() {
    return {
      periods: ["周计划", "月度计划", "季度计划"],
      title: "",
      info: "",
      periodType: 0,
      startDate: "",
      endDate: "",
      extraFile: ""
    };
  },
  created: function() {},
  mounted: function() {},
  methods: {
    submitPlan: function(event) {
      event.preventDefault();
      Const.request(
        Const.ADD_PLAN,
        new FormData($("#submitPlanForm")[0]).append(
          "UIDstr",
          Const.getSessionStorage(Const.ACCOUNT_INFO).AccountID
        ),
        // {
        //     UIDstr:Const.getSessionStorage(Const.ACCOUNT_INFO).AccountID,
        //     PlanName:this.title,
        //     PlanExplain:this.info,
        //     PlanStatus:this.periodType,
        //     PlanTimeS:this.startDate,
        //     PlanTimeE:this.endDate,
        //     FileAddress:new FormData(document.querySelector("#extraFile").files[0])
        // },
        function(response) {
          console.log("获取的添加结果：" + JSON.stringify(response));
          if (response.ResultCode == 200) {
              this.$emit('planAdded');
          }
        }.bind(this)
      );
    },
    getFileChange: function() {}
  }
};
</script>
<style scoped>
.dialog-content {
  background-color: transparent;
}
.dialog-content .col-2 {
  text-align: right;
}
.dialog-content .col-3 {
  text-align: right;
}
.dialog-content .col-10 {
  text-align: left;
}
.required-sign {
  color: red;
}
</style>

