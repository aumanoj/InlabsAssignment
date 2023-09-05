<template>
  <div>
    <h2>Child Component</h2>
    <p>Received message from parent: {{ receivedMessage }}</p>
  </div>
</template>

<script>
export default {
  props: ['receivedMessage']
}
</script>
