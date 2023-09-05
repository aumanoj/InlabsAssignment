<script setup>
/* Section i */
import ParentComponentA from '../components/question_a/parentToChild/ParentComponent.vue'
/* section ii */
import ParentComponentB from '../components/question_a/childToParent/ParentComponent.vue'
/* section iii */
import Child1Component from '../components/question_a/childToChild/Child1Component.vue'
import Child2Component from '../components/question_a/childToChild/Child2Component.vue'
</script>

<template>
  <div class="section">
    <h1>Parent to Child Question A - i</h1>
    <div class="inner-section">
      <ParentComponentA />
      <ChildComponentA />
    </div>
  </div>
  <div class="section">
    <h1>Child to Parent Question A - ii</h1>
    <div class="inner-section">
      <ParentComponentB />
    </div>
    <!-- <ChildComponentB /> -->
  </div>
  <div class="section">
    <h1>Child to Child Question A - iii</h1>
    <div class="inner-section">
      <Child1Component />
      <Child2Component />
    </div>
  </div>
</template>

<style></style>
