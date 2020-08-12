<template>
  <div id="app">
    <el-container>
      <el-main style="padding: 10px 0 0 0;height: 100vh;">
        <content-com :mark="mark" :lineHeight="lineHeight" />
      </el-main>
      <el-aside width="300px">
        <el-form ref="form" label-width="80px" style="margin-top: 30px;">
          <el-form-item label="水印文字">
            <el-input type="textarea" :rows="3" v-model="mark" />
          </el-form-item>
          <el-form-item label="行高">
            <el-input-number v-model="lineHeight" :min="1" :max="300" />
          </el-form-item>
        </el-form>


        <div class="version">
          <i class="el-icon-info" />
          当前版本v1.0.0，仅供编辑水印文字，完成之后的图片请截图获取。
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import contentCom from "@/components/content";

export default {
  name: 'App',
  components: {
    contentCom
  },
  data() {
    return {
      mark: "此复印件仅用于xxx 2020年8月12日",
      lineHeight: 10
    }
  }
}
</script>

<style scoped>
.version {
  font-size: 14px;
  font-weight: 400;
  color: #303133;
  padding: 12px;
}
</style>
