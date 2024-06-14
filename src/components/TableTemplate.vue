<template>
  <div class="table-container">
    <table>
      <thead>
        <th class="head-header" v-for="(header, index) in tableDataHeader" :key="index">{{ header }}</th>
      </thead>
      <tbody>
        <tr class="data-row" v-for="(row, rowIndex) in tableData" :key="rowIndex">
          <td v-for="(value, index) in row" :key="index">
            <template v-if="checkFloat(value) && isNaN(Date.parse(value))">
              {{ value.toString().replace('.', ',') }}
            </template>
            <template v-else>
              {{ value }}
            </template>
          </td>
        </tr>
      </tbody>

    </table>
    <div class="pagi-container">
      <slot></slot>
    </div>
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
.table-container {
  display: inline-block;
  overflow-x: auto;
  margin: auto;
}

table {
  font-size: 14px;
  margin-top: 20px;
  max-width: 1080px;
  width: auto;
  table-layout: fixed;
  border: 2px solid #ccc;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
}

tr {
  height: 70px;
}

th,
td {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  padding: 5px;
  min-width: 85px;
  max-width: 180px;
  text-wrap: wrap;
  word-break: break-word;
}

td {
  line-height: 21px;
}

th {
  text-align: left;
  color: rgba(51, 57, 76, .5);
}

tbody tr:hover {
  background-color: #e6f1f2;
}

.p-paginator.p-component {
  padding: 0px;
  margin-left: 0px;
  margin-right: 0px;
}
</style>