<template>
    <div class="dialog-content">
        <form style="background-color:transparent">
            <div class="form-group row">
                <label for="inputTitle" class="col-2 col-form-label" >计划名称</label>
                <div class="col-10">
                <input type="text" class="form-control" id="inputEmail3" placeholder="计划名称">
                </div>
            </div>
            <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-2 pt-0">计划类型</legend>
                <div class="col-10">
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
                    <label class="form-check-label" for="gridRadios1">
                        周计划
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
                    <label class="form-check-label" for="gridRadios2">
                        月度计划
                    </label>
                    </div>
                    <div class="form-check disabled">
                    <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" >
                    <label class="form-check-label" for="gridRadios3">
                        季度计划
                    </label>
                    </div>
                </div>
                </div>
            </fieldset>
             <div class="form-group row">
                <label class="col-2" for="exampleFormControlFile1">起始日期</label>
                <div class="col-5">
                     <input  type="date" class="form-control-file" id="exampleFormControlFile1">
                </div>
               
            </div>
            <div class="form-group row">
                <label class="col-2" for="exampleFormControlFile1">结束日期</label>
                <div class="col-5">
                     <input  type="date" class="form-control-file" id="exampleFormControlFile1">
                </div>
               
            </div>
            <div class="form-group row">
                <label class="col-2" for="exampleFormControlFile1">附件</label>
                <div class="col-5">
                     <input  type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
               
            </div>
           
            <div class="form-group row">
                <div class="col-3">
                <button type="submit" class="btn btn-primary">添加</button>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
export default {};
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
</style>

