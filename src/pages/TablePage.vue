<template>
  <FilterDate :decrement-date-from="10" @submit="filterUpdated" @clear="filterCleared"></FilterDate>
  <table>
    <thead>
      <th v-for="(header, index) in tableDataHeader" :key="index">{{ header }}</th>
    </thead>
    <tbody>
      <tr v-for="row in tableData" :key="row.id">
        <template v-if="row.date_pay >= dateFrom && row.date_pay <= dateTo">
          <td>{{ row.date_pay.split("-").reverse().join(".") }}</td>
          <td>{{ row.client }}</td>
          <td>{{ row.info }}</td>
          <td v-if="parseFloat(row.skidka.replace('%', '')) == 0.00">-</td>
          <td v-else>{{ row.skidka }}</td>
          <td>{{ row.sum }}</td>
          <td>{{ row.partner_percent }}</td>
          <td>{{ row.partner_sum }}</td>
          <td v-if="row.accept == 1"><img class="accept-img" src="./../assets/check.png" alt="OK"></td>
          <td v-else><img class="accept-img" src="./../assets/x-mark.png"></td>
        </template>
      </tr>
    </tbody>

  </table>
</template>


<script>
import FilterDate from './../components/FilterDate';
import { tableData } from './../tableData'
import { tableDataHeader } from './../tableData';

console.log(tableData);
tableData.forEach((item, i) => {
  item.id = i + 1;
});

export default {
  components: { FilterDate },
  data() {
    return {
      dateFrom: "0000-00-00",
      dateTo: new Date().toISOString().slice(0, 10),
    }
  },
  computed: {
    tableData() {
      return tableData;
    },
    tableDataHeader() {
      return tableDataHeader;
    }
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
    }
  },

}
</script>


<style>
table {
  font-size: 14px;
}

.accept-img {
  width: 12px;
  height: 12px;
}
</style>