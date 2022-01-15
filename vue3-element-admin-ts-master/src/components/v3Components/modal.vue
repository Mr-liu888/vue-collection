<template>
  <teleport to='#modal'>
    <el-dialog v-model="isOpen" title="提示" width="30%" center>
      <span><slot>这是一段提示</slot></span>
      <template #footer>
          <span class="dialog-footer">
            <el-button @click="closeModal">Cancel</el-button>
            <el-button type="primary" @click="closeModal">Confirm</el-button>
          </span>
      </template>
    </el-dialog>
  </teleport>
</template>

<script lang='ts'>
import {defineComponent} from 'vue'
export default defineComponent({
   props: {
     isOpen: Boolean
   },
   emits:{
     'close-modal': null
   },
   setup(props, context){
     const closeModal = () => {
       context.emit('close-modal')
       console.log(props)
     }
     return{
       closeModal
     }
   }
})
</script>

<style scoped>

</style>
