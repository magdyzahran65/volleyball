<template>
  <div class="first-run-table">
    <h6
      class="text-decoration-underline text-white mt-2 text-bg-secondary p-2 rounded-3"
    >
      الشوط الثاني
    </h6>
    <!-- <div class="m-2 text-bg-warning text-info-emphasis warning-msg">
      ضغطة مطولة لإضافة دائرة في نموزج الطباعة
    </div> -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 m-0">
          <span class="float-start fs-5 w-100 mb-2 text-info-emphasis">
            {{ DateTimeTable.team1 }}
          </span>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in run2table1" :key="index">
                <td>
                  <span></span>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col1"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col3"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col4"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col5"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col6"
                  />
                </td>
              </tr>
              <tr>
                <td>T1</td>
                <td><input v-model="t1T2Run2[0].num1" type="number" /></td>
                <td><input v-model="t1T2Run2[0].num2" type="number" /></td>
                <td>T2</td>
                <td><input v-model="t1T2Run2[1].num1" type="number" /></td>
                <td><input v-model="t1T2Run2[1].num2" type="number" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- second table -->
        <div class="col-md-6">
          <span class="float-start fs-5 w-100 mb-2 text-info-emphasis">
            {{ DateTimeTable.team2 }}
          </span>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, index) in run2table2" :key="index">
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col1"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col2"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col3"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col4"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col5"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    class="form-control"
                    v-model="row.col6"
                  />
                </td>
              </tr>
              <tr>
                <td>T1</td>
                <td>
                  <input v-model="t1T2Run2Table2[0].num1" type="number" />
                </td>
                <td>
                  <input v-model="t1T2Run2Table2[0].num2" type="number" />
                </td>
                <td>T2</td>
                <td>
                  <input v-model="t1T2Run2Table2[1].num1" type="number" />
                </td>
                <td>
                  <input v-model="t1T2Run2Table2[1].num2" type="number" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecondRunInputTable",
  mounted() {
    // T1T2
    if (sessionStorage.getItem("t1T2Run2")) {
      this.t1T2Run2 = JSON.parse(sessionStorage.getItem("t1T2Run2"));
    } else {
      sessionStorage.setItem("t1T2Run2", JSON.stringify(this.t1T2Run2));
    }
    // ===t1T2Table2
    if (sessionStorage.getItem("t1T2Run2Table2")) {
      this.t1T2Run2Table2 = JSON.parse(
        sessionStorage.getItem("t1T2Run2Table2")
      );
    } else {
      sessionStorage.setItem(
        "t1T2Run2Table2",
        JSON.stringify(this.t1T2Run2Table2)
      );
    }
    this.DateTimeTable = JSON.parse(sessionStorage.getItem("DateTimeForm"));
    // =========================
    if (sessionStorage.getItem("run2table1")) {
      this.run2table1 = JSON.parse(sessionStorage.getItem("run2table1"));
    } else {
      sessionStorage.setItem("run2table1", JSON.stringify(this.run2table1));
    }
    if (sessionStorage.getItem("run2table2")) {
      this.run2table2 = JSON.parse(sessionStorage.getItem("run2table2"));
    } else {
      sessionStorage.setItem("run2table2", JSON.stringify(this.run2table2));
    }
    // method to toggle class
    let inputList = document.querySelectorAll("table input");
    inputList.forEach((e) => {
      e.addEventListener(
        "dblclick",
        function () {
          e.classList.toggle("bg-warning");
          e.classList.toggle("text-white");
        },
        { passive: true }
      );
    });
    // for mobile dbClick  devices only ===========
    // inputList.forEach((e) => {
    //   let clicks = 0;
    //   e.addEventListener("touchend", function () {
    //     clicks++;
    //     if (clicks === 1) {
    //       setTimeout(function () {
    //         if (clicks === 1) {
    //           e.classList.toggle("bg-warning");
    //         }
    //         clicks = 0;
    //       }, 300);
    //     } else {
    //       clicks = 0;
    //     }
    //   });
    // });

    // for press on hold
    inputList.forEach((e) => {
      let timer;
      e.addEventListener(
        "touchstart",
        function () {
          timer = setTimeout(function () {
            e.classList.toggle("bg-warning");
          }, 1000); // set the time in milliseconds for a long press
        },
        { passive: true }
      );
      e.addEventListener(
        "touchend",
        function () {
          clearTimeout(timer);
        },
        { passive: true }
      );
    });
  },
  watch: {
    // Watch for changes in the DateTimeForm object
    run2table1: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("run2table1", JSON.stringify(newValue));
      },
    },
    run2table2: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("run2table2", JSON.stringify(newValue));
      },
    },
    // t1t2
    t1T2Run2: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("t1T2Run2", JSON.stringify(newValue));
      },
    },
    t1T2Run2Table2: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("t1T2Run2Table2", JSON.stringify(newValue));
      },
    },
  },
  methods: {
    toggleAddRound() {
      this.addRound = !this.addRound;
    },
  },

  data() {
    return {
      run2table1: [
        {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
        },
        {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
        },
      ],
      run2table2: [
        {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
        },
        {
          col1: null,
          col2: null,
          col3: null,
          col4: null,
          col5: null,
          col6: null,
        },
      ],
      addRound: true,
      t1T2Run2: [
        { num1: null, num2: null },
        { num1: null, num2: null },
      ],
      t1T2Run2Table2: [
        { num1: null, num2: null },
        { num1: null, num2: null },
      ],
      DateTimeTable: {},
    };
  },
};
</script>
<style lang="scss" scoped>
th {
  color: rgb(156, 156, 156);
}
.first-run-table {
  background-color: whitesmoke;
  width: 94%;
  margin: 10px auto;
  padding: 1%;
  border-radius: 20px;
  table {
    padding: 0;
  }
}
input {
  width: 100%;
  text-align: center;
  font-size: 13pt;
  padding: 1px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.warning-msg {
  padding: 5px;
  border-radius: 10px;
  font-size: 9pt;
  text-align: center;
  text-decoration: underline;
}
</style>
