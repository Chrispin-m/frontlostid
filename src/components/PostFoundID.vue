<template>
  <section class="section">
    <div class="container">
      <!-- Upload Form Section -->
      <motion-div
        class="box shadow-lg p-5"
        initial="hidden"
        animate="visible"
        variants="{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }"
        transition="{ duration: 0.8 }"
      >
        <form @submit.prevent="submitID">
          <!-- File Upload Field -->
          <div class="field">
            <label class="label has-text-weight-semibold">Upload ID Image</label>
            <div class="file is-primary has-name is-boxed">
              <label class="file-label">
                <input class="file-input" type="file" @change="onFileChange" />
                <span class="file-cta">
                  <span class="icon"><i class="fas fa-upload"></i></span>
                  <span class="file-label">Choose a file…</span>
                </span>
                <span class="file-name">{{ fileName || "No file selected" }}</span>
              </label>
            </div>
          </div>

          <!-- Preview Section -->
          <div class="field mt-4" v-if="imagePreview">
            <label class="label has-text-weight-semibold">Preview:</label>
            <figure class="image is-128x128 mx-auto">
              <img :src="imagePreview" alt="ID Preview" class="is-rounded shadow" />
            </figure>
          </div>

          <!-- Submit Button -->
          <div class="field mt-4 has-text-centered">
            <button
              class="button is-large is-primary is-rounded"
              :class="{ 'is-loading': isLoading }"
              type="submit"
              :disabled="isLoading" 
            >
              <i class="fas fa-paper-plane mr-2"></i> Submit ID
            </button>
          </div>
        </form>
      </motion-div>

      <!-- Success Modal -->
      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="showModal = false"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Submission Successful!</p>
            <button class="delete" aria-label="close" @click="showModal = false"></button>
          </header>
          <section class="modal-card-body">
            <p>Your ID has been posted successfully. Use the link below to manage messages:</p>
            <div class="content has-text-centered mt-4">
              <a :href="successLink" target="_blank" class="button is-link is-light">
                View Messages
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      image: null, // Stores the uploaded file
      fileName: "", // Stores the name of the file
      imagePreview: null, // Stores the preview URL
      isLoading: false, // Tracks the loading state of the submit button
      showModal: false, // Controls the visibility of the modal
      successLink: "", // Stores the link to manage messages
    };
  },
  methods: {
    // Handles file input change
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.image = file;
        this.fileName = file.name;
        this.imagePreview = URL.createObjectURL(file);
      } else {
        this.resetForm();
      }
    },
    // Submits the uploaded file
    async submitID() {
      if (!this.image) {
        alert("Please upload an image before submitting.");
        return;
      }

      this.isLoading = true;

      const formData = new FormData();
      formData.append("image", this.image);

      try {
  const response = await axios.post("http://127.0.0.1:8000/api/ids/post/", formData);
  
  // Get the URL for the uploaded image from the response
  const imageUrl = response.data.image_url;
  this.successLink = response.data.message_link;
  this.showModal = true;

  // Use the URL to display the image (for example, in an <img> tag)
  this.uploadedImageUrl = imageUrl;

  this.resetForm();
} catch (error) {
console.log(error);
  alert("Failed to post ID. Please try again.");
} finally {
  this.isLoading = false;
}

    },
    // Resets the form
    resetForm() {
      this.image = null;
      this.fileName = "";
      this.imagePreview = null;
    },
  },
};
</script>

<style scoped>
/* Enhance the box shadow and border radius */
.box {
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Center image preview */
.image img {
  border: 2px solid #3273dc;
  border-radius: 8px;
}

/* Modal styling */
.modal-card {
  border-radius: 10px;
  overflow: hidden;
}
</style>
