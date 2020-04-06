<template>
  <el-container style="width: 70%; margin: 0 auto">
    <el-header style="width: 100%; height: 300px; border-bottom: solid 1px #e6e6e6">
      <h1>{{book.title}}</h1>
      <el-container>
        <el-aside style="width: 220px">
          <div class="detail">
            <img :src="book.cover" style="width: 135px; max-height: 200px; padding-right: 30px;" :alt="book.title">
          </div>
        </el-aside>
        <el-aside style="text-align: left; border-right: solid 1px #e6e6e6">
          <p>作者：{{book.author}}</p>
          <p>出版社：{{book.press}}</p>
          <p>出版时间：{{book.pyear}}</p>
        </el-aside>
        <el-aside>
          <p>
            <span> 评分：</span>
            <span>
              <el-rate
                v-model="book.score"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                style="float:right;line-height: 1.3">
              </el-rate>
            </span></p>
        </el-aside>
      </el-container>
    </el-header>
    <el-main style="width: 100%;text-align: left; text-indent: 25px">
      <div style="border-bottom: solid 1px #e6e6e6">
        <h2>内容简介</h2>
        <p>{{book.content_des}}</p>
      </div>
      <div style="border-bottom: solid 1px #e6e6e6">
        <h2>作者简介</h2>
        <p>{{book.author_des}}</p>
      </div>
      <h2>短评</h2>
      <el-row v-for="item in comments" :key="item.id" style="padding: 10px; border: solid 1px #e6e6e6; margin: 5px">
        <h3>
          <span style="float: left">{{item.p_name}} {{item.p_time}} &nbsp;&nbsp;</span>
          <el-rate
            v-model="item.p_score"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            style="text-indent: 0px; float:left;">
          </el-rate>
          <span style="float: right">{{item.praise}} 觉得很赞👍</span>
        </h3>
        <div style="float: left">
          <p>{{item.content}}</p >
        </div>
      </el-row>
    </el-main>
  </el-container>

</template>

<script>
// eslint-disable-next-line indent
  /* eslint-disable indent */
  export default {
      name: 'Book',
      data () {
          return {
              book: [],
              comments: []
          }
      },
    mounted () {
      this.loadInfo()
    },
      methods: {
          loadInfo () {
            var _this = this
            this.$axios.get(this.$route.query.id + '/book').then(resp => {
              if (resp && resp.status === 200) {
                _this.book = resp.data
              }
            })
            this.$axios.get(this.$route.query.id + '/comments').then(resp => {
              if (resp && resp.status === 200) {
                _this.comments = resp.data
              }
            })
          }
      }
  }
</script>

<style>
</style>
