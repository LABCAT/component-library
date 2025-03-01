<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">{{ title }}</div>
      <nav class="header__nav" v-if="showNav">
        <!-- Use the nav items from API if available -->
        <template v-if="navItems && navItems.length">
          <a 
            v-for="item in navItems" 
            :key="item.absoluteLink" 
            :href="item.absoluteLink"
            class="header__nav-item"
          >
            {{ item.title }}
          </a>
        </template>
        <!-- Fallback to slot if no items or for custom nav content -->
        <slot v-else name="navigation"></slot>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// Define props
const props = defineProps({
  title: {
    type: String,
    default: "App Header"
  },
  showNav: {
    type: Boolean,
    default: true
  }
});

// Inject the navigation items provided by the parent app
const navItems = inject('navItems', []);
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
 
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
 
  &__logo {
    font-weight: bold;
    font-size: 1.2rem;
  }
 
  &__nav {
    display: flex;
    gap: 1rem;
  }
  
  &__nav-item {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    
    &:hover {
      color: #007bff;
    }
  }
}
</style>