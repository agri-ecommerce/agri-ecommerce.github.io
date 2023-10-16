<template>
  <div class="branch-container">
    <div class="container-page">
      <h2 class="title-page">สาขา</h2>
    </div>
    <div class="content">
      <div class="branch">
        <div class="container-branch">
            <div class="content-branch">
              <div class="left">
                <div class="list" v-for="(item, index) in dataList" :key="index" @click="onSelect(item)" :class="{'active': dataSelect.branchId === item.branchId}">
                  <p>{{ item.branchName }}</p>
                  <span>{{ item.branchAddress }}</span>
                </div>
              </div>
              <div class="right">
                <h1>{{ dataSelect.branchName ? dataSelect.branchName : 'พันธ์ทวีสกลนคร' }}</h1>
                <div class="address add-grid">
                  <div class="item-form">
                    <label for="">เบอร์โทร</label>
                    <span>{{ dataSelect?.phone ? dataSelect.phone : '-' }}</span>
                  </div>
                  <div class="item-form">
                    <label for="">อีเมล</label>
                    <span>{{ dataSelect?.email ? dataSelect.email : '-' }}</span>
                  </div>
                  <div class="item-form">
                    <label for="">Facebook</label>
                    <span>{{ dataSelect?.facebook ? dataSelect.facebook : '-' }}</span>
                  </div>
                  <div class="item-form">
                    <label for="">Line</label>
                    <span>{{ dataSelect?.line ? dataSelect.line : '-' }}</span>
                  </div>
                </div>
                <div  class="address">
                  <div class="item-form">
                    <label for="">ที่อยู่</label>
                    <span>{{ dataSelect?.branchAddress ? dataSelect.branchAddress : '-' }}</span>
                  </div>
                </div>
                <div class="map">
                  <img src="../../assets/images/map.png" alt="">
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

.branch-container {
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  flex-direction: column;


  .container-page {
    display: flex;
    align-items: center;


    .title-page {
      font-family: 'Kanit-Medium';
      font-size: var(--32px);
      color: var(--vt-c-secondary);
    }
  }

  .content {
    display: flex;
    gap: var(--16px);
    justify-content: center;

    .branch {
      width: 100%;
      display: flex;
      flex-direction: column;

      .container-branch {
        background-color: var(--vt-c-white);
        border-radius: var(--8px);
        box-shadow: 0px var(--10px) var(--16px) var(--vt-c-black-opa);
        padding: var(--20px) var(--28px);;
        min-height: 55vh;

        .content-branch {
          display: grid;
          grid-template-columns: 2fr 4fr;
          height: 60vh;

          @media only screen and (max-width: 1500px) {
            height: 90vh;
          }
          
          ::-webkit-scrollbar{
              display: none;
            }

          .left {
            border-right: 1px solid var(--vt-c-black-opa);
            overflow-y: scroll;
            

            .list {
              border-bottom: 1px solid var(--vt-c-black-opa);
              padding: var(--10px);
              margin-right: var(--16px);
              cursor: pointer;

              p {
                font-size: var(--18px);
                font-family: 'Kanit-Medium';
                color: var(--vt-c-primary);
                ;
              }

              span {
                font-size: var(--14px);
                font-family: 'Kanit-Light';
              }

              &:hover {
                background-color: var(--vt-c-secondary);

                p {
                  color: var(--vt-c-white);
                }

                span {
                  color: var(--vt-c-white);
                }
              }

              &.active {
                background-color: var(--vt-c-secondary);

                p {
                  color: var(--vt-c-white);
                }

                span {
                  color: var(--vt-c-white);
                }
              }
            }

          }

          .right {
            padding: var(--10px);
            margin-left: var(--16px);

            h1 {
              font-size: var(--32px);
              font-family: 'Kanit-Medium';
              color: var(--vt-c-secondary);
            }

            .add-grid {
              grid-template-columns: 1fr 1fr;
            }

            .address {
              display: grid;
              // grid-template-columns: 1fr 1fr;
              margin: var(--20px) var(--64px);
              gap: var(--16px);

              .item-form {
                display: flex;
                flex-direction: column;

                label {
                  font-size: var(--14px);
                  font-family: 'Kanit-Light';
                }

                span {
                  font-size: var(--18px);
                  font-family: 'Kanit-Medium';
                }
              }
            }

            .map {
              display: flex;
              justify-content: center;
              img {
                height: calc((220/ var(--base) * 1rem));
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
import { useGetBranch } from "./BranchComposable";
export default defineComponent({
  name: "Branch",
  data() {
    return {
      paths: path as any,
      dataList: [] as any,
      dataSelect: {} as any
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      let resp: any = await useGetBranch();
      this.dataList = resp;
      this.onSelect(this.dataList[0])
    },
    onBasket() {
      this.$router.push({ name: this.paths.basket.name })
    },
    onSelect(data: any) {
      this.dataSelect = data;
      data.contact.forEach((element: any) => {
        if (element.contactName === "tel") {
          this.dataSelect.phone = element.tel
        }

      });
    }
  },
});
</script>