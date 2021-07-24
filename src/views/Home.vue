<template>
  <h1>Events For Good</h1>

  <div class="events">
    <PassagerCard v-for="pass in events" :key="pass.id" :passager="pass" />
  </div>
</template>

<script>
// @ is an alias to /src
import PassagerCard from '@/components/PassagerCard.vue'
import PassagerService from '@/services/PassagerService.js'
export default {
  name: 'Home',
  props: {
    page: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  components: {
    PassagerCard
  },
  data() {
    return {
      events: null,
      selectedpage: this.page
    }
  },
  created() {
    PassagerService.getEvents(this.page, this.size)
      .then((response) => {
        this.events = response.data.data
      })
      .catch((error) => {
        console.log(error)
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
