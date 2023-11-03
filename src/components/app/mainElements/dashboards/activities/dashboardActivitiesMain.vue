<template>
  <div class="dashboard-page">
    <div>{{ templateMessage }}</div>
  </div>
</template>

<script>
export default {
  name: "dashboardActivitiesMain",
  data() {
    return {
      templateMessage: "Welcome to the Activity Main Page.",
    };
  },
};
</script>
