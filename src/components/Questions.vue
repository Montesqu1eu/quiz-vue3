<template>
  <div class="questions-ctr">
    <Progress
      v-if="questions"
      :currentQuestion="questionsAnswered"
      :totalQuestions="questions.length"
    />
    <TransitionGroup name="fade">
      <div
        v-for="(question, index) in questions"
        :key="question.question"
        v-show="questionsAnswered === index"
        class="single-question"
      >
        <div class="question">
          {{ question.question }}
        </div>
        <div class="answers">
            <div
              v-for="answer in question.answers"
              :key="answer.text"
              @click.prevent="selectedAnswer(answer.is_correct)"
              class="answer"
            >
              {{ answer.text }}
            </div>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import Progress from './Progress.vue';
export default {
  name: 'Questions',
  components: {
    Progress,
  },
  props: {
    questions: {
      type: Array,
      default: () => [],
    },
    questionsAnswered: {
      type: Number,
      default: 0,
    }
  },
  methods: {
    selectedAnswer(answer) {
      this.$emit('question-answered', answer);
    }
  }
}
</script>
