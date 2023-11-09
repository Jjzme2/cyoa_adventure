<template>
  <div class="dashboard-page">
    <ClickerView></ClickerView>
  </div>
</template>

<script>
import ClickerView from "@/components/app/mainElements/activityComponents/clicker/clickerViewer.vue";

export default {
  name: "dashboardClickerHome",
  components: {
    ClickerView,
  },
  methods: {
    submitClick() {
      console.log("Click submitted");
    },
  },
};
</script>
