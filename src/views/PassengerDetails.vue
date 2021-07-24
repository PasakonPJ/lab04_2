<template>
  <div v-if="passenger">
    <h1>Name: {{ passenger.name }}</h1>
    <h2>Trips: {{ passenger.trips }}</h2>
    Airline: {{ passenger.airline.name }}
    <div  v-for="x in passenger.airline" :key="x.id">
      <span> Airline: {{ x.name }}</span>
    </div>
  </div>
</template>


<script>
import PassengerService from '@/services/PassengerService.js'
export default {
  props: ['id'],
  data() {
    return {
      passenger: null
    }
  },
  created() {
    PassengerService.getEvent(this.id)
      .then((response) => {
        console.log(response)
        this.passenger = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
