<template>
    <div class="project-detail-container d-flex ">
        <div class="project-title detail-item d-flex align-items-center" >
                <div class="title">{{projectDetail.ProjectName}}</div>
        </div>
        <div class="d-flex flex-column flex-grow-1">
            <div class="project-brief-info detail-item flex-grow-1" >
                <span class="content-hint">简介：</span>
                <div class="brief-info">
                    {{projectDetail.ProjectBrief}}
                </div>
            </div>
            <div class="d-flex flex-row flex-grow-1">
                <div class="project-persen detail-item flex-grow-1 d-flex flex-column">
                    <span class="content-hint">人员:</span>
                    <div class="persen-container flex-grow-1 d-flex flex-column align-items-center justify-content-center">
                        <p>负责人：{{projectDetail.ProjectLeader}}</p>
                        <p>项目成员：{{projectDetail.ProjectMember}}</p>
                    </div>
                </div>
                <div class="project-site detail-item flex-grow-1 d-flex flex-column">
                   <span class="content-hint">地址：</span>
                   <div class="flex-grow-1 d-flex flex-column align-items-center justify-content-center " >
                    <a class="QR-code col-12 flex-grow-1"  v-bind:style="{'backgroundImage':'url('+(Const.URL+projectDetail.ProjectPic)+')'}"  alt="" :href="projectDetail.ProAddress"></a>
                   </div>
                </div>
            </div>
        </div>
        <div class="project-words detail-item col-2 d-flex flex-column">
            <span class="content-hint">文档:</span>
            <div class=" d-flex flex-column">
              <a v-for="(doc,index) in projectDetail.C " v-bind:key="index" :href="doc.Src">{{doc.FielName}}</a>
            </div>
        </div>
    </div>
</template>
<script>
import { Const } from "../../assets/js/const";
export default {
  name: "projectDetail",
  data: function() {
    return {
      projectId: "",
      projectDetail: {},
      Const: Const
    };
  },
  created: function() {
    this.projectId = this.$route.params.id;
    console.log("获取的id:" + this.projectId);
  },
  watch: {
    projectId: function(newVal) {
      if (!newVal) {
        return;
      }
      this.getProjectDetail();
    }
  },
  filters: {
    filterImgUrl: function(imgsrc) {
      return this.Const.URL + imgsrc;
    }
  },
  methods: {
    getProjectDetail: function() {
      Const.request(
        Const.GET_DETAIL,
        {
          UIDstr: Const.getSessionStorage(Const.ACCOUNT_INFO).AccountID,
          PMIDstr: this.projectId
        },
        function(response) {
          console.log("获取当前项目详情结果：" + JSON.stringify(response));
          this.projectDetail = response.Data_Obj;
        }.bind(this)
      );
    }
  }
};
</script>
<style scoped>
.project-detail-container {
  margin: 4% 8%;
  color: white;
}
.project-title {
  width: 100px;
  background-color: rgb(40, 199, 255);
}
.title {
  word-break: break-all;
  font-size: 36px;
}
.content-hint {
  font-size: 30px;
}
.detail-item {
  margin: 8px;
  padding: 16px 32px;
}
.detail-item:not(.project-title) {
  text-align: left;
}
.project-brief-info {
  font-size: 26px;
  background-color: rgb(188, 153, 253);
}
.project-persen {
  background-color: rgb(255, 155, 140);
}
.brief-info {
  padding: 16px;
}
.persen-container {
  font-size: 24px;
}
.project-site {
  background-color: rgb(254, 204, 69);
}
.project-words {
  background-color: rgb(98, 216, 150);
}
.QR-code {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  margin: 30px;
}
</style>