<template>
	<!-- Background Image -->
	<section class="banner-bg">
    <div class="banner section section-padding ">
        <!-- Content: Title, Content, and Button -->
        <div class="banner-content container">
            <h1>{{ title }}</h1>
            <p>{{ content }}</p>
            <button @click="handleButtonClick" class="red">{{ buttonText }}</button>
        </div>
      </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'Banner',
    props: {
      bgImage: String,
      title: String,
      content: String,
      buttonText: String,
    },
    methods: {
      handleButtonClick() {
        // Handle button click action
      },
      removeQuotes(path) {
        return path.replace(/['"`]/g, ''); // Remove quotes from the string
      }
    }
    // Other component options like data, computed, etc.
  }
  </script>
  
<style scoped>
  @import '../assets/css/banner.css';
	.banner-bg {
		background-image: url(@/assets/images/banner-bg-image.png);		
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>