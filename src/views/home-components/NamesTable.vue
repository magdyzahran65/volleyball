<template>
  <div>
    <!-- <h1>أسماء الحكام</h1> -->
    <form @submit.prevent>
      <div class="position-relative">
        <button
          @click="clearFields()"
          style="left: -4px; top: -4px; font-size: 6pt; padding: 1px"
          class="btn btn-warning position-absolute"
        >
          مسح الحقول
        </button>
      </div>
      <div
        v-for="(namesTableInput, i) in namesTableInputs"
        :key="i"
        class="refereeNames-container"
      >
        <div>
          <label>{{ namesTableInput.label1 }}</label>
          <input v-model="namesTableInput.val1" type="text" />
        </div>
        <div>
          <label>{{ namesTableInput.label2 }}</label>
          <input v-model="namesTableInput.val2" type="text" />
        </div>
        <div>
          <label>{{ namesTableInput.label3 }}</label>
          <input v-model="namesTableInput.val3" type="text" />
        </div>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "NamesTable",
  created() {
    this.$store.state.namesTableInputs = this.namesTableInputs;
  },
  mounted() {
    // Check if the data is already stored in the session storage
    if (sessionStorage.getItem("namesTableInputs")) {
      // If the data is already stored, retrieve it from the session storage
      this.namesTableInputs = JSON.parse(
        sessionStorage.getItem("namesTableInputs")
      );
    } else {
      sessionStorage.setItem(
        "namesTableInputs",
        JSON.stringify(this.namesTableInputs)
      );
    }
  },
  watch: {
    // Watch for changes in the DateTimeForm object
    namesTableInputs: {
      deep: true,
      handler(newValue) {
        // Store the updated DateTimeForm object in the session storage
        sessionStorage.setItem("namesTableInputs", JSON.stringify(newValue));
      },
    },
  },
  methods: {
    clearFields() {
      // Reset the DateTimeForm object to its initial values
      this.namesTableInputs = this.$store.state.namesTableInputs;
      // Remove the data from the session storage
      sessionStorage.removeItem("namesTableInputs");
    },
  },
  data() {
    return {
      namesTableInputs: this.$store.state.namesTableInputs,
    };
  },
};
</script>
<style lang="scss" scoped>
.refereeNames-container {
  padding: 4%;
  direction: rtl;
  margin: 7% 0;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-template-columns: 1fr;
  border: 3px double gray;
  border-radius: 11px;
  height: 201px;
  text-align: center;
  background-color: #f0f2f166;
  & label {
    display: block;
  }
}
</style>
