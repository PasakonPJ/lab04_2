<template>
  <p>Edit the passenger here</p>
  <button @click="Edit">Edit Me >.3.></button>
</template>

<script>
export default {
  props: ['passenger'],
  inject: ['GStore'],
  methods: {
    Edit() {
      //Assuming successful API call to register then
      //Set a flash message to appear on the next page loaded which says
      this.GStore.flash_editMessage = 'The data has been updated'
      setTimeout(() => {
        //After 3 secs remove it
        this.GStore.flash_editMessage = ''
      }, 5000)
      this.$router.push({
        name: 'EventDeatil'
      })
    }
  }
}
</script>
