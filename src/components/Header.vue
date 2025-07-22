<template>
    <header class="header">
      <button class="header__menu-button" @click="$emit('toggle-filters')">
        &#9776;
      </button>
      <h1 class="header__title">frontend-challenge</h1>
    </header>
  </template>
  
  <script setup>
  // Emits toggle-filters event to parent
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
        color: #d1d5db;
      }
    }
  
    &__title {
      font-size: 1.25rem;
      font-weight: 600;
    }
  }
  </style>
  