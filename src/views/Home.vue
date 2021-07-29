<template>
  <h1>List of Passenger</h1>

  <div class="events">
    <PassengerCard v-for="pass in events" :key="pass.id" :passenger="pass" />
  </div>
</template>

<script>
// @ is an alias to /src
import PassengerCard from '@/components/PassengerCard.vue'
import PassengerService from '@/services/PassengerService.js'
export default {
  name: 'Home',
  props: ['page', 'size'],
  components: {
    PassengerCard
  },
  data() {
    return {
      events: null,
      selectedpage: this.page
    }
  },
  // created() {
  //   PassengerService.getEvents(this.page, this.size)
  //     .then((response) => {
  //       this.events = response.data.data
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
   beforeRouteEnter(routeTo, routeFrom, next) {
    PassengerService.getEvents(parseInt(routeTo.query.page) || 0,4)
      .then((response) => {
        next((comp) => {
          comp.events = response.data.data
          comp.totalEvents = response.headers['x-total-count']
        })
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    PassengerService.getEvents(parseInt(routeTo.query.page) || 0,4)
      .then((response) => {
        this.events = response.data.data
        this.totalEvents = response.headers['x-total-count'] // <--- Store it
        next()
      })
      .catch(() => {
        next({ name: 'NetworkError' })
      })
  }
}
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: rgb(20, 85, 55);
}
#page-prev {
  text-align: left;
}
#page-next {
  text-align: right;
}
#selectedpage {
  flex: 1;
  text-align: left;
  flex-direction: column;
}
</style>
