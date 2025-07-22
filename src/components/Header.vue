<template>
  <header class="header">
    <button class="header__menu-button" @click="$emit('toggle-filters')">
      &#9776;
    </button>

    <h1 class="header__title">
      <div>{{ $t('app-title') }}</div>
    </h1>

    <select  v-model="selectedLocale" class="header__lang-selector">
      <option value="eng">ENG</option>
      <option value="pt">PT</option>
    </select>
  </header>
</template>

<script setup>
import i18n from '@/plugins/i18n'
import { ref, watch } from 'vue'

const selectedLocale = ref(i18n.global.locale.value)

function changeLanguage(event) {
  i18n.global.locale.value = event.target.value
  selectedLocale.value = i18n.global.locale.value
}

watch(selectedLocale, (newLocale) => {
  i18n.global.locale.value = newLocale
})
</script>
  
  <style lang="scss" scoped>
  .header {
    width: 100vw;
    position: relative;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    background-color: #111827;
    color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
    &__menu-button {
      font-size: 1.5rem;
      margin-right: 1rem;
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      transition: color 0.2s ease;
  
      &:hover {
        color: #d1d5db00;
      }
    }

    &__lang-selector {
    margin-left: auto;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.375rem;
    cursor: pointer;

  }
  
    &__title {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
  </style>
  