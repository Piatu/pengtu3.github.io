<template>
  <div id="demo">
    <!-- 作品与案例 -->
    <div class="container">
      <div class="row1">
        <div class="text">
          <h4>作品与案例</h4>
          <p>Works and cases</p>
        </div>

        <div class="demo">
          <div id="1" class="demo1" @click="toJingDong">
            <img id="1" src="../images/jingdong.png" alt="">
          </div>
          <div id="1" class="demo2" @click="toxxbutton">
            <img src="../images/xxbutton.png" alt="">
          </div>
          <div id="1" class="demo3" @click="tulunbo">
            <img src="../images/lunbo.png" alt="">
          </div>
          <div id="1" class="demo4" @click="sfq">
            <img src="../images/shoufenqing.png" alt="">
          </div>
          <div id="1" class="demo5" @click="wb">
            <img src="../images/wb.png" alt="">
          </div>
          <div id="1" class="demo6">
            <img src="../images/期待.jpg" alt="">
          </div>
        </div>
      </div>

    </div>

    <!-- 作品与案例结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    this.$bus.$on('jumpToDemo', (demo) => {
      let el = document.getElementById(demo)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
      }
    })
  },
  methods: {
    toJingDong() {
      this.$router.push({
        name: 'jingdong'

      })
    },
    toxxbutton() {
      this.$router.push({
        name: 'xxbutton'
      })
    },
    tulunbo() {
      this.$router.push({
        name: 'lunbo'
      })
    },
    sfq() {
      this.$router.push({
        name: 'sfq'
      })
    },
    wb() {
      this.$router.push({
        name: 'wb'
      })
    }
  }

}
</script>

<style lang="less" scoped>
.row1 {
  background: linear-gradient(to bottom right, hsl(223, 46%, 65%), hsl(149, 29%, 82%));
  background-image: linear-gradient(to right bottom, rgb(125, 148, 207), rgb(196, 222, 209));
  width: 100%;
  height: 700px;
}

.text {
  display: flex;
  flex-direction: column;
  /* 使用 flex 布局 */
  justify-content: center;
  /* 主轴居中 */
  align-items: center;

  /* 交叉轴居中 */
  h4 {
    margin-top: 20px;
    height: 32px;
    text-align: center;
    font-size: 32px;
    line-height: 32px;
    color: #FFFFFF;

    /* 使用 flex 布局 */
    // justify-content: center;
    /* 主轴居中 */
    // align-items: center;
    /* 交叉轴居中 */
  }

  p {
    color: #FFFFFF;
    font-size: 10px;
    line-height: 10px;
    margin: 10px;
    /* 清除外边距 */
    padding: 0;
    /* 清除内边距 */
  }
}

.demo {
  background-color: #ccc;
  width: 80%;
  // height: 80%;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 20px;
  // float: left;
  display: flex;
  justify-content: space-between;

  .demo1 {
    background-color: #fff;
    height: 170px;
    width: 340px;
    margin: 20px;
  }

  .demo2 {
    background-color: #fff;
    height: 170px;
    width: 340px;
    margin: 20px;

  }


  .demo3 {
    background-color: #fff;
    height: 170px;
    width: 340px;
    margin: 20px;

  }

  .demo4 {
    background-color: #fff;
    height: 170px;
    width: 340px;
    margin: 20px;
  }

  .demo5 {
    background-color: #fff;
    height: 170px;
    width: 340px;
    margin: 20px;
  }

  .demo6 {
    background-color: #fff;
    height: 170px;
    width: 340px;
    margin: 20px;
  }

}

.demo img {
  width: 100%;
  height: 100%;
}

.demo div {
  position: relative;
}

.demo div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(145, 145, 145, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.demo div:hover::before {
  opacity: 1;
  cursor: pointer;
}
</style>