<template>
  <div class="rounded-2">
    <table class="table score-table">
      <thead>
        <tr class="">
          <th scope="col">تايم</th>
          <th scope="col">تبديل</th>
          <th scope="col">فوز</th>
          <th scope="col">نقاط</th>
          <th scope="col">الأشواط</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[0].time"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[0].change"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[0].win"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[0].points"
            />
          </td>
          <td>الشوط 1</td>
        </tr>
        <tr>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[1].time"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[1].change"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[1].win"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[1].points"
            />
          </td>
          <td>الشوط 2</td>
        </tr>
        <tr>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[2].time"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[2].change"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[2].win"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[2].points"
            />
          </td>
          <td>الشوط 3</td>
        </tr>
        <tr>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[3].time"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[3].change"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[3].win"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[3].points"
            />
          </td>
          <td>الشوط 4</td>
        </tr>
        <tr>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[4].time"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[4].change"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[4].win"
            />
          </td>
          <td>
            <input
              class="input-score-table"
              type="text"
              v-model="rows[4].points"
            />
          </td>
          <td>الشوط 5</td>
        </tr>
        <tr>
          <td>{{ getTotal("time") }}</td>
          <td>{{ getTotal("change") }}</td>
          <td>{{ getTotal("win") }}</td>
          <td>{{ getTotal("points") }}</td>
          <td>المجموع</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ScoreTableComponent",
  updated() {
    this.updateTotalObj();
    // console.log(this.totalObj);
  },
  mounted() {
    if (sessionStorage.getItem("rows2")) {
      this.rows = JSON.parse(sessionStorage.getItem("rows2"));
    } else {
      sessionStorage.setItem("rows2", JSON.stringify(this.rows));
    }
  },
  data() {
    return {
      rows: [
        { time: "", change: "", win: "", points: "" },
        { time: "", change: "", win: "", points: "" },
        { time: "", change: "", win: "", points: "" },
        { time: "", change: "", win: "", points: "" },
        { time: "", change: "", win: "", points: "" },
      ],
      totalObj: {
        time: "",
        change: "",
        win: "",
        points: "",
      },
    };
  },
  watch: {
    rows: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("rows2", JSON.stringify(newValue));
      },
    },
    totalObj: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("totalObj2", JSON.stringify(newValue));
      },
    },
  },
  methods: {
    getTotal(column) {
      let total = 0;
      for (let i = 0; i < this.rows.length; i++) {
        const value = parseFloat(this.rows[i][column]);
        if (!isNaN(value)) {
          total += value;
        }
      }
      return total.toFixed(0);
    },
    updateTotalObj() {
      this.totalObj = {
        time: this.getTotal("time"),
        change: this.getTotal("change"),
        win: this.getTotal("win"),
        points: this.getTotal("points"),
      };
    },
  },
};
</script>
<style lang="scss">
.input-score-table {
  width: 40px;
  border-radius: 5px;
  border: 1px solid rgb(226, 187, 69);
  font-size: 0.7rem;
}
.score-table {
  margin-right: -5px;
}
</style>
