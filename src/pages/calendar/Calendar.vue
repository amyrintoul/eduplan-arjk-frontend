<template>
  <v-container>
    <v-row class="fill-height">
      <v-col>
        <v-sheet height="64">
          <v-toolbar flat>
            <v-btn outlined class="mr-4" color="grey darken-2" @click="setToday">
              Today
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="prev">
              <v-icon small>
                mdi-chevron-left
              </v-icon>
            </v-btn>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon small>
                mdi-chevron-right
              </v-icon>
            </v-btn>
            <v-toolbar-title v-if="$refs.calendar">
              {{ $refs.calendar.title }}
            </v-toolbar-title>


            <v-flex class="ml-10">
              <Create />
            </v-flex>

            <v-menu bottom right>
              <template v-slot:activator="{ on, attrs }">
                <v-btn outlined color="grey darken-2" v-bind="attrs" v-on="on">
                  <span>{{ typeToLabel[type] }}</span>
                  <v-icon right>
                    mdi-menu-down
                  </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="type = 'day'">
                  <v-list-item-title>Day</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'week'">
                  <v-list-item-title>Week</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = 'month'">
                  <v-list-item-title>Month</v-list-item-title>
                </v-list-item>
                <v-list-item @click="type = '4day'">
                  <v-list-item-title>4 days</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-toolbar>
        </v-sheet>
        <v-sheet height="600">
          <v-calendar v-if=" myEvents && myEvents.length > 0" ref="calendar" v-model="focus" color="primary"
            :events="myEvents" event-color="blue" :type="type" @click:event="showEvent" @click:more="viewDay"
            @click:date="viewDay" @change="updateRange"></v-calendar>
          <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
            <v-card color="grey lighten-4" min-width="350px" flat>
              <v-toolbar :color="selectedEvent.color" dark>
                <v-dialog v-model="dialog" max-width="600px">

                  <template v-slot:activator="{ on, attrs }">
                    <v-btn @click="editEvent(selectedEvent.id)" icon color="white" v-bind="attrs" v-on="on">
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <span class="text-h5">Edit Event</span>
                    </v-card-title>
                    <v-container>
                      <v-row class="pa-3">
                      
                        <v-col cols="12">
                          <v-text-field label="Title" required v-model="field.title"
                            prepend-inner-icon="mdi-format-title"></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field label="Description" v-model="field.description"
                            prepend-inner-icon="mdi-sticker-text"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="Start Date" v-model="field.start_datetime"
                            prepend-inner-icon="mdi-calendar-range"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field label="End Date" v-model="field.end_datetime"
                            prepend-inner-icon="mdi-calendar-range"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">

                          <v-menu offset-y>
                            <template v-slot:activator="{ on }">
                              <v-btn :color="new_color" dark v-on="on">
                                Event Color
                              </v-btn>
                            </template>
                            <v-color-picker value="#7417BE" v-model="new_color" hide-canvas hide-inputs show-swatches
                              class="mx-auto"></v-color-picker>
                          </v-menu>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">

                          <v-spacer></v-spacer>



                          <v-btn @click="submitEvent()" class="float-right" color="orange darken-3 mt-10" dark>
                            Edit Event
                          </v-btn>
                        </v-col>



                      </v-row>
                    </v-container>
                  </v-card>
                </v-dialog>
                <v-toolbar-title class="mr-15" v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>

                <v-flex class="ml-15">
                  <v-btn color="red accent-4" dark small mt-2 @click="deleteEvent(selectedEvent.id)" class="float-right">
                    <v-icon left>
                      mdi-delete
                    </v-icon>
                    Del
                  </v-btn>
                </v-flex>
              </v-toolbar>
              <v-card-text>

                <span v-html="selectedEvent.details"></span>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Title </v-list-item-title>
                    <v-list-item-subtitle></v-list-item-subtitle>
                    <v-list-item-title>Description</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>

              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="selectedOpen = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>





<script>
  import axios from '@/config'
  import Create from '@/pages/calendar/Create.vue'

  export default {
    name: 'Calendar',
    components: {
      Create,





    },
    data: () => ({
      dialog: false,
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      field: {
        id: '',
        user_id: '',
        title: '',
        descrition: '',
        color: '',
        start_datetime: '',
        end_datetime: '',
        alert_datetime: ''
      },
      myEvents: [],
      new_color: '#00000',
      mask: '!#XXXXXXXX',
      menu: false,


      names: [],

      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,





    }),


    mounted() {
      this.getData
      // this.$refs.calendar.checkChange()
      let token = localStorage.getItem('token')
      let user_id = localStorage.getItem('user_id')

      axios.get(`/events/user/${user_id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then((response) => {
          const myEvents = response.data
          for (const event of myEvents) {
            const id = event._id
            const name = event.title
            const start = event.start_datetime
            const end = event.end_datetime
            this.myEvents.push({
              id,
              name,
              start,
              end
            })
          }
          console.log(myEvents)
        }).catch(error => console.log(error))


    },
    methods: {
      getData() {
        let token = localStorage.getItem('token')
        let user_id = localStorage.getItem('user_id')

        axios
          .get(`events/user/${user_id}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response => {
            console.log(response.data)
            this.event = response.data.data
          })
          .catch(error => console.log(error))
      },

      viewDay({
        date
      }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor(myEvent) {
        return myEvent.color
      },
      setToday() {
        this.focus = ''
      },
      prev() {
        this.$refs.calendar.prev()
      },
      next() {
        this.$refs.calendar.next()
      },
      showEvent({
        nativeEvent,
        event
      }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange({
        start,
        end
      }) {
        const events = this.myEvents

        const min = new Date(`${start.date}T00:00:00`)
        const max = new Date(`${end.date}T23:59:59`)
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.rnd(days, days + 20)

        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)

          this.myEvents.push({
            title: this.title[this.rnd(0, this.title.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }

        this.events = events
      },
      rnd(a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
  
    editEvent(id) {
      let token = localStorage.getItem('token')
      axios
        .get(`events/${id}`, {
          headers: {
            "Authorization": `Bearer ${token}`
          }
        })
        .then(response => {
          console.log(response)
          this.field.id = response.data._id
          this.field.user_id = response.data.user_id
          this.field.title = response.data.title
          this.field.description = response.data.description
          this.field.color = response.data.color
          this.field.start_datetime = response.data.start_datetime
          this.field.end_datetime = response.data.end_datetime
          this.field.alert_datetime = response.data.alert_datetimes

        })
        .catch(error => console.log(error))
    },
    submitEvent() {
      let token = localStorage.getItem('token')
      let user_id = localStorage.getItem('user_id')


      axios
        .put(`events/${this.field.id}`,

          { // First set of curly braces = data you want to post
            user_id: user_id,
            title: this.field.title,
            description: this.field.description,
            color: this.field.color,
            start_datetime: this.field.start_datetime,
            end_datetime: this.field.end_datetime,
            alert_datetime: this.field.alert_datetime
            // created_at: this.field.created_at,
            // updated_at:this.field.updated_at,

          },

          // Can also just use "this.form" because our form matches the JSON format exactly:

          { // Second set of curly braces = header(s)
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
        .then(response => {
          console.log(response.data)
          location.reload()
        })
        .catch(err => {
          console.log(err)
          console.log(err.response.data)
        })
    },

    deleteEvent(id) {
      let token = localStorage.getItem('token')
      if (confirm("Do you really want to delete?")) {
        axios.delete(`/events/${id}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .then(response => {
            console.log(response.data)
            location.reload()
          })
          .catch(error => {
            console.log(error)
            alert("There was a problem deleting this event.")
          })
      }
    },
  }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

  .main-header {
    font-size: 63px;
    font-family: 'Jockey One', sans-serif;

  }
</style>