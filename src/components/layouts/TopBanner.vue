<template>
  <div class="container-top-banner">
    <div class="top-banner">
      <img src="../../assets/images/logotop.png" alt="">
      <img src="../../assets/images/top.png" alt="">
      <div class="signin">
        <div class="profile" @click="toggleModal">เข้าสู่ระบบ</div>
        <div class="register" @click="toggleModal">ลงทะเบียน</div>
      </div>
    </div>
  </div>
  <SignInModal :showModal="openModal" @close="toggleModal"> </SignInModal>
  <RegisterModal :showModal="openModal" @close="toggleModal"> </RegisterModal>
</template>

<style scoped lang="scss">
.container-top-banner {
  display: flex;
  width: 100%;

  .top-banner {
    display: grid;
    margin: 0 100px;
    grid-template-columns: 2fr 3fr 1fr;
    width: 100%;
    height: 13rem;
    align-items: center;

    // @media only screen and (max-width: 1300px) {
    //   height: 200px;
    // }


    img {
      height: 13rem;
    }

    .signin {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 16px;

      .register {
        font-size: 20px;
        cursor: pointer;
        text-decoration: underline;
      }

      .profile {
        cursor: pointer;
        width: 40%;
        // margin-left: 32px;
        display: flex;
        height: 42px;
        background-color: var(--vt-c-white);
        border-radius: 50px;
        border: 2px solid var(--vt-c-secondary);
        font-size: 24px;
        padding: 2px 16px;
        align-items: center;
        color: var(--vt-c-secondary);
        justify-content: center;

        @media only screen and (max-width: 1900px) {
          font-size: 14px;
          border-radius: 40px;
          height: 28px;
          // margin-left: 28px;
        }

        @media only screen and (max-width: 1300px) {
          font-size: 12px;
          height: 22px;
          width: 80%;
          border-radius: 32px;
          // margin-left: 20px;
        }
      }
    }


  }

}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import SignInModal from "@/components/modals/SignInModal.vue";
import RegisterModal from "@/components/modals/RegisterModal.vue";
// import mock from './mock.json'
export default defineComponent({
  name: "TopBanner",
  data() {
    return {
      openModal: false as boolean
    };
  },
  components: {
    SignInModal,
    RegisterModal
  },
  methods: {
    toggleModal: function () {
      this.openModal = !this.openModal;
    },
  }
});
</script>
