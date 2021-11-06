<template>
  <div>
    <h1>ข้อมูลการนัดให้คำปรึกษา</h1>
    <p>รหัสการนัด : {{ advice.id }}</p>
    <p>ชื่อ-นามสกุล : {{ advice.name }} - {{ advice.lastname }}</p>
    <p>เบอร์โทร : {{ advice.tel }}</p>
    <p>วันที่นัดหมาย : {{ advice.date }}</p>
  </div>
</template>
<script>
import AdviceService from "@/services/AdviceService";
export default {
  data() {
    return {
      advice: null,
    };
  },
  async created() {
    try {
      let adviceId = this.$route.params.adviceId;
      this.advice = (await AdviceService.show(adviceId)).data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
<style scoped>
</style>