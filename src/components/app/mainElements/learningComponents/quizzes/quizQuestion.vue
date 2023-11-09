<template>
  <div>
    <p>{{ questionData.question }}</p>
    <div v-for="choice in questionData.choices" :key="choice">
      <input type="radio" :value="choice" v-model="selection" />
      <label :for="choice">{{ choice }}</label>
    </div>
    <div class="h-input">
      <button @click="submitAnswer">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "quizQuestion",
  props: {
    questionData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selection: "",
    };
  },
  methods: {
    submitAnswer() {
      const answerResponse = {
        correct: this.selection === this.questionData.answer,
        selection: this.selection,
        answer: this.questionData.answer,
        question: this.questionData.question,
      };
      this.$emit("answerSubmitted", answerResponse);
    },
  },
};
</script>
