<template>
  <div class="second-accordion-container">
    <div class="accordion" id="accordionPanelsStayOpenExample">
      <!-- ======== جدول الجزاءات ========= -->
      <PunishmentTableComponent />
      <!-- ======== نتيجة المباراة ========= -->

      <MatchScoreTable />
      <!-- ========== ملاحظات ============== -->
      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button
            class="accordion-button collapsed"
            style="background-color: #fcfcfd"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree"
            aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree"
          >
            ملاحظات
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="panelsStayOpen-headingThree"
        >
          <div class="accordion-body">
            <!-- <label>ملاحظات</label> -->
            <textarea
              class="form-control w-75 mx-auto"
              placeholder="ملاحظات"
              v-model="notes"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PunishmentTableComponent from "./second-accordion-components/PunishmentTableComponent";
import MatchScoreTable from "./second-accordion-components/MatchScoreTable";
export default {
  name: "secondAccordion",
  created() {
    if (sessionStorage.getItem("notes")) {
      this.notes = JSON.parse(sessionStorage.getItem("notes"));
    } else {
      sessionStorage.setItem("notes", JSON.stringify(this.notes));
    }
  },
  methods: {},

  watch: {
    // Watch for changes in the DateTimeForm object
    notes: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("notes", JSON.stringify(newValue));
      },
    },
  },
  components: {
    PunishmentTableComponent,
    MatchScoreTable,
  },
  data() {
    return {
      notes: "",
    };
  },
};
</script>
<style lang="scss"></style>
