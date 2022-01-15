<template>
  <div>
<!--    <el-empty description="首页"></el-empty>-->
    <div style='width: 200px;margin: 100px auto'>
      <h1>{{ msg }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const msg = ref('Hello World')


</script>

<style lang="scss" scoped>

</style>
