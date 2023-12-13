<template>
  <div class="progress">
    <div
      :style="`width: ${(currentQuestion / totalQuestions) * 100}%`"
      class="bar"
    ></div>
    <div class="status">
      {{ currentQuestion }} out of {{ totalQuestions }} questions answered
    </div>
  </div>
</template>

<script>
export default {
  name: 'Progress',
  props: {
    totalQuestions: {
      type: Number,
      default: 0,
    },
    currentQuestion: {
      type: Number,
      default: 0,
    }
  },
}
</script>
