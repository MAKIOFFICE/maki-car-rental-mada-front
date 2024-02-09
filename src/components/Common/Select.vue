<script setup>
import { ref } from "vue";
import ASelect from "ant-design-vue/lib/select";

defineProps({
  options: {
    type: Array,
    default: [
      {
        value: "jack",
        label: "Jack",
      },
      {
        value: "lucy",
        label: "Lucy",
      },
      {
        value: "tom",
        label: "Tom",
      },
    ],
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
});

const emit = defineEmits(['onFocus']);

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  emit('onFocus');
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
const value = ref(undefined);
</script>
<template>
  <div class="flex flex-col items-start">
    <p class="label">{{ label }}</p>
    <a-select
      v-model:value="value"
      show-search
      allow-clear
      :placeholder="placeholder"
      style="width: 100%"
      :options="options"
      :filter-option="filterOption"
      @blur="handleBlur"
      @change="handleChange"
      @click="handleFocus"
    >
    </a-select>
  </div>
</template>
<style lang="scss" scoped>
.label {
  font-weight: 600;
  color: black;
  background-color: green;
}
.ant-select-show-search .ant-select-customize-input .ant-select-selector{
  background-color: red;
}

</style>
