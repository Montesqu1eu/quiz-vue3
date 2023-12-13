<template>
  <div class="ctr">
    <transition
      name="fade"
      mode="out-in"
    >
      <Questions
          v-if="questionsAnswered < questions.length"
          :questions="questions"
          :questionsAnswered="questionsAnswered"
          @questionAnswered="questionAnswered"
      />
      <Result
        v-else
        :totalCorrect="totalCorrect"  
      />
    </transition>
    <button
      v-if="questionsAnswered === questions.length"
      @click.prevent="reset"
      type="button"
      class="reset-btn"
    >
      Reset
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Questions from '@/components/Questions.vue';
import Result from '@/components/Result.vue';

export default {
  name: 'App',
  components: {
    Questions,
    Result,
  },
  data() {
    return {
      questionsAnswered: 0,
      totalCorrect: 0,
    }
  },
  computed: {
    questions() {
      return this.$store.state.questionsData
    }
  },
  methods: {
    questionAnswered(answer) {
      if(answer) this.totalCorrect++;

      this.questionsAnswered++;
    },
    reset() {
      this.questionsAnswered = 0;
      this.totalCorrect = 0
    },
    ...mapActions(["loadQuestions"])
  },
  created() {
    this.loadQuestions();
  },
}

</script>

<style lang="scss">
@import '@/styles/main.css';

</style>
