<template>
  <div class="container-fluid">
    <form @submit.prevent>
      <table class="date-table">
        <thead>
          <tr>
            <th>اليوم</th>
            <th>التاريخ</th>
            <th>الفريقين</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input placeholder="اليوم" v-model="form.day" type="text" />
            </td>
            <td>
              <input v-model="form.date" type="date" />
            </td>
            <td>
              <input
                placeholder="الفريق الأول"
                v-model="form.team1"
                type="text"
              />
              <span>X</span>
              <input
                placeholder="الفريق الثاني"
                v-model="form.team2"
                type="text"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <!-- =========== -->
      <table class="playground-table">
        <thead>
          <tr>
            <th>الصالة</th>
            <th>الوقت</th>
            <th>رقم المباراة</th>
            <th>الدرجة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                placeholder="الصالة"
                v-model="form.playground"
                type="text"
              />
            </td>
            <td>
              <input placeholder="الوقت" v-model="form.time" type="time" />
            </td>
            <td>
              <input
                placeholder="رقم المباراة"
                v-model="form.matchNumber"
                type="text"
              />
            </td>
            <td>
              <input placeholder=" الدرجة" v-model="form.class" type="text" />
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="submitForm()" class="btn btn-success">حفظ الملف</button>
    </form>
  </div>
</template>

<script>
// import jsPDF from "jspdf";
// import "jspdf-autotable";
export default {
  name: "handballEvaluationFrom",
  data() {
    return {
      form: {
        day: "",
        date: "",
        team1: "",
        team2: "",
        playground: "",
        time: "",
        matchNumber: "",
        class: "",
      },
    };
  },
  methods: {
    submitForm() {
      // create a new PDF document
      //   const doc = new jsPDF("p", "pt", "a4");
      //   doc.addFileToVFS("MyFont.ttf");
      //   doc.setFont("MyFont.ttf", "MyFont", "normal");
      //   // add the form data to the PDF
      //   doc.autoTable({
      //     // head: [["اليوم", "التاريخ", "الفريق الاول X ", "الفريق الثاني"]],
      //     head: [["Day", "Date", " team-1 X ", " team- 2 "]],
      //     body: [[this.form.day, this.form.date, this.form.team1, this.team2]],
      //     // startY: 20,
      //   });
      //   // save the PDF to the user's device
      //   doc.save("form.pdf");
      //   =================================
      //   pdfKit
    },
  },
};
</script>
<style lang="scss">
.date-table {
  direction: rtl;
  margin: 5% auto;
  margin-bottom: 2%;
  font-family: sans-serif;
}
.playground-table {
  direction: rtl;
  margin: 2% auto;
}
</style>
