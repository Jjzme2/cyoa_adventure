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
      <div class="adventure-library">
        <adventureCard
          v-for="item in adventures"
          :key="item.id"
          :item="item"
          @click="openAdventure(item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import adventureCard from "@/components/app/common/cards/api/adventureCard.vue";
import goToButton from "@/components/app/common/buttons/GoToButton.vue";

export default {
  name: "dashboardAdventure",
  components: { adventureCard, goToButton },
  data() {
    return {
      goToRoute: "/",
      dashboardMessage:
        "Welcome to the Adventure Main Page. Here you will go on magical adventures using your acquired points.",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "adventures/getAll";
    const dispatchString = "adventures/fetchAll";

    const adventures = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { adventures };
  },
  methods: {
    openAdventure(id) {
      //   this.$loggerUtils.sendLog(id);
      this.$router.push({ name: "adventure", params: { adventureId: id } });
    },
  },
};
</script>
