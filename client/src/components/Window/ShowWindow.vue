<template>
  <div>
    <h1>ข้อมูลการนจองรถจักรยานยนต์</h1>
      <p>รหัสการจอง : {{ window.id }}</p>
      <p>ชื่อ-นามสกุล : {{ window.name }} - {{ window.lastname }}</p>
      <p>เบอร์โทร : {{ window.tel }}</p>
      <p>จำนวนคัน : {{ window.quantity }}</p>
      <p>วันที่จอง : {{ window.date }}</p>
  </div>
</template>
<script>
import WindowService from "@/services/WindowService";
export default {
  data() {
    return {
      window: null,
    };
  },
  async created() {
    try {
      let windowId = this.$route.params.windowId;
      this.window = (await WindowService.show(windowId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>