import { createApp, ref } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

// Shared state for navigation items
const navItems = ref([])

// Fetch navigation items from the API
async function fetchNavItems() {
  try {
    const response = await fetch('https://api.labcat.workers.dev/')
    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`)
    }
    const data = await response.json()
    navItems.value = data

    // Initialize the apps after data is loaded
    initializeApps()
  } catch (error) {
    console.error('Failed to fetch navigation items:', error)
    // Initialize with empty nav items if the fetch fails
    initializeApps()
  }
}

// Initialize both apps with the fetched data
function initializeApps() {
  // Initialize the header app
  const headerApp = createApp(Header, {
    title: 'My Header App',
    showNav: true
  })

  // Provide the nav items to the header app
  headerApp.provide('navItems', navItems)
  headerApp.mount('#header-app')

  // Initialize the footer app
  const footerApp = createApp(Footer, {
    copyright: '© 2025 My App',
    showLinks: true
  })

  // Provide the same nav items to the footer app
  footerApp.provide('navItems', navItems)
  footerApp.mount('#footer-app')
}

// Start the fetch process
fetchNavItems()