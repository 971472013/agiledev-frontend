<template>
  <div style="margin-top: 40px">
    <div class="articles-area">
      <el-card v-if="!loading" style="text-align: left">
        <div v-for="(row,index) in list" :key="index">
          <el-row style="">
            <el-col :span="6" style="text-align:center">
              <!-- <router-link class="article-link" :to="{path:'jotter/article',query:{id: article.id}}"> -->
              <img :src="row.book.cover" class="image" referrer="no-referrer" style="height:300px;width:200px">
                <div style="padding: 14px;">
                  <span><strong>{{row.book.title}}</strong></span>
                </div>
            <!-- </router-link> -->
            </el-col>
            <el-col :span="18">
              <el-row v-for="(comment,index) in row.comments" :key="index">
                <el-row>
                  <span style="float:left;color: #3377aa;margin-right:5px">{{comment.p_name}}</span>
                    <el-rate
                    v-model="comment.p_score"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}"
                    style="float:left;margin-right:10px;line-height: 1.3;">
                    </el-rate>
                    <span>{{comment.p_time}}</span>
                    <span style="float:right">{{comment.praise}} 觉得很赞👍</span>
                </el-row>
                <p style="font-size: 15px;color: #666;">{{comment.content}}</p>
              </el-row>
            </el-col>
          </el-row>
          <el-divider v-if="index!==list.length-1"></el-divider>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Articles',
  data () {
    return {
      list: [],
      loading: true
    }
  },
  mounted () {
    this.loadHomePage()
  },
  methods: {
    loadHomePage () {
      var _this = this
      this.$axios.get('loadHomePage').then(resp => {
        const data = resp.data.data
        console.log(data)
        _this.list = data
        _this.loading = false
      })
    }
  }
}
</script>

<style scoped>
  .articles-area {
    width: 990px;
    height: 750px;
    margin-left: auto;
    margin-right: auto;
  }

  .article-link {
    text-decoration: none;
    color: #606266;
  }

  .article-link:hover {
    color: #409EFF;
  }
</style>
