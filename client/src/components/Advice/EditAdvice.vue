<template>
  <div>
    <div class="center bg-light">
      <h1>แก้ไขข้อมูลการจอง</h1>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="editAdvice">
                <p class="left">
                  ชื่อ:
                  <input
                    class="form-control"
                    type="text"
                    v-model="advice.name"
                  />
                </p>
                <p class="left">
                  นามสกุล:
                  <input
                    class="form-control"
                    type="text"
                    v-model="advice.lastname"
                  />
                </p>
                <p class="left">
                  เบอร์โทร:
                  <input
                    class="form-control"
                    type="text"
                    v-model="advice.tel"
                  />
                </p>
                <p class="left">
                  วันที่จอง:
                  <input
                    class="form-control"
                    type="date"
                    v-model="advice.date"
                  />
                </p>
                <p>
                  <button class="btn btn-primary btn-warning" type="submit">
                    แก้ไข
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AdviceService from "@/services/AdviceService";
export default {
  data() {
    return {
      advice: {
        name: "",
        lastname: "",
        tel: "",
        date: "",
      },
    };
  },
  methods: {
    async editAdvice() {
      try {
        await AdviceService.put(this.advice);
        this.$router.push({
          name: "MainAdmin",
        });
      } catch (err) {
        console.log(err);
      }
    },
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
.center {
  text-align: center;
  padding: 3% 20%;
}
.left {
  text-align: left;
}
</style>