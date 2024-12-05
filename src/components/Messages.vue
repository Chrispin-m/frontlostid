<template>
  <section class="section">
    <div class="container">
      <h1 class="title has-text-centered">Messages</h1>
      <div class="message-box">
        <div 
          v-for="message in messages" 
          :key="message.id" 
          :class="['message', message.device_info ? 'with-device-info' : '', message.is_from_user ? 'user-message' : 'recipient-message']"
          class="message-item"
        >
          <div class="message-content">
            <p class="sender-info">
              <strong>{{ message.sender_contact }}</strong>
            </p>
            <p class="message-text">{{ formatMessageText(message.message_text) }}</p>
            <div v-if="message.device_info" class="device-info">
              <small>Sent from: {{ message.device_info }}</small>
            </div>
          </div>
        </div>
      </div>
      
      <form @submit.prevent="sendMessage" class="message-form">
<div class="field">
  <label class="label">Your Contact</label>
  <input
    class="input"
    type="text"
    v-model="senderContact"
    placeholder="Enter your contact (optional)"
  />
</div>
        <div class="field">
          <label class="label">Message</label>
          <textarea class="textarea" v-model="messageText" required></textarea>
        </div>
        <button class="button is-primary" :disabled="isSending">Send Message</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      messages: [],
      senderContact: '',
      messageText: '',
      isSending: false,
    };
  },
  async created() {
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      try {
        const response = await axios.get(`https://lostid-4c72.vercel.app/api/ids/${this.id}/messages/`);
        this.messages = response.data;
      } catch (error) {
        alert('Failed to load messages.');
      }
    },
    
    async sendMessage() {
      this.isSending = true;
      const deviceInfo = navigator.userAgent;
      try {
        await axios.post(`https://lostid-4c72.vercel.app/api/ids/${this.id}/messages/post/`, {
          sender_contact: this.senderContact,
          message_text: this.messageText,
          device_info: deviceInfo, // Add device information here
        });
        this.senderContact = '';
        this.messageText = '';
        this.fetchMessages();
      } catch (error) {
        alert('Failed to send message.');
      } finally {
        this.isSending = false;
      }
    },
    
    formatMessageText(text) {
      if (text.length > 150) {
        return text.slice(0, 150) + '...';  // Truncate text if it's too long
      }
      return text;
    },
  },
};
</script>

<style scoped>
.message-box {
  max-height: 500px;
  overflow-y: auto;
  padding: 1rem;
  background-color: #2a2a2a; /* Dark background color */
  border-radius: 8px;
}

.message-item {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.user-message {
  align-items: flex-end;
  background-color: #4e6e7b; /* Darker blue shade for user messages */
  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  max-width: 75%;
  position: relative;
  animation: slideIn 0.5s ease-out;
}

.recipient-message {
  align-items: flex-start;
  background-color: #3a3a3a; /* Darker gray for recipient messages */
  color: #e0e0e0; /* Light gray for recipient text */
  border-radius: 10px;
  padding: 1rem;
  max-width: 75%;
  position: relative;
  animation: slideIn 0.5s ease-out;
}

.message-content {
  position: relative;
}

.sender-info {
  font-weight: bold;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #d1d1d1; /* Lighter gray for sender information */
}

.device-info {
  font-size: 0.8rem;
  color: #bbb; /* Slightly lighter for device info */
  margin-top: 5px;
}

.message-text {
  font-size: 1rem;
  line-height: 1.4;
}

.message-form {
  margin-top: 2rem;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

button {
  background-color: #4e6e7b; 
  color: #fff;
}

button:disabled {
  background-color: #666; 
}

</style>
