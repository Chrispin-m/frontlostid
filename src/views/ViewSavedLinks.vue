<template>
  <section class="section">
    <div class="container">
      <!-- Title Section -->
      <motion-div
        initial="hidden"
        animate="visible"
        variants="{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }"
        transition="{ duration: 0.8 }"
      >
        <h1 class="title is-3 has-text-centered mb-5">
  Your Message Links <br>
  <span style="font-size: 0.4em; font-style: italic; line-height: 1;">
    This is Section For The ID Posters.
  </span>
</h1>

      </motion-div>


      <motion-div
        v-if="!links.length"
        initial="hidden"
        animate="visible"
        variants="{ hidden: { opacity: 0 }, visible: { opacity: 1 } }"
        transition="{ delay: 0.3, duration: 0.5 }"
        class="box has-text-centered py-5"
      >
        <p class="subtitle is-5 has-text-grey">No saved message links found (Perharps you changed devices. If so please repost the ID). Start by posting IDs!</p>
      </motion-div>

      <!-- Links List -->
      <motion-div
        v-else
        initial="hidden"
        animate="visible"
        variants="{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }"
        transition="{ delay: 0.3, duration: 0.8 }"
      >
        <div class="columns is-multiline">
          <div v-for="(link, index) in links" :key="index" class="column is-one-third">
            <div class="card saved-link-card shadow-lg">
              <div class="card-content has-text-centered">
                <a :href="link" target="_blank" class="saved-link">
                  <i class="fas fa-link mr-2"></i> {{ truncateLink(link) }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion-div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      links: [],
    };
  },
  created() {
    const savedLinks = localStorage.getItem("savedLinks");
    this.links = savedLinks ? JSON.parse(savedLinks).reverse() : [];
  },
  methods: {
    truncateLink(link) {
      // Shorten long links
      const maxLength = 30;
      return link.length > maxLength ? `${link.substring(0, maxLength)}...` : link;
    },
  },
};
</script>

<style scoped>

/* Saved Links Title */
.title {
  font-family: "Poppins", sans-serif;
  font-weight: 600;
}

/* Card Styling */
.saved-link-card {
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.saved-link-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

/* Link Styling */
.saved-link {
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  color: #3273dc;
  text-decoration: none;
  transition: color 0.3s ease, text-decoration 0.3s ease;
}

.saved-link:hover {
  color: #275aa8;
  text-decoration: underline;
}

/* Empty State Styling */
.box {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .saved-link {
    font-size: 0.9rem;
  }
}
</style>
