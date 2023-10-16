<template>
  <div class="payment-container">
    <div class="container-page">
      <h2 class="title-page">จ่ายเงิน</h2>
    </div>
      <div class="content">
      <div class="payment">
        <div class="container-cart">
          <slot name="content-left">
            <div class="payment-content">
              <img src="../../assets/images/line.png" alt="">
              <h1>{{ dataPayment.contact.contactPath }}</h1>
              <p>เลขที่ใบสั่งซื้อ: {{  dataPayment.saleOrderNumber }}</p>
              <p>เลขบัญชี: {{  dataPayment.accountNumber }}  {{  dataPayment.accountName }}</p>
              <span>{{  dataPayment.description }}}</span>
              <button @click="onHome">กลับ</button>
            </div>
          </slot>
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

.payment-container {
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

    .payment {
      width: 68%;
      display: flex;
      flex-direction: column;

      .container-cart {
        background-color: var(--vt-c-white);
        border-radius: 8px;
        box-shadow: 0px 10px 16px var(--vt-c-black-opa);
        padding: 20px 28px;
        min-height: 55vh;

        .payment-content {
          display: flex;
          flex-direction: column;
          align-items: center;

          img {
            width: 200px;
          }

          h1 {
            margin: 0 0 32px 0;
            font-size: 24px;
            color: var(--vt-c-primary);
          }

          p {
            font-size: 24px;
          }

          span {
            margin-top: 32px;
            width: 80%;
            color: var(--vt-c-secondary);
          }

          button {
            margin-top: 32px;
            border: none;
            background-color: unset;
            font-size: 20px;
            cursor: pointer;
            color: var(--vt-c-secondary);
            text-decoration: underline;
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
import { useGetPayment } from "./PaymentComposable";
export default defineComponent({
  name: "Payment",
  data() {
    return {
      paths: path as any,
      dataPayment: {} as any
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let saleOrderId: any = 1;
      let resp: any = await useGetPayment(saleOrderId);
      this.dataPayment = resp;
    },
    onHome() {
      this.$router.push({ name: this.paths.groupList.name })
    }
  },
});
</script>