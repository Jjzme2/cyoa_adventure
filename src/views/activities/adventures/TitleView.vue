<template>
  <BaseView :includeHeader="includeHeader" :includeFooter="includeFooter">
    <template #default>
      <div class="dashboard-view">
        <dashboard></dashboard>
      </div>
    </template>
  </BaseView>
</template>

<script>
import BaseView from "@/views/main/BaseView.vue";
import dashboard from "@/components/app/mainElements/dashboards/activities/adventures/dashboardAdventureTitle.vue";

export default {
  name: "OpenAdventureView",
  components: {
    BaseView,
    dashboard,
  },
  data() {
    return {
      includeHeader: true,
      includeFooter: true,
    };
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
