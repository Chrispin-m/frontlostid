<template>
  <section class="section">
    <!-- Animated Container -->
    <motion-div
      initial="hidden"
      animate="visible"
      variants="{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }"
      transition="{ duration: 0.8 }"
      class="box shadow-lg p-6"
    >
      <div class="container has-text-centered">
        <!-- Title Section -->
        <h1 class="title is-size-2 has-text-primary mb-4">Post a Found ID</h1>
        <p class="subtitle is-size-5 has-text-grey">
          Upload the ID image to help the owner locate it.
        </p>

        <!-- Divider -->
        <hr class="divider my-5">

        <!-- Call to Action Animation -->
        <motion-div
          initial="hidden"
          animate="visible"
          variants="{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }"
          transition="{ delay: 0.4, duration: 0.8 }"
        >
          <!-- Call to Post Found ID Form -->
          <PostFoundID />
        </motion-div>
      </div>
    </motion-div>
  </section>
</template>

<script>
import PostFoundID from '../components/PostFoundID.vue';

export default {
  components: {
    PostFoundID,
  },
};
</script>

<style scoped>
/* Enhanced Styling */

/* Divider styling for visual separation */
.divider {
  border: none;
  height: 2px;
  background-color: #e6e6e6;
}

/* Box Shadow for Main Container */
.box {
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}

.title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}
.subtitle {
  font-family: 'Roboto', sans-serif;
}

.box:hover {
  transform: translateY(-3px);
  transition: transform 0.3s ease;
}
</style>
