<template>
  <div class="date-form-container">
    <form class="date-table-form" @submit.prevent>
      <!-- sections -->
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <!-- ============= -->
        <!-- Date And Time -->
        <!-- ============= -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed bg-success-subtle text-secondary gap-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              الوقت / التاريخ
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <!-- date and tome inputs -->
              <div class="position-relative">
                <button
                  @click="clearFields()"
                  style="left: -4px; top: -4px; font-size: 6pt; padding: 1px"
                  class="btn btn-warning position-absolute"
                >
                  مسح الحقول
                </button>
              </div>
              <div class="date-inputs-container">
                <div class="day-container">
                  <label for="">اليوم</label>
                  <input
                    class="form-day-input"
                    type="text"
                    placeholder="اليوم"
                    v-model="DateTimeForm.day"
                  />
                  <br />
                  <label for="">التاريخ</label>
                  <input
                    style="text-align: end; color: green"
                    class="form-day-input"
                    type="date"
                    placeholder="التاريخ"
                    v-model="DateTimeForm.date"
                  />
                </div>
                <br />
                <div class="team-container">
                  <label for="">الفريقين</label>
                  <input
                    class="form-team-input"
                    type="text"
                    placeholder="الفريق الاول"
                    v-model="DateTimeForm.team1"
                  />
                  <span class="span-x">X</span>
                  <input
                    class="form-team-input"
                    type="text"
                    placeholder="الفريق الثاني"
                    v-model="DateTimeForm.team2"
                  />
                </div>
                <hr />
                <div class="day-container flex-wrap">
                  <label for="">الصالة</label>
                  <input
                    class="form-day-input"
                    type="text"
                    placeholder="الصالة"
                    v-model="DateTimeForm.playground"
                  />
                  <br />
                  <label for="">الوقت</label>
                  <input
                    style="text-align: end; color: green"
                    class="form-day-input"
                    type="time"
                    v-model="DateTimeForm.time"
                  />
                </div>
                <div style="text-align: start">
                  <label>رقم المباراة</label>
                  <input
                    style="width: 66%"
                    class="form-day-input"
                    type="text"
                    placeholder="رقم المباراة"
                    v-model="DateTimeForm.matchNumber"
                  />
                </div>
                <div style="text-align: start">
                  <label for=""> الدرجة</label>
                  <input
                    style="width: 70%"
                    class="form-day-input"
                    type="text"
                    placeholder=" الدرجة"
                    v-model="DateTimeForm.class"
                  />
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <!--   ==================== -->
        <!--  الإجراءات قبل بداية المباراة -->
        <!--   ==================== -->

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed bg-light-subtle gap-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              الإجراءات قبل بداية المباراة
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <!-- inputs Referee Table  -->
              <RefereeingTable />
            </div>
          </div>
        </div>

        <!--   ============== -->
        <!--    أسماء الحكام-->
        <!--   ============== -->
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed bg-success-subtle text-secondary gap-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              أسماء الحكام
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <NamesTable />
            </div>
          </div>
        </div>
      </div>

      <!-- === ================ === -->
      <!-- === second accordion === -->
      <!-- === ================ === -->
      <div class="next-accordion">
        <secondAccordion />
        <!-- <button class="mt-3 btn btn-secondary">next</button> -->
      </div>

      <div>
        <router-link class="btn btn-outline-secondary mt-2" to="/runs">
          الأشواط</router-link
        >
      </div>

      <div>
        <router-link class="btn btn-outline-secondary mt-2" to="/referees">
          تقارير الحكام</router-link
        >
      </div>

      <button @click="consoleForm()" class="btn btn-success mt-4">
        عرض الملف
      </button>
    </form>
  </div>
</template>

<script>
import RefereeingTable from "./RefereeingTable.vue";
import NamesTable from "./NamesTable.vue";
import secondAccordion from "./secondAccordion.vue";

export default {
  name: "handballDateAndTimeTable",
  components: {
    RefereeingTable,
    NamesTable,
    secondAccordion,
  },
  mounted() {
    // Check if the data is already stored in the session storage
    if (sessionStorage.getItem("DateTimeForm")) {
      // If the data is already stored, retrieve it from the session storage
      this.DateTimeForm = JSON.parse(sessionStorage.getItem("DateTimeForm"));
    } else {
      sessionStorage.setItem("DateTimeForm", JSON.stringify(this.DateTimeForm));
    }
  },
  watch: {
    // Watch for changes in the DateTimeForm object
    DateTimeForm: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("DateTimeForm", JSON.stringify(newValue));
      },
    },
  },
  data() {
    return {
      DateTimeForm: {
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
    clearFields() {
      // Reset the DateTimeForm object to its initial values
      this.DateTimeForm = {};
      // Remove the data from the session storage
      sessionStorage.removeItem("DateTimeForm");
    },
    setDataTimeToSession() {
      sessionStorage.setItem(
        "beforeMatchTdsInputs",
        JSON.stringify(this.DateTimeForm)
      );
    },
    consoleForm() {
      this.$store.state.DateTimeForm = this.DateTimeForm;
      // console.log(this.$store.state.DateTimeForm);

      this.$router.push({ path: "/table" });
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
.date-form-container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  .date-table-form {
    border: 1px solid #14852c;
    border-radius: 5px;
    padding: 2%;
    background-color: #f8f8f8;
    & label {
      color: #2b7e2c;
      font-size: 10pt;
    }
  }
  .form-day-input {
    outline: none;
    width: 32%;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 1%;
  }
  .day-container {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: baseline;
    flex-direction: row;
  }
  .team-container {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
  }
  .form-team-input {
    outline: none;
    width: 33%;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 1%;
  }

  .span-x {
    font-size: 20px;
    font-weight: 600;
    color: darkgray;
    margin: 0 2px;
  }
}
</style>
