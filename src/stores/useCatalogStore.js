import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchCatalog } from '@/services/catalogService'

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = ref(null)
  const loading = ref(false)
  const error = ref(null)

  const selectedProductIds = ref([])

  async function loadCatalog() {
    loading.value = true
    error.value = null
    try {
      catalog.value = await fetchCatalog()
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  function extractProducts(node) {
    const products = []
    if (node.id && node.name && node.description) {
      products.push(node)
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) {
        products.push(...extractProducts(child))
      }
    }
    return products
  }

  const filteredProducts = computed(() => {
    if (!catalog.value) return []
  
    const allProducts = extractProducts(catalog.value)
  
    if (selectedProductIds.value.length === 0) {
      return allProducts
    }
  
    return allProducts.filter(product =>
      selectedProductIds.value.includes(product.id)
    )
  })

  function updateSelectedProducts(ids) {
    selectedProductIds.value = ids
  }

  return {
    catalog,
    loading,
    error,
    loadCatalog,
    selectedProductIds,
    updateSelectedProducts,
    filteredProducts
  }
})
