<template>
  <div class="container mt-4">
    <h2 class="mb-4">Application Timeline</h2>
    <div v-if="applications.length === 0" class="alert alert-info">
      No applications found. Add some applications to see their timeline.
    </div>
    <div v-else>
      <div
        v-for="application in applications"
        :key="application.id"
        class="card mb-4 shadow-sm"
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

<style>
.timeline {
  list-style-type: none;
  padding: 0;
}
.timeline li {
  margin: 10px 0;
  padding-left: 20px;
  position: relative;
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
</style>