<template>
  <div id="slider">
    <div class="slider">
      <ul class="slides" :style="{ left: -width * current + 'px' }">
        <li v-for="(item, index) in bannerList" :key="index">
          <img :src="item?.bannerImage.toString()" alt="" :key="index">
        </li>
      </ul>
      <!-- <ul class="bullets">
        <li v-for="(slide, i) in bannerList" @click="selectSlide(i)" v-html="i == current ? '&#9679;' : '&omicron;'"></li>
      </ul> -->
      <!-- <a class="prev" href="#" @click.prevent="prevSlide">&#x25C0;</a>
      <a class="next" href="#" @click.prevent="nextSlide">&#x25B6;</a> -->
    </div>
    <div class="tab-banner">
      <div class="tab" v-for="(item, index) in bannerList" :key="index" :class="{ 'tab-active': current === index }"
        @click="selectSlide(index)">
        {{ item?.bannerName }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#slider {
  width: 100%;
}

.slider {
  // margin: 0 auto;
  padding: 0;
  width: 1400px;
  height: 380px;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width: 1900px) {
    width: 1050px;
    height: 300px;
  }

  @media only screen and (max-width: 1300px) {
    width: 760px;
    height: 200px;
  }

  ul.slides {
    width: 100%;
    height: 380px;
    margin: 0;
    padding: 0;
    display: table;
    position: absolute;
    top: 0;
    transition: left 1400ms;

    @media only screen and (max-width: 1900px) {
      height: 300px;
    }

    @media only screen and (max-width: 1300px) {
      height: 760;
    }

    li {
      list-style-type: none;
      display: table-cell;

      img {
        width: 1400px;

        @media only screen and (max-width: 1900px) {
          width: 1050px;
        }

        @media only screen and (max-width: 1300px) {
          width: 760;
        }
      }
    }
  }

  ul.bullets {
    width: inherit;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0 0 10px 0;
    text-align: center;
    z-index: 1;

    li {
      list-style-type: none;
      display: inline;
      color: #fff;
      cursor: pointer;
      padding: 0 5px;
      font-size: 20px;
      font-family: sans-serif;
    }
  }

  // .prev,
  // .next {
  //   text-decoration: none;
  //   color: #fff;
  //   position: absolute;
  //   z-index: 1;
  //   font-size: 42px;
  //   top: 43%;
  //   text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  // }

  // .prev {
  //   left: 20px;
  // }

  // .next {
  //   right: 20px;
  // }
}

.tab-banner {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border-bottom: 3px solid var(--vt-c-secondary);

  .tab {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    font-size: 28px;
    font-family: "Kanit-Medium";
    align-items: center;
    border-right: 1px solid var(--vt-c-black-opa);
    border-left: 1px solid var(--vt-c-black-opa);
    cursor: pointer;

    @media only screen and (max-width: 1900px) {
      font-size: 18px;
      height: 50px;
    }

    @media only screen and (max-width: 1300px) {
      font-size: 14px;
      height: 40px;
    }
  }

  .tab-active {
    background-color: var(--vt-c-secondary);
    color: var(--vt-c-white);
    // border-radius: 16px 16px 0px 0px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Banner",
  data() {
    return {
      slides: [
        '@/assets/images/image0.jpg',
        '@/assets/images/image1.jpg',
        '@/assets/images/image2.jpg',
      ] as any,
      bannerList: [
        {
          bannerId: 0,
          bannerImage: "https://www.mitrpholmodernfarm.com/public/images/uploads/87d2c0e7_2f24c9f9c72704fa533a10e84a0e0c0c-1250x550.jpg",
          bannerName: "สินค้ามาใหม่"
        },
        {
          bannerId: 1,
          bannerImage: "https://www.mitrpholmodernfarm.com/public/images/uploads/87d2c0e7_2f24c9f9c72704fa533a10e84a0e0c0c-1250x550.jpg",
          bannerName: "สินค้าขายดี"
        },
        {
          bannerId: 2,
          bannerImage: "https://www.mitrpholmodernfarm.com/public/images/uploads/87d2c0e7_2f24c9f9c72704fa533a10e84a0e0c0c-1250x550.jpg",
          bannerName: "สินค้าตามฤดูกาล"
        },
        {
          bannerId: 3,
          bannerImage: "https://www.mitrpholmodernfarm.com/public/images/uploads/87d2c0e7_2f24c9f9c72704fa533a10e84a0e0c0c-1250x550.jpg",
          bannerName: "สินค้าโปรโมชัน"
        },
        {
          bannerId: 4,
          bannerImage: "https://www.mitrpholmodernfarm.com/public/images/uploads/87d2c0e7_2f24c9f9c72704fa533a10e84a0e0c0c-1250x550.jpg",
          bannerName: "สินค้าน่าสนใจ"
        },
        {
          bannerId: 5,
          bannerImage: "https://www.mitrpholmodernfarm.com/public/images/uploads/87d2c0e7_2f24c9f9c72704fa533a10e84a0e0c0c-1250x550.jpg",
          bannerName: "สินค้าทั่วไป"
        }
      ] as any,
      current: 0 as any,
      width: 1400 as any,
      timer: 0 as any,
    };
  },
  created: function () {
    this.play();
    this.onResolution();
  },
  methods: {
    nextSlide: function () {
      this.current++;
      if (this.current >= this.bannerList.length)
        this.current = 0;
      this.resetPlay();
    },
    prevSlide: function () {
      this.current--;
      if (this.current < 0)
        this.current = this.bannerList.length - 1;
      this.resetPlay();
    },
    selectSlide: function (i: any) {
      this.current = i;
      this.resetPlay();
    },
    resetPlay: function () {
      clearInterval(this.timer);
      this.play();
    },
    play: function () {
      let app = this;
      this.timer = setInterval(function () {
        app.nextSlide();
      }, 5000);
    },
    onResolution() {
      let resolution = window.innerWidth;
      if (resolution < 1900) {
        this.width = 1050;
      } else if (resolution < 1300) {
        this.width = 760;
      }
    }
  },
});
</script>
