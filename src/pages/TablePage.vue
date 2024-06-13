<template>
  <FilterDate :decrement-date-from="10" @submit="filterUpdated" @clear="filterCleared"></FilterDate>
  <TableTemplate :table-data="tableDataFilteredPaginated" :table-data-header="tableDataHeader"></TableTemplate>
  <Paginator :rows="rowsPerPage" :first="first" :total-records="totalRecords" @page="updatePage($event)">
    <template #start="slotProps">
      Показано {{ slotProps.state.first + 1 }} -
      <template v-if="(slotProps.state.page + 1) * slotProps.state.rows > totalRecords">
        {{ totalRecords }}
      </template>
      <template v-else>
        {{ (slotProps.state.page + 1) * slotProps.state.rows }}
      </template>
      из {{ totalRecords }}
    </template>
  </Paginator>
</template>

<script>
import { tableData, tableDataHeader } from './../tableData';
import TableTemplate from './../components/TableTemplate.vue';
import FilterDate from '@/components/FilterDate.vue';
import Paginator from 'primevue/paginator';

export default {
  components: { TableTemplate, FilterDate, Paginator },
  data() {
    return {
      dateFrom: '0000-00-00',
      dateTo: new Date().toISOString().slice(0, 10),
      rowsPerPage: 5,
      totalRecords: 0,
      first: 0,
    };
  },
  computed: {
    tableDataHeader() {
      return tableDataHeader;
    },
    tableDataFiltered() {
      return tableData
        .map((item) => {
          let newItem = { ...item };
          for (let key in newItem) {
            if (this.isDate(newItem[key])) {
              newItem[key] = new Date(newItem[key])
                .toISOString()
                .slice(0, 10);
              return newItem;
            }
          }
        })
        .filter((item) => {
          for (let key in item) {
            if (this.isDate(item[key])) {
              console.log(item[key]);
              return (
                item[key] >= this.dateFrom &&
                item[key] <= this.dateTo &&
                (item[key] = item[key].split('-').reverse().join('.'))
              );
            }
          }
        });
    },
    tableDataFilteredPaginated() {
      const start = this.first;
      const end = this.first + this.rowsPerPage;
      return this.tableDataFiltered.slice(start, end);
    },
  },

  watch: {
    tableDataFiltered: {
      handler(newVal) {
        this.totalRecords = newVal.length;
      },
      immediate: true,
    },
  },

  methods: {
    filterUpdated(dateFrom, dateTo) {
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
    updatePage(event) {
      this.first = event.first;
    },
  },
};
</script>
