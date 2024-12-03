<template>
  <section class="section">
    <motion-div
      initial="hidden"
      animate="visible"
      variants="{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }"
      transition="{ duration: 0.8 }"
    >
      <div class="container">
        <h1 class="title">Service to Others :)</h1>
        <p class="subtitle">
          Send a message to the person who found or whose this ID belongs to coordinate its return.
        </p>
        <Messages :id="$route.params.id" />
      </div>
    </motion-div>
  </section>
</template>

<script>
import Messages from '../components/Messages.vue';

export default {
  components: {
    Messages,
  },
};
</script>
