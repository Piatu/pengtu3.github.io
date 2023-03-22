<template>
  <div>
    <!-- 头部导航结束 -->
    <!-- 个人信息开始 -->
    <div id="big-banner" class="y_Weiz">

      <div class="y_biaoti_nr container">
        <div class="row y_biaoti_row visible-sm visible-md visible-lg">


        </div>
        <div id="carousel-example-generic" class="carousel slide visible-xs" data-ride="carousel" data-interval="false">
          <!-- Wrapper for slides -->
          <div class="carousel-inner" role="listbox">
            <div class="item active">
              <div class="row y_biaoti_row">
                <div class="col-md-3 col-sm-5">
                  <div>
                    <div class="thumbnail">
                      <img src="../picture/br.jpg" alt="..." width="50%">
                    </div>
                    <h1>许 鹏 图</h1>
                    <h3>Xu-peng-tu</h3>
                    <ul class="row1">
                      <li><span class="glyphicon glyphicon-user"></span><strong>年龄:</strong><i>22</i></li>
                      <li><span class="glyphicon glyphicon-map-marker"></span><strong>籍贯:</strong><i>广东-汕尾</i></li>
                      <li><span class="glyphicon glyphicon-earphone"></span><strong>电话:</strong><i>13536496080</i></li>
                      <li><span class="glyphicon glyphicon-envelope"></span><strong>邮箱:</strong><i>2460889062@qq.com</i>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 个人信息结束 -->
  </div>
</template>
<script></script>
<style lang="less">
/* 个人信息开始 */

.panel-heading span {
  cursor: pointer;
  font-size: 20px;
}

.navbar {
  margin-bottom: 0;
}

.col-md-3 {
  position: absolute;
}

.col-sm-5 {
  /* justify-content: center; */
  margin: auto;
  position: relative;
  top: 0;

}

.row1 {
  display: flex;
  flex-direction: column;

}

.y_biaoti {
  margin-top: 50px;
  /* margin-left: 1000px; */
}

.y_biaoti h1 {
  color: aliceblue;
  text-align: center;
}

.y_biaoti_nr {
  margin-top: 50px;
  padding: 30px 20px;
  background-color: rgba(255, 255, 255, .3);
}



.y_biaoti_nr {
  margin-top: 50px;
  padding: 30px 20px;
  background-color: rgba(255, 255, 255, .3);
}

// @media (min-width: 1200px) {
//   .container {
//     width: 1170px;
//   }
// }

// @media (min-width: 992px) {
//   .container {
//     width: 970px;
//   }
// }

// @media (min-width: 768px) {
//   .container {
//     width: 750px;
//   }
// }

.y_biaoti_nr .y_biaoti_row .thumbnail {
  background: none;
  padding: 0;
  border: 0;
}

.y_biaoti_nr .y_biaoti_row .thumbnail img {
  border-radius: 50%;
  width: 20%;
}

.y_biaoti_row>div {
  color: aliceblue;
}

.y_biaoti_nr .y_biaoti_row>div:first-child {
  /* border-right: 1px aliceblue solid; */
  text-align: center;
}

.y_biaoti_row>div:first-child ul {
  width: 200px;
  margin: 0 auto;
  text-align: left;
  list-style: none;
  padding: 0;
  line-height: 30px;
  margin-top: 50px;
}

.y_biaoti_row>div:first-child ul li {
  white-space: nowrap;
}

.y_biaoti_row>div:first-child ul strong {
  margin: 0 10px;
}

.y_biaoti_row>div:first-child ul i {
  font-style: normal;
  letter-spacing: 1px;
}

.y_biaoti_row>div:first-child h1 {
  margin: 0;
  margin-top: 20px;
}

.y_biaoti_row>div:first-child h3 {
  margin: 10px 0 30px 0;
}

.carousel-indicators {
  bottom: -50px;
}

.carousel-control {
  background: none !important;
}

.carousel-inner .item {
  padding: 0 20px;
}

.y_body {
  color: #000;
}


/* 个人信息结束 */

#big-banner {
  background-image: url(../images/bg-01.jpg);
  /* background: linear-gradient(to bottom right, hsl(240, 7%, 21%), hsl(149, 59%, 22%)); */
  background-position: center;
  background-size: cover;
  /* margin-top: 100px; */
  width: 100%;
  padding: 50px 0 0 0;
  /* height: 650px; */
  background-repeat: no-repeat;
  /* overflow: hidden; */
  transition: all .5s;
}

#big-banner .main-icons {
  text-align: center;
  margin-top: 180px
}

#big-banner .main-icons li {
  list-style: none;
  display: inline-block;
  margin-right: 90px
}

#big-banner .main-icons i {
  font-size: 72px;
  color: #fff;
  display: block;
  padding-bottom: 20px
}

#big-banner .main-icons i:hover {
  color: #8bc655 !important
}

#big-banner .main-icons a {
  display: block;
  font-family: dosis;
  font-size: 22px;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 40px
}

.heading {
  /* background: linear-gradient(to bottom right, hsl(223, 46%, 65%), hsl(149, 29%, 82%)); */
  border-bottom: 4px solid #98d361;
  border-top: 4px solid #98d361;
  width: 100%;
  /* padding-top: 20px;
    padding-bottom: 20px */
}

.heading h2 {
  font-family: dosis;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  /* padding-top: 10px; */
  margin-bottom: 10px;
}

.heading p {
  font-family: dosis;
  font-size: 15px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
}

.triangle {
  width: 0;
  height: 0;
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;
  border-top: 45px solid #98d361
}

.cd-container {
  width: 90%;
  max-width: 1170px;
  margin: 0 auto
}



.copyrights {
  text-indent: -9999px;
  height: 0;
  line-height: 0;
  font-size: 0;
  overflow: hidden
}

/* .cd-container::after {
  content: '';
  display: table;
  clear: both
} */

#cd-timeline,
#cd-timeline-2 {
  position: relative;
  padding: 2em 0;
  margin-top: 2em;
  margin-bottom: 2em
}

#cd-timeline::before,
#cd-timeline-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #ccc
}

/* @media only screen and (min-width:1170px) { */

#cd-timeline,
#cd-timeline-2 {
  margin-top: 3em;
  margin-bottom: 3em
}

#cd-timeline::before,
#cd-timeline-2::before {
  left: 50%;
  margin-left: -2px
}

/* } */

.cd-timeline-block {
  position: relative;
  margin: 2em 0;
  top: -7px
}


.cd-timeline-block:after {
  content: "";
  display: table;
  clear: both;
  // top: 7px
}

.cd-timeline-block:first-child {
  margin-top: 0
}

.cd-timeline-block:last-child {
  margin-bottom: 0
}

@media only screen and (min-width:1170px) {
  .cd-timeline-block {
    margin: -3em 0
  }

  #cd-timeline-2 .cd-timeline-block {
    margin: -12em 0
  }

  #cd-timeline-2 .cd-timeline-block:first-child {
    margin-top: 0
  }

  #cd-timeline-2 .cd-timeline-block:last-child {
    margin-bottom: 0
  }

  .cd-timeline-block:first-child {
    margin-top: 0
  }

  .cd-timeline-block:last-child {
    margin-bottom: 0
  }
}
</style>