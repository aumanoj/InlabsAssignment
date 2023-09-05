<template>
  <div>
    <h2>Parent Component</h2>
    <input v-model="message" @input="sendMessage" />
    <ChildComponent :receivedMessage="message" />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      this.$store.dispatch('updateMessage', this.message)
    }
  }
}
</script>
