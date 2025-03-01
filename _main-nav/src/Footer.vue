<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__copyright">{{ copyright }}</div>
      <div class="footer__links" v-if="showLinks">
        <!-- Use the nav items from API if available -->
        <template v-if="navItems && navItems.length">
          <a 
            v-for="item in navItems" 
            :key="item.absoluteLink" 
            :href="item.absoluteLink"
            class="footer__link"
          >
            {{ item.title }}
          </a>
        </template>
        <!-- Fallback to slot if no items or for custom link content -->
        <slot v-else name="links"></slot>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { inject } from 'vue';

// Define props
const props = defineProps({
  copyright: {
    type: String,
    default: "© 2025 My App"
  },
  showLinks: {
    type: Boolean,
    default: true
  }
});

// Inject the navigation items provided by the parent app
const navItems = inject('navItems', []);
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.05);
  margin-top: auto;
 
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
 
  &__copyright {
    font-size: 0.9rem;
    color: #6c757d;
  }
 
  &__links {
    display: flex;
    gap: 1rem;
  }
  
  &__link {
    text-decoration: none;
    color: #6c757d;
    font-size: 0.9rem;
    
    &:hover {
      color: #343a40;
      text-decoration: underline;
    }
  }
}
</style>