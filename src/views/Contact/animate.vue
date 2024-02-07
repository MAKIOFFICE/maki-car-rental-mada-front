<template>
    <div>
      <a @click="toggleIconNext(1)">
        <i :class="{ 'bi-dash-circle-fill': isIconChangedn1, 'bi-plus-circle-fill': !isIconChangedn1 }"></i>
        Text
      </a>
      <a @click="toggleIconNext(2)">
        <i :class="{ 'bi-dash-circle-fill': isIconChangedn2, 'bi-plus-circle-fill': !isIconChangedn2 }"></i>
        Text1
      </a>
      <a @click="toggleIconNext(3)">
        <i :class="{ 'bi-dash-circle-fill': isIconChangedn3, 'bi-plus-circle-fill': !isIconChangedn3 }"></i>
        Text2
      </a>
      <a @click="toggleIconNext(4)">
        <i :class="{ 'bi-dash-circle-fill': isIconChangedn4, 'bi-plus-circle-fill': !isIconChangedn4 }"></i>
        Text4
      </a>
      <a @click="toggleIconNext(5)">
        <i :class="{ 'bi-dash-circle-fill': isIconChangedn5, 'bi-plus-circle-fill': !isIconChangedn5 }"></i>
        Text5
      </a>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const isIconChangedn1 = ref(false);
  const isIconChangedn2 = ref(false);
  const isIconChangedn3 = ref(false);
  const isIconChangedn4 = ref(false);
  const isIconChangedn5 = ref(true);
  
  const toggleIconNext = (buttonNumber) => {
    if (buttonNumber === 1) {
      isIconChangedn1.value = !isIconChangedn1.value;
    } else if (buttonNumber === 2) {
      isIconChangedn2.value = !isIconChangedn2.value;
    } else if (buttonNumber === 3) {
      isIconChangedn3.value = !isIconChangedn3.value;
    }else if (buttonNumber === 4) {
      isIconChangedn4.value = !isIconChangedn4.value;
    }else if (buttonNumber === 5) {
      isIconChangedn5.value = !isIconChangedn5.value;
    }
  };
  </script>
  
  <style scoped></style>
  