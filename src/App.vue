<template>
  <div class="app">
    <Header @toggle-filters="toggleFilters" />
    <FiltersSidebar
      :show-filters="showFilters"
      @close-filters="closeFilters"
    />

    <WelcomeModal />

    <main class="app__main">
      <router-view @toggle-filters="toggleFilters" />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import FiltersSidebar from '@/components/FiltersSidebar.vue'
import WelcomeModal from '@/components/WelcomeModal.vue'
import ProductDetailsModal from '@/components/ProductDetailsModal.vue'

const showFilters = ref(false)

function toggleFilters() {
  showFilters.value = !showFilters.value
}

function closeFilters() {
  showFilters.value = false
}
</script>
