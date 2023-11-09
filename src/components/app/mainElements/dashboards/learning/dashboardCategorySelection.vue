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
        destination="/learning"
        buttonText="Learning Main"
      ></goToButton>
    </div>

    <div class="dashboard-main">
      <div class="dashboard-sub-greeting">
        <categorySelector @selected="selectionMade" />
        <div class="h-input">
          <button @click="getRandom">Get Random</button>
        </div>
      </div>

      <div class="main-component-view">
        <div v-if="currentRoute == 'flashCards'">
          <p>
            {{ flashCardHeader }}
          </p>
          <flashCard
            v-if="selectedItem && selectedItem.id"
            :currentCard="selectedItem"
          />
        </div>

        <div v-else-if="currentRoute == 'quizzes'">
          <p>
            {{ quizHeader }}
          </p>
          <quiz
            v-if="selectedItem && selectedItem.id"
            :currentQuiz="selectedItem"
          />
        </div>

        <div v-else-if="currentRoute == 'videos'">
          <p>
            {{ videoHeader }}
          </p>
          <videoDisplay
            v-if="selectedItem && selectedItem.id"
            :currentVideo="selectedItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import categorySelector from "@/components/app/mainElements/learningComponents/categorySelector.vue";
import flashCard from "@/components/app/mainElements/learningComponents/flashCards/QaFlashCard.vue";
import quiz from "@/components/app/mainElements/learningComponents/quizzes/quizDisplay.vue";
import videoDisplay from "@/components/app/mainElements/learningComponents/videoDisplay.vue";
import goToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "dashboardFlashCardCategory",
  components: {
    goToButton,
    categorySelector,
    flashCard,
    quiz,
    videoDisplay,
  },
  data() {
    return {
      goToRoute: "/learning",
      availableContent: [],
      selectedCategory: null,
      selectedItem: null,
      dashboardMessage:
        "Select a category of flash cards and a random will display. Once viewed, points will be credited to your account.",
      quizHeader:
        "Select a category of quiz and a random will display. Once completed, points will be credited to your account.",
      videoHeader:
        "Select a category of video and a random will display. Once viewed, points will be credited to your account.",
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
    retrievedData() {
      return this.$store.getters[this.$route.name + "/getAll"];
    },
  },
  watch: {
    currentRoute() {
      this.dispatchAndGet();
    },
  },
  methods: {
    async dispatch() {
      await this.$store.dispatch(this.$route.name + "/fetchAll");
    },

    selectionMade(id) {
      this.dispatch()
        .then(() => {
          console.log(id);
          let contentArray = this.retrievedData;

          if (!contentArray) {
            console.warn("No content found");
            return;
          }

          const contentInCategory = contentArray.filter(
            (item) => item.category_id === id
          );
          this.availableContent = contentInCategory;
        })
        .catch((err) => {
          console.error(err);
        });
    },

    getRandom() {
      if (this.availableContent.length === 0) {
        this.$store.dispatch("appState/setError", {
          message: "No content available",
          type: "warning",
          origin: "dashboardFlashCardCategory.vue",
          notify: true,
        });
        this.$router.push({
          name: "ErrorView",
        });
        return;
      }
      const randomItem =
        this.availableContent[
          Math.floor(Math.random() * this.availableContent.length)
        ];

      this.selectedItem = randomItem;
    },
  },
};
</script>
