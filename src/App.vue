<template>
  <div id="app">
    <el-container>
      <el-main style="padding: 10px 0 0 0;height: 100vh;">
        <content-com
            :mark="mark"
            :lineHeight="lineHeight"
            :fontSize="fontSize"
            :color="color"
            :imgWidth="imgWidth"
            :imgHeight="imgHeight"
            :rotate-val="rotateVal"
            :gray="gray"
        />
      </el-main>
      <el-aside style="width: 30%;min-width: 300px;">
        <el-form ref="form" label-width="80px" class="aside-form">
          <el-form-item label="文字内容">
            <el-input type="textarea" :rows="3" v-model="mark" />
          </el-form-item>
          <el-form-item label="字体大小">
            <el-input-number v-model="fontSize" :min="10" :max="18" />
          </el-form-item>
          <el-form-item label="行高">
            <el-input-number v-model="lineHeight" :min="1" :max="300" />
          </el-form-item>
          <el-form-item label="颜色">
            <el-color-picker v-model="color" show-alpha />
          </el-form-item>
          <el-form-item label="宽度">
            <el-input-number v-model="imgWidth" :min="100" :max="2000" />
          </el-form-item>
          <el-form-item label="高度">
            <el-input-number v-model="imgHeight" :min="100" :max="2000" />
          </el-form-item>
          <el-form-item label="翻转">
            <el-button type="primary" @click="rotateHandle('left')">左转</el-button>
            <el-button type="primary" @click="rotateHandle('right')">右转</el-button>
          </el-form-item>
          <el-form-item label="黑白滤镜">
            <el-switch
                v-model="gray"
                active-color="#13ce66"
                inactive-color="#f2f2f2"
            />
          </el-form-item>
        </el-form>


        <div class="version">
          <i class="el-icon-info" />
          当前版本v1.0.0，仅供编辑水印编辑功能，完成之后的图片请截图获取。
        </div>
        <div class="version">
          <i class="el-icon-s-promotion" />
          项目地址:
          <el-link type="primary" href="https://github.com/Kuari/Swallowtail" target="_blank">Kuari/Swallowtail
          </el-link>
          。欢迎Issues和PR。
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
      lineHeight: 50,
      fontSize: 12,
      color: "rgba(96, 90, 87, 0.68)",
      imgWidth: 600,
      imgHeight: 400,
      rotateVal: 0,
      gray: false
    }
  },
  methods: {
    rotateHandle(direction) {
      if (direction === 'right') {
        if (this.rotateVal < 180) {
          this.rotateVal += 90;
        } else if (this.rotateVal === 180) {
          this.rotateVal = -90;
        } else if (this.rotateVal === -90) {
          this.rotateVal = 0;
        }
      } else {
        if (this.rotateVal > -180) {
          this.rotateVal -= 90;
        } else if (this.rotateVal === -180) {
          this.rotateVal = 90;
        } else if (this.rotateVal === 90) {
          this.rotateVal = 0;
        }
      }
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

.aside-form {
  padding: 24px 12px 12px 12px;
}
</style>
