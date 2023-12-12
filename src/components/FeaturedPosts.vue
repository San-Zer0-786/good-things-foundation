<template>
    <section class="featured-posts section section-padding">
        <div class="container">
            <div class="section-header">
                <h2>{{ title }}</h2>
                <h3>{{ subtitle }}</h3>
            </div>
            <div class="posts">
                <div class="post" v-for="post in posts" :key="post.id">
                    <div class="title">{{ post.title }}</div>
                    <p class="excerpt">{{ post.excerpt }}</p>
                    <button class="red black-border" style="margin: 0 auto;" @click="goToPost(post.url)">Read more</button>
                </div>
            </div>
            <button @click="navigateToParentPage" class="red">{{ buttonText }}</button>
      </div>
    </section>
</template>
  
<script>
  export default {
    name: 'FeaturedPosts',
    props: {
      title: String,
      subtitle: String,
      posts: Array, // Array of relevant articles with properties like title, excerpt, etc.
      buttonText: String,
    },
    methods: {
      navigateToParentPage() {
        // Handle button click action to navigate to the parent page
        // For example, route to a different page using this.$router.push('/parent-page-url');
      },
      goToPost(url) {
        this.$router.push(`/post/${url}`);
      }
    },
  };
</script>
  
<style scoped>
  @import '../assets/css/featuredPosts.css';
</style>
  