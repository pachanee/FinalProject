<template>
  <div>
    <h1>ข้อมูลผู้ใช้งาน</h1>
    <p>รหัสผู้ใช้งาน : {{ user.id }}</p>
    <p>ชื่อ-นามสกุล : {{ user.name }} - {{ user.lastname }}</p>
    <p>อีเมล : {{ user.email }}</p>
    <p>รหัสผ่าน : {{ user.password }}</p>
    <p>สถานะ : {{ user.status }}</p>
  </div>
</template>
<script>
import UsersService from "@/services/UsersService";
export default {
  data() {
    return {
      user: null,
    };
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>