<!-- App.vue -->
<template>
    <header id="app-header">
      <button class="control" @click="toggleListView">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>

        <span>

        </span>
      </button>
    </header>

    <MonthListComponent  
      class="months" 
      :class="[!listViewState ? 'off' : '']"
      :events="events"  
      :date="date"
      @date-change="onListChange"/>
    <CalendarComponent 
      class="grid" 
      :events="events" 
      :date="date"/>
    <EventsListComponent 
      class="events" 
      :events="events"
      :date="date"/>
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
    const listViewState = ref(false);

    const date = ref(new Date(ts));
    const CSS_COLOR_CLASS = [
      'bg-blue-100',
      'bg-teal-100',
      'bg-indigo-100',
      'bg-green-300',
      'bg-brown-600',
      'bg-yellow-600',
      'bg-green-700',
      'bg-brown-700',
      'bg-pink-700',
      'bg-orange-700'
    ];

    const isSameDate = function(date1, date2) {
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
      const key = timeMin +'  '+timeMax;
      const cache = JSON.parse(localStorage.getItem('__cssd') ?? '{}');
      if ( cache[key] ) {
        return cache[key];
      }


      const url = `https://www.googleapis.com/calendar/v3/calendars/${process.env.VUE_APP_CALENDAR_ID}/events?singleEvents=true&orderBy=startTime&key=${process.env.VUE_APP_CALENDAR_API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const { items = [] } = await response?.json();
        if ( items ) {
          localStorage.setItem('__cssd', 
            JSON.stringify({ ...cache, [key]: items }));
        }

        return items;
      } catch (error) {
        return [];
      }
    };

    const loadCyberEvents = async(start, end) => {
      const data = await fetchCalendarEvents(start, end)
      return Object
        .values(utils.groupByDateMonth(
          transformEventsDates(data)
        ))
        .map((events, index) => {
          return events.map(event => ({ 
            ...event, 
            class: CSS_COLOR_CLASS[
              index % CSS_COLOR_CLASS.length
            ]
          }))
        })
        .flatMap(event => event);
    };

    const onListChange = async (dates) => {
      if ( !isSameDate(date.value, dates.startDate) ) {
        date.value = dates.startDate;
        if ( window.innerWidth <= 768 ) {
          toggleListView();
        }

        events.value = await loadCyberEvents(
          (new Date(date.value.getFullYear(), 0, 1, 0, 0, 0, 0))
            .toISOString(), 
          (new Date(date.value.getFullYear(), 11, 31, 23, 59, 59, 999))
            .toISOString()
        );
      }
    };

    const toggleListView = () => {
      listViewState.value = !listViewState.value;
    }

    onMounted(async() => {
      events.value = await loadCyberEvents('2024-01-01T00:00:00.000Z', '2024-12-31T23:59:59.999Z');
    });

// 

    return { events, date, listViewState, toggleListView, onListChange };
  }
};
</script>

<style>
/* Add any additional styling here if needed */
@media screen and (max-width:768px){
  #app {
    overflow: hidden;
  }
  .months {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: transform 0.25s ease-in-out;

    padding-top: 60px;
    box-sizing: border-box;

    z-index: 49;
  }
  .months.off{
    transform: translate3d(0%, -100%, 0);
  }
  #app-header {
    width: 100%;
    height: 60px;
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(114, 116, 231);
    border-bottom: 1px solid #fff;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
  }
  .control {
    width: 64px;
    height: 36px;
    border: none;
    background-color: #5721eb;
    border-radius: 999px;
    padding: 5px 10px;
    color: #fff;
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 99;
  }
  .control:active {
    box-shadow: inset 0 0 16px 16px #c795f154;
  }
  .control svg {
    width: 24px;
    height: 24px;;
  }
  .events {
    height: 100%;
    padding-top: 60px;
    box-sizing: border-box;
  }
}
@media screen and (max-width:1280px){
  .grid {
    display: none;
  }
}
@media screen and (min-width:769px) {
  #app {
    display: flex;
  }
  .events {
    flex-grow: 1;
  }
  .months {
    max-width: 240px;
    /* box-shadow: 0 0 16px 6px #b0b0b0; */
  }
}
@media screen and (min-width:768px) {
  #app-header {
    display: none;
  }
}
@media screen and (min-width:1280px) {
  .events {
    max-width: 500px;
  }
}

.grid{
  padding: 60px 32px;
  box-shadow: 16px 0px 32px -10px #c0c0c0;
  flex-grow: 3;
  z-index: 9;
}
</style>
