<template>
  <div>
    <div>
      <input type="text" placeholder="Search" v-model="searchQuery" />
    </div>
    <div class="col-md-8">
      <h2 class="title-header">Conditions générales de vente</h2>
      <table class="table">
        <tbody v-for="(item, index) in filteredData" :key="index">
          <tr>
            <th scope="row">{{ item.number }}</th>
            <td>
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const dataAuto = [
  {
    number: 1,
    description: `Lorem ipsum dolor sit amet tsara consectetur, adipisicing elit. Nam
                  autem eaque eligendi reiciendis in quisquam, repellendus
                  deleniti inventore quos sapiente sequi provident, ipsa iste
                  ipsum at consequuntur vero fugit. Vel!`,
  },
  {
    number: 2,
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam
                  autem eaque eligendi reiciendis in quisquam, repellendus
                  deleniti inventore quos sapiente sequi provident, ipsa iste
                  ipsum at consequuntur vero fugit. Vel! salama`,
  },
];

const searchQuery = ref("");

const filteredData = computed(() => {
  return dataAuto.filter((item) =>
    item.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>
