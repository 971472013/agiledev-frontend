<template>
  <el-container style="width: 70%; margin: 0 auto">
    <el-header style="width: 100%; height: 300px; border-bottom: solid 1px #e6e6e6">
      <h1>{{info.title}}</h1>
      <el-container>
        <el-aside style="width: 220px">
          <div class="detail">
            <img :src="info.cover" style="width: 135px; max-height: 200px; padding-right: 30px;" :alt="info.title">
          </div>
        </el-aside>
        <el-aside style="text-align: left; border-right: solid 1px #e6e6e6">
          <p>作者：{{info.author}}</p>
          <p>出版社：{{info.press}}</p>
          <p>出版时间：{{info.year}}</p>
        </el-aside>
        <el-aside>
          <p>评分：{{info.score}}</p>
        </el-aside>
      </el-container>
    </el-header>
    <el-main style="width: 100%;text-align: left; text-indent: 25px">
      <div style="border-bottom: solid 1px #e6e6e6">
        <h2>内容简介</h2>
        <p>{{info.content_des}}</p>
      </div>
      <div style="border-bottom: solid 1px #e6e6e6">
        <h2>作者简介</h2>
        <p>{{info.author_des}}</p>
      </div>
      <h2>短评</h2>
      <el-row>
        <el-tooltip effect="dark" placement="right"
          v-for="item in comments" :key="item.id" style="">
          <div style="padding: 10px; border: solid 1px #e6e6e6; margin: 5px">
            <h3 style="left: 0px">
              <span >{{item.p_name}} {{item.p_time}} 评分：{{item.p_score}} </span>
              <span style="float: right">{{item.praise}} 有用</span>
            </h3>
            <p>{{item.content}}</p>
          </div>
        </el-tooltip>
      </el-row>
    </el-main>
  </el-container>

</template>

<script>
// eslint-disable-next-line indent
  /* eslint-disable indent */
  export default {
      name: 'Book',
      comments: {},
      data () {
          return {
              info: {
                  title: '梅塘之夜',
                  cover: 'https://img1.doubanio.com/view/subject/l/public/s33559908.jpg',
                  author: '左拉 等',
                  press: '译林出版社',
                  year: '2020',
                  score: '4',
                  content_des: '19世纪70年代末期，一群拥戴自然主义的作家聚集在左拉周围，结成了所谓的“梅塘集团”。这些作家是阿莱克西、于斯曼、莫泊桑、塞阿尔和埃尼克。他们都是文学青年，气质相近，情趣相投，既有共同的爱国之心，又有相近的哲学倾向。一天，这群人来到左拉在梅塘刚刚买下的房子，在夜晚的闲谈 中聊到了 文学创作，左拉提议不妨各人写一篇关于普法战争的小说，于是就诞生了这部《梅塘之夜》。它包括六部中篇小说：左拉《磨坊之战》、莫泊桑《羊脂球》、于斯曼《背包在肩》、塞阿尔《放血》、埃尼克《大七之战》和阿莱克西《战役之后》。',
                  author_des: '左拉\n' +
                      '\n法国自然主义小说家和理论家，自然主义文学流派创始人与领袖，19世纪后半期法国重要的批判现实主义作家，其自然主义文学理论被视为19世纪批判现实主义文学遗产的组成部分。代表作品有《小酒店》《萌芽》《娜娜》《金钱》等。',
                  type: '文学'
              },
              comments: [
                  {
                    content: '法国自然主义文学的不朽之夜。抛开这个标签，它亦是一本好读的小说，满足你对法国文学的浪漫幻想',
                    p_name: 'VivianeBonbon',
                    p_score: 4,
                    p_time: '2019-12-11',
                    praise: 6
                  },
                  {
                      content: '文字总能用润物无声的力量直击心底，阅读从来都是与作者对话，与自我对话的过程！将尘世中的所感所悟用于品读，感受文字内外所蕴含的深刻隽永！',
                      p_name: '云山听雨',
                      p_score: 3,
                      p_time: '2020-04-03',
                      praise: 0
                  }
              ]
          }
      },
      methods: {
          loadInfo () {
          }
      }
  }
</script>

<style>
</style>
