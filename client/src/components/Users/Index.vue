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
      <h2>ผู้ใช้งานทั้งหมด</h2>
      <h4 class="text-success">
        จํานวนผู้ใช้งาน {{ users.length }} คน
      </h4>
      <div v-for="user in users" v-bind:key="user.id">
        <div class="row">
          <div class="col-sm-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">รหัสผู้ใช้งาน : {{ user.id }}</h5>
                <p>ชื่อ-นามสกุล : {{ user.name }} - {{ user.lastname }}</p>
                <p>อีเมล : {{ user.email }}</p>
                <p>รหัสผ่าน : {{ user.password }}</p>
                <p>สถานะ : {{ user.status }}</p>
                <button
                  class="btn btn-primary btn-warning"
                  v-on:click="navigateTo('/user/edit/' + user.id)"
                >
                  แก้ไขข้อมูล
                </button>
                <button
                  class="btn btn-primary btn-warning"
                  v-on:click="deleteUser(user)"
                >
                  ลบข้อมูล
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: [],
    };
  },
  async created() {
    this.users = (await UsersService.index()).data;
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("Want to delete?");
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.users = (await UsersService.index()).data;
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