<template>
  <div class="index">
    <el-container>
      <Header></Header>
      <el-main class="content">
        <el-row>
          <el-col :span="18" :offset="3">
            <div class="classify">

            </div>
            <div class="article_list">
              <ul>
                <li v-for="i in list">
                  <time v-text="$utils.goodTime(i.create_at)"></time>
                  <router-link :to="'/content/' + i.id">
                    {{ i.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>

</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Footer },
  data() {
    //这里，是我们的数据。我们的演示代码，给了一个 list 的空数组数据。在 template 中，我们可以使用 this.list 来使用我们的数据。这个我们后面的文章中会讲到，这里不去深入，认识它就可以了。
    return {
      list: []
    }
  },
  created() {
    //这里，表示当我们的组件加载完成时，需要执行的内容。比如这里，我们就让组件在加载完成时，执行一个叫 this.getData() 的函数。
    console.log(this.$api)
    this.getData()
    console.log(this.list)
  },
  methods: {
    getData() {
      this.$api.get(
        'topics',
        null,
        r => {
          console.log(r)
          this.list = r.data
        },
        e => {
          console.log(e)
        }
      )
    }
  }
}
</script>

<style lang="scss">
.index{
  box-sizing: border-box;
  *{
  box-sizing: border-box;
  }
  .navbar {
    background: #444;
    height: 50px;
  }
  .content{
    .classify{
      height: 40px;
      background-color: #f6f6f6;
      padding: 10px;
    }
    .article_list {
      padding-top: 10px;
      background: #fff;
      border-radius: 5px;
    }
  }
}
</style>

<style>
.article_list {
  margin: auto;
}
body {
  background-color: #e1e1e1;
}
</style>

