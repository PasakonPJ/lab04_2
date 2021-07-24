<template>
  <h1>Name: {{ passenger.name }}</h1>
  <h2>Trips: {{ passenger.trips }}</h2>
  Airline: {{ passenger.airline.name }}
  <!-- <div  v-for="x in passenger.airline" :key="x.id">
      <span> Airline: {{ x.name }}</span>
    </div> -->
</template>

<script>
export default {
  props: ['passenger']
}
</script>
