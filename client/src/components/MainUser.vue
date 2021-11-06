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
      <h1>Welcome To !!</h1>
      <h1>Supreme Car Rent</h1>
      <div class="container" style="margin-top: 50px">
        <div class="row">
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">Audi Q8</div>
              <div class="card-text">
                Audi Q8 is a full-size luxury crossover SUV coupé made by Audi
                that was launched in 2018.
              </div>
              <div class="card-text">฿15,000 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/advice/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://www.pixel4k.com/wp-content/uploads/2018/10/2018-bmw-430i-gran-coupe-m-performance-parts_1539112046.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">BMW 430i M Sport 2021</div>
              <div class="card-text">
                BMW 430i M Sport offers several security features like
                Anti-Theft Alarm, Immobilizer, Central Locking, Power Door Locks
                and Anti Theft Device.
              </div>
              <div class="card-text">฿15,000 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/advice/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://www.primecarsrentalthailand.com/wp-content/uploads/2021/02/C300-e1614976840603.jpg.webp?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">Mercedes-Benz C 300e AMG Dynamic</div>
              <div class="card-text">
                Mercedes-Benz C300e AMG Dynamic, the “strongest” in today's
                class.
              </div>
              <div class="card-text">฿8,900 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/advice/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://www.motortrend.com/uploads/sites/5/2019/04/2020-Ford-Mustang-EcoBoost-High-Performance-23-package.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">Ford Mustang 2.3 Ecoboost 2020</div>
              <div class="card-text">
                Downsizing the engine with a 2.3-liter Ecoboost engine, but the
                result is a massive 318 horsepower.
              </div>
              <div class="card-text">฿22,500 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/advice/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://i.pinimg.com/564x/59/98/54/59985403ed86444b081e1d5b6e008fb3.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">Kawasaki Z900 900CC</div>
              <div class="card-text">
                has a streamlined shape It has high engine power.
              </div>
              <div class="card-text">฿2,500 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/window/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://www.9carthai.com/wp-content/uploads/2020/01/HONDA-REBEL-300.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">Honda Rebel 300CC</div>
              <div class="card-text">
                It is a car that has a comfortable driving style, long-distance
                driving and low speed. No front windshield Focus on raw and
                noisy
              </div>
              <div class="card-text">฿1,000 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/window/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://inwfile.com/s-do/tnfmvp.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">HONDA X-ADV 750 CC</div>
              <div class="card-text">
                It is an AUTOMATIC type of car, easy to drive, and sits quite comfortably. Both the driver and passenger
              </div>
              <div class="card-text">฿3,000 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/window/create')"
                role="button"
              >
                จองเลย
              </button>
            </div>
          </div>
           <div class="col-md-3">
            <div class="card-sl">
              <div class="card-image">
                <img
                  src="https://www.greatbiker.com/wp-content/uploads/2020/10/mt-09-2.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
              </div>
              <div class="card-heading">YAMAHA MT-09 850 CC</div>
              <div class="card-text">
                The beating heart of this animal is a lightweight 850cc, 3-cylinder engine that kicks out a wide band of raw 
                ,linear giving outstanding acceleration that gets your adrenaline flowing.
              </div>
              <div class="card-text">฿3,000 per Day</div>
              <button
                class="btn btn-primary btn-warning"
                v-on:click="navigateTo('/window/create')"
                role="button"
              >
                จองเลย
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
  },
};
</script>

<style>
.center {
  text-align: center;
  padding: 5%;
}
body {
  font-family: Varela Round;
  background: #f1f1f1;
}

a {
  text-decoration: none;
}

/* Card Styles */

.card-sl {
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card-image img {
  max-height: 100%;
  max-width: 100%;
  border-radius: 8px 8px 0px 0;
}

.card-action {
  position: relative;
  float: right;
  margin-top: -25px;
  margin-right: 20px;
  z-index: 2;
  color: #e26d5c;
  background: #fff;
  border-radius: 100%;
  padding: 15px;
  font-size: 15px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.19);
}

.card-action:hover {
  color: #fff;
  background: #e26d5c;
  -webkit-animation: pulse 1.5s infinite;
}

.card-heading {
  font-size: 18px;
  font-weight: bold;
  background: #fff;
  padding: 10px 15px;
}

.card-text {
  padding: 10px 15px;
  background: #fff;
  font-size: 14px;
  color: #636262;
}

.card-button {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  background-color: #1f487e;
  color: #fff;
  border-radius: 0 0 8px 8px;
}

.card-button:hover {
  text-decoration: none;
  background-color: #1d3461;
  color: #fff;
}

@-webkit-keyframes pulse {
  0% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  70% {
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -webkit-transform: scale(1);
    transform: scale(1);
    box-shadow: 0 0 0 50px rgba(90, 153, 212, 0);
  }

  100% {
    -moz-transform: scale(0.9);
    -ms-transform: scale(0.9);
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
    box-shadow: 0 0 0 0 rgba(90, 153, 212, 0);
  }
}
</style>