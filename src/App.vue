<template>
  <div class="ctr">
    <Questions
        v-if="questionsAnswered < questions.length"
        :questions="questions"
    />
    <Result v-else/>
    <button type="button" class="reset-btn">Reset</button>
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
    }
  },
  computed: {
    questions() {
      return this.$store.state.questionsData
    }
  },
  methods: {
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
