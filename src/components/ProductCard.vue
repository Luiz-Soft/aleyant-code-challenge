<template>
  <div class="product-card">
    <div class="product-card__image-wrapper">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-card__image"
      />
    </div>
    <div class="product-card__info">
      <h3 class="product-card__name">{{ product.name }}</h3>
      <p class="product-card__price">{{ product.priceRange }}</p>
      <p class="product-card__description">{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.product-card {
  max-width: 300px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  }

  &__image-wrapper {
    height: 180px;
    background-color: #f9fafb;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__info {
    padding: 1rem;
  }

  &__name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #111827;
    margin-bottom: 0.25rem;
  }

  &__price {
    font-size: 0.875rem;
    font-weight: 500;
    color: #2563eb;
    margin-bottom: 0.5rem;
  }

  &__description {
    font-size: 0.875rem;
    color: #6b7280;
    line-height: 1.4;
  }
}
</style>
