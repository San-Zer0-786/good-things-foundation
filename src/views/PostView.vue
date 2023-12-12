<template>
  <main class="section">
    <Banner
      :bgImage="bannerData.bgImage"
      :title="bannerData.title"
      :content="bannerData.content"
      :buttonText="bannerData.buttonText"
      @buttonClick="handleBannerButtonClick"
    />
    <PostContent
      :title= "postTitle"
      :content= "postContent"
    />
    <FeaturedPosts
      :title="featuredPostsData.title"
      :subtitle="featuredPostsData.subtitle"
      :posts="featuredPostsData.posts"
      :buttonText="featuredPostsData.buttonText"
    />
    </main>
</template>
  
<script>
  import Header from '@/components/Header.vue'; 
  import Banner from '@/components/Banner.vue'; 
  import PostContent from '@/components/PostContent.vue';
  import EngagementBlock from '@/components/EngagementBlock.vue';
  import FeaturedPosts from '@/components/FeaturedPosts.vue';
  
  export default {
    name: 'Post',
    props: {
      postTitle: String,
      postContent: String,
    },
    components: {
      Banner,
      PostContent,
      FeaturedPosts
    },
    data() {
      return {
        bannerData: {
            bgImage: "@/assets/images/banner-bg-image.png",
            title: "Get online week 2021",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            buttonText: "Get Involved Now!",
            buttonUrl: "./get-online-week",
        },
        featuredPostsData: {
        title: "What do we do?",
        subtitle: "You might not have heard of us, but we're the people behind the following impactful programmes",
        posts: [
          { id: 1, title: 'Get online week', excerpt: 'Lorem ipsum dolor sit amet', url: 'get-online-week'},
          { id: 2, title: 'Learn my way', excerpt: 'Lorem ipsum dolor sit amet', url: 'learn-my-way' },
          { id: 3, title: 'Make it click', excerpt: 'Lorem ipsum dolor sit amet', url: 'make-it-click' },
          { id: 4, title: 'Digital you', excerpt: 'Lorem ipsum dolor sit amet', url: 'digital-you' },
        ],
        buttonText: 'More about what we do',
      },
      };
    },
    methods: {
      handleBannerButtonClick() {
        // Handle banner button click action
        // For example, route to a different page using this.$router.push('/your-page-url');
      }
    }
  }
</script>
  