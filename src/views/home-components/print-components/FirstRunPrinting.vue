<template>
  <div class="">
    <div class="term-container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td colspan="13">الشوط الاول</td>
          </tr>
          <tr>
            <td style="border-right: 1px solid white" colspan="6">
              {{ DateTimeTable.team1 }}
            </td>
            <td
              style="
                border-right: 1px solid white;
                border-left: 1px solid white;
              "
              colspan="1"
            ></td>
            <td colspan="6">{{ DateTimeTable.team2 }}</td>
          </tr>
          <tr class="run-tr-thead">
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>-</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="table1"
            v-for="(row, index) in table1"
            :key="'row-' + index"
          >
            <td>
              <span class="span">{{ row.col1 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col2 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col3 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col4 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col5 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col6 }}</span>
            </td>
            <td>-</td>
            <td>
              <span class="span">{{ table2[index].col1 }}</span>
            </td>
            <td>
              <span class="span">{{ table2[index].col2 }}</span>
            </td>
            <td>
              <span class="span">{{ table2[index].col3 }}</span>
            </td>
            <td>
              <span class="span">{{ table2[index].col4 }}</span>
            </td>
            <td>
              <span class="span">{{ table2[index].col5 }}</span>
            </td>
            <td>
              <span class="span">{{ table2[index].col6 }}</span>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="bg-secondary text-white">T1 :</td>
            <td style="border-right: 1px solid white" colspan="2">
              {{ t1T2[0].num1 }}
            </td>
            <td colspan="2">{{ t1T2[0].num2 }}</td>
            <td colspan="1">-</td>
            <td colspan="2" class="bg-secondary text-white">T2 :</td>
            <td style="border-right: 1px solid white" colspan="2">
              {{ t1T2[1].num1 }}
            </td>
            <td colspan="2">{{ t1T2[1].num2 }}</td>
          </tr>
        </tbody>
      </table>

      <table class="table table-bordered">
        <thead>
          <tr>
            <td colspan="13">الشوط الثاني</td>
          </tr>
          <tr>
            <td style="border-right: 1px solid white" colspan="6">
              {{ DateTimeTable.team1 }}
            </td>
            <td
              style="
                border-right: 1px solid white;
                border-left: 1px solid white;
              "
              colspan="1"
            ></td>
            <td colspan="6">{{ DateTimeTable.team2 }}</td>
          </tr>
          <tr class="run-tr-thead">
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
            <th>-</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
            <th>6</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in run2table1" :key="'row-' + index">
            <td>
              <span class="span">{{ row.col1 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col2 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col3 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col4 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col5 }}</span>
            </td>
            <td>
              <span class="span">{{ row.col6 }}</span>
            </td>
            <td>-</td>
            <td>
              <span class="span">{{ run2table2[index].col1 }}</span>
            </td>
            <td>
              <span class="span">{{ run2table2[index].col2 }}</span>
            </td>
            <td>
              <span class="span">{{ run2table2[index].col3 }}</span>
            </td>
            <td>
              <span class="span">{{ run2table2[index].col4 }}</span>
            </td>
            <td>
              <span class="span">{{ run2table2[index].col5 }}</span>
            </td>
            <td>
              <span class="span">{{ run2table2[index].col6 }}</span>
            </td>
          </tr>
          <tr>
            <td colspan="2" class="bg-secondary text-white">T1 :</td>
            <td style="border-right: 1px solid white" colspan="2">
              {{ t1T2Table2[0].num1 }}
            </td>
            <td colspan="2">{{ t1T2Table2[0].num2 }}</td>
            <td colspan="1">-</td>
            <td colspan="2" class="bg-secondary text-white">T2 :</td>
            <td style="border-right: 1px solid white" colspan="2">
              {{ t1T2Table2[1].num1 }}
            </td>
            <td colspan="2">{{ t1T2Table2[1].num2 }}</td>
          </tr>
        </tbody>
      </table>

      <!-- ==== -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FirstRunPrinting",
  mounted() {
    let tds = document.querySelectorAll(".span");

    tds.forEach((td) => {
      td.addEventListener("click", () => {
        td.classList.toggle("ring");
      });
    });
  },
  created() {
    // الشوط 1
    this.table1 = JSON.parse(sessionStorage.getItem("runTableOne"));
    this.table2 = JSON.parse(sessionStorage.getItem("runTableTwo"));

    this.t1T2 = JSON.parse(sessionStorage.getItem("t1T2"));
    this.t1T2Table2 = JSON.parse(sessionStorage.getItem("t1T2Table2"));
    // ==========================================
    // الشوط 2
    this.run2table1 = JSON.parse(sessionStorage.getItem("run2table1"));
    this.run2table2 = JSON.parse(sessionStorage.getItem("run2table2"));

    this.t1T2 = JSON.parse(sessionStorage.getItem("t1T2"));
    this.t1T2Table2 = JSON.parse(sessionStorage.getItem("t1T2Table2"));
  },
  data() {
    return {
      elementRounded: [],
      table1: [],
      table2: [],
      t1T2: [],
      t1T2Table2: [],
      // الشوط الثاني
      run2table1: [],
      run2table2: [],
    };
  },
  props: {
    DateTimeTable: {
      type: Object,
    },
  },
};
</script>
<style scoped lang="scss">
.ring {
  color: black;
  padding: 2px;
  border-radius: 50%;
  border: 1px solid gray;
}
.term-container {
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  gap: 10px;
  margin: 0 auto;
  & > table {
    border: 2px solid gray;
    // width: 240px;
  }
}
.header-run1-run2-container {
  display: flex;
  flex-wrap: nowrap;
  margin: 0 auto;
  justify-content: space-between;
  // width: 100%;
  margin: 0 auto;
  gap: 3%;
  .run-1-header,
  .run-2-header {
    width: 50%;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    margin: 0 auto;
  }
}
.run-tr-thead {
  background-color: #d2d1d1;
  border: 1px px solid gray;
  & th {
    border: 1px solid gray;
  }
}
.team-run-header-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  flex-direction: row;
  gap: 3%;
  font-weight: 700;
  & > div {
    border: 2px solid gray;
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
  }
}
</style>
