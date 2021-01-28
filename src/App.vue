<template>
  <div id="app">
    <el-container class="container">
      <el-main style="height: 100%;width: 100%;padding: 0;" class="container-main">
        <div class="container-header" v-show="imageUrl" />
        <content-com
            :mark="mark"
            :lineHeight="lineHeight"
            :fontSize="fontSize"
            :color="color"
            :imgWidth="imgWidth"
            :imgHeight="imgHeight"
            :rotate-val="rotateVal"
            :gray="gray"
            :imageUrl="imageUrl"
            @toggle="toggle"
        />
      </el-main>
      <el-aside style="width: 30%;min-width: 300px;" v-show="imageUrl">
        <el-form ref="form" label-width="80px" class="aside-form">
          <el-form-item label="文字内容">
            <el-input type="textarea" :rows="3" v-model="mark" />
          </el-form-item>
          <el-form-item label="字体大小">
            <el-input-number v-model="fontSize" :min="10" :max="18" />
          </el-form-item>
          <!--          <el-form-item label="行高">-->
          <!--            <el-input-number v-model="lineHeight" :min="1" :max="300" />-->
          <!--          </el-form-item>-->
          <el-form-item label="字体颜色">
            <el-color-picker v-model="color" show-alpha />
          </el-form-item>
          <!--          <el-form-item label="宽度">-->
          <!--            <el-input type="number" v-model="imgWidth" placeholder="图片宽度" />-->
          <!--          </el-form-item>-->
          <!--          <el-form-item label="高度">-->
          <!--            <el-input type="number" v-model="imgHeight" placeholder="图片高度" />-->
          <!--          </el-form-item>-->
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
        <div class="aside-form">
          <div class="btn-group">
            <el-button style="width: 40%;" @click="imageUrl = null" :disabled="!imageUrl">重新上传</el-button>
            <el-button type="primary" style="width: 40%" :disabled="!imageUrl" @click="downloadImg">下载</el-button>
          </div>
        </div>


        <div class="version">
          <i class="el-icon-s-promotion" />
          项目地址: Kuari/Swallowtail。欢迎Issues和PR。
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
      mark: "此复印件仅用于xxx单位xxx用途 2021年1月1日",
      lineHeight: 50,
      fontSize: 12,
      color: "rgba(96, 90, 87, 0.68)",
      imgWidth: 600,
      imgHeight: 400,
      rotateVal: 0,
      gray: false,
      imageUrl: null
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
    },
    toggle(val) {
      this.imageUrl = val;
    },
    downloadImg() {
      let imgDom = document.getElementById("target_img");
      let a = document.createElement("a");
      a.href = imgDom.src;
      a.download = "output.png";
      a.click();
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.container-main {
  display: flex;
  flex-direction: column;
}

.container-header {
  height: 10px;
  background: #ffffff;
}

.version {
  font-size: 14px;
  font-weight: 400;
  color: #303133;
  padding: 12px;
}

.aside-form {
  padding: 24px 12px 12px 12px;
}

.btn-group {
  display: flex;
  justify-content: space-around;
}
</style>
