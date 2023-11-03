<template>
  <div class="dashboard-page">
    <div class="dashboard-header">
      <h3 id="dashboard-title">Good {{ timeOfDay }}</h3>
      <QuoteDisplay />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import QuoteDisplay from "@/components/app/mainElements/dataRepresentations/quoteDisplay.vue";

export default {
  name: "dashboardHome",
  components: { QuoteDisplay },
  setup() {
    const timeOfDay = ref("");
    const currentTime = new Date().getHours();

    const getTimeOfDay = () => {
      if (currentTime >= 5 && currentTime < 12) {
        return "morning";
      } else if (currentTime >= 12 && currentTime < 17) {
        return "afternoon";
      } else if (currentTime >= 17 && currentTime < 21) {
        return "evening";
      } else {
        return "night";
      }
    };

    timeOfDay.value = getTimeOfDay();

    return {
      timeOfDay,
    };
  },
};
</script>

<style scoped>
.dashboard-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
}

.dashboard-slides {
  grid-column: 1 / 3;
}

.dashboard-header {
  grid-column: 1 / 3;
}

#dashboard-title {
  margin-bottom: 1rem;
}

#gratitude-input {
  background-color: var(--secondary_background_color);
  border-radius: 15px;
  border: 1px solid #ccc;
  box-shadow: var(--secondary_accent_color) 0px 0px 10px 0px inset;
  color: var(--primary_text_color);
  padding: 1rem;
  text-align: center;
  width: 60%;
}
</style>
