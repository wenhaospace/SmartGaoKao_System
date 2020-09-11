<template>
  <div style=" margin-bottom: 5px;">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h2>{{name}} <span style="font-size:12px;">发表于{{time}}</span></h2>
          
        </div>
        <div  class="text item">
          {{words}}
        </div>
      </el-card>

  </div>
</template>

<script>
export default {
  props:{
    name:String,
    time:String,
    words:String,
  }
    
  
}
</script>

<style>
.text {
    font-size: 14px;
   
  }

.item {
  margin-bottom: 18px;
}
.clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 100%;
  }
</style>