<template>
  <!-- <div class="tables-container">
    <table
      class="referee-reports"
      v-for="(inputs, index) in refereesInputs"
      :key="index"
    >
      <thead>
        <tr>
          <th>
            <h5 class="text-decoration-underline">{{ names[index] }}</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, i) in inputs.split('\n')" :key="i">
          <td v-if="value != ''">{{ value }}</td>
          <td v-else>
            {{ (value = "-") }}
          </td>
        </tr>
      </tbody>
    </table>
  </div> -->
  <div class="tables-container">
    <table
      class="referee-reports"
      v-for="(inputs, index) in refereesInputs"
      :key="index"
    >
      <thead>
        <tr>
          <th>
            <h5 class="text-decoration-underline">{{ names[index] }}</h5>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="i in 12" :key="i">
          <td v-if="inputs.split('\n')[i - 1]">
            {{ inputs.split("\n")[i - 1] }}
          </td>
          <td v-else>{{ " - " }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "RefereesSheetsPrint",
  created() {
    this.refereesInputs = JSON.parse(sessionStorage.getItem("refereesInputs"));
  },
  mounted() {
    // this.convert();
    // console.log(this.refereesInputs);
    // console.log(this.outputLines);
  },
  data() {
    return {
      refereesInputs: [],
      outputLines: [],
      names: [
        "الحكم الأول",
        "الحكم الثاني",
        "مراقبوا الخطوط",
        "مسجل المباراة / مساعد المسجل",
      ],
    };
  },
  methods: {
    convert() {
      // Use map() to split/join each element of the inputText array
      let test = this.refereesInputs[0];
      test
        .map((text) => text.split("\n"))
        .flat()
        .filter((line) => line.trim() !== ""); // Remove empty lines
    },
  },
};
</script>
<style lang="scss" scoped>
.tables-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-items: center;
  direction: rtl;
}
.referee-reports {
  display: inline-block;
  min-height: 250px;

  & tbody tr td {
    border: 1px solid black;
    min-width: 300px;
  }
}
</style>
