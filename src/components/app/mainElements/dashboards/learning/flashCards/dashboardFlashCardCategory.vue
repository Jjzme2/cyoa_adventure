<template>
  <div class="dashboard-page">
    <h1>Here you will select a category of Flash card</h1>
    <selectionTool
      customClass="light w-sm centered flat rounded"
      label="Select a category"
      :selectionOptions="{
        defaultMessage: '---Select a category---',
        options: categories,
      }"
      @selectionMade="getRandom"
    />
    <!--
    <select
      class="pop rounded"
      style="margin-right: 3rem"
      v-model="selectedCategory"
    >
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </select>

    <button @click="getRandom(selectedCategory)">Get random</button>
 -->

    <p>
      Below, you will conditionally see the flash card if one exists [Has an
      ID].
    </p>
    <flashCard v-if="currentCard.id" :currentCard="currentCard" />
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import flashCard from "@/components/app/mainElements/learningComponents/flashCard.vue";
import selectionTool from "@/components/app/base/TheSelector.vue";

export default {
  name: "dashboardFlashCardCategory",
  components: {
    flashCard,
    selectionTool,
  },
  data() {
    return {
      currentCard: {},
      selectedCategory: null,
    };
  },
  computed: {
    flashCards() {
      return this.$store.getters["flashCards/getAll"];
    },
  },
  setup() {
    const store = useStore();
    const getterString = "flashCards/getCategories";
    const dispatchString = "flashCards/fetchCategories";

    const categories = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch("flashCards/fetchAll");
      await store.dispatch(dispatchString);
    });

    return { categories };
  },
  methods: {
    getRandom(id) {
      const flashCardsInCategory = this.flashCards.filter(
        (item) => item.category_id === id
      );

      const randomItem =
        flashCardsInCategory[
          Math.floor(Math.random() * flashCardsInCategory.length)
        ];

      this.currentCard = randomItem;
    },
  },
};
</script>
