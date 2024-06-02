
<template>
    <div class="list">
        <div class="timeline">
            <div class="timeline-item" v-for="(event, index) in events" :key="index">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <h3>{{ event.start }}</h3>
                    <p>{{ event.summary }}</p>
                </div>
            </div>
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
        }
    },

    data() {
      return {};
    }
  };
</script>
  
<style scoped>
.list {
    padding: 80px 36px;
    overflow: scroll
}
.timeline {
    position: relative;
    margin: 20px;
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
  