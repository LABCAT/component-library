<template>
  <header class="header">
    <div class="header__content">
      <div class="header__logo">{{ title }}</div>
      <nav class="header__nav" v-if="showNav">
        <slot name="navigation"></slot>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: "App Header"
  },
  showNav: {
    type: Boolean,
    default: true
  }
});
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
}
</style>
