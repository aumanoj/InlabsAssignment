<template>
  <div>
    <h2>Child Component</h2>
    <button @click="sendMessageToParent">Send Message to Parent</button>
  </div>
</template>

<script>
export default {
  methods: {
    sendMessageToParent() {
      this.$emit('sendToParent', 'Hello from Child')
    }
  }
}
</script>
