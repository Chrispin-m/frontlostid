<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item logo" href="/">
  <i class="fas fa-id-badge"></i> 
  <span class="ml-2 logo-text">Lost ID Recovery</span>
</a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': isMenuActive }"
        aria-label="menu"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu">
      <!-- Navbar Items for Larger Screens -->
      <div class="navbar-start">
        <a class="navbar-item" href="/post">
          <i class="fas fa-upload"></i> <span class="ml-2">Post Found ID</span>
        </a>
        <a class="navbar-item" href="/search">
          <i class="fas fa-search"></i> <span class="ml-2">Search Lost ID</span>
        </a>
        <a class="navbar-item" href="/view-saved-links">
          <i class="fas fa-bookmark"></i> <span class="ml-2">View Saved Links</span>
        </a>
        <a class="navbar-item" href="/about">
          <i class="fas fa-info-circle"></i> <span class="ml-2">About</span>
        </a>
        <a class="navbar-item" href="/contact">
          <i class="fas fa-envelope"></i> <span class="ml-2">Contact Us</span>
        </a>
      </div>
    </div>

    <transition name="slide">
      <!-- Side Panel for Small Screens -->
      <div v-if="isMenuActive" class="side-panel" @click="closeMenu">
        <div class="panel-content" @click.stop>
          <div class="rotating-div"></div>
          <a class="navbar-item" href="/post">
            <i class="fas fa-upload"></i> <span class="ml-2">Post Found ID</span>
          </a>
          <a class="navbar-item" href="/search">
            <i class="fas fa-search"></i> <span class="ml-2">Search Lost ID</span>
          </a>
          <a class="navbar-item" href="/view-saved-links">
            <i class="fas fa-bookmark"></i> <span class="ml-2">View Saved Links</span>
          </a>
          <a class="navbar-item" href="/about">
            <i class="fas fa-info-circle"></i> <span class="ml-2">About</span>
          </a>
          <a class="navbar-item" href="/contact">
            <i class="fas fa-envelope"></i> <span class="ml-2">Contact Us</span>
          </a>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
    closeMenu() {
      this.isMenuActive = false;
    },
  },
};
</script>

<style scoped>
/* General Navbar Styles */
.navbar {
  background-color: #4a4a4a;
}

.navbar-item {
  font-size: 1rem;
  color: #fff !important;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

.navbar-item:hover {
  background-color: #3e8ed0;
}
.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.5rem;
  color: #fff;
  padding: 10px 15px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo i {
  font-size: 1rem; 
  margin-right: 10px; 
}

.logo-text {
  font-size: 1.5rem;
  font-family: 'Arial', sans-serif; 
  color: #fff;
  letter-spacing: 1px; /* Spacing between letters */
  text-transform: uppercase; /* Make it more impactful */
  font-weight: bold;
}

.ml-2 {
  margin-left: 0.5rem;
}
.navbar-burger {
  color: #fff;
  cursor: pointer;
}

.navbar-burger span {
  background-color: #fff;
}

.ml-2 {
  margin-left: 0.5rem;
}

/* Side Panel for Small Screens */
.side-panel {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #4a4a4a;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 3D Rotating Animation */
.rotating-div {
  width: 50px;
  height: 50px;
  margin: 1rem 0;
  background: linear-gradient(45deg, #3e8ed0, #4a4a4a);
  border-radius: 50%;
  animation: rotate-horizontal 10s linear infinite;
}

/* Keyframes for 3D Horizontal Rotation */
@keyframes rotate-horizontal {
  0% {
    transform: rotateX(0deg);
  }
  50% {
    transform: rotateX(180deg);
  }
  100% {
    transform: rotateX(360deg);
  }
}

/* Navbar Items in Side Panel */
.panel-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
}

.panel-content .navbar-item {
  color: #fff !important;
  text-align: left;
  margin-bottom: 1rem;
}

.panel-content .navbar-item:hover {
  background-color: #3e8ed0;
}

/* Animation for Side Panel */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

/* Responsive Design */
@media screen and (min-width: 769px) {
  .side-panel {
    display: none;
  }
  .navbar-menu {
    display: flex !important;
  }
}
</style>
