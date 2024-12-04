<template>
  <div id="app">
    <!-- Navbar -->
    <Navbar />
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Lost ID Recovery</strong> by <a href="#">iChrispin</a>. Helping students (Inspired by the Community of <a href="https://www.jkuat.ac.ke/">JKUAT</a>) recover their lost IDs.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
/* Global Styles */
body {
  font-family: 'Open Sans', Arial, sans-serif;
  background-color: #2c2f34;
  margin: 0;
  padding: 0;
}

main {
  min-height: calc(100vh - 100px); /* Adjust to fit the footer */
}

footer {
  background-color: #4a4a4a;
  color: white;
  padding: 20px 0;
}
</style>
