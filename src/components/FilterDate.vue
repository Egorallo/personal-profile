<template>
  <div class="filter-wrapper">
    <div class="filter-container">
      <div class="filter-item">
        <div class="date-item">
          <template v-if="!isDateFromInputFocused">
            <input class="placeholder-date" type="text" :placeholder="formattedDateFrom"
              @focus="isDateFromInputFocused = true" />
          </template>
          <template v-else>
            <input v-model="dateFromInput" class="placeholder-date" type="date"
              @blur="isDateFromInputFocused = false" />
          </template>
        </div>
      </div>
      <div class="filter-item">
        <div class="date-item">
          <template v-if="!isDateToInputFocused">
            <input class="placeholder-date" type="text" :placeholder="formattedDateTo"
              @focus="isDateToInputFocused = true" />
          </template>
          <template v-else>
            <input v-model="dateToInput" class="placeholder-date" type="date" @blur="isDateToInputFocused = false" />
          </template>
        </div>
      </div>
      <div class="filter-item">
        <button class="confirm-button" @click="submittedFilter">Показать</button>
      </div>
      <div class="filter-item">
        <button class="clear-button" @click="clearedFilter">Очистить фильтр</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    decrementDateFrom: { type: Number, default: 1 },
  },
  emits: ['submit', 'clear'],

  data() {
    return {
      dateToInput: null,
      dateFromInput: null,
      currentDateTo: null,
      currentDateFrom: null,
      isDateToInputFocused: false,
      isDateFromInputFocused: false,
    };
  },

  computed: {
    formattedDateTo() {
      if (!this.currentDateTo) {
        const date = new Date();
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      }
      return this.currentDateTo;
    },
    formattedDateFrom() {
      if (!this.currentDateFrom) {
        const date = new Date();
        date.setDate(date.getDate() - this.decrementDateFrom);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        return `${day}.${month}.${year}`;
      }
      return this.currentDateFrom;
    },
  },
  watch: {
    dateToInput(newVal) {
      if (newVal) {
        const date = new Date(newVal);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        this.currentDateTo = `${day}.${month}.${year}`;
      }
    },
    dateFromInput(newVal) {
      if (newVal) {
        const date = new Date(newVal);
        const day = ('0' + date.getDate()).slice(-2);
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const year = date.getFullYear();
        this.currentDateFrom = `${day}.${month}.${year}`;
      }
    },
  },
  created() {
    const date = new Date();

    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    this.currentDateTo = `${day}.${month}.${year}`;
    this.dateToInput = `${year}-${month}-${day}`;

    date.setDate(date.getDate() - this.decrementDateFrom);
    let dayFrom = ('0' + date.getDate()).slice(-2);
    month = ('0' + (date.getMonth() + 1)).slice(-2);
    year = date.getFullYear();
    this.dateFromInput = `${year}-${month}-${dayFrom}`;
    this.currentDateFrom = `${dayFrom}.${month}.${year}`;
  },
  methods: {
    submittedFilter() {
      this.$emit('submit', this.dateFromInput, this.dateToInput);
    },
    clearedFilter() {
      this.$emit('clear', '0000-00-00', this.dateToInput);
    },
  },
};
</script>

<style>
.confirm-button {
  color: #fff !important;
  background-color: #ed3153;

  cursor: pointer;
  border-radius: 4px;
  text-align: center;
  outline: none;
  border: 0;
  padding: 12px 40px;
  font-size: 16px;
}

.confirm-button:hover {
  background-color: #d02a44;
}

.clear-button {
  margin-left: 12px;
  margin-right: 12px;
  color: #1661ad;
  display: table;
  cursor: pointer;
  text-align: center;
  outline: none !important;
  padding: 0;
  border: 0;
  font-size: 16px;
  background: transparent;
  border-bottom: 1px dotted !important;
  line-height: 1.2 !important;
}

.clear-button:hover {
  color: firebrick;
}

.filter-wrapper {
  margin-top: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
}

.filter-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  align-content: flex-start;
}

.filter-item {
  margin: 12px;
  box-sizing: border-box;
  max-width: 200px;
  width: 100%;
}

.date-item {
  width: 170px;
  border-radius: 4px;
  padding: 11px;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #33394c;
  border: 1px solid rgba(184, 196, 208, 0.4);
  position: relative;
  cursor: pointer;
}

.placeholder-date {
  border: 0;
  padding: 0 10px;
  width: 92%;
  font-family: Open Sans, Helvetica, Arial, sans-serif;
  font-size: 14px;
}

input:focus {
  outline: none;
}
</style>
