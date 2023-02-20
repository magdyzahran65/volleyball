<template>
  <div class="first-run-table">
    <h6
      class="text-decoration-underline text-white p-2 rounded-2 text-bg-danger mt-2"
    >
      الشوط الرابع
    </h6>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 m-0">
          <span class="float-start fs-5 w-100 mb-2 text-info-emphasis">
            {{ DateTimeTable.team1 }}</span
          >
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
              <tr v-for="(row, index) in table1" :key="index">
                <td>
                  <!-- <span></span> -->
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
                <td><input v-model="t1T2[0].num1" type="number" /></td>
                <td><input v-model="t1T2[0].num2" type="number" /></td>
                <td>T2</td>
                <td><input v-model="t1T2[1].num1" type="number" /></td>
                <td><input v-model="t1T2[1].num2" type="number" /></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- second table -->
        <div class="col-md-6">
          <span class="float-end fs-5 w-100 mb-2 text-info-emphasis">
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
              <tr v-for="(row, index) in table2" :key="index">
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
                <td><input v-model="t1T2Table2[0].num1" type="number" /></td>
                <td><input v-model="t1T2Table2[0].num2" type="number" /></td>
                <td>T2</td>
                <td><input v-model="t1T2Table2[1].num1" type="number" /></td>
                <td><input v-model="t1T2Table2[1].num2" type="number" /></td>
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
  name: "FourthRunInputTable",
  mounted() {
    // T1T2Run3
    if (sessionStorage.getItem("t1T2Run4")) {
      this.t1T2 = JSON.parse(sessionStorage.getItem("t1T2Run4"));
    } else {
      sessionStorage.setItem("t1T2Run4", JSON.stringify(this.t1T2));
    }
    // ===t1T2Table2
    if (sessionStorage.getItem("t1T2Run4Table2")) {
      this.t1T2Table2 = JSON.parse(sessionStorage.getItem("t1T2Run4Table2"));
    } else {
      sessionStorage.setItem("t1T2Run4Table2", JSON.stringify(this.t1T2Table2));
    }
    // =========================
    // run4Tables
    if (sessionStorage.getItem("run4TableOne")) {
      this.table1 = JSON.parse(sessionStorage.getItem("run4TableOne"));
    } else {
      sessionStorage.setItem("run4TableOne", JSON.stringify(this.table1));
    }
    if (sessionStorage.getItem("run4TableTwo")) {
      this.table2 = JSON.parse(sessionStorage.getItem("run4TableTwo"));
    } else {
      sessionStorage.setItem("run4TableTwo", JSON.stringify(this.table2));
    }

    this.DateTimeTable = JSON.parse(sessionStorage.getItem("DateTimeForm"));
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
    table1: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("run4TableOne", JSON.stringify(newValue));
      },
    },
    table2: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("run4TableTwo", JSON.stringify(newValue));
      },
    },
    // t1t2
    t1T2: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("t1T2Run4", JSON.stringify(newValue));
      },
    },
    t1T2Table2: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("t1T2Run4Table2", JSON.stringify(newValue));
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
      addRound: true,
      table1: [
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
      table2: [
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
      t1T2: [
        { num1: null, num2: null },
        { num1: null, num2: null },
      ],
      t1T2Table2: [
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
