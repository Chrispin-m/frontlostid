<template>
  <section class="section">
    <div class="container">
      <div class="field">
        <div class="control">
          <input
            class="input"
            type="text"
            placeholder="Enter a name or ID number"
            v-model="query"
            @keyup.enter="searchIDs"
          />
        </div>
      </div>
      <button class="button is-info" @click="searchIDs">Search</button>
      
      <div v-if="results.length" class="box">
        <h2 class="subtitle">Search Results</h2>
        <div
          v-for="id in results"
          :key="id.id"
          class="card my-3 animate__animated animate__fadeInUp"
        >
          <div class="card-image">
            <figure class="image is-128x128">
              <img :src="id.image_url" alt="Found ID Image" />
            </figure>
          </div>
          <div class="card-content">
            <p class="is-size-5 has-text-weight-bold">Extracted Text:</p>
            <p class="content is-size-6 has-text-grey-dark">
              {{ truncateText(id.extracted_text) }}
            </p>
            <p class="is-size-7 has-text-grey">Posted on: {{ formatDate(id.posted_at) }}</p>
            <button
              class="button is-link is-small mt-3"
              @click="goToMessages(id.id)"
            >
              Contact Poster
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import dayjs from 'dayjs';

export default {
  data() {
    return {
      query: '',
      results: [],
    };
  },
  methods: {
    async searchIDs() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/ids/search/', {
          params: { q: this.query },
        });
        this.results = response.data;
      } catch (error) {
        alert('Failed to search. Please try again.');
      }
    },
    goToMessages(id) {
      this.$router.push(`/messages/${id}`);
    },
    // Truncate text if it's too long
    truncateText(text) {
      if (text.length > 100) {
        return text.slice(0, 100) + '...'; // Limit text length to 100 characters
      }
      return text;
    },
    // Format posted date for readability
    formatDate(dateString) {
      return dayjs(dateString).format('MMM D, YYYY [at] h:mm A');
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #000000; /* Set the background color to black */
  color: white; /* Ensure text is visible on the black background */
}

.card img {
  object-fit: cover;
  border-radius: 10px;
}

.card-content {
  flex-grow: 1;
}

.card-content p {
  margin-bottom: 10px;
}

.button {
  transition: transform 0.3s ease;
}

.button:hover {
  transform: scale(1.1);
}

.animate__fadeInUp {
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-timing-function: ease-out;
}

.content {
  max-width: 100%;
  overflow-wrap: break-word;
}
</style>
