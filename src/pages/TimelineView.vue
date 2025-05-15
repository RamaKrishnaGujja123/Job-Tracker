<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Application Timeline</h2>
    <div v-if="applications.length === 0" class="alert alert-info text-center">
      No applications found. Add some applications to see their timeline.
    </div>
    <div v-else>
      <div
        v-for="application in applications"
        :key="application.id"
        class="card mb-4 shadow-sm rounded"
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
              class="timeline-item"
            >
              <span class="badge bg-secondary">{{ formatDate(historyItem.date) }}</span>
              <span>{{ historyItem.status }}</span>
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
/* Styling consistency with other components */
h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

.card {
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #0056b3;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.alert {
  font-size: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
}

.timeline {
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
}

.timeline li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
  font-size: 0.875rem;
}

.timeline li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #6c757d;
}

.timeline li span {
  margin-left: 10px;
}

.badge {
  font-size: 0.875rem;
  padding: 0.5rem;
}

/* Hover effects for cards */
.card:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease-in-out;
}

/* Responsive adjustments */
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

  .timeline li {
    font-size: 0.8rem;
  }
}
</style>