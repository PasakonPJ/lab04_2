<template>
  <p>
    <span>
      <span> <img :src="passenger.airline.logo" /></span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        <img :src="airline.logo" />
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Name: </b>
      <span>{{ passenger.airline.name }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.name }}
      </span>
    </span>
    <!-- <span> {{ passenger[0].airline.name }}</span> -->
  </p>

  <p>
    <span>
      <b> ID: </b>
      <span>{{ passenger.airline.id }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.id }}
      </span>
    </span>
  </p>

  <p>
    <span>
      <b> Country: </b>
      <span>{{ passenger.airline.country }}</span>
      <span v-for="airline in passenger.airline" :key="airline.id">
        {{ airline.country }}
      </span>
    </span>
  </p>
</template>

<script>
export default {
  props: ['Isarray', 'passenger']
}
</script>
<style scoped>
img {
  height: auto;
  width: 100px;
}
</style>
