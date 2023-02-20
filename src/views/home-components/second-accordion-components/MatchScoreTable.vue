<template>
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
      <button
        class="accordion-button collapsed"
        style="background-color: #d1e7dd"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#panelsStayOpen-collapseTwo"
        aria-expanded="false"
        aria-controls="panelsStayOpen-collapseTwo"
      >
        نتيجة المباراة
      </button>
    </h2>
    <div
      id="panelsStayOpen-collapseTwo"
      class="accordion-collapse collapse"
      aria-labelledby="panelsStayOpen-headingTwo"
    >
      <div class="accordion-body bg-info-subtle rounded-4 p-0 my-3">
        <div>
          <strong>نتيجة المباراة</strong>
        </div>
        1
        <ScoreTableComponent />
        2
        <ScoreTableComponentTwo />
      </div>
    </div>
  </div>
</template>

<script>
import ScoreTableComponent from "./ScoreTableComponent.vue";
import ScoreTableComponentTwo from "./ScoreTableComponentTwo.vue";
export default {
  name: "MatchScoreTable",
  components: {
    ScoreTableComponent,
    ScoreTableComponentTwo,
  },
};
</script>
