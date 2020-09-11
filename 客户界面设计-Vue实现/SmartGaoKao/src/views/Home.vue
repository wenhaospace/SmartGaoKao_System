<template>
  <div class="home">
    <el-carousel :interval="5000" arrow="always" height="880px">
      <el-carousel-item v-for="item in imgList" :key="item.id">
        <el-row >
          <el-col :span="24">
            <img :src="item.idView" alt="" class="banner_img">
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <div class="search">
      <el-row>
        <el-col :span="24"><div class="title">2020年高考成绩分析 | 湖南</div></el-col>
      </el-row>
      <el-row >
        <el-col :span="2"></el-col>
        <el-col :span="22">
          <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="高考总分">
                <el-input v-model="form.score"></el-input>
              </el-form-item>
              <el-form-item label="省内排名">
                <el-input v-model="form.rank"></el-input>
              </el-form-item>
              <el-form-item label="选择科目">
                <el-radio-group v-model="form.subject">
                  <el-radio label="文科"></el-radio>
                  <el-radio label="理科"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit" class="GK_submit">立即查询</el-button>
              </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: "home",
  components: {},
  data() {
    return {
       imgList: [
          {id: 0, idView: require('../assets/紫发.jpg')},
          {id: 1,  idView: require('../assets/水彩01.jpg')},
          {id: 2,  idView: require('../assets/水彩02.jpg')}
        ],
        form: {
          score:"",
          rank:"",
          subject:""
        }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }

};
</script>
<style scoped>
.banner_img{
  width: 100%
}
/* .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  } */



.search{
  width: 500px;
  height: 350px;
  background-color: white;
  border-radius: 10px;
  z-index: 1000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-100%) translateX(-50%);
}

.title{
  margin: 20px;
  color: #4593ff;
  font-size: 20px;
}
.GK_submit{
  width: 100%;
}
 
</style>>


