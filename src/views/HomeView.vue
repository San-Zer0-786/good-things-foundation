<template>
  <main class="section">
    <Banner
      :bgImage="bannerData.bgImage"
      :title="bannerData.title"
      :content="bannerData.content"
      :buttonText="bannerData.buttonText"
      @buttonClick="handleBannerButtonClick"
    /> 
    <TwoColumns
      :columnImage="twoColumnsData.columnImage"
      :columnTitle="twoColumnsData.columnTitle"
      :columnContent="twoColumnsData.columnContent"
      :buttonText="twoColumnsData.buttonText"
    />
    <EngagementBlock
      :title="engagementBlockData.title"
      :subtitle="engagementBlockData.subtitle"
      :fixedText="engagementBlockData.fixedText"
      :dropdownOptions1="engagementBlockData.dropdownOptions1"
      :dropdownOptions2="engagementBlockData.dropdownOptions2"
      :buttonText="engagementBlockData.buttonText"
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
import TwoColumns from '@/components/TwoColumns.vue';
import EngagementBlock from '@/components/EngagementBlock.vue';
import FeaturedPosts from '@/components/FeaturedPosts.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    TwoColumns,
    EngagementBlock,
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
      twoColumnsData: {
        columnImage: "src/assets/images/column-bg-image.jpg",
        columnTitle: "We are a social change charity, helping people to imporve their lives through digital.",
        columnContent: "We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield",
        buttonText: "Learn more about us",
      },
      engagementBlockData: {
        title: "How can we help you?",
        subtitle: "Let us know who you are and what you're looking for, and we'll help get you to the right place.",
        fixedText: "Your fixed text",
        dropdownOptions1: [
          { label: "an Individual", value: "individual" },
          { label: "researcher", value: "researcher" },
          { label: "organisation", value: "communityOrganisation" },
        ],
        dropdownOptions2: [
          { label: "want to learn", value: "learn" },
          { label: "want to help", value: "help" },
          { label: "donate", value: "donate" },
        ],
        buttonText: "Start now",
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
