<script setup>
// import { Dropdown } from 'ant-design-vue';
import { Dropdown, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue';

defineProps({
    dropData: {
        type: Array,
        default: [
            {
                label: "EN",
                link: "#",
            },
            {
                label: "FR",
                link: "#",
            },
            {
                label: "中國人",
                link: "#",
            },
        ],
    },
});
</script>
<template>
    <Dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click.prevent>
            <slot />
        </a>
        <template #overlay>
            <a-menu>
                <a-menu-item v-for="(item, index) in dropData" :key="index">
                    <a :href="item.link">{{ item.label }}</a>
                </a-menu-item>
            </a-menu>
        </template>
    </Dropdown>
</template>