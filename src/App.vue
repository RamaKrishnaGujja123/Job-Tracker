<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container-fluid">
        <a class="navbar-brand fw-bold text-primary" href="#">Job Tracker</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Dashboard</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/add">Add Application</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/timeline">Timeline</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
/* Navbar styles */
.navbar {
  padding: 0.8rem 1rem;
}

.navbar-brand {
  font-size: 1.5rem;
}

.nav-link {
  font-size: 1rem;
  color: #555;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #0056b3;
}

.nav-link.active {
  color: #0056b3;
  font-weight: bold;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .navbar-brand {
    font-size: 1.25rem;
  }

  .nav-link {
    font-size: 0.9rem;
  }
}
</style>