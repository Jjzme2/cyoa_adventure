<template>
  <BaseView>
    <template #default>
      <div class="dashboard-view">
        <dashboard></dashboard>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "@/views/main/BaseView.vue";
import dashboard from "@/components/app/mainElements/dashboards/main/dashboardTest.vue";

export default {
  name: "HomeView",
  components: {
    BaseView,
    dashboard,
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
