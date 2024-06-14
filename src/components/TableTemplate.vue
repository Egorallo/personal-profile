<template>
  <div class="table-container">
    <table>
      <thead>
        <th class="head-header" v-for="(header, index) in tableDataHeader" :key="index">{{ header }}</th>
      </thead>
      <tbody>
        <tr class="data-row" v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(value, index) in row" :key="index">
            <template v-if="checkFloat(value)">
              {{ value.toString().replace('.', ',') }}
            </template>
            <template v-else>
              {{ value }}
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
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
  methods: {
    checkFloat(str) {
      console.log(!isNaN(parseFloat(str)));
      return !isNaN(parseFloat(str));
    }
  }

}
</script>

<style>
table {
  font-size: 14px;
  margin-top: 20px;
  max-width: 1080px;
  width: 100%;
  table-layout: fixed;
  border: 2px solid #ccc;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
}

.table-container {
  position: relative;
  overflow: hidden;
}

tr {
  height: 70px;
}

th,
td {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 10px;
  word-break: break-word;
}

th {
  text-align: left;
  color: rgba(51, 57, 76, .5);
}

tbody tr:hover {
  background-color: #e6f1f2;
}
</style>