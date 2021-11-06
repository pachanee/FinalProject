<template>
  <div class="bg-light">
    <div class="center">
      <h1>สมัครสมาชิก</h1>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="createUser">
                <p class="left">
                  ชื่อ:
                  <input class="form-control" type="text" v-model="user.name" />
                </p>
                <p class="left">
                  นามสกุล:
                  <input
                    class="form-control"
                    type="text"
                    v-model="user.lastname"
                  />
                </p>
                <p class="left">
                  อีเมล:
                  <input
                    class="form-control"
                    type="text"
                    v-model="user.email"
                  />
                </p>
                <p class="left">
                  รหัสผ่าน:
                  <input
                    class="form-control"
                    type="text"
                    v-model="user.password"
                  />
                </p>
                <p>
                  <button class="btn btn-primary btn-warning" type="submit">
                    สร้างผู้ใช้งาน
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      user: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        status: "admin",
      },
    };
  },
  methods: {
    async createUser() {
      try {
        await UsersService.post(this.user);
        this.$router.push({
          name: "login",
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
<style scoped>
.center {
  text-align: center;
  padding: 3% 20%;
}
.left {
  text-align: left;
}

</style>