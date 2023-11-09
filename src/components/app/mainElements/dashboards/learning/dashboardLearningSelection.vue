<template>
  <div class="dashboard-page">
    <div class="dashboard-greeting">
      <h1>
        {{ dashboardMessage }}
      </h1>
    </div>

    <div class="dashboard-navigation">
      <goToButton destination="/" buttonText="Home"></goToButton>
    </div>

    <div class="dashboard-main">
      <div v-for="item in dashboardCards" :key="item.route">
        <router-link :to="item.route">
          <DashboardCard :title="item.title" :icon="item.icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardCard from "@/components/app/common/cards/dashboard/dashboardCard.vue";
import goToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "dashboardActivitiesMain",
  components: { DashboardCard, goToButton },
  data() {
    return {
      goToRoute: "/",
      dashboardMessage:
        "Welcome to the Learning Main Page. Here you will gain points that can be used for different activities.",
      dashboardCards: {
        flashCards: {
          title: "Flash Cards",
          icon: "bi bi-app",
          route: "learning/flash-cards",
        },
        quizzes: {
          title: "Quizzes",
          icon: "bi bi-pencil-square",
          route: "learning/quizzes",
        },
        videos: {
          title: "Videos",
          icon: "bi bi-youtube",
          route: "learning/videos",
        },
      },
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
