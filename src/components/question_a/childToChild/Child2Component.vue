<template>
  <div>
    <h2>Child 2 Component</h2>
    <p>Received message from Child A: {{ childBMessage }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    childBMessage() {
      return this.$store.state.questionA.childBMessage
    }
  }
}
</script>
