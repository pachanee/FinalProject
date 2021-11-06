<template>
  <div >
    <div class="center bg-light">
      <h2>แก้ไขข้อมูลการจองรถจักยานยนต์</h2>
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-body">
              <form v-on:submit.prevent="editWindow">
                <p class="left">
                  ชื่อ:
                  <input
                    class="form-control"
                    type="text"
                    v-model="window.name"
                  />
                </p>
                <p class="left">
                  นามสกุล:
                  <input
                    class="form-control"
                    type="text"
                    v-model="window.lastname"
                  />
                </p>
                <p class="left">
                  เบอร์โทร:
                  <input
                    class="form-control"
                    type="text"
                    v-model="window.tel"
                  />
                </p>
                <p class="left">
                  จำนวนคัน:
                  <input
                    class="form-control"
                    type="text"
                    v-model="window.quantity"
                  />
                </p>
                <p class="left">
                  วันที่จอง:
                  <input
                    class="form-control"
                    type="date"
                    v-model="window.date"
                  />
                </p>
                <p><button class="btn btn-primary btn-warning" type="submit">แก้ไข</button></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WindowService from "@/services/WindowService";
export default {
  data() {
    return {
      window: {
        name: "",
        lastname: "",
        tel: "",
        quantity: "",
        date: "",
      },
    };
  },
  methods: {
    async editWindow() {
      try {
        await WindowService.put(this.window);
        this.$router.push({
          name: "windows",
        });
      } catch (err) {
        console.log(err);
      }
    },
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
.center {
  text-align: center;
  padding: 3% 20%;
}
.left {
  text-align: left;
}
</style>