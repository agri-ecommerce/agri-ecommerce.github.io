<template>
  <div class="container-item-product">
    <div class="content-img">
      <img src="../../assets/images/imageNotFound.jpg" alt="">
    </div>
    <div class="product-name">
      <span>{{ data.productName }}</span>
    </div>
    <div class="product-price">
      <p>{{ formPrice(data.productPrice) }}</p><span>บาท</span>
    </div>
    <div class="product-qty">
      <div class="product-group-btn">
        <button class="btn-minus" @click="calculate('minus', data)">
          <IconMinus color="#ffffff" size="16px" />
        </button>
        <div>
          <input type="number" class="input-qty" placeholder="0" v-model="data.productQty"
            @input="inputNumber(data, 'productQty')" @blur="inputFormatNumber(data, 'productQty')" />
        </div>
        <button class="btn-plus" @click="calculate('plus', data)">
          <IconPlus color="#ffffff" size="16px" />
        </button>
      </div>
    </div>
    <div class="product-submit">
      <button @click="onSubmit(data)">เพิ่มลงตะกร้า</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container-item-product {
  display: flex;
  width: 270px;
  height: 350px;
  border-radius: 16px;
  background-color: var(--vt-c-white);
  box-shadow: 0px 10px 16px var(--vt-c-black-opa);
  flex-direction: column;

  @media only screen and (max-width: 1900px) {
    width: 14vw;
    height: 260px;
  }
  @media only screen and (max-width: 1300px) {
    width: 13.5vw;
    height: 240px;
  }

  p {
    margin: 0;
  }

  .content-img {
    display: flex;
    padding: 16px 16px 0px 16px;
    justify-content: center;

    img {
      height: 140px;

      @media only screen and (max-width: 1900px) {
        height: 80px;
      }
      @media only screen and (max-width: 1300px) {
        height: 70px;
      }
    }
  }

  .product-name {
    padding: 6px 16px;


    span {
      font-size: 12px;
      font-family: 'Kanit-Light';
      display: -webkit-box;
      // max-width: 100%;
      min-height: 40px;
      margin: 0 auto;
      -webkit-line-clamp: 2;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      overflow: hidden;
      text-overflow: ellipsis;

      @media only screen and (max-width: 1300px) {
        font-size: 10px;
        min-height: 20px;
      }

    }
  }

  .product-price {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 16px;
    justify-content: flex-end;

    p {
      font-size: 22px;
      font-family: 'Kanit-Medium';
      margin-right: 8px;
      color: var(--vt-c-primary);

      @media only screen and (max-width: 1900px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 1300px) {
        font-size: 16px;
      }
    }
  }

  .product-qty {
    // margin-top: 10px;
    padding: 0px 32px;

    .product-group-btn {
      display: flex;
      justify-content: right;
      align-items: center;
      position: relative;

      .btn-minus {
        background-color: var(--vt-c-primary);
        color: #ffffff;
        position: absolute;
        left: 0;
      }

      .btn-plus {
        background-color: var(--vt-c-primary);
        color: #ffffff;
        position: absolute;
        right: 0;
      }

      .input-qty {
        height: 32px;
        width: 100%;
        border-radius: 12px;
        font-size: 20px;
        border: 1px solid #adadad;
        background-color: #ffffff;
        color: var(--vt-c-secondary);
        text-align: center;
        outline: none;
        box-sizing: border-box;
        padding-left: 16px;
        font-family: 'Kanit-Regular';

        @media only screen and (max-width: 1900px) {
          height: 28px;
          font-size: 18px;
        }
        @media only screen and (max-width: 1300px) {
          height: 22px;
          font-size: 16px;
        }
      }

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 2px;
        font-size: 14px;
        border: none;
        outline: 0;
        cursor: pointer;
        font-family: 'ThaiBevSansNew-Regular';
        height: 32px;
        width: 32px;
        border-radius: 12px;

        @media only screen and (max-width: 1900px) {
          height: 28px;
          font-size: 12px;
          border-radius: 10px;
        }

        @media only screen and (max-width: 1300px) {
          height: 24px;
          font-size: 10px;
          border-radius: 10px;
        }
      }
    }
  }

  .product-submit {
    margin-top: 16px;
    padding: 0px 32px;

    button {
      cursor: pointer;
      border-radius: 8px;
      border: none;
      width: 100%;
      background-color: var(--vt-c-secondary);
      color: var(--vt-c-white);
      height: 32px;
      font-size: 14px;
      font-family: 'Kanit-Regular';

      @media only screen and (max-width: 1900px) {
        height: 28px;
        font-size: 12px;
      }
      @media only screen and (max-width: 1300px) {
        height: 24px;
        font-size: 10px;
      }

      &:hover {
        background-color: var(--vt-c-primary);
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Search from '@/components/forms/Search.vue';
import Menu from "./Menu.vue";
import IconMinus from "@/components/icons/IconMinus.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import { useFormatPrice, useInputNumber } from "@/utils/functions"
export default defineComponent({
  name: "ItemProduct",
  props: {
    data: {
      type: Object,
      default: () => { },
    },
  },
  data() {
    return {};
  },
  components: {
    Search,
    Menu,
    IconMinus,
    IconPlus
  },
  methods: {
    formPrice(num: number) {
      return useFormatPrice(num, 2);
    },
    calculate(action: string, val: any) {
      if (action === 'plus' && val.productQty < 999) {
        val.productQty++;
      } else if (action === 'minus' && val.productQty > 0) {
        val.productQty--;
        if (val.productQty <= 0) {
          val.productQty = 0;
        }
      } else if (action === '' && val.productQty >= 0 && val.productQty <= 999) {
        if (val.productQty <= 0) {
          val.productQty = 0;
        } else if (val.productQty > 999) {
          val.productQty = 999;
        }
      }
    },
    inputNumber(obj: any, field: string) {
      obj[field] = useInputNumber(obj[field]) || 0;
      if (parseInt(obj[field]) > 999) {
        obj[field] = 999;
      }
    },
    inputFormatNumber(obj: any, field: string) {
      obj[field] = useInputNumber(obj[field]) || 0;
      this.calculate('', obj);
    },
    onSubmit(data: any) {
      console.log("data", data);
      this.data.productQty = 0;
    }
  },
});
</script>
