<template>
  <div class="home-page-container">
    <div class="main-from-heading">
      <h6>الإتحاد الكويتي للكرة الطائرة</h6>
      <h6>لجنة الحكام</h6>
    </div>
    <div class="from-title-logo-container">
      <!-- <img src="../assets/images/handball-form.jpg" alt="" /> -->
      <img src="../assets/images/handball-form-removebg-preview.png" alt="" />
      <h3>إستمارة تقييم حكام المباراة</h3>
    </div>
    <handballDateAndTimeTable />
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
// @ is an alias to /src

import handballDateAndTimeTable from "./home-components/handballDateAndTimeTable.vue";

export default {
  name: "HomeView",
  components: {
    // handballEvaluationFrom,
    handballDateAndTimeTable,
  },
  created() {},
  methods: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home-page-container {
  direction: rtl;
  min-height: calc(100vh - 129px);
  background-image: url(../assets/images/volleyball-animation-bg.jpg);
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 414px) {
  .home-page-container {
    min-height: calc(100vh - 129px);
  }
}
.main-from-heading {
  direction: rtl;
  text-align: start;
  margin: 1% 3%;
  & > h6 {
    color: antiquewhite;
  }
}
.from-title-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  // margin: 2% auto;
  & > img {
    width: 10%;
    height: 10%;
  }
  & > h3 {
    // text-shadow: 1px 2px 2px grey;
    // color: #218840;
    color: antiquewhite;
    font-weight: 400;
    text-decoration: underline;
  }
}
// Media Query
// Mobile
@media screen and (max-width: 414px) {
  .from-title-logo-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    margin: 2% auto;
    & > img {
      width: 10%;
      height: 10%;
    }
    & > h3 {
      font-size: 12pt;
    }
  }
  .main-from-heading {
    font-size: 12pt;
    & h6 {
      font-size: 10pt;
    }
  }
}
</style>
