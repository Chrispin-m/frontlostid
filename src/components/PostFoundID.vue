<template>
  <section class="section">
    <div class="container">
      <!-- Upload Form Section -->
      <div class="box shadow-lg p-5">
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
      </div>

      <!-- Success Modal -->
      <div class="modal" :class="{ 'is-active': showModal }">
        <div class="modal-background" @click="closeModal"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Submission Successful!</p>
            <button class="delete" aria-label="close" @click="closeModal"></button>
          </header>
          <section class="modal-card-body">
            <p>Your ID and extracted text have been posted successfully. Use the link below to manage messages:</p>
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
import Tesseract from "tesseract.js";

export default {
  data() {
    return {
      image: null,
      fileName: "",
      imagePreview: null,
      extractedText: "",
      isLoading: false,
      showModal: false,
      successLink: "",
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

        // Extract text from the image
        this.extractTextFromImage(file);
      } else {
        this.resetForm();
      }
    },
    // Extracts text from the uploaded image
    async extractTextFromImage(file) {
      this.isLoading = true;
      try {
        const result = await Tesseract.recognize(file, "eng", {
          logger: (info) => console.log(info),
        });
        this.extractedText = result.data.text.trim();
      } catch (error) {
        console.error("Error extracting text:", error);
        alert("Failed to extract text. Please try again.");
      } finally {
        this.isLoading = false;
      }
    },
    // Submits the uploaded file and extracted text
    async submitID() {
      if (!this.image) {
        alert("Please upload an image before submitting.");
        return;
      }

      this.isLoading = true;

      const formData = new FormData();
      formData.append("image", this.image);
      formData.append("extracted_text", this.extractedText);

      try {
        const response = await axios.post(
          "https://lostid.onrender.com/api/ids/post/",
          formData
        );
        this.successLink = response.data.message_link;
        this.showModal = true;
        this.saveLink(this.successLink);
        this.resetForm();
      } catch (error) {
        console.error(error);
        alert("Failed to post ID. Please try again.");
      } finally {
        this.isLoading = false;
      }
    },
    // Saves link to local storage
    saveLink(link) {
      const savedLinks = JSON.parse(localStorage.getItem("savedLinks")) || [];
      savedLinks.push(link);
      localStorage.setItem("savedLinks", JSON.stringify(savedLinks));
    },
    // Closes the modal
    closeModal() {
      this.showModal = false;
    },
    // Resets the form
    resetForm() {
      this.image = null;
      this.fileName = "";
      this.imagePreview = null;
      this.extractedText = "";
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
