<template>
    <div class="dialog-progress d-flex flex-column justify-content-center">
        <form style="background-color:transparent" enctype="multipart/form-data" id="submitProgressForm" v-on:submit="submitProgress">
            <div class="form-group row">
                <label for="planTitle" class="col-2 col-form-label" >项目名称<span class="required-sign">*</span></label>
                <div class="col-10">
                    <select class="form-control"  name="PMIDstr"  id="planTitle">
                        <option v-for="(project,index) in projects" :key="index" :value="project.TabIDStr">{{project.ProjectName}}</option>
                    </select>
                </div>
            </div>
             <div class="form-group row">
                <label for="planInfo" class="col-2 col-form-label" >进程说明<span class="required-sign">*</span></label>
                <div class="col-10">
                <textarea type="text" class="form-control" rows="3" name="ProcessContent" id="planInfo"  placeholder="进程说明" required></textarea>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-2" for="endDate">日期<span class="required-sign">*</span></label>
                <div class="col-5">
                     <input  type="date" name="ProcessTime" class="form-control-file" id="endDate" required>
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
  name: "dialogProgress",
  props: {
    targetProject: ""
  },
  data: function() {
    return {
      projects: []
    };
  },
  created: function() {
    this.getProjects();
  },
  methods: {
    getProjects: function() {
      Const.request(
        Const.PROJECTS,
        {
          UIDstr: Const.getSessionStorage(Const.ACCOUNT_INFO).AccountID,
          PageIndex: 1,
          PageSize: 0
        },
        function(response) {
          console.log("获取的项目列表：" + JSON.stringify(response));
          this.projects = response.Data_Obj.List;
        }.bind(this)
      );
    },
    addProgress: function() {
      Const.request(
        Const.ADD_PROGRESS,
        new FormData($("#submitProgressForm")[0]).append(
          "UIDstr",
          Const.getSessionStorage(Const.ACCOUNT_INFO).AccountID
        ),
        function(response) {
            console.log("添加进程后的结果："+JSON.stringify(response));
        }
      );
    },
    submitProgress: function(event) {
        event.preventDefault();
        this.addProgress();
    }
  }
};
</script>
<style scoped>
.required-sign {
  color: red;
}
</style>