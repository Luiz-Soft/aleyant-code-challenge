<template>
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          class="absolute top-2 right-2 text-gray-500 hover:text-black"
          @click="close"
          aria-label="Close"
        >
          ✕
        </button>
        <!-- Empty for now -->
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    show: Boolean
  })
  
  const emit = defineEmits(['close'])
  
  function close() {
    emit('close')
  }
  </script>
  