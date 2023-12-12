<template>
    <section class="two-column section">
      <div class="column-left column section-padding">
        <img src="@/assets/images/column-bg-image.jpg" alt="Column Image" class="column-image" />
      </div>
      <div class="column-right column section-padding container">
        <div class="content">
          <h2>{{ columnTitle }}</h2>
          <p>{{ columnContent }}</p>
          <button class="green mt-24">{{ buttonText }}</button>
        </div>
        <img src="@/assets/images/good-things-foundation-icon.svg" class="icon"/>
      </div>
    </section>
</template>
  
  <script>
  export default {
    name: 'TwoColumn',
    props: {
      columnImage: String,
      columnTitle: String,
      columnContent: String,
      buttonText: String,
    },
  };
  </script>
  
  <style scoped>
  /* Styles for the TwoColumn component */
    @import '../assets/css/twoColumns.css';
    .column-image {
      background-image: url();		
    }
  </style>
  