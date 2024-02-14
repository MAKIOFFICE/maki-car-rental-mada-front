<template>
  <div>
    <div>
      <h2 class="title-header">Mentions légales</h2>
      <table class="table">
        <tbody>
          <tr v-for="(item, index) in dataAuto"
          :key="index">
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
                    ipsum at consequuntur vero fugit. Vel!`,
  },
];
</script>
<style lang='scss' scoped>
.title-header{
  font-size: 25px;
  color: #2d3e52;
  padding: 5px 20px;
}
</style>
