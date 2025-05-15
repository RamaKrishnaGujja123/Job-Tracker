<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Dashboard</h2>

    <div class="d-flex justify-content-end mb-3 flex-wrap gap-2">
      <button class="btn btn-secondary" @click="exportDataAsJSON">
        Export as JSON
      </button>
      <button class="btn btn-secondary" @click="exportDataAsCSV">
        Export as CSV
      </button>
    </div>

    <Filters
      :filters="filters"
      @applyFilters="applyFilters"
      @clearFilters="clearFilters"
    />

    <div class="row">
      <div
        v-for="application in filteredApplications"
        :key="application.id"
        class="col-lg-4 col-md-6 col-sm-12 mb-4"
      >
        <ApplicationCard
          :application="application"
          @updateStatus="updateApplicationStatus"
          @deleteApplication="deleteApplication"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';
import { useApplicationStore } from '../store/applicationStore';
import ApplicationCard from '../components/ApplicationCard.vue';
import Filters from '../components/Filters.vue';
import { exportToJSON, exportToCSV } from '../utils/exportUtils';

export default {
  components: { ApplicationCard, Filters },
  setup() {
    const store = useApplicationStore();

    const filters = reactive({
      status: '',
      keyword: '',
    });

    const filteredApplications = computed(() => {
      return store.applications.filter((app) => {
        const matchesStatus = filters.status === '' || app.status === filters.status;
        const matchesKeyword =
          filters.keyword === '' ||
          app.company.toLowerCase().includes(filters.keyword.toLowerCase()) ||
          app.role.toLowerCase().includes(filters.keyword.toLowerCase());
        return matchesStatus && matchesKeyword;
      });
    });

    const applyFilters = (newFilters) => {
      filters.status = newFilters.status || '';
      filters.keyword = newFilters.keyword || '';
    };

    const clearFilters = () => {
      filters.status = '';
      filters.keyword = '';
    };

    const updateApplicationStatus = (id, newStatus) => {
      store.updateApplicationStatus(id, newStatus);
    };

    const deleteApplication = (id) => {
      if (confirm('Are you sure you want to delete this application?')) {
        store.removeApplication(id);
      }
    };

    const exportDataAsJSON = () => {
      exportToJSON(store.applications);
    };

    const exportDataAsCSV = () => {
      exportToCSV(store.applications);
    };

    return {
      filteredApplications,
      filters,
      applyFilters,
      clearFilters,
      updateApplicationStatus,
      deleteApplication,
      exportDataAsJSON,
      exportDataAsCSV,
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

.row {
  margin-top: 2rem;
}

button {
  transition: transform 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

.d-flex {
  gap: 0.5rem;
}

@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }

  .d-flex {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>
