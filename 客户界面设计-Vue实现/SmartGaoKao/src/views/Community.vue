<template>
  <div>
      <el-row >
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="16"><div class="grid-content bg-purple">
            <span style="float:left;font-size:26px;height:60px;line-height:60px;font-weight:bold;">社区交流</span>
            <div style="clear:both;"></div>
            <div style="width:100%;padding:10px;border:5px dashed #3b99fc;">
              <h3><a href="#">发表评论</a></h3>
              <UserPost name="wenhao" time="2020.8.30" words="推荐系统真好用！！！！！！"></UserPost>
              <UserPost name="wenhao" time="2020.8.30" words="推荐系统真好用！！！！！！"></UserPost>
              <UserPost name="wenhao" time="2020.8.30" words="推荐系统真好用！！！！！！"></UserPost>
              <UserPost name="wenhao" time="2020.8.30" words="推荐系统真好用！！！！！！"></UserPost>
            </div>
          </div></el-col>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
  </div>
</template>

<script>
import UserPost from '@/components/UserPost.vue';
export default {
  components:{
    UserPost
  }
}
</script>

<style>
.bg-purple {
  background: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  
}
</style>