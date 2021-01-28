<template>
  <div class="content-container" id="content-container">
    <div class="content-img__show"
         id="target"
         v-show="imageUrl">
    </div>
    <div class="content-img__upload" v-show="!imageUrl">
      <div class="content-desc">
        <div>
          <img src="@/assets/icon.png" alt="logo" height="100px" width="100px" />
        </div>
        <div class="content-desc__inner">
          <img src="@/assets/font_logo.png" alt="font_logo" height="50px" />
        </div>
        <!--        <div class="content-desc__inner">SwallowTail</div>-->
      </div>
      <el-upload
          action=""
          :show-file-list="false"
          :on-change="handleChange"
          :before-upload="beforeUpload"
          :auto-upload="false"
          drag>
        <i class="el-icon-upload" />
        <div class="el-upload__text">将jpg/png文件拖到此处，或<em>点击上传</em></div>
      </el-upload>
    </div>
  </div>
</template>

<script>
import handleImg from "./imgWater";

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
      localImageurl: this.imageUrl,
    }
  },
  methods: {
    handleMark(mark) {
      for (let i = 0; i < 5; i++) {
        mark += "     " + mark
      }
      return mark
    },
    perform() {
      handleImg(this.localImageurl, "target", this.handleMark(this.mark), this.fontSize, this.color, 1000, 800);
    },
    handleChange(file) {
      this.localImageurl = URL.createObjectURL(file.raw);
      this.$emit("toggle", this.localImageurl);
      this.perform();
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
      document.getElementById("content-container").classList.add("rounded-corners")
    },
    gray(val) {
      if (val) {
        document.getElementById("target").classList.add("gray");
      } else {
        document.getElementById("target").classList.remove("gray");
      }
    },
    color() {
      this.perform();
    },
    fontSize() {
      this.perform();
    },
    rotateVal() {
      let imgDom = document.getElementById("target").firstChild;
      imgDom.setAttribute("style", `transform:rotate(${ this.rotateVal }deg)`)
    }
  }
}
</script>

<style scoped>
.content-container {
  background: #f2f2f2;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.rounded-corners {
  border-radius: 0 8px 0 0;
}

.content-img__show {
  position: relative;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 800px;
}

.content-img__show img {
  max-height: 100%;
  max-width: 100%;
  display: block;
  margin: auto;
}

.gray {
  filter: grayscale(100%);
}

.content-img__upload {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content-desc {
  display: flex;
  flex-direction: row;
  margin-bottom: 35px;
}

.content-desc__inner {
  margin-left: 24px;
  display: flex;
  align-items: center;
}
</style>
