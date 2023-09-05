<template>
  <div>
    <h2>Dynamic Form</h2>
    <form @submit.prevent="submitForm">
      <div v-for="block in formBlocks" :key="block.token" class="block-section">
        <label :for="block.token">{{ block.props.title }}</label>
        <template v-if="block.type === 'text'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :required="block.props.required"
            :placeholder="block.props.placeholder"
          />
        </template>
        <template v-else-if="block.type === 'checkbox'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :default="block.props.default"
          />
        </template>
        <template v-else-if="block.type === 'radio'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :default="block.props.default"
          />
        </template>
        <template v-else-if="block.type === 'date'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :required="formData['IS_PERSON MINOR']"
            :placeholder="block.props.placeholder"
          />
        </template>

        <template v-else-if="block.type === 'email'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :default="block.props.default"
            :placeholder="block.props.placeholder"
          />
        </template>

        <template v-else-if="block.type === 'textarea'">
          <textarea
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :default="block.props.default"
            :placeholder="block.props.placeholder"
            :rows="block.props.rows"
            :cols="block.props.cols"
          />
        </template>
        <template v-else-if="block.type === 'number'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :default="block.props.default"
            :placeholder="block.props.placeholder"
          />
        </template>

        <template v-else-if="block.type === 'file'">
          <input
            :type="block.type"
            :id="block.token"
            :name="block.token"
            v-model="formData[block.token]"
            :default="block.props.default"
            :placeholder="block.props.placeholder"
          />
        </template>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    formBlocks: Array // Array of JSON blocks
  },
  data() {
    return {
      formData: {}
    }
  },
  methods: {
    submitForm() {
      // Validate the form data
      if (this.validateForm()) {
        alert('Form submitted successfully!!')
        console.log('Form submitted with data:', this.formData)
      } else {
        alert('Please fill all required fields.')
      }
    },
    validateForm() {
      // Check if all required fields are filled out
      for (const block of this.formBlocks) {
        if (block.props.required && !this.formData[block.token]) {
          return false
        }
      }
      return true
    }
  }
}
</script>

<style scoped></style>
