<template>
  <div class="page content-area" v-if="page">
    {{ page.CONTENT }}

    <div class="choice-area">
      <div v-if="page.NAME !== 'end'">
        <h2>Choose your path</h2>
        <div v-for="choice in JSON.parse(page.CHOICES).pages" :key="choice.id">
          <PrimaryButton
            classes="margin-top-sm"
            :text="choice.text"
            @clicked="continueAdventure(choice.id)"
          />
        </div>
      </div>
    </div>

    <PrimaryButton
      classes="margin-top-lg"
      text="Back to Adventures"
      @clicked="endAdventure"
    />
  </div>
  <div class="card" v-else>
    <h1>Loading...</h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onBeforeMount, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";

import PrimaryButton from "@/components/app/common/buttons/PrimaryButton.vue";

export default {
  name: "dashboardOpenAdventure",
  components: {
    PrimaryButton,
  },
  setup() {
    const store = useStore();
    const getterString = "adventures/getPages";
    const dispatchString = "adventures/fetchPagesInAdventure";
    const route = useRoute();
    const adventureId = route.params.adventureId;
    let pageId = route.params.pageId;

    // Initialize page as a ref
    const page = ref(null);

    onBeforeMount(async () => {
      await store.dispatch(dispatchString, adventureId);
      // After dispatch is complete, set the page
      page.value = store.getters[getterString].find(
        (page) => page.ID === pageId
      );
    });

    watchEffect(() => {
      if (pageId !== route.params.pageId) {
        pageId = route.params.pageId;
        // After the route parameter changes, update the page
        page.value = store.getters[getterString].find(
          (page) => page.ID === pageId
        );
      }
    });

    return { page };
  },
  methods: {
    continueAdventure(selectedId) {
      this.$router.push({
        name: "adventurePage",
        params: {
          adventureId: this.$route.params.adventureId,
          pageId: selectedId,
        },
      });
    },
    endAdventure() {
      this.$router.push({
        name: "adventures",
      });
    },
  },
};
</script>
