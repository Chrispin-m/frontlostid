<template>
  <section class="section">
    <motion-div
      initial="hidden"
      animate="visible"
      variants="{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } }"
      transition="{ duration: 0.8 }"
    >
      <div class="container">
        <h1 class="title">Search for a Lost ID</h1>
        <p class="subtitle">Enter a name or ID number to search for a lost ID.</p>
        <SearchIDs />
      </div>
    </motion-div>
  </section>
</template>

<script>
import SearchIDs from '../components/SearchIDs.vue';

export default {
  components: {
    SearchIDs,
  },
};
</script>
