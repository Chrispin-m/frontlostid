<template>
  <section class="section">
    <div class="container">
      <!-- Search Field -->
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
      <button class="button is-info is-fullwidth mb-4" @click="searchIDs">
        Search
      </button>

      <!-- Search Results -->
      <div v-if="results.length" class="box">
        <h2 class="subtitle has-text-centered">Search Results</h2>
        <div
          v-for="id in results"
          :key="id.id"
          class="card is-flex is-flex-direction-column is-align-items-center my-3 animate__animated animate__fadeInUp"
        >
          <!-- Image -->
          <div class="card-image">
            <figure class="image is-128x128">
              <img :src="id.image_url" alt="Found ID Image" />
            </figure>
          </div>

          <!-- Card Content -->
          <div class="card-content has-text-centered">
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
import axios from "axios";
import dayjs from "dayjs";

export default {
  data() {
    return {
      query: "",
      results: [],
    };
  },
  methods: {
    async searchIDs() {
      try {
        const response = await axios.get("https://lostid.onrender.com/api/ids/search/", {
          params: { q: this.query },
        });
        this.results = response.data;
      } catch (error) {
        alert("Failed to search. Please try again.");
      }
    },
    goToMessages(id) {
      this.$router.push(`/messages/${id}`);
    },
    truncateText(text) {
      return text.length > 100 ? text.slice(0, 100) + "..." : text;
    },
    formatDate(dateString) {
      return dayjs(dateString).format("MMM D, YYYY [at] h:mm A");
    },
  },
};
</script>

<style scoped>
/* General Styles */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #000000; 
  color: white;
  text-align: center;
}

.card img {
  object-fit: cover;
  border-radius: 10px;
}

.card-content {
  flex-grow: 1;
  margin-top: 1rem;
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

.content {
  max-width: 100%;
  word-wrap: break-word;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card {
    padding: 1rem;
    margin: 0 auto;
  }

  .card-image figure {
    width: 100px;
    height: 100px;
  }

  .card-content {
    margin-top: 0.5rem;
  }

  .button {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .card {
    padding: 0.5rem;
  }

  .card-image figure {
    width: 80px;
    height: 80px;
  }

  .card-content p {
    font-size: 14px;
  }

  .button {
    font-size: 14px;
  }
}
</style>
