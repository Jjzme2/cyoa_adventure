<template>
  <div class="dashboard-page">
    <h1>{{ dashboardMessage }}</h1>

    <div class="learning-options">
      <button @click="goToFlashCards">Flash Cards</button>
      <button @click="goToQuizzes">Quizzes</button>
      <button @click="goToVideos">Videos</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardActivitiesMain",
  data() {
    return {
      dashboardMessage:
        "Welcome to the Learning Main Page. Here you will gain points that can be used for different activities.",
    };
  },
  methods: {
    goToFlashCards() {
      this.$router.push({ name: "flashCards" });
    },
    goToQuizzes() {
      this.$router.push({ name: "quizzes" });
    },
    goToVideos() {
      this.$router.push({ name: "videos" });
    },
  },
};
</script>
