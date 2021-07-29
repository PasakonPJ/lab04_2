<template>
  <router-link
    class="event-link"
    :to="{ name: 'EventDeatil', params: { id: passenger._id } }"
  >
    <div class="passenger-card">
      <span>{{ passenger.name }} </span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'PassengerCard',
  props: {
    passenger: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.passenger-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #145e1e;
  margin-bottom: 18px;
}

.passenger-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: green;
  text-decoration: none;
}
</style>
