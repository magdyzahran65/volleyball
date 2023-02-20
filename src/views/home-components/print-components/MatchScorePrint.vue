<template>
  <div class="score-match-print-container">
    <h6>نتيجة المباراة</h6>
    <table class="score-print-table">
      <thead>
        <tr>
          <th>فريق :{{ DateTimeForm.team1 }}</th>
          <th>الفرق</th>
          <th>فريق : {{ DateTimeForm.team2 }}</th>
        </tr>
      </thead>
    </table>
    <table class="score-print-table">
      <thead>
        <th class="score-table-th">تايم</th>
        <th class="score-table-th">تبديل</th>
        <th class="score-table-th">فوز</th>
        <th class="score-table-th">نقاط</th>
        <th class="score-table-th">اشواط</th>
        <th class="score-table-th">تايم</th>
        <th class="score-table-th">تبديل</th>
        <th class="score-table-th">فوز</th>
        <th class="score-table-th">نقاط</th>
      </thead>
      <tbody v-for="(row1, index) in rows1" :key="index">
        <tr>
          <td>{{ row1.time }}</td>
          <td>{{ row1.change }}</td>
          <td>{{ row1.win }}</td>
          <td>{{ row1.points }}</td>
          <td>{{ terms[index] }}</td>

          <td>{{ rows2[index].time }}</td>
          <td>{{ rows2[index].change }}</td>
          <td>{{ rows2[index].win }}</td>
          <td>{{ rows2[index].points }}</td>
        </tr>
      </tbody>
      <tr>
        <td class="totals-td">{{ totalObj1.time }}</td>
        <td class="totals-td">{{ totalObj1.change }}</td>
        <td class="totals-td">{{ totalObj1.win }}</td>
        <td class="totals-td">{{ totalObj1.points }}</td>
        <td class="totals-td">{{ totals[0] }}</td>
        <td class="totals-td">{{ totalObj2.time }}</td>
        <td class="totals-td">{{ totalObj2.change }}</td>
        <td class="totals-td">{{ totalObj2.win }}</td>
        <td class="totals-td">{{ totalObj2.points }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: "MatchScorePrint",
  created() {
    // row1 from sessionStorage = نتيجة المباراة 1
    if (sessionStorage.getItem("rows1")) {
      this.rows1 = JSON.parse(sessionStorage.getItem("rows1"));
    }
    // row2 from sessionStorage = نتيجة المباراة 2
    if (sessionStorage.getItem("rows2")) {
      this.rows2 = JSON.parse(sessionStorage.getItem("rows2"));
    }
    // totalObj1 = المجموع 1
    if (sessionStorage.getItem("totalObj1")) {
      this.totalObj1 = JSON.parse(sessionStorage.getItem("totalObj1"));
    }
    // totalObj1 = المجموع 2
    if (sessionStorage.getItem("totalObj2")) {
      this.totalObj2 = JSON.parse(sessionStorage.getItem("totalObj2"));
    }
  },
  mounted() {
    // اسم الفريق الأول - اسم الفريق الثاني
    this.DateTimeForm = JSON.parse(sessionStorage.getItem("DateTimeForm"));
  },
  updated() {},
  data() {
    return {
      DateTimeForm: "",
      rows1: "",
      rows2: "",
      terms: ["الأول", "الثاني", "الثالث", "الرابع", "الخامس"],
      totals: ["المجموع"],
      totalObj1: "",
      totalObj2: "",
    };
  },
};
</script>
<style lang="scss">
.score-match-print-container {
  position: absolute;
  top: 0%;
  left: 100%;
  width: 100%;
  & h6 {
    text-decoration: underline;
  }
  & .score-print-table {
    width: 100%;
    margin: 0 14px;
    & tr {
      display: contents;
    }
  }
}
.score-table-th {
  font-size: 10pt !important;
}
.totals-td {
  border: 2px solid gray;
  font-size: 10pt;
  font-weight: 600;
}
</style>
