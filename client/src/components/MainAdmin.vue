<template>
  <div class="bg-light">
    <nav class="navbar navbar-light" style="background-color: #fd923a">
      <a class="navbar-brand" href="" style="color: black">
        Supreme Car Rent
      </a>
      <form class="form-inline">
        <button v-on:click="logout" class="btn btn-warning">ออกจากระบบ</button>
      </form>
    </nav>
    <div class="center">
      <h1>ยินดีต้อนรับเข้าสู่ระบบ!!</h1>
      <br />
      <div class="row">
        <div class="col-sm-4 py-2">
          <div class="card h-100 border-warning">
            <div class="card-body">
              <h5 class="card-title">รายการจองรถยนต์ทั้งหมด</h5>
              <p class="card-text">All car bookings.</p>
              <button
                class="btn btn-outline-warning"
                v-on:click="navigateTo('/windows')"
              >
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-4 py-2">
          <div class="card h-100 border-warning">
            <div class="card-body">
              <h5 class="card-title">รายการจองรถจักรยานยนต์ทั้งหมด</h5>
              <p class="card-text">All motorbike bookings .</p>
              <button
                class="btn btn-outline-warning"
                v-on:click="navigateTo('/advices')"
              >
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </div>
        <div class="col-sm-4 py-2">
          <div class="card h-100 border-warning">
            <div class="card-body">
              <h5 class="card-title">ผู้ใช้งานทั้งหมด</h5>
              <p class="card-text">Total users in this system.</p>
              <button
                class="btn btn-outline-warning"
                v-on:click="navigateTo('/users')"
              >
                ดูทั้งหมด
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
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
  padding: 5%;
}
</style>