// // store/index.js
// // import { google } from 'googleapis';
// import { createStore } from 'vuex';


// const toFormatedDate = function(date) {
//     const datetime = date.toString()
//         .replace(/^.{3}\s|\s?GMT.+/ig, '');

//     const [ month, dom, year, time ] = datetime.split(' ');
//     const [ hours, minutes ] = time.split(':');

//     let buffer = month;
//         buffer += ' ';
//         buffer += (+dom);
//         buffer += ', ';
//         buffer += year;
//         buffer += ' ';
//         buffer += (+hours < 12 ? +hours : +hours % 12);
//         buffer += ':';
//         buffer += minutes;
//         buffer += ' ';
//         buffer += (+hours < 12 ? 'AM' : 'PM')

//     return  buffer;
// };

// const store = createStore({
//   state: {
//     events: [
//         {
//           start: '2024-06-01',
//           end: '2024-06-01',
//           title: toFormatedDate(new Date())
//         },
//         {
//           start: '2024-06-03',
//           end: '2024-06-03',
//           title: toFormatedDate(new Date())
//         },
//         {
//           start: '2024-06-05',
//           end: '2024-06-05',
//           title: toFormatedDate(new Date())
//         },
//         {
//           start: '2024-06-15',
//           end: '2024-06-15',
//           title: toFormatedDate(new Date())
//         }
//       ],
//   },
//   // actions: {
//   //   async fetchEvents({ commit }) {
//   //     const auth = new google.auth.GoogleAuth({
//   //       // Your credentials here
//   //       // You can use OAuth2Client if you have credentials
//   //       // from a Google Cloud project
//   //     });

//   //     const calendar = google.calendar({ version: 'v3', auth });

//   //     const response = await calendar.events.list({
//   //       calendarId: 'YOUR_CALENDAR_ID_HERE',
//   //       timeMin: new Date().toISOString(),
//   //       maxResults: 10,
//   //       singleEvents: true,
//   //       orderBy: 'startTime',
//   //     });

//   //     commit('setEvents', response.data.items);
//   //   },
//   // },
//   mutations: {
//     setEvents(state, events) {
//       state.events = events;
//     },
//   }
// });

// export default store;



import { reactive } from 'vue';

export const store = reactive({
  date: new Date(),
  events: []
});
