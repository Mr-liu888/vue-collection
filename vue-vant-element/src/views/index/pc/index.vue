<template>
  <div class="pc-index">
    <el-button>这是pc</el-button>
  </div>
</template>

<script>
import { parameterQuery } from '../../../api/news'
import { Button,Message } from 'element-ui'
import {isEmpty} from "../../../utils/toolUtil";
export default {
  components:{
    [Button.name]: Button,
    [Message.name]: Message,
  },
  mounted() {
    if(isEmpty(sessionStorage.getItem('user'))){
      this.$router.push({path:'/login'})
    }
    let postData = {
      id: 6
    }
    parameterQuery(postData).then(res => {
       if(!isEmpty(res)){
         console.log(res.data)
       } else {
         Message({
           message: '数据为空',
           type: 'error'
         })
       }
    })
  }
}
</script>

<style scoped>
 .pc-index{
   width: 100%;
 }
</style>