<!-- CalendarComponent.vue -->
<template>
    <div class="container">
        <div class="rm2n">
            <!-- class="vuecal--rounded-theme vuecal--rounded-theme vuecal--green-theme" -->
            <vue-cal
            class=""
      :small="true"
      hide-view-selector
      :time="false"
      active-view="month"
      :disable-views="['week']"
      :events="events"
      :events-count-on-year-view="true"
      :cell-class="getCellClass"
      style="width: 100%;height: 100%"
      
                >
                
                    
                    <template #cell-content="{ cell, view, events }">
                    <div class="vuecal__cell-date" :class="[view.id, getCellClass(cell, view, events)]" v-if="view.id === 'month'">
                        {{ cell.content }}
                    </div>
                </template> 

            </vue-cal>
        </div>
    </div>
</template>
  
<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
    components: { VueCal },
    props: {
        events: {
            type: Array,
            required: true
        }
    },
    setup() {
        // 
        const getCellClass = (cell, view, events) => {
            console.log('\ncell: ', cell, '\nview: \n', view, '\n:events: \n', events)

            return '';
        };

        return { getCellClass };
    },
};
</script>
  
<style scoped>
    /* Add any additional styling here if needed */
    /* .vuecal__cell--disabled {text-decoration: line-through;}
    .vuecal__cell--before-min {color: #b6d6c7;}
    .vuecal__cell--after-max {color: #008b8b;} */
    /* .vuecal__menu, .vuecal__cell-events-count {background-color: #42b983;}
    .vuecal__cell-content {
        color: #8f8f8f;
    }
    .vuecal__cell-events-count {
        width: 18px;
        height: 2px;
        color: transparent;
    } */

.rm2n {
    position: relative;
}
.rm2n:after{
    content: '\0020';
    display: block;
    padding: 50%;
}
</style>

<style>
/* Green-theme. */
.vuecal {
    box-shadow: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.vuecal__title-bar{
    background-color: rgba(244, 211, 102, 0.73);
    border-radius: 999px;
}
/* .vuecal__arrow  {
    display: none;
}
.vuecal__title * {
    text-transform: uppercase;
    font-size: x-large;
}
.vuecal__title-bar {
    background-color: transparent;
}
.vuecal__weekdays-headings{
    border: none;
}
.vuecal__cell--has-events:after {
    content: '\0020';
    display: block;
    width: 32px;
    height: 32px;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    background-color: #99dcbe;
    transform: translate3d(-50%, -50%, 0);
    z-index: -1;
}
.vuecal__cell-events-count,
.vuecal__cell::before {
    display: none;
}
.vuecal__menu {
    
}
.vuecal__cell--has-events {
    background-color: transparent
}
.vuecal__cell--out-of-scope {
    opacity: 0.5;
}
.vuecal__title-bar *,
.vuecal__weekdays-headings,
.vuecal__cell-content {
    color: rgb(120, 117, 117);
}
.vuecal__cell--has-events  .vuecal__cell-content {
    color: #fff;
} */
/* .vuecal__title-bar {background-color: #e4f5ef;}
.vuecal__cell--today, .vuecal__cell--current {background-color: rgba(240, 240, 255, 0.4);}
.vuecal:not(.vuecal--day-view) .vuecal__cell--selected {background-color: rgba(235, 255, 245, 0.4);}
.vuecal__cell--selected:before {border-color: rgba(66, 185, 131, 0.5);}
/* Cells and buttons get highlighted when an event is dragged over it. */
/* .vuecal__cell--highlighted:not(.vuecal__cell--has-splits),
.vuecal__cell-split--highlighted {background-color: rgba(195, 255, 225, 0.5);}
.vuecal__arrow.vuecal__arrow--highlighted,
.vuecal__view-btn.vuecal__view-btn--highlighted {background-color: rgba(136, 236, 191, 0.25);} */ 
  </style>
  