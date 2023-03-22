<template>
  <div>
    <div class="w">
      <!-- 操作的界面 -->
      <div class="controls">
        <img src="./images/9.6/tip.png" alt="" /><br />
        <!-- maxlength 可以用来限制表单输入的内容长度 -->
        <textarea placeholder="说点什么吧..." id="area" cols="30" rows="10" maxlength="200"></textarea>
        <div>
          <span class="useCount" id="useCount">0</span>
          <span>/</span>
          <span>200</span>
          <button id="send">发布</button>
        </div>
      </div>
      <!-- 微博内容列表 -->
      <div class="contentList">
        <ul id="list"></ul>
      </div>
    </div>

    <!-- 添加了hidden属性元素会直接隐藏掉 -->
    <li hidden>
      <div class="info">
        <img class="userpic" src="./images/9.6/03.jpg" />
        <span class="username">死数据:百里守约</span>
        <p class="send-time">死数据:发布于 2020年12月05日 00:07:54</p>
      </div>
      <div class="content">死数据:111</div>
      <span class="the_del">X</span>
    </li>

  </div>
</template>

<script>
import wb from './wb.js'
export default {
  data() {
    return {

    }
  },
  mounted() {
   wb() 
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
}

.w {
  width: 900px;
  margin: 0 auto;
}

.controls textarea {
  width: 878px;
  height: 100px;
  resize: none;
  border-radius: 10px;
  outline: none;
  padding-left: 20px;
  padding-top: 10px;
  font-size: 18px;
}

.controls {
  overflow: hidden;
}

.controls div {
  float: right;
}

.controls div span {
  color: #666;
}

.controls div .useCount {
  color: red;
}

.controls div button {
  width: 100px;
  outline: none;
  border: none;
  background: rgb(0, 132, 255);
  height: 30px;
  cursor: pointer;
  color: #fff;
  font: bold 14px '宋体';
  transition: all 0.5s;
}

.controls div button:hover {
  background: rgb(0, 225, 255);
}

.controls div button:disabled {
  background: rgba(0, 225, 255, 0.5);
}

.contentList {
  margin-top: 50px;
}

.contentList li {
  padding: 20px 0;
  border-bottom: 1px dashed #ccc;
  position: relative;
}

.contentList li .info {
  position: relative;
}

.contentList li .info span {
  position: absolute;
  top: 15px;
  left: 100px;
  font: bold 16px '宋体';
}

.contentList li .info p {
  position: absolute;
  top: 40px;
  left: 100px;
  color: #aaa;
  font-size: 12px;
}

.contentList img {
  width: 80px;
  border-radius: 50%;
}

.contentList li .content {
  padding-left: 100px;
  color: #666;
  word-break: break-all;
}

.contentList li .the_del {
  position: absolute;
  right: 0;
  top: 0;
  font-size: 28px;
  cursor: pointer;
}
</style>
