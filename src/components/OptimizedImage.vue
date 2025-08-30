<template>
  <div class="optimized-image" :class="{ 'loading': isLoading, 'error': hasError }">
    <img
      v-if="!hasError"
      :src="src"
      :alt="finalAlt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
      loading="lazy"
    />
    <div v-else class="image-fallback">
      <span class="fallback-icon">{{ finalFallbackIcon }}</span>
      <span class="fallback-text">{{ finalAlt }}</span>
    </div>
    <div v-if="isLoading" class="image-skeleton">
      <div class="skeleton-shimmer"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { imageMetadata, type ImageKey } from '@/assets/images/index'

interface Props {
  src: string
  alt?: string
  imageClass?: string
  fallbackIcon?: string
  imageKey?: ImageKey
}

const props = withDefaults(defineProps<Props>(), {
  fallbackIcon: '🖼️'
})

const isLoading = ref(true)
const hasError = ref(false)

// Computed properties para usar metadados quando disponíveis
const finalAlt = computed(() => {
  if (props.imageKey && imageMetadata[props.imageKey]) {
    return imageMetadata[props.imageKey].alt
  }
  return props.alt || 'Imagem'
})

const finalFallbackIcon = computed(() => {
  if (props.imageKey && imageMetadata[props.imageKey]) {
    return imageMetadata[props.imageKey].fallbackIcon
  }
  return props.fallbackIcon
})

const onImageLoad = () => {
  isLoading.value = false
}

const onImageError = () => {
  isLoading.value = false
  hasError.value = true
}
</script>

<style scoped>
.optimized-image {
  position: relative;
  display: inline-block;
}

.optimized-image img {
  display: block;
  max-width: 100%;
  height: auto;
}

.image-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--gray-100);
  border: 2px dashed var(--gray-300);
  border-radius: var(--border-radius);
  padding: var(--spacing-8);
  text-align: center;
  min-height: 200px;
}

.fallback-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-3);
  opacity: 0.6;
}

.fallback-text {
  color: var(--gray-600);
  font-size: var(--font-size-sm);
}

.image-skeleton {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gray-200);
  border-radius: var(--border-radius);
  overflow: hidden;
}

.skeleton-shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--gray-200) 0%,
    var(--gray-100) 50%,
    var(--gray-200) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.optimized-image.loading .image-skeleton {
  display: block;
}

.optimized-image:not(.loading) .image-skeleton {
  display: none;
}
</style>
