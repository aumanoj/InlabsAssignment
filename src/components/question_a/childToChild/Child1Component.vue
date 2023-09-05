<template>
  <div>
    <h2>Child 1 Component</h2>
    <button @click="sendMessageToChildB">Send Message to Child B</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessageToChildB() {
      this.$store.dispatch('questionA/updateChildBMessage', 'Hi from Child A')
    }
  }
}
</script>
