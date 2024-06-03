
<template>
    <div class="container">
  
            <div class="header">
                <div>
                    <h5 class="subtitle past">PAST</h5>
                    <h5 class="subtitle future">FUTURE</h5>
                </div>
                <h1 class="title">EVENTS</h1>
            </div>
            <div class="timeline">
                <div class="timeline-item" v-for="(event, index) in events2" :key="index">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <h3>{{ event.start }}</h3>
                        <p v-html="event.summary"></p>
                    </div>
                </div>
            </div>
   
    </div>
</template>

  
<script>  
 export default {
  components: {},
  props: {
    events: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      comingNextEvent: null,
      lastStagedEvent: null,
      events2: []
    };
  },
  watch: {
    // Watch for changes in the events prop
    events: {
      handler(events) {
        this.events2 = events
            .sort((a, b) => b.start?.getTime() - a.start?.getTime())
            .map(event => ({ 
                ...event, 
                start: this.toFormatedDate(event.start), 
                end: this.toFormatedDate(event.end) 
            }));
        // console.log('WATCHING EVENTS',events, this.comingNextEvent, this.lastStagedEvent);
      },
      immediate: true // Call the handler immediately with the current value of events
    }
  },
  methods: {
    toFormatedDate: function(date) {
          const datetime = date.toString()
              .replace(/^.{3}\s|\s?GMT.+/ig, '');

          const [ month, dom, year, time ] = datetime.split(' ');
          const [ hours, minutes ] = time.split(':');

            let buffer = month;
                buffer += ' ';
                buffer += (+dom);
                buffer += ', ';
                buffer += year;
                buffer += ' ';
                buffer += (+hours <= 12 ? hours : +hours);
                buffer += ':';
                buffer += minutes; 
                buffer += (+hours < 12 ? 'AM' : 'PM');


          return  buffer;
    }
  }
};

</script>
  
<style scoped>
.container {
    max-width: 500px;
    flex-grow: 1;
    overflow: scroll;
}
.header {
    /* position: sticky;
    top: 0; */
    display: flex;
    align-items: center;
    padding: 16px 32px;
    background-color: #fff;
    z-index: 1;
}
.header .title{
    font-size: 5rem;
    margin: 0;
    color: #36454F;
}
.header .subtitle {
    text-align: right;
    margin: 0 16px 0 0;
    font-size: 1.5rem;
}
.header .past{
    color: #ea2a9f;
}
.header .future {
    color: #06b506;
}
.timeline {
    position: relative;
    margin: 16px 16px 32px 64px;
    padding: 20px 0;
    list-style: none;
}
.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 23px; /* Adjust to center the line */
    /* width: 2px; */
    border: 1px dashed #ddd;
}
.timeline-item {
    position: relative;
    padding: 20px 0 20px 40px;
}
.timeline-item:after {
    content: '\0020';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #06b506;
    border-radius: 5px;
    opacity: 0;
}
.timeline-item:hover:after {
    opacity: 1;
}
.timeline-marker {
    position: absolute;
    top: 50%;
    left: 12px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    border: 4px solid #007bff;
    transform: translateY(-50%);
}
.timeline-content {
    padding: 10px 15px;
    border-radius: 4px;
}
.timeline-content h3 {
    margin: 0;
    font-size: 1em;
}
.timeline-content p {
    margin: 0;
    font-size: 0.9em;
    color: #666;
}
</style>
  