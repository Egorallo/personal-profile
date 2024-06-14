<!-- <template>
  <div class="table-page">
    <FilterDate :decrement-date-from="10" @submit="filterUpdated" @clear="filterCleared"></FilterDate>
    <TableTemplate :table-data="tableDataFilteredPaginated" :table-data-header="tableDataHeader"></TableTemplate>
    <Paginator :rows="rowsPerPage" :first="first" :total-records="totalRecords" class="my-paginator"
      :class="!clickedNoPaginate && totalRecords >= rowsPerPage ? '' : 'pagi-hide'" @page="updatePage($event)">
      <template #start="slotProps">
        Показано {{ slotProps.state.first + 1 }} -
        <template v-if="(slotProps.state.page + 1) * slotProps.state.rows > totalRecords">
          {{ totalRecords }}
        </template>
        <template v-else>
          {{ (slotProps.state.page + 1) * slotProps.state.rows }}
        </template>
        из {{ totalRecords }}
        <template v-if="!clickedNoPaginate && totalRecords >= rowsPerPage">
          <button class="btn-show-all" @click="noPaginate">Показать все</button>
        </template>
        <template v-else-if="clickedNoPaginate && totalRecords <= rowsPerPage">
          <button class="btn-show-all" @click="noPaginate">Уменьшить</button>
        </template>
      </template>
    </Paginator>
  </div>
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
      clickedNoPaginate: false,
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
              // console.log(item[key]);
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
    filterCleared(dateFrom) {
      // console.log(dateFrom, dateTo);
      this.dateFrom = dateFrom;
      this.dateTo = new Date().toISOString().slice(0, 10);
    },
    isDate(someDate) {
      return !isNaN(Date.parse(someDate));
    },
    updatePage(event) {
      this.first = event.first;
    },
    noPaginate() {
      console.log("clicked paginate" + this.clickedNoPaginate);
      this.clickedNoPaginate = this.clickedNoPaginate ^ 1;
      if (this.clickedNoPaginate) {
        this.rowsPerPage = 10000;
      } else {
        this.rowsPerPage = 5;
      }

    }
  },
};
</script>


<style>
.pagi-hide {
  .p-paginator-prev {
    display: none;
  }

  & .p-paginator-next {
    display: none;
  }

  & .p-paginator-pages {
    display: none;
  }
}

.p-paginator {
  display: flex;
  justify-content: space-between;
  width: 94%;
  bottom: 10px;
  margin-top: 20px;
  padding-left: 10px;
}

.p-paginator .p-paginator-pages .p-paginator-page:not(:first-child) {
  border: 1px solid gray;
  border-radius: 0px;
  border-left: 0px;
  margin: 0;
}

.p-paginator .p-paginator-pages .p-paginator-page:last-child {
  border: 1px solid gray;
  border-left: 0;
  border-radius: 0 5px 5px 0;
}

.p-paginator .p-paginator-pages .p-paginator-page:first-child {
  border: 1px solid gray;
  border-radius: 5px 0 0 5px;
  margin: 0;
}

.p-paginator .p-paginator-pages .p-paginator-page:only-child {
  border: 1px solid gray;
  border-radius: 5px;
  margin: 0;
}

.p-paginator .p-paginator-prev {
  border: 1px solid gray;
  border-radius: 5px;
  margin-right: 12px;
}

.p-paginator .p-paginator-next {
  border: 1px solid gray;
  border-radius: 5px;
  margin-left: 12px;
}

.p-paginator .p-paginator-last {
  display: none;
}

.p-paginator .p-paginator-first {
  display: none;
}

.btn-show-all {
  margin-left: 12px;
  margin-right: 12px;
  color: #1661ad;
  display: inline;
  cursor: pointer;
  text-align: center;
  outline: none !important;
  padding: 0;
  border: 0;
  font-size: 16px;
  background: transparent;
  line-height: 1.2 !important;
}
</style> -->

<template>
  <FilteringTable :table-data="tableData" :table-data-header="tableDataHeader" :rows-on-page="5"></FilteringTable>
</template>



<script>
import FilteringTable from './../components/FilteringTable.vue'
import { tableData, tableDataHeader } from '../tableData';

export default {
  components: { FilteringTable },
  data() {
    return {
      tableData,
      tableDataHeader
    }
  }
}
</script>