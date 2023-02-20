<template>
  <div class="match-runs-inputs-container">
    <FirstRunInputTable />
    <SecondRunInputTable class="mb-4" />
    <ThirdRunInputTable />
    <FourthRunInputTable />
    <FifthRunInputTable />

    <router-link
      class="btn btn-success float-start my-4 mx-3 text-white"
      style="font-size: 15pt"
      to="/"
      >Back</router-link
    >
    <router-link
      class="btn btn-success float-end my-4 mx-3 text-white"
      style="font-size: 15pt"
      to="/table"
      >عرض الملف</router-link
    >
  </div>
</template>

<script>
import FirstRunInputTable from "./match-runs-tables/FirstRunInputTable.vue";
import SecondRunInputTable from "./match-runs-tables/SecondRunInputTable.vue";
import ThirdRunInputTable from "./match-runs-tables/ThirdRunInputTable.vue";
import FourthRunInputTable from "./match-runs-tables/FourthRunInputTable.vue";
import FifthRunInputTable from "./match-runs-tables/FifthRunInputTable.vue";
export default {
  name: "SecondHome",
  components: {
    FirstRunInputTable,
    SecondRunInputTable,
    ThirdRunInputTable,
    FourthRunInputTable,
    FifthRunInputTable,
  },
};
</script>
<style lang="scss" scoped>
.match-runs-inputs-container {
  min-height: calc(100vh - 129px);
  background-image: url(../../assets/images/volleyball-animation-bg.jpg);
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
