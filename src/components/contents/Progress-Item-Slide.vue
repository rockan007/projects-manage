<template>
    <div class="progress-slide-item flex-grow-1 d-flex justify-content-center">
        <div v-for="(project,index) in slideProgress" class="col-3 progress-item d-flex flex-column" v-bind:key="index">
            <div class="progress-header">
                <div class="progress-title">{{project.ProjectName}}</div>
                <div class="progress-header-devider"></div>
                <div v-on:click="addProjectProgress(project)"><span class="iconfont icon-jia"></span> 添加进程</div>
            </div>
            <div class="flex-grow-1 flex-shrink-1" data-spy="scroll" style="overflow-y: scroll">
               <div v-for="(item,index) in project.C" :key="index">
                   <div style="text-align:left">{{item.ProcessTime}}</div>
                   <div>{{item.ProcessContent}}</div>
                    
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "progress-slide",
  props: {
    slideProgress: {
      default: function() {
        return [];
      },
      type: Array
    }
  },
  data: function() {
    return {};
  },
  watch: {
    slideProgress: function(newVal) {
      console.log("获取的进度列表：" + JSON.stringify(newVal));
    }
  },
  methods: {
    addProjectProgress: function(project) {
      this.$emit("addProgress", project);
    }
  }
};
</script>
<style scoped>
.progress-item{
    background-color: rgba(255, 255, 255, 0.1);
    margin: 16px;
    padding: 8px 16px;
}
.progress-header{
    color: rgb(119, 198, 248);
    margin-bottom: 12px;
}
.progress-title{
    font-size: 24px;
}
.progress-header-devider{
    width: 90%;
    height: 6px;
    margin: 0 5% 10px;
    background-color: rgb(119, 198, 248);
    border-radius: 3px;
}
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}
</style>