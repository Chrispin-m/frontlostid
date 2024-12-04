<template>
  <div class="contact-page">
    <section class="hero">
      <h1>Contact Us</h1>
      <p>
        Have questions or need assistance? Feel free to reach out to us. We are
        here to help!
      </p>
    </section>

    <section class="contact-details">
      <h2>Get in Touch</h2>
      <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <p>
          Email us at: 
          <a href="mailto:chrismwangicw22@gmail.com">chrismwangicw22@gmail.com</a>
        </p>
      </div>

      <h2>Follow Us</h2>
      <div class="social-icons">
        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="https://x.com/iChrispinCoder" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/mwangi-wachira-5a4b1a1a3/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.contact-page {
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

.contact-details {
  margin-top: 2rem;
}

.contact-details h2 {
  font-size: 1.8rem;
  margin-top: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.contact-item i {
  font-size: 1.5rem;
  margin-right: 1rem;
}

.contact-item a {
  text-decoration: none;
}

.contact-item a:hover {
  text-decoration: underline;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icons a {
  font-size: 1.5rem;
  transition: color 0.3s ease;
}

.social-icons a:hover {
  color: #4a4a4a;
}
</style>
