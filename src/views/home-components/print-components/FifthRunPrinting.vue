<template>
  <div class="">
    <div class="term-container">
      <table class="table table-bordered">
        <thead>
          <tr>
            <td colspan="13">الشوط الخامس</td>
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
          <tr v-for="(row, index) in table1" :key="'row-' + index">
            <td>{{ row.col1 }}</td>
            <td>{{ row.col2 }}</td>
            <td>{{ row.col3 }}</td>
            <td>{{ row.col4 }}</td>
            <td>{{ row.col5 }}</td>
            <td>{{ row.col6 }}</td>
            <td>-</td>
            <td>{{ table2[index].col1 }}</td>
            <td>{{ table2[index].col2 }}</td>
            <td>{{ table2[index].col3 }}</td>
            <td>{{ table2[index].col4 }}</td>
            <td>{{ table2[index].col5 }}</td>
            <td>{{ table2[index].col6 }}</td>
          </tr>
          <tr>
            <td colspan="2" class="bg-secondary text-white">T1 :</td>
            <td colspan="2">{{ t1T2[0].num1 }}</td>
            <td colspan="2">{{ t1T2[0].num2 }}</td>
            <td colspan="1">-</td>
            <td colspan="2" class="bg-secondary text-white">T2 :</td>
            <td colspan="2">{{ t1T2Table2[1].num1 }}</td>
            <td colspan="2">{{ t1T2Table2[1].num2 }}</td>
          </tr>
        </tbody>
      </table>
      <!-- no term 6 -->
      <!-- <table class="table table-bordered">
        <thead>
          <tr>
            <td colspan="13">الشوط الرابع</td>
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
          <tr v-for="(row, index) in table1" :key="'row-' + index">
            <td>{{ row.col1 }}</td>
            <td>{{ row.col2 }}</td>
            <td>{{ row.col3 }}</td>
            <td>{{ row.col4 }}</td>
            <td>{{ row.col5 }}</td>
            <td>{{ row.col6 }}</td>
            <td>-</td>
            <td>{{ table2[index].col1 }}</td>
            <td>{{ table2[index].col2 }}</td>
            <td>{{ table2[index].col3 }}</td>
            <td>{{ table2[index].col4 }}</td>
            <td>{{ table2[index].col5 }}</td>
            <td>{{ table2[index].col6 }}</td>
          </tr>
          <tr>
            <td colspan="2" class="bg-secondary text-white">T1 :</td>
            <td colspan="2">{{ t1T2Table2[0].num1 }}</td>
            <td colspan="2">{{ t1T2Table2[0].num2 }}</td>
            <td colspan="1">-</td>
            <td colspan="2" class="bg-secondary text-white">T2 :</td>
            <td colspan="2">{{ t1T2Table2[1].num1 }}</td>
            <td colspan="2">{{ t1T2Table2[1].num2 }}</td>
          </tr>
        </tbody>
      </table> -->

      <!-- ==== -->
    </div>
  </div>
</template>

<script>
export default {
  name: "FifthRunPrinting",
  created() {
    this.table1 = JSON.parse(sessionStorage.getItem("run5TableOne"));
    this.table2 = JSON.parse(sessionStorage.getItem("run5TableOne"));

    this.t1T2 = JSON.parse(sessionStorage.getItem("t1T2Run5"));
    this.t1T2Table2 = JSON.parse(sessionStorage.getItem("t1T2Run5Table2"));
    // console.log(this.DateTimeTable.team1);
  },
  data() {
    return {
      table1: [],
      table2: [],
      t1T2: [],
      t1T2Table2: [],
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
.term-container {
  justify-content: center;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  margin: 0 auto;
  & > table {
    border: 2px solid gray;
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
