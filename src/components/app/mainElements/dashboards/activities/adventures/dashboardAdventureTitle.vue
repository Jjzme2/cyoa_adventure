<template>
  <div class="dashboard-page">
    <div class="card adventure-title" v-if="adventure">
      <h1>{{ adventure.name }}</h1>
      <p>{{ adventure.description }}</p>

      <PrimaryButton text="Begin Adventure" @clicked="continueAdventure" />
    </div>
    <div class="card" v-else>
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

import PrimaryButton from "@/components/app/common/buttons/PrimaryButton.vue";

export default {
  name: "dashboardOpenAdventure",
  components: {
    PrimaryButton,
  },
  setup() {
    const store = useStore();
    const getterString = "adventures/getAll";
    const dispatchString = "adventures/fetchAll";
    const route = useRoute();
    const id = route.params.adventureId;
    console.log(id);

    // Fetch on component mount
    onBeforeMount(async () => {
      await store.dispatch(dispatchString);
    });

    const adventure = computed(() =>
      store.getters[getterString].find((adventure) => adventure.id == id)
    );

    return { adventure };
  },
  methods: {
    continueAdventure() {
      console.log("The adventure continues!");
      this.$router.push({
        name: "adventurePage",
        params: {
          adventureId: this.$route.params.adventureId,
          //   pageId: this.$route.params.pageId,
          pageId: "4b46be87-1115-4f30-a2d2-623c17c123bb",
        },
      });
    },
  },
};
</script>
