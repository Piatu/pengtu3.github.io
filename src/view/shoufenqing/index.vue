<template>
  <div>
    <div id="box">
      <ul>
        <li>
          <a href="#">
            <img src="./images/1.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/2.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/3.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/4.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/5.jpg" alt="">
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import sfq from './sfq.js'
export default {
  mounted() {
    sfq()
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}

* {
  margin: 0;
  padding: 0;
}

div {
  width: 1200px;
  height: 400px;
  margin: 50px auto;
  border: 1px solid red;
  overflow: hidden;
}

div li {
  width: 240px;
  height: 400px;
  float: left;
  transition: all 500ms;
}

div ul {
  width: 1200px;
}
</style>