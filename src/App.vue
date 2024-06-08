<!-- App.vue -->
<template>
    <MonthListComponent  
      class="months" 
      :events="events"  
      :date="lDate"
      @date-change="onListChange"/>
    <CalendarComponent 
      class="grid" 
      :events="events" 
      :date="gDate"
      @view-change="onGridChange"/>
    <EventsListComponent 
      class="events" 
      :events="events"/>
</template>

<script>
import CalendarComponent from './components/CalendarComponent.vue';
import EventsListComponent from './components/EventsListComponent.vue';
import MonthListComponent from './components/MonthListComponent.vue';

import utils from './utils/functions.js'
import './assets/styles.css';

import DOMPurify from 'dompurify';
import { ref, onMounted } from 'vue';


export default {
  name: 'App',
  components: {
    CalendarComponent,
    MonthListComponent,
    EventsListComponent
  },
  setup() {
    const now = new Date();
    const ts = Date.UTC(now.getFullYear(), 1 + now.getMonth(), 1);

    const events = ref([]);
    const lDate = ref(new Date(ts));
    const gDate = ref(new Date(ts));
    const CSS_COLOR_CLASS = [
        'red-001',
        'orange-001',
        'yellow-001',
        'green-001',
        'teal-001',
        'green-002',
        'gray-001',
        'blue-001',
        'yellow-002',
        'blue-002',
        'purple-001',
        'purple-002',
        'pink-001',
        'blue-003'
      ];

    const isSameDate = function(date1, date2) {
      console.log('COMPARING: ', date1, date2);
      return (date1 instanceof Date) 
        && (date2 instanceof Date) 
        && date1?.getMonth() === date2?.getMonth() 
        && date1?.getYear() === date2?.getYear();
    };

    const transformEventsDates = (collection) => {
      return collection.map(event => ({
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
          summary: DOMPurify.sanitize(event.description),
          id: event.id
      }))
      .map(event => ({
          ...event,
          start: Date.parse(event.start) 
            ? new Date(event.start) 
            : event.start,
          end: Date.parse(event.end) 
            ? new Date(event.end) 
            : event.end
      }))
    };

    const fetchCalendarEvents = async function(timeMin, timeMax) {
      console.log(timeMin +'  '+timeMax);
      const key = timeMin +'  '+timeMax;
      const cache = JSON.parse(localStorage.getItem('__cssd') ?? '{}');
      if ( cache[key] ) {
        // return cache[key];
      }


      const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.VUE_APP_CALENDAR_ID}/events?singleEvents=true&orderBy=startTime&key=${process.env.VUE_APP_CALENDAR_API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const { items = [] } = await response?.json();
        if ( items ) {
          // localStorage.setItem('__cssd', 
            // JSON.stringify({ ...cache, [key]: items }));
        }

        return items;
      } catch (error) {
        return [];
      }
    };


    const onGridChange = async (dates) => {
      if ( !isSameDate(lDate.value, dates.startDate) ) {
        console.log('onGridChange', dates);
        lDate.value = dates.startDate;
        events.value = await getEventsFor(
          dates.startDate.toISOString(), dates.endDate.toISOString()
        );
      }
    };

    const onListChange = async (dates) => {
      if ( !isSameDate(gDate.value, dates.startDate) ) {
        console.log('onListChange', dates);
        gDate.value = dates.startDate;
        events.value = await getEventsFor(
          dates.startDate.toISOString(), dates.endDate.toISOString()
        );
      }
    };


    const getEventsFor = async (start, end) => {
      const jsDatedEvents = transformEventsDates(
        await fetchCalendarEvents(start, end)
      );

      console.log('UTILS: ', utils.groupedByMonthYear(jsDatedEvents));

      const groups = Object.values(utils.groupedByMonthYear(jsDatedEvents ?? []))
        .map((events, index) => {
          return events.map(event => ({ 
            ...event, 
            class: CSS_COLOR_CLASS[index % (CSS_COLOR_CLASS.length + 1)]
          }))
        });
        // .reduce((stack, events) => stack.concat(events), []);
        // console.log('GROUPS: ', groups);
        return groups;
    };

    onMounted(async() => {
      const a = '2024-06-01T00:00:00.000Z';
      const b = '2024-06-30T23:59:59.999Z'
      events.value = await getEventsFor(a, b);
    });

// 

    return { events, lDate, gDate, onGridChange, onListChange };
  }
};
</script>

<style>
/* Add any additional styling here if needed */
* {
  font: 15px Avenir,Helvetica,Arial,sans-serif;
    font-size: 15px;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
}
html, body, #app {
  width:100%;
  height: 100%;
  margin: 0;
}

@media screen and (max-width:768px){
  .months {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
}
@media screen and (max-width:1280px){
  .grid {
    display: none;
  }
}
@media screen and (min-width:769px) {
  .months {
    max-width: 240px;
    /* box-shadow: 0 0 16px 6px #b0b0b0; */
  }
}

#app {
  display: flex;
}

.grid{
  padding: 60px 32px;
  box-shadow: 16px 0px 32px -10px #c0c0c0;
  flex-grow: 3;
  z-index: 9;
}
.events {
  max-width: 500px;
  flex-grow: 1;
}
</style>

<style>
/* Background and Text Color Combinations */
.bg-blue1.text-white1 {
    background-color: #66aaf3; /* Blue background */
    color: #ffffff; /* White text */
  }
  
  .bg-yellow1.text-gray2 {
    background-color: #f0ecbf; /* Yellow background */
    color: #343a40; /* Dark Gray text */
  }
  
  .bg-green1.text-white1 {
    background-color: #b1f5b3; /* Green background */
    color: #ffffff; /* White text */
  }
  
  .bg-red1.text-white1 {
    background-color: #f9cac7; /* Red background */
    color: #ffffff; /* White text */
  }
  
  .bg-orange1.text-gray2 {
    background-color: #f1cb92; /* Orange background */
    color: #343a40; /* Dark Gray text */
  }
  
  .bg-cyan1.text-white1 {
    background-color: #bcecf2; /* Cyan background */
    color: #ffffff; /* White text */
  }
  
  .bg-gray1.text-gray2 {
    background-color: #f8f9fa; /* Light Gray background */
    color: #343a40; /* Dark Gray text */
  }
  
  .bg-gray2.text-white1 {
    background-color: #343a40; /* Dark Gray background */
    color: #ffffff; /* White text */
  }
  
  .bg-white1.text-gray2 {
    background-color: #ffffff; /* White background */
    color: #343a40; /* Dark Gray text */
  }
  
  .bg-gray3.text-white1 {
    background-color: #6c757d; /* Muted Gray background */
    color: #ffffff; /* White text */
  }
</style>
