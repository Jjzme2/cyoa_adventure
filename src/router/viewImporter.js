// Main
import HomeView from "../views/main/HomeView.vue";
import ErrorView from "../views/main/ErrorView.vue";
import AboutView from "../views/main/AboutView.vue";

//  Learning
import LearningView from "../views/learning/SelectionView.vue";
import CategoryView from "../views/learning/CategoryView.vue";

// Activities
import ActivitiesView from "../views/activities/MainView.vue";

// Activities.Adventures
import SelectAdventureView from "../views/activities/adventures/SelectionView.vue";
import TitleView from "../views/activities/adventures/TitleView.vue";
import PageView from "../views/activities/adventures/PageView.vue";

// Activities.Clicker Game
import clickerView from "../views/activities/clicker/MainView.vue";

const components = {
  main: {
    Home: HomeView,
    Error: ErrorView,
    About: AboutView,
  },
  learning: {
    Selection: LearningView,
    Category: CategoryView,
  },
  activities: {
    Main: ActivitiesView,
    adventures: {
      Selection: SelectAdventureView,
      Title: TitleView,
      Page: PageView,
    },
    clicker: {
      Main: clickerView,
    },
  },
};

export default components;
