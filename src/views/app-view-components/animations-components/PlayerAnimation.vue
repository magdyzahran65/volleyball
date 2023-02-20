<template>
  <div v-show="showAnimation == true" class="player-animation">
    <img
      class="animation-kw-logo"
      src="../../../assets/images/handball-form-removebg-preview.png"
      alt=""
    />
    <img
      class="player-animation-img"
      src="../../../assets/images/player-animation.png"
      alt=""
    />
    <h3 class="animation-text">الإتحاد الكويتي للكرة الطائرة</h3>
  </div>
</template>
<script>
export default {
  name: "PlayerAnimation",
  data() {
    return {
      showAnimation: true,
    };
  },
  mounted() {
    this.stopAnimation();
    // const shown = sessionStorage.getItem("animationShown");
    // if (!shown) {
    //   this.stopAnimation();
    //   sessionStorage.setItem("animationShown", true);
    // } else {
    //   this.showAnimation = false;
    // }
  },

  methods: {
    stopAnimation() {
      setTimeout(() => {
        this.showAnimation = false;
      }, 3000);
    },
  },
};
</script>
<style lang="scss">
.player-animation {
  padding: 30%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(213, 213, 213, 0.65);
  background-image: url(../../../assets/images//volleyball-animation-bg2.jpg);
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  // background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  & img {
    width: 100%;
    height: auto;
  }
  & .animation-kw-logo {
    position: absolute;
    width: 40px;
    top: 10%;
    right: 10%;
  }
  & > .player-animation-img {
    animation: startPlayerAnimation 3s ease-in-out infinite;
  }
  @keyframes startPlayerAnimation {
    0% {
      opacity: 1;
      transform: translate(-10%, 50%);
    }

    100% {
      transform: translate(30%, -30%);
      opacity: 0;
      width: 100%;
    }
  }
  & .animation-text {
    color: #3da012;
    font-size: 18pt;
    position: absolute;
    top: 15%;
    right: 4%;
    font-family: cursive;
  }
}
</style>
