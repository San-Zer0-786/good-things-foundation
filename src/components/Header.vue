<template>
  <header>
    <div class="utility-header section">
      <div class="container utility">
        <div class="nav-item-container" href="/">
          <a href="#" class="utility-header__menu-link utility-header__menu-link--search" aria-labelledby="utility-header-label" role="button" aria-expanded="true">
              <svg aria-hidden="true" class="icon utility-header__menu-icon" width="36" height="36" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <g fill="black">
                  <path d="M15.055 30.391a15.034 15.034 0 1110.627-4.403 14.936 14.936 0 01-10.627 4.403zm0-25.743a10.706 10.706 0 107.56 3.135 10.638 10.638 0 00-7.56-3.135z"></path>
                  <path d="M33.44 35.906a2.16 2.16 0 01-1.526-.633l-9.284-9.285a2.16 2.16 0 013.052-3.056l9.288 9.288a2.16 2.16 0 01-1.53 3.686z"></path>
                </g>
              </svg>
              <span id="utility-header-label" class="utility-header__menu-label">
                Search </span>
            </a>
        </div>
        <div class="utility-header__menu">
          <div class="nav-item-container" href="/#" id="learn">
          <a href="#" class="utility-header__menu-link"  aria-labelledby="utility-header-label" role="button" aria-expanded="true">
              <div  class="utility-header__menu-label">
                Learn </div>
            </a>
        </div>

        <div class="nav-item-container no-padding" href="/#" id="donate" >
          <a href="#" class="utility-header__menu-link" aria-labelledby="utility-header-label" role="button" aria-expanded="true">
              <div class="utility-header__menu-label">
                Donate </div>
            </a>
        </div>
        </div>
      </div>
    </div>
    <div class="main-header section">
      <div class="container">
        <a class="logo" href="/">
          <img src="@/assets/images/good-things-foundation-logo.png" alt="Logo" />
        </a>
        <button class="red-bg mobile burger-menu" aria-expanded="true" aria-controls="mobile-menu">
          <svg aria-hidden="true" class="icon standard-header__menu-icon" width="46" height="36" viewBox="0 0 46 36" xmlns="http://www.w3.org/2000/svg"><path d="M42.923 5.755H2.77a2.77 2.77 0 010-5.538h40.154a2.77 2.77 0 010 5.538zM35.146 20.77H2.77a2.77 2.77 0 010-5.54h32.386a2.77 2.77 0 010 5.54h-.009zM23.33 35.783H2.77a2.77 2.77 0 110-5.538h20.57a2.77 2.77 0 110 5.538h-.01z" fill="currentColor"></path></svg> <span class="standard-header__menu-text">Menu</span>
        </button>
        <nav class="main-menu desktop">
          <ul class="nav">
            <li v-for="menuItem in menuItems" :key="menuItem.text">
              <a :href="menuItem.url">{{ menuItem.text }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
 import { useMenuStore } from '@/stores/menuStore'; // Import the store

  export default {
    name: 'Header',
    setup() {
    const menuStore = useMenuStore(); // Access the store instance

    return {
      menuItems: menuStore.menuItems, // Use the menuItems from the store
    };
  },
  }
</script>

<style scoped>
  @import '../assets/css/header.css';
</style>