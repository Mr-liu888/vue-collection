<template>
  <div class="md-index">
    <van-button type="primary">这是移动</van-button>
  </div>
</template>

<script>
import { Button as VanButton } from 'vant';
import {isEmpty} from "../../../utils/toolUtil";
export default {
  components:{
    [VanButton.name]: VanButton,
  },
  mounted() {
    if(isEmpty(sessionStorage.getItem('user'))){
      this.$router.push({path:'/login'})
    }
  }
}
</script>

<style lang="less" scoped>
 .md-index{
   width: 100%;
 }
</style>