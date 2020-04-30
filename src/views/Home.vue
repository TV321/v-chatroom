<template>
  <div class="home">
    <Welcome />
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>

import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>
