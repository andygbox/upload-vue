<template>
  <div class="section">
    <div class="container">

      <simple-upload />

    </div>
  </div>
</template>

<script>
import SimpleUpload from './SimpleUpload.vue';

export default {
  name: 'app',
  components: { SimpleUpload }
}
</script>
