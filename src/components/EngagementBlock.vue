<template>
  <section class="engagement-block section section-padding">
    <div class="container">
      <h2>{{ title }}</h2>
      <h3>{{ subtitle }}</h3>
      <div class="engagement-block__cta">
        <p>
          I am
          <select v-model="selectedOption1">
            <option v-for="option in dropdownOptions1" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
          and I
          <select v-model="selectedOption2">
            <option v-for="option in dropdownOptions2" :key="option.value" :value="option.value">{{ option.label }}</option>
          </select>
        </p>
        <button @click="handleButtonClick" class="red-bg">{{ buttonText }}</button>
      </div>
    </div>

  </section>
</template>
  
  <script>
  export default {
    name: 'EngagementBlock',
    props: {
      title: String,
      subtitle: String,
      fixedText: String,
      dropdownOptions1: Array,
      dropdownOptions2: Array,
      buttonText: String,
    },
    data() {
      return {
        selectedOption1: 'individual', // Store selected option for dropdwon, default as first element in array
        selectedOption2: 'learn', 
      };
    },
    methods: {
      handleButtonClick() {
        // Handle button click action
        // You can use the selected options or trigger an action here
      },
    },
  };
  </script>
  
<style scoped>
  @import '../assets/css/engagementBlock.css';
</style>
  