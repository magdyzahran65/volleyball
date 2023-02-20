<template>
  <div class="third-home-page-container">
    <h2 class="my-3 text-decoration-underline text-white">تقارير الحكام</h2>
    <!-- components -->
    <div class="translating-bottom">
      <h6
        v-if="showParagraph"
        class="text-bg-warning text-secondary p-3 me-3 w-50 rounded-3 text-center info-msg"
      >
        كل سطر سوف يطبع في سطر مستقل <br />
        لكل حقل / 12 سطر فقط
      </h6>
    </div>
    <RefereeOne />
    <!-- ===============BTNs=================== -->
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
import RefereeOne from "./third-home-page-component/RefereeOne.vue";
export default {
  name: "ThirdHomePage",
  components: {
    RefereeOne,
  },
  mounted() {
    setTimeout(() => {
      this.showParagraph = true;
      setTimeout(() => {
        this.showParagraph = false;
      }, 7000);
    }, 0);
  },
  data() {
    return {
      showParagraph: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.third-home-page-container {
  min-height: calc(100vh - 129px);
  background-image: url(../../assets/images/volleyball-animation-bg.jpg);
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
}
.info-msg {
  margin: 0 auto !important;
  animation: fadeOut 7s ease-in-out;
}
.translating-bottom {
  animation: translating-bottom 2s ease-in-out;
}
@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes translating-bottom {
  from {
    transform: translateY(+500px);
  }
  to {
    transform: translate(0px);
  }
}
</style>
