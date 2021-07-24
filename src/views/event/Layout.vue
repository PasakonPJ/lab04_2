<template>
  <div v-if="passenger">
    <div id="nav">
      <router-link :to="{ name: 'EventDeatil', params: { id } }">
        Details
      </router-link>
      |
      <router-link :to="{ name: 'EventAirline', params: { id } }">
        Airline
      </router-link>
      <!-- passenger that not have "" must binding with another props -->
      <router-view :passenger="passenger" />
    </div>
  </div>
</template>

<script>
import PassengerService from '@/services/PassengerService.js'
export default {
  props: ['id'],
  data() {
    return {
      passenger: null,
      Isarray: false
    }
  },
  created() {
    PassengerService.getEvent(this.id)
      .then((response) => {
        this.passenger = response.data
        // if(Array.isArray(this.passenger.airline)){
        //     console.log(this.passenger.airline)
        //     this.Isarray = true
        //     console.log(this.Isarray )
        // }
          if (response && response.status == 204) {
          this.$router.push({
            name: '404Resource', params: { resource: 'This id is not defind '+ this.id }
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
