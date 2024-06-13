<!-- YearMonthSelector.vue -->
<!-- YearMonthSelector.vue -->
<template>
  <div class="container">
      <carousel class="years" 
        v-model="selectedYearIndex"
        :items-to-show="1"
        @slide-end="onSlideEnd">
          <slide v-for="year in years" :key="year">
            <span class="year">{{ year }}</span>
          </slide>

          <template #addons>
              <navigation />
              <!-- <pagination /> -->
          </template>
      </carousel>

      <!-- <div class="years">
          <select class="select" v-model="selectedYear" @change="onYearChange">
              <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
      </div> -->
      <div class="list">
          <label class="list-item" 
            v-for="(month, index) in collection" 
            :key="index" 
            :for="month.label" 
            @change="goToMonth">
            
              <input class="sr-only" 
                type="radio" 
                name="month.label" 
                v-model="selectedMonth" 
                :id="month.label" 
                :value="index">
              <span class="month">{{ month.label }}</span>
              <span class="events">{{ month.events?.length }}</span>
          </label>
      </div>
  </div>
</template>
  
  <script>
  import { ref } from 'vue';
  import utils from '../utils/functions';


  import { Carousel, Slide, Navigation } from 'vue3-carousel';
  import 'vue3-carousel/dist/carousel.css'

  export default {
    components: { Carousel, Slide, Navigation },
    props: {
      events: {
        type: Object,
        required: true
      },
      date: {
        type: Date,
        required: true
      },
      view: {
        type: Boolean,
        required: true
      }
    },
    watch: {
      events: {
        immediate: true,
        handler(update) {
          this.collection = utils.groupByMonthYear(update);

          const year = this.years[this.selectedYearIndex];
          if ( !year ) {
            return;
          }

          const data = Object.fromEntries(
            Object.entries(this.collection)
              .map(([key, value]) => ([ 
                key, { events: value } 
              ]))
          );

          const placeholders = Object.fromEntries(
            this.months.map((str, num) => [
              num+'.'+year, {
                label: str, ...(
                  data[num+'.'+year] ?? 
                  { events: ref([]) }
                )
              }
            ]));

          this.collection = Object.values(placeholders);
        }
      },
      date: {
        immediate: true,
        handler(update) {
          if ( !(update instanceof Date) ) {
            return;
          }
          
          this.selectedYearIndex = this.years.indexOf(update.getFullYear());
          this.selectedMonth = update.getMonth();
        }
      },
      view: {
        immediate: true,
        handler(state) {
          this.viewListState = state;
        }
      }
    },
    data() {
      // const vueCarouselRef = ref(null);
      const now = new Date();
      // const utc = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()))

      return {
        viewListState: false,
        collection: [],
        selectedMonth: now.getMonth(),
        selectedYearIndex: now.getFullYear(),
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
          startDate: new Date(this.years[this.selectedYearIndex], this.selectedMonth, 1),
          endDate: new Date(this.years[this.selectedYearIndex], this.selectedMonth + 1, 0)
        };
      },
      // onYearChange() {
      //   this.$emit('date-change', this.getRangeDates());
      // },
      goToMonth() {
        this.$emit('date-change', this.getRangeDates());
      },
      onSlideEnd() {
        this.$emit('date-change', this.getRangeDates());
      }
    }
  };
  </script>
  

  <style>
  .carousel__next,
  .carousel__prev {
    color: #fff;
  }
</style>

  <style scoped>
  .container {
    background-color: rgb(114, 116, 231);
  }
  .years {
    height: 60px;
  }
  .year {
    font-size: 1.5rem;
    color: #fff;
  }

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
  padding: 16px 32px;
  margin: 0;
  font-size: 1.5rem;
  align-items: center;
  color: #fff;
  cursor: pointer;
  box-sizing: border-box;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.85));
  background-clip: text;
  /* color: transparent; */
  transition: opacity 0.5s ease;
  opacity: 1;
}
.list-item .month {
  width: calc(100% - 16px);
}
.list-item .events {
  width: 16px;
}

@media screen and (min-width:1024px){
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
</style>
  