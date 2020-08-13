<template>
  <div class="content-container">
    <div class="content-img__show"
         v-show="imageUrl"
         :style="`width:${imgWidth*1.5}px;height:${imgHeight*1.5}px;`">
      <div style="display: flex;justify-content: center;align-items: center;" :style="`padding-top:${imgHeight/4}px;`">
        <img :src="localImageurl"
             :class="gray ? 'gray' : ''"
             alt="image"
             :style="`transform:rotate(${rotateVal}deg);width:${imgWidth}px;height:${imgHeight}px;`" />
      </div>
      <div class="content-watermark">
        <div
            v-for="item in imgHeight/10"
            :key="item"
            class="mark"
            :style="`color:${color};margin-bottom:${lineHeight}px;font-size:${fontSize}px;`"
        >
          {{ mark }}
        </div>
      </div>
    </div>
    <div class="content-img__upload" v-show="!imageUrl">
      <el-upload
          action=""
          :show-file-list="false"
          :on-change="handleChange"
          :before-upload="beforeUpload"
          :auto-upload="false"
          drag>
        <i class="el-icon-upload" />
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  props: {
    mark: String,
    lineHeight: Number,
    fontSize: Number,
    color: String,
    imgWidth: Number,
    imgHeight: Number,
    rotateVal: Number,
    gray: Boolean,
    imageUrl: String
  },
  data() {
    return {
      localImageurl: this.imageUrl
    }
  },
  methods: {
    handleChange(file) {
      this.localImageurl = URL.createObjectURL(file.raw);
      this.$emit("toggle", this.localImageurl)
    },
    beforeUpload(file) {
      const isJPG = file.type === 'image/jpeg' || 'image/png';

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG/PNG 格式!');
      }
      return isJPG;
    }
  },
  watch: {
    imageUrl(val) {
      this.localImageurl = val;
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
  overflow: hidden;
}

.content-img__show {
  position: relative;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-watermark {
  position: absolute;
  top: 0;
  left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  transform: rotate(-45deg);
}

.mark {
  margin-right: 5px;
  font-size: 12px;
  font-weight: 400;
}

.gray {
  filter: grayscale(100%);
}
</style>
