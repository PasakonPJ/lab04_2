<template>
  <!-- <div id="flash_editMessage" v-if="GStore.flash_editMessage">
    {{ GStore.flash_editMessage }}
  </div> -->
  <!-- <div v-if='move()'></div> -->
  <h1>Name: {{ passenger.name }}</h1>
  <h2>Trips: {{ passenger.trips }}</h2>
</template>

<script>
export default {
  props: ['passenger'],
  inject: ['GStore'],
   move() { 
      this.$router.push({
        name: 'About'
      })
    }
}
</script>
<style scoped>
@keyframes yellowfade {
  from {
    background: #42b983;
  }
  to {
    background: transparent;
  }
}

@keyframes orangefade {
  from {
    background: #b99942;
  }
  to {
    background: transparent;
  }
}
#flashMessage {
  animation-name: yellowfade;
  animation-duration: 5s;
}

#flash_editMessage {
  animation-name: orangefade;
  animation-duration: 5s;
  
  
  margin-top: 0.5cm ;
}
</style>
