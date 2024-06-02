<!-- YearMonthSelector.vue -->
<template>
    <div class="container">
        <div class="years">
            <select class="select" v-model="selectedYear" @change="onYearChange">
                <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
            </select>
        </div>
        <div class="list">
            <div class="list-item" v-for="(month, index) in months" :key="index" @click="goToMonth(index)">
                {{ month }}
            </div>
        </div>
    </div>
  </template>
  
  <script>

  
  export default {
    components: {  },
    data() {
      return {
        selectedYear: new Date().getFullYear(),
        years: Array.from({ length: 10 }, (_, i) => new Date().getFullYear() + i), // Generate years from current year to next 10 years
        months: [
          'January', 'February', 'March', 'April', 'May', 'June', 
          'July', 'August', 'September', 'October', 'November', 'December'
        ]
      };
    },
    methods: {
      onYearChange() {
        // Optionally handle year change if needed
      },
      goToMonth() {
        // const selectedDate = `${this.selectedYear}-${String(monthIndex + 1).padStart(2, '0')}-01`;
        // this.$refs.calendarComponent.goToMonth(selectedDate);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    background-color: rgb(114, 116, 231);
  }
  .years {
    height: 60px;
  }
  /* Add any additional styling here if needed */
  .list {
    height: calc(100% - 60px);
    list-style-type: none;
    padding: 0;
  }
  .list-item {
    height: calc(100% / 12);
    display: flex;
    padding: 0 32px;
    align-items: center;
    color: #fff;
  }
  .list-item:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.25);
  }





  .custom-select {
  min-width: 350px;
  position: relative;
}



.select {
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}

.select::before,
.select::after {
  --size: 0.3rem;
  content: "";
  position: absolute;
  right: 1rem;
  pointer-events: none;
}

.select::before {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: var(--size) solid black;
  top: 40%;
}

.select::after {
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: var(--size) solid black;
  top: 55%;
}
  </style>
  