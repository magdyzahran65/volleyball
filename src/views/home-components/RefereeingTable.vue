<template>
  <div>
    <form @submit.prevent>
      <div class="position-relative">
        <button
          style="left: 0px; top: -15px; font-size: 7pt; padding: 1px"
          class="btn btn-warning position-absolute"
          @click="removeCheck()"
        >
          مسح الإختيارات
        </button>
      </div>
      <div
        v-for="(item, i) in beforeMatchTdsInputs"
        :key="i"
        class="my-2 p-1"
        :class="{ even: i % 2 === 0, odd: i % 2 !== 0 }"
      >
        <div class="border referee-inputs-check-container">
          <label class="d-block fs-3">{{ item.name }}</label>
          <h6 class="d-inline mx-2 referee-h6">حكم أول</h6>
          <input v-model="item.checkOne" type="checkbox" />
          <input v-model="item.checkOne_2" type="checkbox" />
          <input v-model="item.checkOne_3" type="checkbox" />
          <input v-model="item.checkOne_4" type="checkbox" />
          <br />
          <h6 class="d-inline mx-2 text-secondary">حكم ثاني</h6>
          <input v-model="item.checkTwo" type="checkbox" />
          <input v-model="item.checkTwo_2" type="checkbox" />
          <input v-model="item.checkTwo_3" type="checkbox" />
          <input v-model="item.checkTwo_4" type="checkbox" />
        </div>
      </div>
      <div>
        <label class="d-block fs-3 bg-warning-subtle rounded-2"
          >المجموع / 100</label
        >

        حكم اول
        <input
          class="d-block text-center mx-auto w-50"
          type="number"
          v-model="totalReferee1"
        />

        حكم ثاني
        <input
          class="d-block text-center mx-auto w-50"
          type="number"
          v-model="totalReferee2"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "RefereeingTable",
  // created() {
  // },
  created() {
    // Check if the data is already stored in the session storage
    this.$store.state.beforeMatchTdsInputs = this.beforeMatchTdsInputs;

    if (sessionStorage.getItem("beforeMatchTdsInputs")) {
      // If the data is already stored, retrieve it from the session storage
      this.beforeMatchTdsInputs = JSON.parse(
        sessionStorage.getItem("beforeMatchTdsInputs")
      );
      this.totalReferee1 = JSON.parse(sessionStorage.getItem("totalReferee1"));
      this.totalReferee2 = JSON.parse(sessionStorage.getItem("totalReferee2"));
    } else {
      this.setDataToSession();
    }
  },
  watch: {
    // Watch for changes in the DateTimeForm object
    beforeMatchTdsInputs: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem(
          "beforeMatchTdsInputs",
          JSON.stringify(newValue)
        );
      },
    },
    totalReferee1: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("totalReferee1", JSON.stringify(newValue));
      },
    },
    totalReferee2: {
      deep: true,
      handler(newValue) {
        sessionStorage.setItem("totalReferee2", JSON.stringify(newValue));
      },
    },
  },
  methods: {
    removeCheck() {
      this.beforeMatchTdsInputs = [
        {
          name: "الإجراءات قبل بداية المباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "البروتوكول",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الصافرة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الإشارات الرسمية",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الشبكة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تجاوز فوق الشبكة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تجاوز تحت الشبكة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الصد",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الضربة الهجومية",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء اللمستين",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الأربع لمسات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الكرة المحمولة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الإرسال",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء مراكز اللاعبين",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "متابعة سلوك اللاعبين في الملعب",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "متابعة سلوك أعضاء الفريق",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "متابعة التوقفات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تطبيق الجزاءات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "العلاقة مع رئيس الشوط",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "التبديلات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تغييرات اللاعب الحر",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "التعاون مع طاقم التحكيم",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "التعاون مع مراقب المباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الإدارة العامة للمباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الإجراءات بعد نهاية المباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
      ];
    },
    setDataToSession() {
      sessionStorage.setItem(
        "beforeMatchTdsInputs",
        JSON.stringify(this.beforeMatchTdsInputs)
      );
    },
  },
  data() {
    return {
      //
      beforeMatchTdsInputs: [
        {
          name: "الإجراءات قبل بداية المباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "البروتوكول",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الصافرة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الإشارات الرسمية",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الشبكة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تجاوز فوق الشبكة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تجاوز تحت الشبكة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الصد",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الضربة الهجومية",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء اللمستين",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الأربع لمسات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الكرة المحمولة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء الإرسال",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "أخطاء مراكز اللاعبين",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "متابعة سلوك اللاعبين في الملعب",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "متابعة سلوك أعضاء الفريق",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "متابعة التوقفات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تطبيق الجزاءات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "العلاقة مع رئيس الشوط",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "التبديلات",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "تغييرات اللاعب الحر",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "التعاون مع طاقم التحكيم",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "التعاون مع مراقب المباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الإدارة العامة للمباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
        {
          name: "الإجراءات بعد نهاية المباراة",
          checkOne: false,
          checkOne_2: false,
          checkOne_3: false,
          checkOne_4: false,

          checkTwo: false,
          checkTwo_2: false,
          checkTwo_3: false,
          checkTwo_4: false,
        },
      ],
      totalReferee1: "",
      totalReferee2: "",
    };
  },
};
</script>
<style lang="scss">
.referee-inputs-check-container {
  & input {
    margin: 0 2%;
    color: green;
    outline-color: red;
  }
  & input[type="checkbox"]:checked {
    background-color: red;
    border: 3px solid red;
  }
  .referee-h6 {
    margin-left: 13px !important;
  }
}
.even {
  background-color: white;
}

.odd {
  background-color: rgb(232 238 234);
}
</style>
