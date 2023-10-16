<template>
  <div class="container-search">
    <label>
      <input type="text" placeholder="ค้นหา">
    </label>
  </div>
</template>

<style scoped lang="scss">
.container-search {
  input {
    height: 40px;
    width: 78%;
    border-radius: 50px;
    border: none;
    font-size: 20px;
    padding-left: 24px;
    padding-right: 32px;
    // @media only screen and (max-width: 1900px) {
    //   // width: 100%;
    //   height: 32px;
    //   font-size: 20px;
    // }
    @media only screen and (max-width: 1300px) {
      // width: 14vw;
      height: 32px;
      font-size: 20px;
    }
  }

  label {
    position: relative;
  }

  label:before {
    content: "";
    position: absolute;
    right: 16px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url("../icons/search.svg") center / contain no-repeat;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Search",
  data() {
    return {};
  },
  components: {
  },
});
</script>
