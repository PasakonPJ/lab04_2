<template>
  <div v-if="GStore.passenger">
    <div id="nav">
      <router-link :to="{ name: 'EventDeatil', params: { id } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'EventAirline', params: { id } }">
        Airline
      </router-link>
      |
      <router-link :to="{ name: 'EventEdit', params: { id } }">
        Edit
      </router-link>
      <!-- passenger that not have "" must binding with another props -->
      <router-view :passenger="GStore.passenger" />
    </div>
  </div>
</template>

<script>
//import PassengerService from '@/services/PassengerService.js'
export default {
  inject: ['GStore']
}
</script>
