<template>
  <div class="main-container">
    <el-card :body-style="{padding: '0'}">
      <template #header>
        <span :underline="false">文章标题</span>
      </template>
      <el-input
        v-model="title"
        class="title-input"
        placeholder="请输入文章标题"
      />
    </el-card>
    <el-card
      :body-style="{padding: '0'}"
      class="margin-top-xs"
    >
      <template #header>
        <div class="flex">
          <span :underline="false">文章内容</span>
          <div class="flex-sub"></div>
          <el-button
            type="primary"
            size="mini"
            @click="getHtmlContent"
          >获取HTML</el-button>
          <el-button
            type="warning"
            size="mini"
            @click="getJsonContent"
          >获取JSON</el-button>
        </div>
      </template>
      <RichTextEditor
        ref="richTextEditor"
        :height="400"
      />
    </el-card>
    <div
      v-if="htmlContent"
      class="margin-top padding priview-content"
      v-html="htmlContent"
    >
    </div>
    <div
      v-if="jsonContent"
      class="margin-top padding priview-content"
    >
      {{ jsonContent }}
    </div>
  </div>
</template>

<script lang="ts">
import RichTextEditor from "@/components/common/RichTextEditor.vue";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "RichText",
  components: { RichTextEditor },
  data() {
    return {
      title: "",
      htmlContent: "",
      jsonContent: "",
    };
  },
  methods: {
    getHtmlContent() {
      this.htmlContent = (
        this.$refs.richTextEditor as InstanceType<typeof RichTextEditor>
      ).getHtmlContent();
    },
    getJsonContent() {
      this.jsonContent = (
        this.$refs.richTextEditor as InstanceType<typeof RichTextEditor>
      ).getJsonContent();
    },
  },
});
</script>

<style lang="scss" scoped>
.title-input {
  :deep(.el-input__inner) {
    border: none !important;
  }
}
:deep(.ql-container.ql-snow) {
  border: none;
}
:deep(.ql-toolbar.ql-snow) {
  border: none;
  border-bottom: 1px solid #ccc;
}
:deep(.ql-editor.ql-blank::before) {
  color: #afb4bd;
  font-size: 14px;
  font-style: normal;
}
.dark .priview-content {
  background: #5a5a5a;
  color: #fff;
}
.light .priview-content {
  background: #fff;
  color: #333;
}
</style>
