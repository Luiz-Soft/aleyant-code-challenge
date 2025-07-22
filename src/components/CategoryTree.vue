<template>
  <ul class="pl-4 border-l border-gray-300">
    <li v-for="(item, index) in rootItems" :key="index">
      <div
        class="flex items-center gap-2 py-1"
        :class="{ 'font-semibold text-gray-800': !item.id }"
      >
        <button
          v-if="item.children"
          @click="toggle(item)"
          class="text-sm w-5 text-left text-gray-500"
        >
          {{ isExpanded(item) ? '▾' : '▸' }}
        </button>
        <span v-else class="w-5"></span>

        <input
          v-if="item.id"
          type="checkbox"
          :value="item.id"
          v-model="selectedProductIds"
          class="cursor-pointer"
        />

        <span :class="{ 'cursor-pointer': !item.id }">
          {{ item.name }}
        </span>
      </div>

      <CategoryTree
        v-if="item.children && isExpanded(item)"
        :items="item.children"
      />
    </li>
  </ul>
</template>

<script setup>
import { ref, computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCatalogStore } from '@/stores/useCatalogStore'
import CategoryTree from './CategoryTree.vue'

// Optional prop: only used for recursive children
const props = defineProps({
  items: Array
})

const catalogStore = useCatalogStore()
const { selectedProductIds } = storeToRefs(catalogStore)

// Root-level items: use prop if passed (child), otherwise use store (root)
const rootItems = computed(() =>
  props.items || catalogStore.catalog?.children || []
)

const expandedSet = ref(new Set())

function toggle(item) {
  const key = item.name
  if (expandedSet.value.has(key)) {
    expandedSet.value.delete(key)
  } else {
    expandedSet.value.add(key)
  }
}

function isExpanded(item) {
  return expandedSet.value.has(item.name)
}
</script>

<style scoped>
ul {
  list-style: none;
  padding-left: 0.5rem;
}
button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
}
</style>
