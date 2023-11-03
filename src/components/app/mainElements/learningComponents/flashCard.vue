<template>
  <div class="dashboard-page">
    <div
      class="card w-md"
      style="margin: 3rem auto"
      v-if="currentCard.id"
      @click="flipCard"
    >
      <p class="question p-3" v-if="!flipped">{{ currentCard.question }}</p>
      <p class="answer p-3" v-else>{{ currentCard.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "flashCard",
  data() {
    return {
      flipped: false,
    };
  },
  props: {
    currentCard: {
      type: Object,
      required: true,
    },
  },
  methods: {
    flipCard() {
      this.flipped = !this.flipped;
    },
  },
  watch: {
    currentCard() {
      this.flipped = false;
    },
  },
};
</script>
