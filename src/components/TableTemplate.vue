<template>
  <table>
    <thead>
      <th v-for="(header, index) in tableDataHeader" :key="index">{{ header }}</th>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in tableData" :key="rowIndex">
        <td v-for="(value, index) in row" :key="index">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>



export default {
  props: {
    tableData: {
      type: Array,
      default: () => []
    },
    tableDataHeader: {
      type: Array,
      default: () => []
    }
  },

}
</script>

<style>
table {
  font-size: 14px;
}
</style>