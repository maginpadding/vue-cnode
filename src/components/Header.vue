<template>
  <el-header class="navbar" height="50px">
    <el-row class="nav-c">
      <!-- 左侧logo以及搜索框 -->
      <el-col :span="6" :offset="3">
        <div class="grid-content">
          <el-row>
            <el-col :span="8" align="center">
              <a class="img-brand" href="/">
                <img src="//o4j806krb.qnssl.com/public/images/cnodejs_light.svg">
              </a>
            </el-col>
            <el-col :span="12" :offset="2">
              <div class="search-input">
                <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input9">
                </el-input>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <!-- 右侧导航 -->
      <el-col :span="12" :gutter="20">
        <div class="nav-right">
          <a href="">首页</a>
          <a href="">首页</a>
          <a href="">首页</a>
          <a href="">首页</a>
        </div>
      </el-col>
    </el-row>
  </el-header>

</template>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-c {
  .el-col,
  .grid-content {
    height: 50px;
  }
  .bg-fff {
    background-color: #ffffff;
  }
  .img-brand {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      height: 28px;
    }
  }
  .search-input {
    padding-top: 11px;
    input {
      height: 30px;
    }
  }
  .nav-right {
    height: 30px;
    padding: 10px 0;
    display: flex;
    flex-direction: row-reverse;
    text-align: center;
    a {
      flex: 1;
      color: #ccc;
      padding: 0 5px;
      margin: 0 10px;
      line-height: 30px;
      text-decoration: none;
      max-width: 60px;
    }
    :hover {
      color: #fff;
    }
  }
}
</style>
