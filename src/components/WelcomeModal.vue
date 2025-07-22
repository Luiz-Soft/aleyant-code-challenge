<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.45)]"
  >
    <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
      <p class="text-gray-500 mb-4">
        Welcome to my application!  
        I took a few hours to develop it. I used Tailwind, SCSS, Vue 3, Vite, i18n, and Pinia.  
        I consider the code to be well refined, and I hope you agree with me.  
        <br />
        Regards,<br />
        Luiz
      </p>
      <button
        @click="handleClick"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Let me see the application!
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'

const show = ref(true)

function handleClick() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  })

  show.value = false
}
</script>
