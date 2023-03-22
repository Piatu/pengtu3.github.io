<template>
  <div>
    <!-- <div id="cta1" style=""></div> -->
    <!-- 项目展示开始 -->
    <div id="cta" class="y_Weiz">
      <div class="container">
        <div class="row1">
          <div class="col-md-12">
            <h4>项目展示</h4>
            <p>Project presentation</p>
          </div>
        </div>
      </div>
    </div>
    <div id="second-section2" class="y_Xiangm">
      <div class="container">
        <!-- <div class="row">
                <div class="triangle"></div>
            </div> -->
        <div class="row">
          <div class="col-md-12">
            <section id="cd-timeline-2" class="cd-container">
              <div class="cd-timeline-block">
                <a href="javascript:;">
                  <div class="cd-timeline-img cd-picture">
                    <img src="../img/招聘求职 (1).png" style="width:30px;height:30px;position: relative;top:50%;left: 47%;"
                      alt="Picture">
                  </div>
                  <a href="">
                    <div class="cd-timeline-content projects">
                      <img src="../images/尚.png" alt="" style="width:461px;height: 291px;">
                      <div class="project-content">
                        <h2>项目名:商城(个人练习)</h2>
                        <span>开发时间:2021-7-25</span>
                      </div>
                    </div>
                  </a>
                </a>
              </div>
              <div class="cd-timeline-block">
                <a href="">
                  <div class="cd-timeline-img cd-picture" style="height:240px;margin: -109px;">
                    <img src="../img/招聘求职 (1).png" style="width:30px;height:30px;position: relative;top:50%;left: 47%;"
                      alt="Picture">
                  </div>
                  <div class="cd-timeline-content projects">
                    <img src="../images/小程序.png" alt="" style="width:400px;height: 550px;">
                    <div class="project-content">
                      <h2>小程序（个人练习）</h2>
                      <span>2022-8-10</span>
                    </div>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <!-- 项目展示结束 -->
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    console.log(this);
    this.$bus.$on('jumpTo', (cta) => {
      let el = document.getElementById(cta)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
      }
    })
  }
}
</script>

<style lang="less" scoped>
#cta {
  height: 96px;
  text-align: center;
  margin: 0px 0 0;
  /* 上下边距 3px，上边距 0 */
  border-top: 5px solid #98D361;
  border-bottom: 5px solid #98D361;
  font-size: 32px;
  line-height: 32px;
  display: flex;
  /* 使用 flex 布局 */
  justify-content: center;
  /* 主轴居中 */
  align-items: center;
  /* 交叉轴居中 */
}

#cta p {

  font-size: 10px;
  line-height: 10px;
  margin: 10px;
  /* 清除外边距 */
  padding: 0;
  /* 清除内边距 */
}

@media (max-width: 1170px) {
  .y_container .cd-timeline-block .cd-timeline-content {
    margin-left: 40px;
  }
}

.y_Xiangm .cd-timeline-block {
  margin: -2em 0 !important;

}

/*# sourceMappingURL=./index-less.css.map */



// 最近项目开始
.y_Xiangm {

  .cd-timeline-block {
    // pointer-event: none;
    margin: -2em 0 !important;

    @media (max-width:1170px) {
      display: flex;
      justify-content: center;
    }

    .projects {
      perspective: 500px;
      overflow: visible;



      // 弹出动画
      .project-content {


        text-align: center;
        top: 10px;
        // transition: all 1s;
        background-color: rgba(151, 122, 122, 0.473);
        transform-origin: top center;
        opacity: 0;
        text-decoration: none;

        h2,
        span {
          color: aliceblue;
          text-decoration: none;
        }

      }

      // @media (min-width:768px) {


      &:hover .project-content {
        animation: myxianm 1.5s;
        opacity: 1;
        text-decoration: none;

      }

      // }

      // @media (max-width:768px) {

      //   .project-content {
      //     top: 0;
      //     opacity: 1;


      //   }
      // }

    }
  }


}

.row {
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  flex-direction: column
}

.cd-timeline-content {
  margin-top: 100px;
}



// 动画
@keyframes myxianm {
  0% {
    transform: rotateX(25deg);
  }

  20% {
    transform: rotateX(-20deg);

  }

  40% {
    transform: rotateX(15deg);

  }

  60% {
    transform: rotateX(-10deg);

  }

  80% {
    transform: rotateX(5deg);

  }

  100% {
    transform: rotateX(0deg);

  }
}

// 最近项目开始

// 作品与案例开始
// .y_Zuopanli {
//   // height: 800px !important;

//   .y_row_nr img {
//     width: 100%;
//   }


//   div {

//     a {
//       position: relative;
//       border: 0;
//       overflow: hidden;


//       // padding: 0;


//       span {
//         width: 100%;
//         height: 100%;
//         display: block;
//         position: absolute;
//         top: 0;
//         left: 0;
//         transition: all .5s;
//         transform-origin: top right;
//         transform: rotate(-90deg);
//         // background-color: rgba(22, 4, 4, 0.466);
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         align-items: center;
//         letter-spacing: 1px;
//         opacity: 0;
//         visibility: hidden;

//         img {
//           // height: 13vw;
//           width: 100%;
//         }
//       }

//       &:hover span {
//         @media(min-width:768px) {
//           width: 100%;
//           height: 100%;
//           background-color: rgba(22, 4, 4, 0.466);
//           transform: rotate(0deg);
//           color: aliceblue;

//           opacity: 1;
//           visibility: initial;
//         }
//       }
//     }



//   }
// }

// 作品与案例结束
</style>