<template>
   <div class="loginWrap">
     <el-card style="width: 500px;height: 300px;margin: 100px auto;overflow: hidden">
       <el-form :model="ruleForm"  :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
         <el-form-item label="用户名" prop="user">
           <el-input v-model.trim="ruleForm.user"></el-input>
         </el-form-item>
         <el-form-item label="密码" prop="pass">
           <el-input type="password" v-model.trim="ruleForm.pass" autocomplete="off"></el-input>
         </el-form-item>
         <el-form-item label="确认密码" prop="checkPass">
           <el-input type="password" v-model.trim="ruleForm.checkPass" autocomplete="off"></el-input>
         </el-form-item>
         <el-form-item>
           <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
           <el-button style="margin-left: 40px" @click="resetForm('ruleForm')">重置</el-button>
         </el-form-item>
       </el-form>
     </el-card>
   </div>
</template>

<script>
import {Button, Card, Message,Form, FormItem,Input} from 'element-ui'
import { userLogin } from '../../../api/login'
import {isEmpty} from "../../../utils/toolUtil";
export default {
  data(){
    const checkUser = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('用户名不能为空'));
      } else {
        if (value.length < 5) {
          callback(new Error('用户名长度应大于5位'));
        } else {
          callback();
        }
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if(this.ruleForm.pass.length < 6){
          callback(new Error('密码长度应大于等于6位'));
        }
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (this.ruleForm.checkPass.length < 6) {
        callback(new Error('密码长度应大于等于6位'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    }
    return{
      ruleForm: {
        pass: '',
        checkPass: '',
        user: ''
      },
      rules: {
        pass: [
          {required: true, validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { required: true,validator: validatePass2, trigger: 'blur' }
        ],
        user: [
          { required: true,validator: checkUser, trigger: 'blur' }
        ]
      }
    };
  },
  components:{
    [Card.name]: Card,
    [Message.name]: Message,
    [Button.name]: Button,
    [Form.name]: Form,
    [FormItem.name]: FormItem,
    [Input.name]: Input
  },
  mounted() {
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userLogin(this.ruleForm).then(res => {
            if(!isEmpty(res)){
              if(res.data.code === '00000') {
                sessionStorage.setItem('user',this.ruleForm.user)
                this.$router.push({path:'/'})
              } else {
                Message({
                  message: '登录失败',
                  type: 'error'
                })
              }
            }
          })
        } else {
          Message({
            message: '用户名或密码错误',
            type: 'error'
          })
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="less" scoped>
 .loginWrap{
   width: 100%;
   height: 100vh;
   background: #f1f1f1;
   overflow: hidden;
   .demo-ruleForm{
     width: 90%;
     text-align: center;
     margin-top: 5px;
   }
 }
</style>