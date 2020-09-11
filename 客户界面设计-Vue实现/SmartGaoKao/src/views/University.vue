<template>
  <div style="margin-top:20px;">  
    <el-row >
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="省份：">
            <el-input v-model="formInline.user" placeholder="湖南省"></el-input>
          </el-form-item>
          <el-form-item label="市区：">
            <el-input v-model="formInline.user" placeholder="湘潭市"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </el-form-item>
        </el-form>
        <div style="width:100%;border-top:2px solid #3b99fc;">
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
            <UniversityPost universityName="湘潭大学" location="湖南省湘潭市" rank="83" leibie="本科"></UniversityPost>
        </div>
      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
import UniversityPost from '../components/UniversityPost';
export default {
 data() {
    return {
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  },
  components:{
    UniversityPost,
  }
}
</script>

<style>

</style>