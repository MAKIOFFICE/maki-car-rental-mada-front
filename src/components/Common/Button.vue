<script setup>
defineProps({
  type: {
    type: String,
  },
  label: {
    type: String,
  },
});
</script>

<template>
  <button class="primary" v-if="type === 'primary'">
    <p>{{ label }} </p><slot />
  </button>
  <button class="secondary" v-else-if="type === 'secondary'">
    {{ label }}
  </button>
  <button class="access" v-else-if="type === 'access'">{{ label }}</button>
  <button class="icon" v-else-if="type === 'icon'">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.primary {
  display: flex;
  padding: 14px 80px;
  justify-content: center;
  align-items: center;
  width: fit-content;
  gap: 12px;
  border-radius: 8px;
  border: none;
  background-color: #8da044;
  color: #fff;
  font-weight: 600;
  p {
    margin-bottom: 0;
  }
}
.access {
  display: flex;
  padding: 14px 80px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border: none;
  border-radius: 60px;
  color: #000;
  background-color: darkgray;
}
.icon {
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--color-black);
}
</style>
