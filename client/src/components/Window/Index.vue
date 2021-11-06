<template >
  <div>
    <nav class="navbar navbar-light" style="background-color: #fd923a">
      <a class="navbar-brand" href="" style="color: black">
        Supreme Car Rent
      </a>
      <form class="form-inline">
        <button v-on:click="logout" class="btn btn-warning">ออกจากระบบ</button>
      </form>
    </nav>
    <div class="center ">
      <h2>การจองรถจักรยานยนต์</h2>
      <h4 class="text-success">จํานวนจองทั้งหมด {{ windows.length }} คิว</h4>
      <div v-for="window in windows" v-bind:key="window.id">
        <div class="row">
          <div class="col-sm-12" >
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="card-title">รหัสการจอง : {{ window.id }}</h5>
                <p>ชื่อ-นามสกุล : {{ window.name }} - {{ window.lastname }}</p>
                <p>เบอร์โทร : {{ window.tel }}</p>
                <p>จำนวนคัน : {{ window.quantity }}</p>
                <p>วันที่จอง : {{ window.date }}</p>
                <button class="btn btn-primary btn-warning" v-on:click="navigateTo('/window/edit/' + window.id)">
                  แก้ไขข้อมูล
                </button>
                <button class="btn btn-primary btn-warning" v-on:click="deleteWindow(window)">ลบข้อมูล</button>
              </div>
            </div>
          </div>
        </div>
        <br>
      </div>
    </div>
  </div>
</template>
<script>
import WindowService from "@/services/WindowService";

export default {
  data() {
    return {
      windows: [],
    };
  },
  async created() {
    this.windows = (await WindowService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteWindow(window) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await WindowService.delete(window);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.windows = (await WindowService.index()).data;
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
</style>