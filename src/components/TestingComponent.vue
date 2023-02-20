<template>
  <div>
    <h1 class="bg-warning">{{ pageHeader }}</h1>
  </div>
</template>

<script>
export default {
  name: "testingComponent",
  data() {
    return {
      pageHeader: "This is testing page header",
    };
  },
};
</script>
