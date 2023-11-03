<template>
  <div class="dashboard-page">
    <viewer></viewer>
  </div>
</template>

<script>
import viewer from "@/components/app/mainElements/activityComponents/adventures/pageViewer.vue";
export default {
  name: "DashboardViewPage",
  components: {
    viewer,
  },
};
</script>
