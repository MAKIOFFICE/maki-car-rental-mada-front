<script setup>
import { Modal } from "ant-design-vue";
import { ref, watch } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  isShowModal: {
    type: Boolean,
    default: false,
  },
});
const showModal = ref(props.isShowModal);
const emit = defineEmits(["onBack"]);

watch(
  () => props.isShowModal,
  (first) => {
    showModal.value = first;
  },
  { immediate: true, deep: true }
);

function onClickBack() {
  emit("onBack");
}
</script>

<template>
  <Modal
    :open="showModal"
    :title="props.title"
    :footer="null"
    :closable="true"
    width="800px"
    @cancel="onClickBack"
    wrapClassName="modal-wrap"
  >
    <div :class="[props.title ? '' : 'modal__content']">
      <slot />
    </div>
  </Modal>
</template>

<style lang="scss">
.modal-wrap {
  .ant-modal-content {
    border-radius: 12px;
    overflow: auto;
  }
  .modal__content {
    margin-top: 40px;
  }
  .ant-modal-title {
    color: #899e27;
    font-size: medium;
    font-weight: 600;
    padding-right: 30px;
  }
  .ant-modal-close-x {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.ant-modal-root {
  height: 100%;
  width: 100%;
  background-color: red;
}
</style>
