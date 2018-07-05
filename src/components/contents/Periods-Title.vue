<template>
    <div class="periods-title row col-4 ml-auto">
        <div class="col-3" v-for="(period,index) in periods" 
        :key="index" v-on:click="choosePeriod(index)"
        v-bind:class="{'choose-period':periodType==index}">
        {{period}}
        </div>
    </div>
</template>
<script>
export default {
  name: "periodsTitle",
  data: function() {
    return {
      periods: ["周计划", "月度计划", "季度计划"],
      periodType: 0
    };
  },
  methods: {
    choosePeriod: function(index) {
      this.periodType = parseInt(index);
      this.$emit("periodType", this.periodType);
    }
  }
};
</script>
<style scoped>
.choose-period {
    color: rgb(255, 157, 138);
  border-bottom: rgb(255, 157, 138) solid 2px;
}
</style>
