<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <motion-div
          initial="hidden"
          animate="visible"
          variants="{ hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } }"
          transition="{ duration: 0.8 }"
        >
          <h1 class="title is-size-1">Lost ID Recovery</h1>
          <h2 class="subtitle">Helping JKUAT students find their lost IDs easily.</h2>
        </motion-div>
        <motion-div
          initial="hidden"
          animate="visible"
          variants="{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }"
          transition="{ delay: 0.5, duration: 0.8 }"
        >
          <a href="/post" class="button is-light is-large mx-2">Post Found ID</a>
          <a href="/search" class="button is-warning is-large mx-2">Search Lost ID</a>
        </motion-div>
      </div>
    </div>
  </section>
</template>
