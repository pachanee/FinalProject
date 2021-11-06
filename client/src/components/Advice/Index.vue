<template>
  <div>
    <nav class="navbar navbar-light" style="background-color: #fd923a">
      <a class="navbar-brand" href="" style="color: black">
        Supreme Car Rent
      </a>
      <form class="form-inline">
        <button v-on:click="logout" class="btn btn-warning">ออกจากระบบ</button>
      </form>
    </nav>
    <div class="center">
      <h2>การนัดการจองรถทั้งหมด</h2>
      <h4 class="text-success">จํานวนการจอง {{ advices.length }} คิว</h4>
      <div v-for="advice in advices" v-bind:key="advice.id">
        <div class="row">
          <div class="col-sm-12">
            <div class="card bg-light">
              <div class="card-body">
                <h5 class="card-title">รหัสการจอง : {{ advice.id }}</h5>
                <p>ชื่อ-นามสกุล : {{ advice.name }} - {{ advice.lastname }}</p>
                <p>เบอร์โทร : {{ advice.tel }}</p>
                <p>วันที่จอง : {{ advice.date }}</p>
                <button class="btn btn-primary btn-warning" v-on:click="navigateTo('/advice/edit/' + advice.id)">
                  แก้ไขข้อมูล
                </button>
                <button class="btn btn-primary btn-warning" v-on:click="deleteAdvice(advice)">ลบข้อมูล</button>
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
import AdviceService from "@/services/AdviceService";

export default {
  data() {
    return {
      advices: [],
    };
  },
  async created() {
    this.advices = (await AdviceService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteAdvice(advice) {
      let result = confirm("ต้องการลบใช่ไหม ?");
      if (result) {
        try {
          await AdviceService.delete(advice);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.advices = (await AdviceService.index()).data;
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