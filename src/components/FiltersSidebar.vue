<template>
    <div class="fixed inset-0 z-50 pointer-events-none">
      <div
        v-if="showFilters"
        class="absolute inset-0 bg-black/15 pointer-events-auto"
        @click.self="hideFilters"
      ></div>
      <transition name="drawer">
        <div
          v-if="showFilters"
          class="absolute left-0 top-0 h-full w-72 bg-white shadow-lg p-4 pointer-events-auto"
        >
          <button
            @click="hideFilters"
            class="absolute top-2 right-2 text-gray-500 hover:text-black"
            aria-label="Close"
          >
            ✕
          </button>
          <h2 class="text-lg font-semibold mb-4 justify-start">{{ $t('filters') }}</h2>
          <CategoryTree />
        </div>
      </transition>
    </div>
  </template>
  
<script setup>
import CategoryTree from '@/components/CategoryTree.vue'

const props = defineProps({
    showFilters: Boolean
  })
  
  const emit = defineEmits(['toggle-filters', 'close-filters'])
  
  function hideFilters() {
    emit('close-filters')
  }
  </script>
  
  <style scoped>
  .drawer-enter-active,
  .drawer-leave-active {
    transition: transform 0.3s ease;
  }
  .drawer-enter-from {
    transform: translateX(-100%);
  }
  .drawer-enter-to {
    transform: translateX(0);
  }
  .drawer-leave-from {
    transform: translateX(0);
  }
  .drawer-leave-to {
    transform: translateX(-100%);
  }
  </style>
  