<template>
   <div class="loginWrap-md">
     <van-cell-group class="cellGroup">
       <van-field
           v-model="vanForm.user"
           clearable
           label="用户名"
           right-icon="question-o"
           placeholder="请输入用户名"
           left-icon="contact"
           @click-right-icon="$toast('用户名长度应大于5位')"
       />
       <van-field
           v-model="vanForm.pass"
           clearable
           type="password"
           label="密码"
           right-icon="question-o"
           placeholder="请输入密码"
           left-icon="closed-eye"
           @click-right-icon="$toast('密码长度应大于等于6位')"
       />
       <!--登录按钮-->
       <div>
         <van-button type="info" size="large" @click="onClickButtonSubmit">登录</van-button>
       </div>
     </van-cell-group>
   </div>
</template>

<script>
import {
  Button as VanButton,
  Cell as VanCell,
  CellGroup as VanCellGroup,
  Field as VanField,
  Toast as VanToast,
} from 'vant';
import { userLogin } from '../../../api/login'
import {isEmpty} from "../../../utils/toolUtil";
import {Message} from "element-ui";
export default {
  data(){
    return{
      vanForm:{
        pass: '',
        user: ''
      }
    }
  },
  components:{
    [VanButton.name]: VanButton,
    [VanCell.name]: VanCell,
    [VanCellGroup.name]: VanCellGroup,
    [VanField.name]: VanField,
    [VanToast.name]: VanToast,
  },
  methods:{
    // 表单提交
    onClickButtonSubmit() {
      if(this.vanForm.user == ''){
        VanToast("用户名不能为空");
        return false;
      }
      if(this.vanForm.pass == ''){
        VanToast("密码不能为空");
        return false;
      }
      else{
        userLogin(this.vanForm).then(res => {
          if(!isEmpty(res)){
            if(res.data.code === '00000') {
              sessionStorage.setItem('user',this.vanForm.user)
              this.$router.push({path:'/'})
            } else {
              Message({
                message: '登录失败',
                type: 'error'
              })
            }


          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
 .loginWrap-md{
   width: 100%;
   height: 100%;
   overflow: hidden;
   .cellGroup{
     margin-top: 150px;
   }
 }
</style>