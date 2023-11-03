<template>
  <div class="page" v-if="page">
    <p class="page-content">{{ page.content }}</p>

    <div class="choice-area bordered-rounded w-25">
      <div v-if="page.name !== 'end'">
        <h2>Choose your path</h2>
        <div v-for="choice in page.choices" :key="choice.id">
          <PrimaryButton
            classes="margin-top-sm"
            :text="sentence(choice.text)"
            @clicked="continueAdventure(choice.id)"
          />
        </div>
      </div>
      <PrimaryButton
        classes="margin-top-md"
        text="Back to Adventures"
        @clicked="endAdventure"
      />
    </div>
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
  computed: {
    sentence() {
      return (text) => this.$stringUtils.convertStringToCase(text, "sentence");
    },
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
        (page) => page.id === pageId
      );
    });

    watchEffect(() => {
      if (pageId !== route.params.pageId) {
        pageId = route.params.pageId;
        console.log(page);

        // After the route parameter changes, update the page
        page.value = store.getters[getterString].find(
          (page) => page.id === pageId
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
