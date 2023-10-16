<template>
  <modal name="modal-animation">
    <div class="modal" v-show="showModal">
      <transition name="modal-animation-inner">
        <div class="modal-inner" v-show="showModal">
          <div class="icon-close" @click="closeModal">x</div>
          <div class="modal-content">
            <h1 class="modal-title">เข้าสู่ระบบ</h1>
            <div class="content-container">
              <div class="input-label">
                <label for="">เบอร์โทรศัพท์ผู้ใช้งาน</label>
                <input type="text" placeholder="เบอร์โทรศัพท์ผู้ใช้งาน" v-model="phoneNumber" />
              </div>
              <div class="input-label">
                <label for="">รหัสผ่าน</label>
                <input type="text" placeholder="รหัสผ่าน" v-model="password" />
              </div>
            </div>
          </div>
          <div class="footer">
            <button @click="closeModal" class="btn-cancel">ยกเลิก</button>
            <button class="btn-confirm" @click="signIn">ตกลง</button>
          </div>
        </div>
      </transition>
    </div>
  </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserService from "../../services/UserService";

export default defineComponent({
  name: "SignInModal",
  props: ["showModal"],
  data() {
    return {
      phoneNumber: "",
      password: "",
    };
  },
  methods: {
    closeModal: function () {
      this.$emit("close");
    },
    signIn: async function () {
      const resp = await UserService.signIn(this.phoneNumber, this.password);
      this.closeModal();
    },
    created: function () { },
  },
});
</script>

<style scoped lang="scss">
button {
  font-family: "Kanit-Regular";
  cursor: pointer;
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(145, 145, 145, 0.7);
  z-index: 1000;

  ::placeholder {
    color: var(--vt-c-black-opa);
    opacity: 1;
    /* Firefox */
  }

  .modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: white;
    border-radius: 24px;

    .modal-content {
      padding: 16px 16px;

      .modal-title {
        display: flex;
        justify-content: center;
        color: var(--vt-c-secondary);
        font-size: 28px;
      }

      .content-container {
        padding: 0 24px;

        .input-label {
          margin-top: 1.5rem;
        }

        label {
          font-size: 20px;
          color: var(--vt-c-primary);
        }

        input {
          margin-top: 0.5rem;
          width: 90%;
          height: 3rem;
          font-size: 1.5rem;
          padding: 0 16px;
          border-radius: 8px;
          border: 1px solid var(--vt-c-black-opa);

        }
      }
    }

    .footer {
      display: flex;
      justify-content: center;
      margin: 32px 24px;

      .btn-cancel {
        font-size: 1.5rem;
        width: 8rem;
        height: 3rem;
        text-align: center;
        background-color: white;
        border: 2px var(--vt-c-secondary) solid;
        border-radius: 12px;
        color: var(--vt-c-secondary);
      }

      .btn-confirm {
        margin-left: 1rem;
        width: 8rem;
        height: 3rem;
        font-size: 1.5rem;
        text-align: center;
        background-color: var(--vt-c-secondary);
        border: 2px var(--vt-c-secondary) solid;
        border-radius: 12px;
        color: white;
      }
    }

    .icon-close {
      position: absolute;
      top: 16px;
      right: 16px;
      cursor: pointer;
      color: black;
      border: 1px black;
      font-size: 2rem;
      font-weight: bold;
    }
  }
}
</style>