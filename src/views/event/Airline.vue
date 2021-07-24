<template>
  <div v-for="x in passenger.airline" :key="x.id">
    <img :src="x.logo" />
  </div>

  <div v-for="x in passenger.airline" :key="x.id">
    <img :src="x.logo" />
  </div>
  <div v-for="x in passenger.airline" :key="x.id">
    <h1>
      <p>Airline: {{ x.name }}</p>
    </h1>
  </div>
  <div v-for="x in passenger.airline" :key="x.id">
    <h2>
      <p>Country: {{ x.country }}</p>
    </h2>
  </div>
  <div v-for="x in passenger.airline" :key="x.id">
    <p>slogan: {{ x.slogan }}</p>
  </div>
</template>

 
<script>
export default {
  props: ['passenger']
}
</script>
<style scoped>
.img {
  height: 10px;
  width: 5px;
}
</style>
