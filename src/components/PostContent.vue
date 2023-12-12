<template>
  <section class="post-content section section-padding">
      <div class="container">
        <div class="post-container">
          <h2>{{postTitle}}</h2>
          <p>{{postContent}}</p>
      </div>
  </div>
      
  </section>
</template>
  
  <script>
  import { useLoremIpsumStore } from '@/stores/loremIpsumStore'; // Import your Pinia store
  import { useRoute  } from 'vue-router';
  import { ref, watch, onMounted } from 'vue';

  export default {
    name: 'PostContent',
    setup() {
      const route = useRoute();
      const loremIpsumStore = useLoremIpsumStore();

      const postTitle = ref('');
      const postContent = ref('');

      const updatePostContent = (postSlug) => {
        if (postSlug) {
          // Fetch new post content based on the postSlug
          postTitle.value = postSlug.url.replace(/-/g, ' ');
          postContent.value = loremIpsumStore.getRandomLoremIpsum();
        }
      };

      // Watch for changes in the route params
      watch(route, (to, from) => {
        updatePostContent(to.params);
      });

      onMounted(() => {
        updatePostContent(route.params); // Initial setup
      });

      return {
        postTitle,
        postContent,
      };
    },
  };
  </script>
  
<style scoped>
  @import '../assets/css/post.css';
</style>
  