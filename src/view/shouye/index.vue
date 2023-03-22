<template>
  <div>
    <Header></Header>
    <MyMessage></MyMessage>
    <Project></Project>
    <Demo></Demo>
    <Footer></Footer>
    <!-- <JingDong></JingDong> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>

import Header from "../header/index.vue";
import MyMessage from "../myMessage.vue/index.vue"
import Footer from '../footer/index.vue'
import Project from '../preject/index.vue'
import Demo from '../demo/index.vue'

export default {

  name: 'shouye',
  components: {
    Header,
    MyMessage,
    Footer,
    Project,
    Demo,
  }
}
</script>