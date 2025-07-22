<template>
  <div class="p-4">
    <div v-if="catalogStore.catalog">
      <div>
        <div
          v-if="catalogStore.filteredProducts.length"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          <div v-for="product in catalogStore.filteredProducts" :key="product.id">
            <ProductCard :product="product" />
          </div>
        </div>

        <p v-else>No products selected.</p>
      </div>
    </div>

    <div v-else-if="catalogStore.loading">Loading catalog...</div>
    <div v-else-if="catalogStore.error">Error loading catalog.</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCatalogStore } from '@/stores/useCatalogStore'
import ProductCard from '@/components/ProductCard.vue'

const catalogStore = useCatalogStore()
const showFilters = ref(false)

function toggleFilters() {
  showFilters.value = !showFilters.value
}

onMounted(() => {
  if (!catalogStore.catalog) {
    catalogStore.loadCatalog()
  }
})
</script>

<style scoped>

</style>
