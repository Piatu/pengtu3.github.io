<template>
  <div>
    <!-- 头部导航开始 -->
    <header class="site-header" id="top">
      <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container">
          <div class="row">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" id="open" data-toggle="collapse" data-target="">
                <span class="glyphicon glyphicon-list"></span>
              </button>
              <div class="logo-wrapper">
                <div class="navbar-brand">
                  <p>作品集(不断制作中)</p>
                </div>
              </div>
            </div>
            <div class="collapse navbar-collapse" id="main-menu">
              <ul class="nav navbar-nav navbar-right">
                <li><span></span><a href="javascript:;" class="home" @click="toMessage">个人信息</a></li>
                <!-- <li><span></span><a href="javascript:;" class="about">技能介绍</a></li> -->
                <li><span></span><a href="javascript:;" class="portfolio" @click="scrollToShow">项目展示</a></li>
                <li><span></span><a href="javascript:;" class="map" @click="srcollToDemo">作品与案例</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {
    toMessage() {
      // 设置滚动位置为 0
      window.scrollTo(0, 0);
    },

    scrollToShow() {
      this.$bus.$emit('jumpTo', 'cta')
      // window.scrollTo()
    },
    srcollToDemo() {
      this.$bus.$emit('jumpToDemo', 'demo')
    }
  }
}
</script>
<style>
*,
*:before,
*:after {
  box-sizing: inherit;
  padding: 0;
  margin: 0;
}

/* 导航栏开始 */
.site-header {
  padding: 0;
  margin: 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  /* 可选，保证该元素在其他元素之上 */
}

.navbar-toggle {
  padding: 0;
  border: 0;
  background: none !important;
}

.navbar-toggle span {
  font-size: 30px;
  padding: 0;
}


.blue {
  color: #06f;
  font-weight: 400
}

.green {
  color: #0a0;
  font-weight: 400
}

#top {
  width: 100%;
  margin-top: -50px
}

.navbar-default {
  background-color: #98d361;
  border-color: transparent
}

.row {
  display: flex;
  justify-content: space-between;
}

.navbar-brand {
  margin-top: 37px;
  margin-left: 150px;
}

.navbar-brand p {
  font-family: dosis;
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  margin: 50px, 50px;
}

.navbar-brand em {
  font-size: 26px;
  font-style: normal
}

.nav .navbar-nav {
  text-align: center
}

.navbar-right {

  display: flex;
  /* align-items: center; */
  margin-top: 53px;
  margin-right: 50px;
}

.navbar-right a {
  text-decoration: none;
  padding: 20px;
  font-family: dosis;
  font-size: 16px;
  color: #eaffd6 !important;
  text-transform: uppercase;
  /* padding: 0; */
  line-height: 50px;
  position: relative;
  z-index: 211;
  -webkit-transition: all 350ms ease-in-out;
  -moz-transition: all 350ms ease-in-out;
  -o-transition: all 350ms ease-in-out;
  transition: all 350ms ease-in-out
}

.navbar-right li {
  height: 50px;
  position: relative;
  z-index: 210;
  list-style-type: none;

}

.navbar-right li span {
  position: absolute;
  width: 0;
  height: 100%;
  background-color: #fff;
  -webkit-transition: all 250ms ease-in-out;
  -moz-transition: all 250ms ease-in-out;
  -o-transition: all 250ms ease-in-out;
  transition: all 250ms ease-in-out;
  top: 0;
  left: 0;
  z-index: 200
}

.navbar-right li:hover span {
  width: 100%
}

.navbar-right li:hover a {
  color: #7cb14a !important
}
</style>