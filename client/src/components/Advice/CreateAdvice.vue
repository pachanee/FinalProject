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
      <h1>บริการเช่ารถยนต์</h1>
      <div class="row">
        <div class="col-sm-12">
          <div class="card bg-c-yellow order-card">
            <div class="card-body">
              <form v-on:submit.prevent="createAdvice">
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
                  วันที่ต้องการนัด:
                  <input
                    class="form-control"
                    type="date"
                    v-model="advice.date"
                  />
                </p>
                <p>
                  <button class="btn btn-primary btn-warning" type="submit">
                    นัดหมาย
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
    async createAdvice() {
      try {
        await AdviceService.post(this.advice);
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