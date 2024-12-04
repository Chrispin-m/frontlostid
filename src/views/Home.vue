<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <motion-div
          initial="hidden"
          animate="visible"
          variants="{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }"
          transition="{ duration: 0.8 }"
        >
          <h1 class="title is-size-1-tablet is-size-2-desktop has-text-weight-bold">Lost ID Recovery</h1>
          <h2 class="subtitle is-size-4-tablet is-size-3-desktop has-text-weight-light">
            Helping JKUAT students find their lost IDs easily.
          </h2>
        </motion-div>

     <motion-div
    initial="hidden"
    animate="visible"
    variants="{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }"
    transition="{ delay: 0.5, duration: 0.8 }"
  >
    <div class="buttons are-medium is-centered mt-5">
      <a href="/post" class="button is-light is-large mx-2 has-text-weight-semibold">
        <span class="icon is-small">
          <i class="fas fa-upload"></i>
        </span>
        <span>Post Found ID</span>
      </a>
      <a href="/search" class="button is-warning is-large mx-2 has-text-weight-semibold">
        <span class="icon is-small">
          <i class="fas fa-search"></i>
        </span>
        <span>Search Lost ID</span>
      </a>
    </div>
  </motion-div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.hero {
  padding: 3rem 1.5rem;
}

.hero-body {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  max-width: 900px;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.subtitle {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.button {
  border-radius: 50px;
  padding: 15px 25px;
  font-size: 1.2rem;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.button:hover {
  transform: scale(1.05);
}

.button.is-light {
  background-color: #fff;
  border: 2px solid #333;
}

.button.is-light:hover {
  background-color: #000;
}

.button.is-warning {
  background-color: #ffdd57;
  border: none;
}

.button.is-warning:hover {
  background-color: #e5c100;
}

/* Responsive Design */
@media screen and (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }
  .subtitle {
    font-size: 1.25rem;
  }
  .button {
    font-size: 1.1rem;
    padding: 12px 20px;
  }
}
</style>
