<template>
  <div class="about-page">
    <section class="hero">
      <h1>About Lost ID Recovery</h1>
      <p>
        Welcome to Lost ID Recovery, your trusted platform for reconnecting lost
        identification documents with their rightful owners. Our mission is to create
        a seamless and secure way to help people recover their lost IDs while ensuring
        privacy and reliability.
      </p>
    </section>

    <section class="content">
      <h2>Our Mission</h2>
      <p>
        We aim to simplify the recovery of lost identification documents by
        bridging the gap between finders and rightful owners. Using our secure
        system(Where the finder and owner can communicate anonymously if they want), we facilitate the return of IDs efficiently and safely.
      </p>

      <h2>How It Works</h2>
      <ol>
        <li>Post a found ID using the "Post Found ID" feature.</li>
        <li>Search for lost IDs using our "Search Lost ID" tool.</li>
        <li>Connect and recover IDs through a secure process.</li>
      </ol>

      <h2>Why Choose Us</h2>
      <ul>
        <li>Secure and reliable platform.</li>
        <li>User-friendly and intuitive interface.</li>
        <li>Commitment to privacy and safety.</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about-page {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.hero {
  text-align: center;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
}

.hero p {
  font-size: 1.2rem;
}

.content h2 {
  font-size: 1.8rem;
  margin-top: 1.5rem;
}

.content p,
.content ol,
.content ul {
  margin: 1rem 0;
}

.content ol {
  list-style: decimal inside;
  padding-left: 1rem;
}

.content ul {
  list-style: disc inside;
  padding-left: 1rem;
}

.content li {
  margin-bottom: 0.5rem;
}
</style>
