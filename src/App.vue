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
              <router-link
                class="nav-link"
                to="/"
                active-class="active"
                exact
              >
                Dashboard
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/add"
                active-class="active"
              >
                Add Application
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                to="/timeline"
                active-class="active"
              >
                Timeline
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Route outlet -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
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
