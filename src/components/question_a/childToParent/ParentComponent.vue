<template>
  <div>
    <h2>Parent Component</h2>
    <div class="inner-section">
      <p>Message from child: {{ childMessage }}</p>
      <ChildComponent @sendToParent="receiveMessage" />
    </div>
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
      childMessage: ''
    }
  },
  methods: {
    receiveMessage(message) {
      this.childMessage = message
    }
  }
}
</script>
