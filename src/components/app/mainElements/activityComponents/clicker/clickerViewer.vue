<template>
  <div class="dashboard-page">
    <div class="dashboard-greeting">
      <h1>
        {{ dashboardMessage }}
      </h1>
    </div>

    <div class="dashboard-navigation">
      <goToButton destination="/" buttonText="Home"></goToButton>
      <br />
      <goToButton
        destination="/activities"
        buttonText="Activities Main"
      ></goToButton>
    </div>

    <div class="dashboard-main">
      <p>This is the clicker game.</p>
      <p>Score: {{ score }}</p>
      <ClickableObject
        imageSource="/public/images/clicker/image1.jpg"
        imgWidth="200"
        imgHeight="200"
        @clickSubmitted="submit"
      ></ClickableObject>
    </div>
  </div>
</template>

<script>
import ClickableObject from "@/components/app/mainElements/activityComponents/clicker/clickableObject.vue";
import goToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "clickerView",
  components: {
    ClickableObject,
    goToButton,
  },
  data() {
    return {
      dashboardMessage: "Welcome to the Clicker Game.",
      goToRoute: "/activities",
      score: 0,
    };
  },
  methods: {
    submit() {
      this.score++;
    },
  },
};
</script>
