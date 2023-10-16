<template>
  <div class="for-rent-container">
    <div class="container-page">
      <h2 class="title-page">รายการให้เช่า</h2>
    </div>
    <div class="content">
      <div class="for-rent">
        <div class="container-cart">
            <div class="content-for-rent">
              <div class="cart" v-for="(item, index) in dataList" :key="index">
                <div class="img-cart">
                  <img src="../../assets/images/imageNotFound.jpg" alt="">
                </div>
                <div class="description">
                  <p>{{ item.rentName }}</p>
                  <span class="expanded"> {{ item.rentDiscription }}</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
h1,
p {
  margin: 0;
  font-weight: unset;
}

.for-rent-container {
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  flex-direction: column;


  .container-page {
    display: flex;
    align-items: center;


    .title-page {
      font-family: 'Kanit-Medium';
      font-size: 34px;
      color: var(--vt-c-secondary);
    }
  }

  .content {
    display: flex;
    gap: 20px;
    justify-content: center;

    .for-rent {
      width: 100%;
      display: flex;
      flex-direction: column;

      .container-cart {
        background-color: var(--vt-c-white);
        border-radius: 8px;
        box-shadow: 0px 10px 16px var(--vt-c-black-opa);
        padding: 20px 28px;
        min-height: 55vh;

        .content-for-rent {
          display: grid;
          gap: 16px;
          grid-template-columns: repeat(4, 1fr);
          flex: auto;
          justify-content: center;
          .cart {
            display: flex;
            position: relative;
            width: 15.625rem;
            padding: 32px 16px;
            height: 15.625rem;
            border-radius: 16px;
            border: 2px solid var(--vt-c-black-opa);
            background-color: var(--vt-c-white);
            flex-direction: column;
            align-items: center;
            cursor: pointer;

            .img-cart {
              img {
                width: 9.375rem;
              }
            }

            .description {
              width: 13.75rem;
              margin-top: 16px;

              p {
                font-family: 'Kanit-Medium';
              }

              span {
                font-family: 'Kanit-Light';
                display: -webkit-box;
                margin-top: 8px;
                min-height: 40px;
                font-size: 14px;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;

                &.expanded {
                  max-height: 1000px; /* Allow the span to expand to its full content */
                }
              }
            }

            &:hover {
              border: 2px solid var(--vt-c-secondary);
              box-shadow: 0px 10px 16px var(--vt-c-black-opa);
              height:max-content;
              z-index: 2; 
              position: relative;
              // grid-template-rows: auto;
              .description span.expanded {
                -webkit-line-clamp: inherit;
                z-index: 1; 
              }
            }
          }

        }
        

      }
    }
  }


}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { path } from "@/common/path";
import { useGetPayment } from "./RentComposable";
export default defineComponent({
  name: "ForRent",
  data() {
    return {
      paths: path as any,
      dataList: [] as any
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let resp: any = await useGetPayment();
      this.dataList = resp
    },
    onBasket() {
      this.$router.push({ name: this.paths.basket.name })
    }
  },
});
</script>