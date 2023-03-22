<template>
  <div>

    <!-- 尾部开始 -->
    <div id="third-section">
      <div class="heading">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>非常感谢您阅读我的简历</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="row">
            <div class="col-md-12">
              <div class="back-to" @click="scrollToTop">
                <div class="back-to-top">
                  <a href="javascript:;">回到顶部</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 是否显示返回顶部按钮
      showButton: false
    }
  },
  mounted() {
    // 添加滚动事件监听
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    // 移除滚动事件监听
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      // 获取当前页面滚动位置
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

      // 判断是否显示返回顶部按钮
      this.showButton = scrollTop > 100;
    },
    scrollToTop() {
      // 设置滚动位置为 0
      window.scrollTo(0, 0);
    }
  }

}
</script>

<style lang="less">
footer {
  background-color: #98d361;
  margin-top: 40px
}

.copyright-text {
  margin-top: 25px
}

.copyright-text p {
  font-family: dosis;
  font-size: 14px;
  color: #fff
}

.copyright-text a {
  color: #fff
}

.copyright-text em {
  font-style: normal;
  color: #fff
}

.footer-content {
  padding: 20px 0;
}

.back-to {
  text-align: center;
}

.back-to-top {
  /* margin-top: 15px;
    margin-left: 25%; */
  width: 170px;
  height: 34px;
  text-align: center;
  display: inline-block;
  // margin:auto
}

.back-to-top a {
  // margin: auto;
  font-family: dosis;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  border: 3px solid #b1e67f;
  width: 170px;
  height: 40px;
  display: inline-block;
  line-height: 35px;
  text-align: center;
  color: #fff;
  text-decoration: none;
  background-color: #98d361
}

.back-to-top a:hover {
  background-color: #98d361;
  border-color: #8bc655
}

.col-md-12 {
  margin: auto
}
</style>