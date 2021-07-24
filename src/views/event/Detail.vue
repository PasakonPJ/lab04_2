<template>
  <h1>Name: {{ passenger.name }}</h1>
  <h2>Trips: {{ passenger.trips }}</h2>
 
</template>

<script>
export default {
  props: ['passenger']
}
</script>
