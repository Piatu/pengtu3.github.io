<template>
  <body>
    <div class="box">
      <h1>幽灵按钮</h1>
      <ul>
        <h3>2D转换</h3>
        <li>脉冲</li>
        <li>流行音乐</li>
        <li>Hang</li>
        <li>摇到后下角</li>
        <li>摆顶</li>
        <li>摆底</li>
        <li>摆动倾斜</li>
        <li>发出嗡嗡声</li>
        <li>成长旋转</li>
        <li>弹跳</li>
      </ul>
      <ul>
        <h3>背景转换</h3>
        <li>褪色</li>
        <li>向右扫</li>
        <li>向左扫</li>
        <li>扫至底部</li>
        <li>扫至顶部</li>
        <li>向右弹跳</li>
        <li>向左弹跳</li>
        <li>弹到底</li>
        <li>弹顶</li>
        <li>径向向外</li>
        <li>径向输入</li>
        <li>矩形输入</li>
        <li>矩形输出</li>
        <li>水平快门</li>
        <li>水平快门</li>
        <li>垂直快门</li>
        <li>垂直快门</li>

      </ul>
    </div>
  </body>
</template>
<script>
export default {
  name: 'xxbutton'

}
</script>
<style lang="less" scoped>
html {
  margin: 0;
  padding: 0;
}

html body {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0;
  padding: 0;
}

html body .box {
  width: 60%;
  border: 1px red solid;
}

html body .box h1 {
  text-align: center;
}

html body .box ul {
  list-style: none;
  padding: 0 10px;
  margin: 0;
}

html body .box ul:nth-of-type(1) li {
  padding: 20px;
  margin: 5px 10px 0 5px;
  font-size: 16px;
  display: inline-block;
  color: #fff;
  background-color: #7fbb6d;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}

html body .box ul:nth-of-type(1) li:nth-of-type(1):hover {
  -webkit-animation: mymaicho 0.5s infinite alternate;
  -moz-animation: mymaicho 0.5s infinite alternate;
  -o-animation: mymaicho 0.5s infinite alternate;
  animation: mymaicho 0.5s infinite alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(2):hover {
  -webkit-animation: mylxyy 0.3s 1 alternate;
  -moz-animation: mylxyy 0.3s 1 alternate;
  -o-animation: mylxyy 0.3s 1 alternate;
  animation: mylxyy 0.3s 1 alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(3):hover {
  -webkit-animation: myhang 0.5s infinite alternate;
  -moz-animation: myhang 0.5s infinite alternate;
  -o-animation: myhang 0.5s infinite alternate;
  animation: myhang 0.5s infinite alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(4):hover {
  -webkit-animation: myyouxiaj 0.5s 1 alternate;
  -moz-animation: myyouxiaj 0.5s 1 alternate;
  -o-animation: myyouxiaj 0.5s 1 alternate;
  animation: myyouxiaj 0.5s 1 alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(5) {
  -webkit-transform-origin: bottom center;
  -moz-transform-origin: bottom center;
  -ms-transform-origin: bottom center;
  -o-transform-origin: bottom center;
  transform-origin: bottom center;
}

html body .box ul:nth-of-type(1) li:nth-of-type(5):hover {
  -webkit-animation: mybai 0.5s 1 alternate;
  -moz-animation: mybai 0.5s 1 alternate;
  -o-animation: mybai 0.5s 1 alternate;
  animation: mybai 0.5s 1 alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(6) {
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  -o-transform-origin: top center;
  transform-origin: top center;
}

html body .box ul:nth-of-type(1) li:nth-of-type(6):hover {
  -webkit-animation: mybai 0.5s 1 alternate;
  -moz-animation: mybai 0.5s 1 alternate;
  -o-animation: mybai 0.5s 1 alternate;
  animation: mybai 0.5s 1 alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(7):hover {
  -webkit-animation: mybai 0.5s 1 alternate;
  -moz-animation: mybai 0.5s 1 alternate;
  -o-animation: mybai 0.5s 1 alternate;
  animation: mybai 0.5s 1 alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(8) {
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
}

html body .box ul:nth-of-type(1) li:nth-of-type(8):hover {
  -webkit-animation: mywweng 0.5s 2 alternate;
  -moz-animation: mywweng 0.5s 2 alternate;
  -o-animation: mywweng 0.5s 2 alternate;
  animation: mywweng 0.5s 2 alternate;
}

html body .box ul:nth-of-type(1) li:nth-of-type(9):hover {
  -webkit-transform: scale(1.1) rotate(-5deg);
  -moz-transform: scale(1.1) rotate(-5deg);
  -ms-transform: scale(1.1) rotate(-5deg);
  -o-transform: scale(1.1) rotate(-5deg);
  transform: scale(1.1) rotate(-5deg);
}

html body .box ul:nth-of-type(1) li:nth-of-type(10):hover {
  -webkit-animation: mytantiao 0.5s 1;
  -moz-animation: mytantiao 0.5s 1;
  -o-animation: mytantiao 0.5s 1;
  animation: mytantiao 0.5s 1;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
}

html body .box ul:nth-of-type(2) li {
  padding: 20px;
  margin: 5px 10px 0 5px;
  font-size: 16px;
  display: inline-block;
  color: #010603;
  background-color: #7fbb6d;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  position: relative;
  z-index: 0;
  overflow: hidden;
}

html body .box ul:nth-of-type(2) li:hover {
  color: #fff;
}

html body .box ul:nth-of-type(2) li:nth-of-type(1):hover {
  background-color: #5f9fce;
}

html body .box ul:nth-of-type(2) li::after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  z-index: -1;
}

html body .box ul:nth-of-type(2) li:nth-of-type(2)::after {
  background-color: #5f9fce;
  left: -100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(2):hover::after {
  left: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(3)::after {
  background-color: #5f9fce;
  left: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(3):hover::after {
  left: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(4)::after {
  background-color: #5f9fce;
  top: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(4):hover::after {
  top: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(5)::after {
  background-color: #5f9fce;
  top: -100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(5):hover::after {
  top: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(6)::after {
  background-color: #5f9fce;
  left: -100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(6):hover::after {
  -webkit-animation: moveleft 0.5s 1;
  -moz-animation: moveleft 0.5s 1;
  -o-animation: moveleft 0.5s 1;
  animation: moveleft 0.5s 1;
  left: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(7)::after {
  background-color: #5f9fce;
  left: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(7):hover::after {
  -webkit-animation: moveright 0.5s 1;
  -moz-animation: moveright 0.5s 1;
  -o-animation: moveright 0.5s 1;
  animation: moveright 0.5s 1;
  left: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(8)::after {
  background-color: #5f9fce;
  top: -100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(8):hover::after {
  -webkit-animation: movetop 0.5s 1;
  -moz-animation: movetop 0.5s 1;
  -o-animation: movetop 0.5s 1;
  animation: movetop 0.5s 1;
  top: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(9)::after {
  background-color: #5f9fce;
  top: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(9):hover::after {
  -webkit-animation: movebottom 0.5s 1;
  -moz-animation: movebottom 0.5s 1;
  -o-animation: movebottom 0.5s 1;
  animation: movebottom 0.5s 1;
  top: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(10)::after {
  background-color: #5f9fce;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}

html body .box ul:nth-of-type(2) li:nth-of-type(10):hover::after {
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}

html body .box ul:nth-of-type(2) li:nth-of-type(11) {
  background-color: #5f9fce;
}

html body .box ul:nth-of-type(2) li:nth-of-type(11)::after {
  background-color: #7fbb6d;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}

html body .box ul:nth-of-type(2) li:nth-of-type(11):hover::after {
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}

html body .box ul:nth-of-type(2) li:nth-of-type(12)::after {
  background-color: #5f9fce;
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}

html body .box ul:nth-of-type(2) li:nth-of-type(12):hover::after {
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}

html body .box ul:nth-of-type(2) li:nth-of-type(13) {
  background-color: #5f9fce;
}

html body .box ul:nth-of-type(2) li:nth-of-type(13)::after {
  background-color: #7fbb6d;
  -webkit-transform: scale(1.5);
  -moz-transform: scale(1.5);
  -ms-transform: scale(1.5);
  -o-transform: scale(1.5);
  transform: scale(1.5);
}

html body .box ul:nth-of-type(2) li:nth-of-type(13):hover::after {
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);
}

html body .box ul:nth-of-type(2) li:nth-child(n + 14)::before {
  content: "";
  background-color: #5f9fce;
  position: absolute;
  top: 0;
  right: -50%;
  width: 50%;
  height: 100%;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  z-index: -1;
}

html body .box ul:nth-of-type(2) li:nth-of-type(14)::after {
  background-color: #5f9fce;
  left: -50%;
  width: 50%;
  height: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(14):hover::after {
  left: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(14):hover::before {
  right: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(15)::after {
  background-color: #5f9fce;
  left: 50%;
  -webkit-transform-origin: left center;
  -moz-transform-origin: left center;
  -ms-transform-origin: left center;
  -o-transform-origin: left center;
  transform-origin: left center;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
  width: 0;
  height: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(15)::before {
  left: 50%;
  width: 0;
  height: 100%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(15):hover::after {
  width: 50%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(15):hover::before {
  width: 50%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(16)::before {
  top: 100%;
  right: 0;
  width: 100%;
  height: 50%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(16)::after {
  background-color: #5f9fce;
  top: -50%;
  width: 100%;
  height: 50%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(16):hover::after {
  top: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(16):hover::before {
  top: 50%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(17)::after {
  background-color: #5f9fce;
  top: 50%;
  width: 100%;
  height: 0;
  -webkit-transform-origin: top center;
  -moz-transform-origin: top center;
  -ms-transform-origin: top center;
  -o-transform-origin: top center;
  transform-origin: top center;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg);
}

html body .box ul:nth-of-type(2) li:nth-of-type(17)::before {
  top: 50%;
  right: 0;
  width: 100%;
  height: 0;
}

html body .box ul:nth-of-type(2) li:nth-of-type(17):hover::after {
  height: 50%;
}

html body .box ul:nth-of-type(2) li:nth-of-type(17):hover::before {
  height: 50%;
}

@-webkit-keyframes mymaicho {
  form {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@-moz-keyframes mymaicho {
  form {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  to {
    -moz-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@-o-keyframes mymaicho {
  form {
    -o-transform: scale(1);
    transform: scale(1);
  }

  to {
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@keyframes mymaicho {
  form {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  to {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }
}

@-webkit-keyframes mylxyy {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-moz-keyframes mylxyy {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -moz-transform: scale(1.2);
    transform: scale(1.2);
  }

  100% {
    -moz-transform: scale(1);
    transform: scale(1);
  }
}

@-o-keyframes mylxyy {
  0% {
    -o-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }

  100% {
    -o-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes mylxyy {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  50% {
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2);
  }

  100% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes myhang {
  form {
    -webkit-transform: translateY(3px);
    transform: translateY(3px);
  }

  to {
    -webkit-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@-moz-keyframes myhang {
  form {
    -moz-transform: translateY(3px);
    transform: translateY(3px);
  }

  to {
    -moz-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@-o-keyframes myhang {
  form {
    -o-transform: translateY(3px);
    transform: translateY(3px);
  }

  to {
    -o-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@keyframes myhang {
  form {
    -webkit-transform: translateY(3px);
    -moz-transform: translateY(3px);
    -o-transform: translateY(3px);
    transform: translateY(3px);
  }

  to {
    -webkit-transform: translateY(8px);
    -moz-transform: translateY(8px);
    -o-transform: translateY(8px);
    transform: translateY(8px);
  }
}

@-webkit-keyframes myyouxiaj {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  20% {
    -webkit-transform: translate(-13px, -13px);
    transform: translate(-13px, -13px);
  }

  40% {
    -webkit-transform: translate(10px, 10px);
    transform: translate(10px, 10px);
  }

  60% {
    -webkit-transform: translate(-6px, -6px);
    transform: translate(-6px, -6px);
  }

  80% {
    -webkit-transform: translate(3px, 3px);
    transform: translate(3px, 3px);
  }

  100% {
    -webkit-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
}

@-moz-keyframes myyouxiaj {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  20% {
    -moz-transform: translate(-13px, -13px);
    transform: translate(-13px, -13px);
  }

  40% {
    -moz-transform: translate(10px, 10px);
    transform: translate(10px, 10px);
  }

  60% {
    -moz-transform: translate(-6px, -6px);
    transform: translate(-6px, -6px);
  }

  80% {
    -moz-transform: translate(3px, 3px);
    transform: translate(3px, 3px);
  }

  100% {
    -moz-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
}

@-o-keyframes myyouxiaj {
  0% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  20% {
    -o-transform: translate(-13px, -13px);
    transform: translate(-13px, -13px);
  }

  40% {
    -o-transform: translate(10px, 10px);
    transform: translate(10px, 10px);
  }

  60% {
    -o-transform: translate(-6px, -6px);
    transform: translate(-6px, -6px);
  }

  80% {
    -o-transform: translate(3px, 3px);
    transform: translate(3px, 3px);
  }

  100% {
    -o-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
}

@keyframes myyouxiaj {
  0% {
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  20% {
    -webkit-transform: translate(-13px, -13px);
    -moz-transform: translate(-13px, -13px);
    -o-transform: translate(-13px, -13px);
    transform: translate(-13px, -13px);
  }

  40% {
    -webkit-transform: translate(10px, 10px);
    -moz-transform: translate(10px, 10px);
    -o-transform: translate(10px, 10px);
    transform: translate(10px, 10px);
  }

  60% {
    -webkit-transform: translate(-6px, -6px);
    -moz-transform: translate(-6px, -6px);
    -o-transform: translate(-6px, -6px);
    transform: translate(-6px, -6px);
  }

  80% {
    -webkit-transform: translate(3px, 3px);
    -moz-transform: translate(3px, 3px);
    -o-transform: translate(3px, 3px);
    transform: translate(3px, 3px);
  }

  100% {
    -webkit-transform: translate(0px, 0px);
    -moz-transform: translate(0px, 0px);
    -o-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
  }
}

@-webkit-keyframes mybai {
  0% {
    -webkit-transform: skewX(0px);
    transform: skewX(0px);
  }

  20% {
    -webkit-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }

  40% {
    -webkit-transform: skewX(8deg);
    transform: skewX(8deg);
  }

  60% {
    -webkit-transform: skewX(-6deg);
    transform: skewX(-6deg);
  }

  80% {
    -webkit-transform: skewX(3deg);
    transform: skewX(3deg);
  }

  100% {
    -webkit-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}

@-moz-keyframes mybai {
  0% {
    -moz-transform: skewX(0px);
    transform: skewX(0px);
  }

  20% {
    -moz-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }

  40% {
    -moz-transform: skewX(8deg);
    transform: skewX(8deg);
  }

  60% {
    -moz-transform: skewX(-6deg);
    transform: skewX(-6deg);
  }

  80% {
    -moz-transform: skewX(3deg);
    transform: skewX(3deg);
  }

  100% {
    -moz-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}

@-o-keyframes mybai {
  0% {
    -o-transform: skewX(0px);
    transform: skewX(0px);
  }

  20% {
    -o-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }

  40% {
    -o-transform: skewX(8deg);
    transform: skewX(8deg);
  }

  60% {
    -o-transform: skewX(-6deg);
    transform: skewX(-6deg);
  }

  80% {
    -o-transform: skewX(3deg);
    transform: skewX(3deg);
  }

  100% {
    -o-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}

@keyframes mybai {
  0% {
    -webkit-transform: skewX(0px);
    -moz-transform: skewX(0px);
    -o-transform: skewX(0px);
    transform: skewX(0px);
  }

  20% {
    -webkit-transform: skewX(-10deg);
    -moz-transform: skewX(-10deg);
    -o-transform: skewX(-10deg);
    transform: skewX(-10deg);
  }

  40% {
    -webkit-transform: skewX(8deg);
    -moz-transform: skewX(8deg);
    -o-transform: skewX(8deg);
    transform: skewX(8deg);
  }

  60% {
    -webkit-transform: skewX(-6deg);
    -moz-transform: skewX(-6deg);
    -o-transform: skewX(-6deg);
    transform: skewX(-6deg);
  }

  80% {
    -webkit-transform: skewX(3deg);
    -moz-transform: skewX(3deg);
    -o-transform: skewX(3deg);
    transform: skewX(3deg);
  }

  100% {
    -webkit-transform: skewX(0deg);
    -moz-transform: skewX(0deg);
    -o-transform: skewX(0deg);
    transform: skewX(0deg);
  }
}

@-webkit-keyframes mywweng {
  0% {
    -webkit-transform: rotate(0px);
    transform: rotate(0px);
  }

  15% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  30% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  45% {
    -webkit-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  60% {
    -webkit-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  75% {
    -webkit-transform: rotate(-1deg);
    transform: rotate(-1deg);
  }

  90% {
    -webkit-transform: rotate(1deg);
    transform: rotate(1deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-moz-keyframes mywweng {
  0% {
    -moz-transform: rotate(0px);
    transform: rotate(0px);
  }

  15% {
    -moz-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  30% {
    -moz-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  45% {
    -moz-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  60% {
    -moz-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  75% {
    -moz-transform: rotate(-1deg);
    transform: rotate(-1deg);
  }

  90% {
    -moz-transform: rotate(1deg);
    transform: rotate(1deg);
  }

  100% {
    -moz-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-o-keyframes mywweng {
  0% {
    -o-transform: rotate(0px);
    transform: rotate(0px);
  }

  15% {
    -o-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  30% {
    -o-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  45% {
    -o-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  60% {
    -o-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  75% {
    -o-transform: rotate(-1deg);
    transform: rotate(-1deg);
  }

  90% {
    -o-transform: rotate(1deg);
    transform: rotate(1deg);
  }

  100% {
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes mywweng {
  0% {
    -webkit-transform: rotate(0px);
    -moz-transform: rotate(0px);
    -o-transform: rotate(0px);
    transform: rotate(0px);
  }

  15% {
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
    -o-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  30% {
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
    -o-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  45% {
    -webkit-transform: rotate(-2deg);
    -moz-transform: rotate(-2deg);
    -o-transform: rotate(-2deg);
    transform: rotate(-2deg);
  }

  60% {
    -webkit-transform: rotate(2deg);
    -moz-transform: rotate(2deg);
    -o-transform: rotate(2deg);
    transform: rotate(2deg);
  }

  75% {
    -webkit-transform: rotate(-1deg);
    -moz-transform: rotate(-1deg);
    -o-transform: rotate(-1deg);
    transform: rotate(-1deg);
  }

  90% {
    -webkit-transform: rotate(1deg);
    -moz-transform: rotate(1deg);
    -o-transform: rotate(1deg);
    transform: rotate(1deg);
  }

  100% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@-webkit-keyframes mytantiao {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }

  80% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}

@-moz-keyframes mytantiao {
  0% {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  40% {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }

  80% {
    -moz-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -moz-transform: scale(0.8);
    transform: scale(0.8);
  }
}

@-o-keyframes mytantiao {
  0% {
    -o-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }

  40% {
    -o-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }

  80% {
    -o-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
}

@keyframes mytantiao {
  0% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  20% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }

  40% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }

  80% {
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }

  100% {
    -webkit-transform: scale(0.8);
    -moz-transform: scale(0.8);
    -o-transform: scale(0.8);
    transform: scale(0.8);
  }
}

@-webkit-keyframes moveleft {
  0% {
    left: -100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: -20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: -10%;
  }

  100% {
    left: 0;
  }
}

@-moz-keyframes moveleft {
  0% {
    left: -100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: -20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: -10%;
  }

  100% {
    left: 0;
  }
}

@-o-keyframes moveleft {
  0% {
    left: -100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: -20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: -10%;
  }

  100% {
    left: 0;
  }
}

@keyframes moveleft {
  0% {
    left: -100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: -20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: -10%;
  }

  100% {
    left: 0;
  }
}

@-webkit-keyframes moveright {
  0% {
    left: 100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: 20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: 10%;
  }

  100% {
    left: 0;
  }
}

@-moz-keyframes moveright {
  0% {
    left: 100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: 20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: 10%;
  }

  100% {
    left: 0;
  }
}

@-o-keyframes moveright {
  0% {
    left: 100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: 20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: 10%;
  }

  100% {
    left: 0;
  }
}

@keyframes moveright {
  0% {
    left: 100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: 20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: 10%;
  }

  100% {
    left: 0;
  }
}

@-webkit-keyframes movetop {
  0% {
    top: -100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: -20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: -10%;
  }

  100% {
    top: 0;
  }
}

@-moz-keyframes movetop {
  0% {
    top: -100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: -20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: -10%;
  }

  100% {
    top: 0;
  }
}

@-o-keyframes movetop {
  0% {
    top: -100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: -20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: -10%;
  }

  100% {
    top: 0;
  }
}

@keyframes movetop {
  0% {
    top: -100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: -20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: -10%;
  }

  100% {
    top: 0;
  }
}

@-webkit-keyframes movebottom {
  0% {
    top: 100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: 20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: 10%;
  }

  100% {
    top: 0;
  }
}

@-moz-keyframes movebottom {
  0% {
    top: 100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: 20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: 10%;
  }

  100% {
    top: 0;
  }
}

@-o-keyframes movebottom {
  0% {
    top: 100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: 20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: 10%;
  }

  100% {
    top: 0;
  }
}

@keyframes movebottom {
  0% {
    top: 100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: 20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: 10%;
  }

  100% {
    top: 0;
  }
}

/*# sourceMappingURL=./index.css.map */
html {
  margin: 0;
  padding: 0;

  body {
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;

    .box {
      width: 60%;
      // height: 300px;
      border: 1px red solid;

      h1 {
        text-align: center;
      }

      ul {
        list-style: none;
        // font-size: 0px;
        padding: 0 10px;
        margin: 0;

        // 2D转换
        &:nth-of-type(1) li {
          padding: 20px;
          margin: 5px 10px 0 5px;
          font-size: 16px;
          display: inline-block;
          color: #fff;
          background-color: #7fbb6d;
          transition: all 0.5s;

          &:nth-of-type(1):hover {
            animation: mymaicho 0.5s infinite alternate;
          }

          &:nth-of-type(2):hover {
            animation: mylxyy 0.3s 1 alternate;
          }

          &:nth-of-type(3):hover {
            animation: myhang 0.5s infinite alternate;
          }

          &:nth-of-type(4):hover {
            animation: myyouxiaj 0.5s 1 alternate;
          }

          &:nth-of-type(5) {
            transform-origin: bottom center;
          }

          &:nth-of-type(5):hover {
            animation: mybai 0.5s 1 alternate;
          }

          &:nth-of-type(6) {
            transform-origin: top center;
          }

          &:nth-of-type(6):hover {
            animation: mybai 0.5s 1 alternate;
          }

          &:nth-of-type(7):hover {
            animation: mybai 0.5s 1 alternate;
          }

          &:nth-of-type(8) {
            transform-origin: left center;
          }

          &:nth-of-type(8):hover {
            animation: mywweng 0.5s 2 alternate;
          }

          &:nth-of-type(9):hover {
            transform: scale(1.1) rotate(-5deg);
          }

          &:nth-of-type(10):hover {
            animation: mytantiao 0.5s 1;
            transform: scale(0.8);
          }
        }

        // 背景转换
        &:nth-of-type(2) li {
          padding: 20px;
          margin: 5px 10px 0 5px;
          font-size: 16px;
          display: inline-block;
          color: #010603;
          background-color: #7fbb6d;
          transition: all 0.5s;
          position: relative;
          z-index: 0;
          overflow: hidden;

          &:hover {
            color: #fff;
          }

          &:nth-of-type(1):hover {
            background-color: #5f9fce;
          }

          &::after {
            content: "";
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;

            top: 0;
            left: 0;
            transition: all 0.5s;
            z-index: -1;
          }

          &:nth-of-type(2)::after {
            background-color: #5f9fce;

            left: -100%;
          }

          &:nth-of-type(2):hover::after {
            left: 0;
          }

          &:nth-of-type(3)::after {
            background-color: #5f9fce;

            left: 100%;
          }

          &:nth-of-type(3):hover::after {
            left: 0;
          }

          &:nth-of-type(4)::after {
            background-color: #5f9fce;

            top: 100%;
          }

          &:nth-of-type(4):hover::after {
            top: 0;
          }

          &:nth-of-type(5)::after {
            background-color: #5f9fce;

            top: -100%;
          }

          &:nth-of-type(5):hover::after {
            top: 0;
          }

          &:nth-of-type(6)::after {
            background-color: #5f9fce;

            left: -100%;
          }

          &:nth-of-type(6):hover::after {
            animation: moveleft 0.5s 1;
            left: 0;
          }

          &:nth-of-type(7)::after {
            background-color: #5f9fce;

            left: 100%;
          }

          &:nth-of-type(7):hover::after {
            animation: moveright 0.5s 1;
            left: 0;
          }

          &:nth-of-type(8)::after {
            background-color: #5f9fce;
            top: -100%;
          }

          &:nth-of-type(8):hover::after {
            animation: movetop 0.5s 1;
            top: 0;
          }

          &:nth-of-type(9)::after {
            background-color: #5f9fce;

            top: 100%;
          }

          &:nth-of-type(9):hover::after {
            animation: movebottom 0.5s 1;
            top: 0;
          }

          &:nth-of-type(10)::after {
            background-color: #5f9fce;
            border-radius: 50%;
            transform: scale(0);
          }

          &:nth-of-type(10):hover::after {
            transform: scale(1.5);
          }

          &:nth-of-type(11) {
            background-color: #5f9fce;
          }

          &:nth-of-type(11)::after {
            background-color: #7fbb6d;
            border-radius: 50%;
            transform: scale(1.5);
          }

          &:nth-of-type(11):hover::after {
            transform: scale(0);
          }

          &:nth-of-type(12)::after {
            background-color: #5f9fce;
            transform: scale(0);
          }

          &:nth-of-type(12):hover::after {
            transform: scale(1.5);
          }

          &:nth-of-type(13) {
            background-color: #5f9fce;
          }

          &:nth-of-type(13)::after {
            background-color: #7fbb6d;
            transform: scale(1.5);
          }

          &:nth-of-type(13):hover::after {
            transform: scale(0);
          }

          &:nth-child(n + 14)::before {
            content: "";
            background-color: #5f9fce;
            position: absolute;
            top: 0;
            right: -50%;
            width: 50%;
            height: 100%;
            transition: all 0.5s;
            z-index: -1;
          }

          &:nth-of-type(14)::after {
            background-color: #5f9fce;
            left: -50%;
            width: 50%;
            height: 100%;
          }

          &:nth-of-type(14):hover {
            &::after {
              left: 0;
            }

            &::before {
              right: 0;
            }
          }

          &:nth-of-type(15)::after {
            background-color: #5f9fce;
            left: 50%;
            transform-origin: left center;
            transform: rotate(180deg);
            width: 0;
            height: 100%;
          }

          &:nth-of-type(15)::before {
            left: 50%;
            width: 0;
            height: 100%;
          }

          &:nth-of-type(15):hover {
            &::after {
              width: 50%;
            }

            &::before {
              width: 50%;
            }
          }

          &:nth-of-type(16)::before {
            top: 100%;
            right: 0;
            width: 100%;
            height: 50%;
          }

          &:nth-of-type(16)::after {
            background-color: #5f9fce;
            top: -50%;
            width: 100%;
            height: 50%;
          }

          &:nth-of-type(16):hover {
            &::after {
              top: 0;
            }

            &::before {
              top: 50%;
            }
          }

          &:nth-of-type(17)::after {
            background-color: #5f9fce;
            top: 50%;
            width: 100%;
            height: 0;
            transform-origin: top center;
            transform: rotate(180deg);
          }

          &:nth-of-type(17)::before {
            top: 50%;
            right: 0;
            width: 100%;
            height: 0;
          }

          &:nth-of-type(17):hover {
            &::after {
              height: 50%;
            }

            &::before {
              height: 50%;
            }
          }
        }

        // 边境过渡
      }
    }
  }
}

// 2D转换动画------------------
// 脉冲
@keyframes mymaicho {
  form {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
}

// 流行音乐
@keyframes mylxyy {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
}

// Hang
@keyframes myhang {
  form {
    transform: translateY(3px);
  }

  to {
    transform: translateY(8px);
  }
}

// 摇到右下角
@keyframes myyouxiaj {
  0% {
    transform: translate(0, 0);
  }

  20% {
    transform: translate(-13px, -13px);
  }

  40% {
    transform: translate(10px, 10px);
  }

  60% {
    transform: translate(-6px, -6px);
  }

  80% {
    transform: translate(3px, 3px);
  }

  100% {
    transform: translate(0px, 0px);
  }
}

// 摆顶/摆底
@keyframes mybai {
  0% {
    transform: skewX(0px);
  }

  20% {
    transform: skewX(-10deg);
  }

  40% {
    transform: skewX(8deg);
  }

  60% {
    transform: skewX(-6deg);
  }

  80% {
    transform: skewX(3deg);
  }

  100% {
    transform: skewX(0deg);
  }
}

// 嗡嗡声
@keyframes mywweng {
  0% {
    transform: rotate(0px);
  }

  15% {
    transform: rotate(-2deg);
  }

  30% {
    transform: rotate(2deg);
  }

  45% {
    transform: rotate(-2deg);
  }

  60% {
    transform: rotate(2deg);
  }

  75% {
    transform: rotate(-1deg);
  }

  90% {
    transform: rotate(1deg);
  }

  100% {
    transform: rotate(0deg);
  }
}

// 弹跳
@keyframes mytantiao {
  0% {
    transform: scale(1);
  }

  20% {
    transform: scale(0.8);
  }

  40% {
    transform: scale(1);
  }

  60% {
    transform: scale(0.8);
  }

  80% {
    transform: scale(1);
  }

  100% {
    transform: scale(0.8);
  }
}

// 背景转换动画------------------
// 弹跳
@keyframes moveleft {
  0% {
    left: -100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: -20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: -10%;
  }

  100% {
    left: 0;
  }
}

@keyframes moveright {
  0% {
    left: 100%;
  }

  30% {
    left: 0;
  }

  50% {
    left: 20%;
  }

  70% {
    left: 0;
  }

  90% {
    left: 10%;
  }

  100% {
    left: 0;
  }
}

@keyframes movetop {
  0% {
    top: -100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: -20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: -10%;
  }

  100% {
    top: 0;
  }
}

@keyframes movebottom {
  0% {
    top: 100%;
  }

  30% {
    top: 0;
  }

  50% {
    top: 20%;
  }

  70% {
    top: 0;
  }

  90% {
    top: 10%;
  }

  100% {
    top: 0;
  }
}</style>