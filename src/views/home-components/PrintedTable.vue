<template>
  <div id="element-to-print">
    <div class="main-from-heading">
      <h6>التحاد الكويتي للكرة الطائرة</h6>
      <h6>لجنة الحكام</h6>
    </div>
    <div class="from-title-logo-container">
      <img src="@/assets/images/handball-form.jpg" alt="" />
      <h3>استمارة تقييم حكام المباراة</h3>
    </div>

    <!-- first-table -->
    <div class="first-table-container container-fluid">
      <table class="first-table-date">
        <thead>
          <tr>
            <th>اليوم : {{ DateTimeTable.day }}</th>
            <th>التاريخ : {{ DateTimeTable.date }}</th>
            <th class="teams-in-date-t">الفريفين :</th>
            <th style="text-align: center">
              {{ DateTimeTable.team1 }}
              X
              {{ DateTimeTable.team2 }}
            </th>
          </tr>
          <tr>
            <th>الصالة :{{ DateTimeTable.playground }}</th>
            <th>الوقت : {{ DateTimeTable.time }}</th>
            <th>رقم المباراة :{{ DateTimeTable.matchNumber }}</th>
            <th>الدرجة :{{ DateTimeTable.class }}</th>
          </tr>
        </thead>
      </table>
    </div>

    <!-- second table Container -->
    <div class="b-match-table-container">
      <table class="before-match-table">
        <thead>
          <tr>
            <th>االجراءات قبل بداية المباراة</th>
            <th>حكم اول</th>
            <th>حكم ثاني</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(beforeMatchTd, i) in beforeMatchTdsInputs" :key="i">
            <td>
              {{ beforeMatchTd.name }}
            </td>
            <td class="check-box-view">
              <img
                v-show="beforeMatchTd.checkOne"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
              <img
                v-show="beforeMatchTd.checkOne_2"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
              <img
                v-show="beforeMatchTd.checkOne_3"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
              <img
                v-show="beforeMatchTd.checkOne_4"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
            </td>
            <td class="check-box-view">
              <!-- <input disabled type="checkbox" :value="beforeMatchTd.checkTwo" /> -->
              <img
                v-show="beforeMatchTd.checkTwo"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
              <img
                v-show="beforeMatchTd.checkTwo_2"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
              <img
                v-show="beforeMatchTd.checkTwo_3"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
              <img
                v-show="beforeMatchTd.checkTwo_4"
                class="check-mark"
                src="../../assets/images/red-check-mark.png"
                alt=""
              />
            </td>
          </tr>
          <tr>
            المجموع / 100
            <td class="text-center">{{ totalReferee1 }}</td>
            <td class="text-center">{{ totalReferee2 }}</td>
          </tr>
        </tbody>
      </table>
      <!-- third table أسماء طاقم التحكيم -->
      <div style="width: 40%">
        <h5 class="text-decoration-underline">أسماء طاقم التحكيم</h5>
        <table class="table-refereeing-staff d-inline-block">
          <tbody class="table-refereeing-staff-tbody">
            <tr v-for="(name, index) in refereeNames" :key="index">
              <td>
                {{ name.label1 }}
                <span
                  class="text-end border-1 float-start mx-3 text-decoration-underline name-span"
                  >{{ name.val1 }}</span
                >
              </td>
              <td>
                {{ name.label2 }}
                <span
                  class="text-center float-start mx-3 text-decoration-underline"
                  >{{ name.val2 }}</span
                >
              </td>
              <td>
                {{ name.label3 }}
                <span
                  class="text-center float-start mx-3 text-decoration-underline"
                  >{{ name.val3 }}</span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- جدول الجزاءات -->
    <div class="punishment-table-container">
      <h5 class="text-decoration-underline">جدول الجزاءات</h5>
      <table>
        <thead>
          <tr>
            <th
              v-for="(head, index) in punishmentTable.tableHeaders"
              :key="index"
            >
              {{ head }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(punish, i) in punishments" :key="i">
            <td v-if="punish.playerName != ''">{{ punish.playerName }}</td>
            <td v-if="punish.playerName != ''">{{ punish.playerNum }}</td>
            <td v-if="punish.playerName != ''">{{ punish.playerClub }}</td>
            <td v-if="punish.playerName != ''">{{ punish.PunishKind }}</td>

            <td v-if="punish.playerName == ''">.</td>
            <td v-if="punish.playerName == ''">.</td>
            <td v-if="punish.playerName == ''">.</td>
            <td v-if="punish.playerName == ''">.</td>
          </tr>
        </tbody>
      </table>

      <h6 class="text-decoration-underline mt-2">ملاحظات</h6>
      <textarea
        class="textarea-showing-print"
        placeholder=""
        v-html="notes"
        readonly
        cols="45"
        rows="5"
      ></textarea>
      <!-- <div class="notes">
        <p class="notes-para">{{ notes }}</p>
      </div> -->
      <MatchScorePrint class="d-inline-block" />
    </div>
    <div class="container-fluid signature">
      <div class="row">
        <div class="col-6 text-end">
          <span> التوقيع</span>
        </div>
        <div class="col-6 text-end">
          <input
            placeholder="إدخل الاسم"
            class="referee-signature"
            v-model="refereeSignature"
            type="text"
          /><span>مراقب المباراة : </span>
          <span class="">{{ refereeSignature }}</span>
        </div>
      </div>
      <div class="page-break"></div>
    </div>
    <div class="page2">
      <h4 class="my-3 match-runs-header">أشواط المباراة</h4>
      <FirstRunPrinting :DateTimeTable="DateTimeTable" />
      <ThirdRunPrinting :DateTimeTable="DateTimeTable" />
      <FifthRunPrinting :DateTimeTable="DateTimeTable" />
      <!-- referee notes -->
      <RefereesSheetsPrint />
    </div>

    <div class="btn-container">
      <button class="btn btn-success" @click="printPage()">حفظ الملف</button>
    </div>

    <!-- ========== -->
  </div>
</template>
<script>
import MatchScorePrint from "./print-components/MatchScorePrint.vue";
import FirstRunPrinting from "./print-components/FirstRunPrinting.vue";
import ThirdRunPrinting from "./print-components/ThirdRunPrinting.vue";
import FifthRunPrinting from "./print-components/FifthRunPrinting.vue";
import RefereesSheetsPrint from "./print-components/RefereesSheetsPrint.vue";

export default {
  name: "PrintedTable",
  components: {
    MatchScorePrint,
    FirstRunPrinting,
    ThirdRunPrinting,
    FifthRunPrinting,
    RefereesSheetsPrint,
  },
  created() {
    this.notes = JSON.parse(sessionStorage.getItem("notes"));
  },
  mounted() {
    this.DateTimeTable = JSON.parse(sessionStorage.getItem("DateTimeForm"));
    this.refereeNames = JSON.parse(sessionStorage.getItem("namesTableInputs"));

    let punish1 = JSON.parse(sessionStorage.punishes);
    let punish2 = JSON.parse(sessionStorage.punishes2);
    let punish3 = JSON.parse(sessionStorage.punishes3);
    let punish4 = JSON.parse(sessionStorage.punishes4);
    let punish5 = JSON.parse(sessionStorage.punishes5);
    let punish6 = JSON.parse(sessionStorage.punishes6);

    let allPunishments = [punish1, punish2, punish3, punish4, punish5, punish6];
    if (allPunishments) {
      this.punishments = allPunishments;
    }

    // console.log(this.$store.state.notes;
  },

  data() {
    return {
      DateTimeTable: this.$store.state.DateTimeForm,
      beforeMatchTdsInputs: (this.beforeMatchTdsInputs = JSON.parse(
        sessionStorage.getItem("beforeMatchTdsInputs")
      )),
      isChecked: true,
      refereeNames: this.$store.state.namesTableInputs,
      totalReferee1: (this.totalReferee1 = JSON.parse(
        sessionStorage.getItem("totalReferee1")
      )),
      totalReferee2: (this.totalReferee2 = JSON.parse(
        sessionStorage.getItem("totalReferee2")
      )),
      punishmentTable: {
        tableHeaders: ["إسم عضو الفريق", "الرقم", "النادى", "نوع العقوبة"],
        tableTds: ["1", "2", "3", "4"],
        // =====
      },
      punishments: "",
      notes: "",
      refereeSignature: "",
    };
  },
  methods: {
    printPage() {
      window.print();
    },
  },
};
</script>
<style lang="scss">
#element-to-print {
  width: 90%;
  margin: 0 auto;
  // height: 297mm;
  // width: 210mm;

  // zoom: 0.9;
}

.referee-signature {
  text-align: end;
}
// ==========
@media print {
  @page {
    size: 11in 17in; /* set tabloid size */
  }
  #element-to-print {
    // height: 297mm;
    // width: 230mm;
    // width: 90%;
    margin-top: 0px;
    // zoom: 1.3%, auto;
    font-size: smaller !important;
  }
  // .punishment-table-container h5 {
  //   margin-top: -5px !important;
  // }
  .textarea-showing-print {
    margin: auto;
  }
  .referee-signature {
    display: none;
  }
  .page-break {
    page-break-after: always;
    page-break-after: none;
    // height: 1%;
  }
  .page2 {
    // height: 297mm;
    // width: 230mm;
    margin-top: 0px;
    display: block;
    // zoom: 1.3%, auto;
    & > div {
      margin-top: 0px;
    }
  }
}
.match-runs-header {
  text-decoration-line: underline;
  text-shadow: 1px 2px 2px #ddd;
  color: #525252;
}
// ==========
.notes {
  height: 40%;
  border: 2px solid gray;
  margin: 4% 4px;
  & > p {
    padding: 1%;
    text-align: start;
    text-decoration: solid rgba(201, 200, 200, 0.778) underline;
    direction: rtl;
    max-width: 100%;
    word-wrap: break-word;
    font-size: 9pt;
    line-height: 8pt;
  }
}
.textarea-showing-print {
  direction: rtl;
  resize: none;
  text-decoration: solid rgba(201, 200, 200, 0.778) underline;
  word-wrap: break-word;
  font-size: 9pt;
  line-height: 17pt;
  overflow: hidden;
}
// @media print {
//   #app {
//     // height: 297mm;
//     // width: 210mm;

//     // border: 1px solid black;
//   }
//   .signature {
//     // margin-top: 45px;
//   }
// }
</style>
<style media="print"></style>
