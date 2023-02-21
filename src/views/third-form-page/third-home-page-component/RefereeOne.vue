<template>
  <div>
    <div>
      <h3 class="text-warning mt-5 mb-3 translating-up">الحكم الأول</h3>
      <textarea
        @input="handleInput()"
        dir="rtl"
        class="form-control w-75 mx-auto translate-left"
        cols="30"
        rows="12"
        v-model="inputText[0]"
        placeholder="الحكم الأول 12 سطر فقط"
      ></textarea>
    </div>
    <!-- الحكم الثاني -->
    <div>
      <h3 class="text-warning mt-5 translate-right">الحكم الثاني</h3>
      <textarea
        @input="handleInput()"
        dir="rtl"
        class="form-control w-75 mx-auto translating-up"
        cols="30"
        rows="12"
        v-model="inputText[1]"
        placeholder="الحكم الثاني 12 سطر فقط"
      ></textarea>
    </div>
    <!-- مراقبوا الخطوط -->
    <div>
      <h3 class="text-warning mt-5 translating-bottom">مراقبوا الخطوط</h3>
      <textarea
        @input="handleInput()"
        dir="rtl"
        class="form-control w-75 mx-auto translate-left"
        cols="30"
        rows="12"
        v-model="inputText[2]"
        placeholder="مراقبوا الخطوط 12 سطر فقط "
      ></textarea>
    </div>
    <!-- مسجل المباراة / مساعد المسجل -->
    <div>
      <h3 class="text-warning mt-5 translating-bottom">
        مسجل المباراة / مساعد المسجل
      </h3>
      <textarea
        @input="handleInput()"
        dir="rtl"
        class="form-control w-75 mx-auto translate-left"
        cols="30"
        rows="12"
        v-model="inputText[3]"
        placeholder="  مسجل المباراة / مساعد المسجل, 12 سطر فقط"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  name: "RefereeOne",
  created() {
    if (sessionStorage.getItem("refereesInputs")) {
      this.inputText = JSON.parse(sessionStorage.getItem("refereesInputs"));
    } else {
      sessionStorage.setItem("refereesInputs", JSON.stringify(this.inputText));
    }
  },
  mounted() {
   
  },
  data() {
    return {
      inputText: ["", "", "", ""],
      outputLines: [],
    };
  },
  watch: {
    inputText: {
      //   deep: true,
      handler(newValue) {
        sessionStorage.setItem("refereesInputs", JSON.stringify(newValue));
      },
    },
  },
  methods: {
    handleInput() {
      // Limit the number of lines to 12
      for (var i = 0; i < 4; i++) {
        const lines = this.inputText[i].split("\n").slice(0, 12);
        this.inputText[i] = lines.join("\n");
      }
    },
    convert() {
      this.outputLines = this.inputText.join("\n").split("\n");
    },
  },
};
</script>
<style lang="scss" scoped>
.translating-up {
  animation: translating-up 0.5s ease-in-out;
}
.translate-left {
  animation: translating 1s ease-in-out;
}
.translate-right {
  animation: translating-right 1s ease-in-out;
}
.translating-bottom {
  animation: translating-bottom 4s ease-in-out;
}
@keyframes translating {
  from {
    transform: translate(-800px);
  }
  to {
    transform: translate(0px);
  }
}
@keyframes translating-right {
  from {
    transform: translate(1000px);
  }
  to {
    transform: translate(0px);
  }
}
@keyframes translating-up {
  from {
    transform: translateY(-500px);
  }
  to {
    transform: translate(0px);
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
