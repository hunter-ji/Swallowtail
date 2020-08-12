<template>
  <div class="content-container">
    <div class="content-img__show" v-show="imageUrl">
      <div style="padding: 50px;">
      <img :src="imageUrl" alt="image" width="100%" />
      </div>
      <div class="content-watermark">
        <div v-for="item in 50" :key="item" class="mark" :style="'margin-bottom:' + lineHeight + 'px'">{{ mark }}</div>
      </div>
    </div>
    <div class="content-img__upload" v-show="!imageUrl">
      <el-upload
          action=""
          :on-change="handleChange"
          :before-upload="beforeUpload"
          :auto-upload="false"
          drag>
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    mark: String,
    lineHeight: Number
  },
  data() {
    return {
      imageUrl: null
    }
  },
  methods: {
    handleChange(file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>

<style scoped>
.content-container {
  border-radius: 0 8px 0 0;
  background: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content-img__show {
  width: 600px;
  position: relative;
  margin: 0;
}

.content-watermark {
  width: 600px;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transform: rotate(-45deg);
}

.mark {
  margin-right: 5px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(96, 90, 87, 0.68);
}
</style>
