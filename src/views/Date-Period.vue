<template>
    <div class="date-periods">
        <div v-for="(period,index) in datePeriods" :key="index" class="period-item"
         v-bind:class='{"select-period":selectPeriod==period}' v-on:click="selectPeriod=period">
            {{period}}
        </div>
    </div>
</template>
<script>
export default {
  name: "periods",
  props: {
    periodType: {
      default: 0, //0周 1月 2季度
      type: Number
    }
  },
  data: function() {
    return {
      datePeriods: [],
      selectPeriod: ""
    };
  },
  created: function() {
    this.getPeriods();
  },
  watch: {
    periodType: function(newVal, oldVal) {
      this.datePeriods = [];
      this.getPeriods();
    }
  },
  methods: {
    getPeriods: function() {
      if (this.periodType) {
        this.getYearPeriods(0);
      } else {
        this.getMonthPeriods();
      }
    },
    getMonthPeriods: function() {
      this.get12Monthes(0);
    },
    getYearPeriods: function(type, date = new Date()) {
      let year = date.getFullYear();
      let currentYear = type == 0 && new Date().getFullYear() == year;
      let loopsTime = 12;
      if (currentYear) {
        loopsTime = 11;
        this.datePeriods.push(year + "年");
        this.selectPeriod = year + "年";
      }
      for (let i = 0; i < loopsTime; i++) {
        if (type) {
          year++;
        } else {
          year--;
        }
        console.log("获取的年份：" + year);
        this.datePeriods.push(year + "年");
      }
    },

    //type 0上12个月 1下12个月
    get12Monthes: function(type, date = new Date()) {
      if (type == 0) {
        this.getLastMonthes(date);
      } else {
        this.getNextMonthes(date);
      }
    },
    getLastMonthes: function(date) {
      //上12个月
      let year = date.getFullYear();
      let month = date.getMonth() + 1;

      let currentMoth =
        year == new Date().getFullYear() && month == new Date().getMonth() + 1;
      let loopsTime = 12;
      if (currentMoth) {
        loopsTime = 11;
        this.datePeriods.push(year + "年" + this.setFormatMonth(month) + "月");
        this.selectPeriod = year + "年" + this.setFormatMonth(month) + "月";
      }
      for (let i = 0; i < loopsTime; i++) {
        month--;
        if (month == 0) {
          month = 12;
          year--;
        }
        this.datePeriods.push(year + "年" + this.setFormatMonth(month) + "月");
      }
    },
    setFormatMonth(month) {
      if (month < 10) {
        return "0" + month;
      }
      return month;
    },
    getNextMonthes: function(date) {
      //下12个月
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      for (let i = 0; i < 12; i++) {
        month++;
        if (month == 13) {
          month = 1;
          year++;
        }
        this.datePeriods.push(year + "年" + month + "月");
      }
    }
  }
};
</script>
<style scoped>
.date-periods {
  padding: 16px 0;
  margin-left: 80px;
  background-color: rgba(255, 255, 255, 0.1);
}
.period-item {
  padding: 8px 56px;
  font-size: 20px;
}
.select-period {
  border-left: 2px solid rgb(255, 157, 138);
  color: rgb(255, 157, 138);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

