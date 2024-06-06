<!-- YearMonthSelector.vue -->
<!-- YearMonthSelector.vue -->
<template>
  <div class="container">
      <div class="years">
          <select class="select" v-model="selectedYear" @change="onYearChange">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
      </div>
      <div class="list">
          <label class="list-item" v-for="(month, index) in months" :key="index" @change="goToMonth" :for="month">
              <input class="sr-only" type="radio" name="month" v-model="selectedMonth" :id="month" :value="index">
              <span>{{ month }}</span>
          </label>
      </div>
  </div>
</template>
  
  <script>
  export default {
    components: {  },
    props: {
      events: {
        type: Array,
        required: true
      },
      date: {
        type: Date,
        required: true
      }
    },
    watch: {
      events: {
        immediate: true,
        handler(update) {
          this.groups = this.getGroupedEvents(update ?? []);
        }
      },
      date: {
        immediate: true,
        handler(update) {
          console.log('MonthListComponent: ', update);
          if ( !(update instanceof Date) ) {
            return;
          }
          
          this.selectedYear = update.getFullYear();
          this.selectedMonth = update.getMonth();
        }
      }
    },
    data() {
      const now = new Date();
      // const utc = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))

      return {
        groups: [],
        selectedMonth: now.getMonth(),
        selectedYear: now.getFullYear(),
        years: Array.from({ length: 25 }, (_, i) => now.getFullYear() + (i - 8)),
        months: [
          'January', 
          'February', 
          'March', 
          'April', 
          'May', 
          'June', 
          'July', 
          'August', 
          'September', 
          'October', 
          'November', 
          'December'
        ]
      };
    },
    methods: {
      getRangeDates() {
        return { 
          startDate: new Date(this.selectedYear, this.selectedMonth, 1),
          endDate: new Date(this.selectedYear, this.selectedMonth + 1, 0)
        };
      },
      getGroupedEvents(events) {
        return Object.values(
            events?.reduce((accum, event) => {
                const key = event.start?.getMonth() 
                    +'.'+ event.start?.getDate();

                if ( accum[key] ) {
                    accum[key].push(event);
                }
                else {
                    accum[key] = [ event ];
                }

                return accum;
            }, {})
        );
      },
      onYearChange() {
        console.log('onYearChange', this.getRangeDates());
        this.$emit('date-change', this.getRangeDates());
      },
      goToMonth() {
        console.log('onMonthChange', this.getRangeDates());
        this.$emit('date-change', this.getRangeDates());
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
  /* .list {
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
  } */

.sr-only{
  position: absolute;
width: 1px;
height: 1px;
padding: 0;
margin: -1px;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
border-width: 0;
}

.list {
  display: flex;
  height: calc(100% - 60px);
  list-style: none;
  padding: 0;
  margin: 0;
  
  flex-direction: column;
  align-items: center;
}

.list-item {
  display: flex;
  width: 100%;
  height: calc(100% / 12);
  position: relative;
  font-size: 1.5rem;
  align-items: center;
  margin: 0;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.85));
  background-clip: text;
  color: transparent;
  transition: opacity 0.5s ease;
  opacity: 1;
}
.list-item span{
  display: flex;
  align-items: center;
  flex-grow: 1;
  align-self: stretch;
  padding: 16px 32px;
}
.list .list-item:nth-child(1) span,
.list .list-item:nth-child(12) span{
  opacity: 0.3;
}

.list .list-item:nth-child(2) span,
.list .list-item:nth-child(11) span{
  opacity: 0.4;
}

.list .list-item:nth-child(3) span,
.list .list-item:nth-child(10) span{
  opacity: 0.5;
}

.list .list-item:nth-child(4) span,
.list .list-item:nth-child(9) span{
  opacity: 0.6;
}

.list .list-item:nth-child(5) span,
.list .list-item:nth-child(8) span {
  opacity: 0.7;
}

.list .list-item:nth-child(6) span,
.list .list-item:nth-child(7) span {
  opacity: 0.8;
}

.list .list-item:hover span{
  opacity: 1;
}
.list .list-item span:after{
  content: '\0020';
  width: calc(100% - 20px);
  height: 100%;
  position: absolute;
  top: 0;
  left: 10px;
  border-radius: 999px;
  background-color: #fff;
  opacity: 0;
}

.list .list-item input:checked + span{
  opacity: 1;
}
.list .list-item input:checked + span:after{
  opacity: 0.35;
}
/* .list .list-item input:checked + span,
.list .list-item:hover + span:after {
  background-color: rgba(255, 255, 255, 0.5);
} */







.select {
  appearance: none;
  /*  safari  */
  -webkit-appearance: none;
  /*  other styles for aesthetics */
  width: 100%;
  font-size: 1.15rem;
  padding: 1em 6em 1em 1em;
  background-color: #fff;
  /* border: 1px solid #caced1; */
  border: none;
  /* border-radius: 0.25rem; */
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
  