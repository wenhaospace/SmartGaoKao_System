<template>
  <div class="university">
      <div style="width:100%">
          <h2 style="float:left;">{{universityName}} | <span style="font-size:16px;color:grey;" >{{location}}</span></h2>
          <h4 style="float:right;"><a href="#">详细情况</a></h4>
      </div>
      <div style="clear:both;"></div>
      <div style="width:100%">
          <h4 style="float:left;">学校类别：{{leibie}}</h4>
         
            <h4 style="float:left;margin-left:20px;">学校排名：{{rank}}</h4>
      </div>
      <div style="clear:both;"></div>
  </div>
</template>

<script>
export default {
    props:{
        universityName:String,
        location:String,
        rank:String,
        leibie:String
    }
}
</script>

<style>
.university{
    width: 100%;
    border-bottom: 2px solid rgb(53, 228, 228);
    margin: 0 auto;

}
</style>