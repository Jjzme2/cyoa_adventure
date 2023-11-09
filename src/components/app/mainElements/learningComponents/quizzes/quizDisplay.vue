<template>
  <div class="dashboard-page">
    <div class="light card w-md centered spaced-v-2" v-if="currentQuiz.id">
      <div v-for="(question, index) in currentQuiz.quiz_data" :key="index">
        <p>
          Question {{ index + 1 }}:
          <quizQuestion
            :questionData="question"
            @answerSubmitted="submitAnswer"
          ></quizQuestion>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import quizQuestion from "@/components/app/mainElements/learningComponents/quizzes/quizQuestion.vue";

export default {
  name: "quizDisplay",
  components: {
    quizQuestion,
  },
  props: {
    currentQuiz: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selection: "",
      submittedAnswers: [],
    };
  },
  methods: {
    submitAnswer(submittedData) {
      // Check if the question has been answered before
      const existingAnswer = this.submittedAnswers.find(
        (answer) => answer.question === submittedData.question
      );

      if (existingAnswer) {
        // If it's not the first time, update the values
        existingAnswer.selection = submittedData.selection;
        existingAnswer.correct = submittedData.correct;
        existingAnswer.isFirstAnswer = false;
      } else {
        // If it's the first time, add a new entry
        this.submittedAnswers.push({
          question: submittedData.question,
          selection: submittedData.answer,
          correct: submittedData.correct,
          isFirstAnswer: true,
        });
      }

      console.log(this.submittedAnswers);
    },
  },
};
</script>
