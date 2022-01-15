<template>
  <div>
    <Mobile v-if="isMobile" ref="mobile"/>
    <PC v-else/>
  </div>
</template>

<script>
import PC from './pc/index'
import Mobile from './mobile/index'
export default {
  components: {
    PC,
    Mobile
  },
  data() {
    return {
      isMobile: true
    }
  },
  created() {
    // 判断当前是手机还是pc访问
    this.isMobile = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
    window.onresize = () => {
      this.isMobile = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

</style>
