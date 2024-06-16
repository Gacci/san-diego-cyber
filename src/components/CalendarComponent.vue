<!-- CalendarComponent.vue -->
<template>
  <!-- @update:selected-date="onDateSelect" -->
  <div class="container">
    <div class="rm2n">
      <!-- class="vuecal--rounded-theme vuecal--rounded-theme vuecal--green-theme" -->
      <vue-cal
        hide-view-selector
        active-view="month"
        active-vew="'week'"
        disable-views="['years', 'year', 'week', 'day']"
        :small="true"
        :time="false"
        :events="collection"
        :events-count-on-year-view="true"
        :selected-date="date"
        :cell-class="getCellClass"
        @view-change="onViewChange"
        style="width: 100%; height: 100%"
      >
        <template #cell-content="{ cell, view, events }">
          <div
            class="vuecal__cell-date"
            :class="[view.id, getCellClass(cell, view, events)]"
          >
            {{ cell.content }}
            <!-- <span class="vuecal__cell--has-events2" :class="[getCellClass(cell, view, events)]" v-if="view.id === 'month'"></span> -->
          </div>
        </template>
      </vue-cal>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default {
  components: { VueCal },
  props: {
    events: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  setup() {
    const getCellClass = (cell, view, events) => {
      return !cell.outOfScope && events.length && (events[0]['class'] ?? '')
    }

    return {
      getCellClass,
    }
  },
  data() {
    return {
      selectedDate: new Date(1970, 0, 1),
      collection: [],
    }
  },
  watch: {
    // Watch for changes in the events prop
    events: {
      immediate: true,
      handler(update) {
        this.collection = update.sort(
          (a, b) => a.start?.getTime() - b.start?.getTime(),
        )
      },
    },
  },
  methods: {
    onViewChange(view) {
      this.$emit('view-change', {
        startDate: view.startDate,
        endDate: view.endDate,
      })
    },
  },
}
</script>

<style scoped>
.rm2n {
  position: relative;
}
.rm2n:after {
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
.vuecal__title-bar {
  background-color: transparent;
}
.vuecal__title * {
  text-transform: uppercase;
  font-size: x-large;
}
.vuecal__arrow {
  display: none;
}
.vuecal__cell::before {
  border: none;
}
.vuecal__cell--has-events2 {
  display: block;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 100%;
  transform: translate3d(-50%, -50%, 0);
  z-index: -1;
}
.vuecal__cell--out-of-scope {
  opacity: 0.35;
}
.vuecal__cell-date {
  width: 48px;
  height: 48px;
  align-self: center;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
}
.vuecal__title-bar *,
.vuecal__weekdays-headings,
.vuecal__cell-content {
  color: rgb(120, 117, 117);
}
</style>
