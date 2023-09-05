<template>
  <div id="app" class="section">
    <DynamicForm :formBlocks="formBlocks" />
  </div>
</template>

<script>
import DynamicForm from '../components/question_c/DynamicForm.vue'

export default {
  components: {
    DynamicForm
  },
  data() {
    return {
      formBlocks: [
        {
          token: 'PERSON_NAME',
          type: 'text',
          props: {
            title: 'Enter your name',
            required: true,
            placeholder: 'e.g. John Doe'
          }
        },
        {
          token: 'IS_PERSON MINOR',
          type: 'checkbox',
          props: {
            title: 'Is the current person minor?',
            default: false
          }
        },
        {
          token: 'PERSON_DOB',
          type: 'date',
          props: {
            title: 'Enter your DOB',
            required: 'IS_PERSON MINOR',
            placeholder: 'e.g. 01/01/2000'
          }
        }
      ]
    }
  }
}
</script>
