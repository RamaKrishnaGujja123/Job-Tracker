<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Application Timeline</h2>

    <div v-if="applications.length === 0" class="alert alert-info text-center" role="alert">
      No applications found. Add some applications to see their timeline.
    </div>

    <div v-else>
      <div
        v-for="application in applications"
        :key="application.id"
        class="card mb-4 shadow-sm rounded"
        tabindex="0"
        aria-label="Application timeline card"
      >
        <div class="card-body">
          <h5 class="card-title">{{ application.company }}</h5>
          <p class="card-text">
            <strong>Role:</strong> {{ application.role }}
          </p>
          <ul class="timeline">
            <li
              v-for="historyItem in application.history"
              :key="historyItem.date"
              class="timeline-item d-flex align-items-center"
            >
              <span class="badge bg-secondary">{{ formatDate(historyItem.date) }}</span>
              <span class="ms-3">{{ historyItem.status }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useApplicationStore } from '../store/applicationStore';
import { formatDate } from '../utils/dateUtils';

export default {
  setup() {
    const store = useApplicationStore();

    return {
      applications: store.applications,
      formatDate,
    };
  },
};
</script>

<style scoped>
h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.card {
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.3s ease-in-out;
}

.card:focus,
.card:hover {
  transform: scale(1.02);
  outline: none;
  box-shadow: 0 0 0 3px #0056b3;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0056b3;
}

.card-text {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

.alert {
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
}

.timeline {
  list-style: none;
  padding: 0;
  margin: 0;
}

.timeline-item {
  position: relative;
  margin: 0.5rem 0;
  font-size: 0.875rem;
}

.timeline-item:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6c757d;
}

.badge {
  font-size: 0.875rem;
  padding: 0.4rem 0.75rem;
  flex-shrink: 0;
}

.ms-3 {
  margin-left: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .card-title {
    font-size: 1.125rem;
  }

  .card-text {
    font-size: 0.9rem;
  }

  .timeline-item {
    font-size: 0.8rem;
  }
}
</style>
