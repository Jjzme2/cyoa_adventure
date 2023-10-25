<template>
  <div>
    <div class="quote-card" v-if="randomQuote">
      <p>{{ randomQuote.QUOTE }}</p>
      -
      <a :href="randomQuote.SOURCE" target="blank">
        {{ randomQuote.AUTHOR }}
      </a>
    </div>
    <div v-else>
      <p>There is no quote to display</p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

export default {
  name: "quoteDisplay",
  data() {
    return {
      someData: "",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "quotes/getRandomQuote";
    const dispatchString = "quotes/fetchAll";

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    let randomQuote = computed(() => store.getters[getterString]);
    // randomQuote = JSON.parse(randomQuote);
    return { randomQuote };
  },
};
</script>
