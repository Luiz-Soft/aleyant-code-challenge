<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
  >
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
      <button
        class="absolute top-2 right-2 text-gray-500 hover:text-black"
        @click="close"
        aria-label="Close"
      >
        ✕
      </button>

      <div v-if="product" class="space-y-4">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-48 object-cover rounded"
        />
        <h2 class="text-xl font-semibold">{{ product.name }}</h2>
        <p class="text-gray-700">{{ product.description }}</p>
        <p class="text-lg font-bold">{{ product.priceRange }}</p>
        <button
          @click="handleBuyClick"
          class="bg-blue-600 text-white font-bold px-4 py-2 rounded hover:bg-blue-700"
        >
          {{ $t('buy-it') }}
        </button>
      </div>

      <p v-else class="text-gray-500">{{ $t('catalog.no-products') }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'

const props = defineProps({
  show: Boolean,
  product: Object
})

const emit = defineEmits(['close'])

function close() {
  emit('close')
}

function handleBuyClick() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  })
}
</script>
