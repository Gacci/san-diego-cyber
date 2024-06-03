<!-- App.vue -->
<template>
    <MonthListComponent  class="months"/>
    <CalendarComponent class="grid" :events="events"/>
    <EventsListComponent class="events" :events="events"/>
</template>

<script>
import CalendarComponent from './components/CalendarComponent.vue';
import EventsListComponent from './components/EventsListComponent.vue';
import MonthListComponent from './components/MonthListComponent.vue';

import './assets/styles.css';

import DOMPurify from 'dompurify';
import { ref, onMounted } from 'vue';


/*

*/

export default {
  name: 'App',
  components: {
    CalendarComponent,
    MonthListComponent,
    EventsListComponent
  },
  setup() {
    // const gridViewEvents = ref([]);
    // const listViewEvents = ref([]);
    const events = ref([]);
    const fetchCalendarEvents = async function(calendarId, apiKey) {
      const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`;
    
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        return data.items;
      } catch (error) {
        return [];
      }
    };

    onMounted(async () => {
      const colorNameClasses = [
        'red-001',
        'orange-001',
        'yellow-001',
        'yellow-002',
        'green-001',
        'teal-001',
        'green-002',
        'gray-001',
        'blue-001',
        'blue-002',
        'blue-003',
        'purple-001',
        'purple-002',
        'pink-001'
      ];


      const json = await fetchCalendarEvents(process.env.VUE_APP_CALENDAR_ID, process.env.VUE_APP_CALENDAR_API_KEY);
      const jsDatedEvents = json.map(event => ({
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
      }));


      events.value = Object.values(
            jsDatedEvents.reduce((accum, event) => {
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
        ).map((events, index) => {
          return events.map(event => ({ 
            ...event, class: colorNameClasses[index % (colorNameClasses.length + 1)]
          }))
        })
        .reduce((stack, events) => stack.concat(events), []);

      // console.log('************************', events.value, '************************')

      // console.log(gridViewEvents, listViewEvents);
    });

    return { events };
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
#app {
  display: flex;
}
.months {
  min-width: 240px
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
