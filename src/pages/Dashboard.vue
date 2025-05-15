<template>
  <div class="container mt-4">
    <h2 class="mb-4">Dashboard</h2>
    <div class="d-flex justify-content-end mb-3">
      <button class="btn btn-secondary me-2" @click="exportDataAsJSON">
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
        class="col-lg-4 col-md-6 mb-4"
      >
        <ApplicationCard
          :application="application"
          @updateStatus="updateApplicationStatus"
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
        const matchesStatus =
          filters.status === '' || app.status === filters.status;
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
      exportDataAsJSON,
      exportDataAsCSV,
    };
  },
};
</script>