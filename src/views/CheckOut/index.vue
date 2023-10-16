<template>
  <div class="container-checkOut">
    <FrameSummary titlePage="สรุปรายการ">
      <template v-slot:content-left>
        <div class="address">
          <p>ที่อยู่จัดส่ง</p>
          <div class="item-address">
            <span>7 ซอย ลาดพร้าว 34 แขวงสามเสนนอก เขตห้วยขวาง กรุงเทพมหานคร 10310</span>
            <span class="edit-address" @click="toggleModal">แก้ไข</span>
          </div>
        </div>
        <div class="product-list">
          <p>รายการสินค้า</p>
          <div class="item-product" v-for="(item, index) in 5" :key="index">
            <span>เมล็ดพันธุ์ถั่วฝักยาวล้านนาชวนอร่อย (จันกะผัก) ตราศรแดง</span>
            <span>2 ชิ้น</span>
          </div>

        </div>
      </template>
      <template v-slot:content-right-summary>
        <div class="summary-product">
          <h1>สรุป</h1>
          <div class="item-form">
            <span class="p"> จำนวนสินค้า</span>
            <span class="span">7</span>
          </div>
          <div class="item-form">
            <span class="p">ราคารวม</span>
            <span class="span">100</span>
          </div>
          <div class="item-form">
            <span class="p">ค่าขนส่ง</span>
            <span class="span">777</span>
          </div>
          <div class="item-form">
            <span class="p">ยอดรวมทั้งหมด</span>
            <span class="span">5,650.00</span>
          </div>
          <div class="comfirm">
            <button @click="onPayment">สั่งซื้อ</button>
          </div>
          <div class="shop-continue">
            <button @click="onBasket">กลับไปหน้าตะกร้า</button>
          </div>
        </div>
      </template>
    </FrameSummary>
    <AddressModal :showModal="openModal" @close="toggleModal"></AddressModal>
  </div>
  
</template>

<style scoped lang="scss">
.container-checkOut {
  .address {
    padding: 16px 64px 16px 16px;

    .item-address {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin: 12px 0px;
      }

      span {
        margin-left: 24px;
      }
    }

    .edit-address {
      cursor: pointer;
      color: var(--vt-c-primary);
      text-decoration: underline;
    }

  }

  .product-list {
    padding: 16px 64px 16px 16px;

    p {
      margin: 12px 0px;
    }

    .item-product {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 18px 0px;

      span {
        margin-left: 24px;
      }
    }


  }

  .summary-product {
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 40px;
      font-family: 'Kanit-Medium';
      margin: 0px;
      @media only screen and (max-width: 1900px) {
        font-size: 32px;
      }
    }

    .item-form {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .p {
        font-size: 24px;
        margin-top: 12px;
        margin-left: 24px;
        font-family: 'Kanit-Medium';
        color: var(--vt-c-secondary);
        @media only screen and (max-width: 1900px) {
          font-size: 22px;
        }
      }

      .span {
        font-size: 24px;
        font-family: 'Kanit-Medium';
        color: var(--vt-c-primary);
        margin-right: 24px;
        @media only screen and (max-width: 1900px) {
          font-size: 22px;
        }
      }
    }

    .comfirm {
      width: 100%;
      display: flex;
      margin-top: 32px;
      justify-content: center;

      button {
        font-size: 28px;
        color: var(--vt-c-white);
        border-radius: 16px;
        width: 50%;
        padding: 8px 0px;
        border: none;
        background-color: var(--vt-c-secondary);
        cursor: pointer;
        @media only screen and (max-width: 1900px) {
          font-size: 22px;
        }
      }

    }

    .shop-continue {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 24px;
      margin-bottom: 16px;

      button {
        background-color: unset;
        font-family: 'Kanit-Medium';
        border: none;
        font-size: 24px;
        color: var(--vt-c-secondary);
        text-decoration: underline;
        cursor: pointer;
        @media only screen and (max-width: 1900px) {
          font-size: 22px;
        }
      }
    }
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { path } from "@/common/path";
import FrameSummary from "@/components/layouts/FrameSummary.vue";
import AddressModal from "@/components/modals/AddressModal.vue";
export default defineComponent({
  name: "CheckOut",
  data() {
    return {
      paths: path as any,
      openModal: false as boolean
    };
  },
  components: {
    FrameSummary,
    AddressModal
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
    },
    onBasket() {
      this.$router.push({ name: this.paths.basket.name })
    },
    onPayment() {
      this.$router.push({ name: this.paths.payment.name })
    },
    toggleModal() {
      this.openModal = !this.openModal;
    },
  },
});
</script>