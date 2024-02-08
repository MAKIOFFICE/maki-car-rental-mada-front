<script setup>
import { ref } from "vue";
import { DatePicker as ADatePicker } from "ant-design-vue";

defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});
const value = ref(undefined);
</script>

<template>
  <div class="flex flex-col items-start">
    <p class="label">{{ label }}</p>
    <a-date-picker
      v-model:value="value"
      show-time
      type="date"
      :placeholder="placeholder"
      style="width: 100%; height: 44px"
    />
  </div>
</template>
<style lang="scss" scoped>
.label {
  font-weight: 600;
  color: black;
}
</style>
