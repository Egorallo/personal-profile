<template>
  <FilterDate :decrement-date-from="10" @submit="filterUpdated" @clear="filterCleared"></FilterDate>
  <TableTemplate :table-data="tableDataFiltered" :table-data-header="tableDataHeader"></TableTemplate>
</template>


<script>
import { tableData, tableDataHeader } from './../tableData'
import TableTemplate from './../components/TableTemplate.vue'
import FilterDate from '@/components/FilterDate.vue';

export default {
  components: { TableTemplate, FilterDate },
  data() {
    return {
      dateFrom: "0000-00-00",
      dateTo: new Date().toISOString().slice(0, 10),
    }
  },
  computed: {
    tableDataHeader() {
      return tableDataHeader;
    },
    tableDataFiltered() {
      return tableData.map((item) => {
        for (let key in item) {
          if (this.isDate(item[key])) {
            item[key] = new Date(item[key]).toISOString().slice(0, 10);
            console.log("Before: " + item[key]);
            if (item[key] <= this.dateFrom || item[key] >= this.dateTo) {
              break;
            }
            // item[key] = item[key].split("-").reverse().join(".");

          }
          return item;
        }
      })
    },
  },
  methods: {
    filterUpdated(dateFrom, dateTo) {
      console.log(dateFrom, dateTo);
      this.dateFrom = dateFrom;
      this.dateTo = dateTo;
    },
    filterCleared(dateFrom, dateTo) {
      console.log(dateFrom, dateTo);
      this.dateFrom = dateFrom;
      this.dateTo = new Date().toISOString().slice(0, 10);
    },
    isDate(someDate) {
      return !isNaN(Date.parse(someDate));
    },


  },

}
</script>
