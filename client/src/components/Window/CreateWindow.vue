<template>
  <div class="bg-light">
    <div class="center">
      <h1>บริการจองรถจักรยานยนต์</h1>
      <div class="row">
        <div class="col-sm-12">
          <div class="card bg-c-yellow order-cardwww">
            <div class="card-body">
              <form v-on:submit.prevent="createWindow">
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
                <p>
                  <button class="btn btn-primary btn-warning" type="submit">
                    จองเลย
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
    async createWindow() {
      try {
        await WindowService.post(this.window);
        this.$router.push({
          name: "MainUser",
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
body{
    margin-top:20px;
    background:#FAFAFA;
}
.order-card {
    color: #fff;
}

.bg-c-blue {
    background: linear-gradient(45deg,#4099ff,#73b4ff);
}

.bg-c-green {
    background: linear-gradient(45deg,#2ed8b6,#59e0c5);
}

.bg-c-yellow {
    background: linear-gradient(45deg,#f5cd96,#ffcb80);
}

.bg-c-pink {
    background: linear-gradient(45deg,#FF5370,#ff869a);
}


.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.card .card-block {
    padding: 25px;
}

.order-card i {
    font-size: 26px;
}

.f-left {
    float: left;
}

.f-right {
    float: right;
}
</style>