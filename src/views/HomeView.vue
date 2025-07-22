<template>
  <div class="p-4">
    <div v-if="catalogStore.catalog">
      <div>
        <div
          v-if="catalogStore.filteredProducts.length"
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
        >
          <div
            v-for="product in catalogStore.filteredProducts"
            :key="product.id"
          >
            <ProductCard :product="product" @click="openModal(product)" />
          </div>
        </div>
        <p v-else>No products selected.</p>
      </div>
    </div>

    <div v-else-if="catalogStore.loading">Loading catalog...</div>
    <div v-else-if="catalogStore.error">Error loading catalog.</div>

    <ProductDetailsModal
      :show="showProductModal"
      @close="showProductModal = false"
      :product="selectedProduct"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useCatalogStore } from '@/stores/useCatalogStore'
import ProductCard from '@/components/ProductCard.vue'
import ProductDetailsModal from '@/components/ProductDetailsModal.vue'

const catalogStore = useCatalogStore()
const showProductModal = ref(false)
const selectedProduct = ref(null)

function openModal(product) {
  selectedProduct.value = product
  showProductModal.value = true
}

onMounted(() => {
  if (!catalogStore.catalog) {
    catalogStore.loadCatalog()
  }
})
</script>
