<template>
    <div class="plan-list flex-grow-1 ">
        <div class="plan-item text-left d-flex" v-for="(plan,index) in planList" v-bind:key="index">
            <a v-bind:href="'http://139.129.240.27:8050/'+plan.FileAddress">
               {{plan.PlanName}}
            </a>
            <div class="ml-auto">
              {{plan.CreateTime_JS}}
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "planList",
  props: {
    planList: {
      default: function() {
        return [];
      },
      type: Array
    }
  },
  data: function() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
.plan-list {
  padding: 16px 32px;
}
</style>

