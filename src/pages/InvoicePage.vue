<template>
  <FilteringTable :table-data="tableDataInvoice" :table-data-header="tableDataHeaderInvoice" :rows-on-page="5">
  </FilteringTable>
</template>



<script>
import FilteringTable from './../components/FilteringTable.vue'
import { tableDataInvoice, tableDataHeaderInvoice } from '../tableData';

export default {
  components: { FilteringTable },
  data() {
    return {
      tableDataInvoice,
      tableDataHeaderInvoice
    }
  }
}
</script>