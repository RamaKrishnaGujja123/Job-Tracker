<template>
  <div class="mb-4">
    <form @submit.prevent="applyFilters">
      <div class="row g-3">
        <div class="col-md-4">
          <select v-model="filters.status" class="form-select">
            <option value="">Filter by Status</option>
            <option v-for="status in statuses" :key="status" :value="status">
              {{ status }}
            </option>
          </select>
        </div>
        <div class="col-md-4">
          <input
            type="text"
            v-model="filters.keyword"
            class="form-control"
            placeholder="Search by Company or Role"
          />
        </div>
        <div class="col-md-4">
          <button type="submit" class="btn btn-primary me-2">Apply</button>
          <button type="button" class="btn btn-secondary" @click="clearFilters">
            Clear
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statuses: [
        'Saved',
        'Applied',
        'Phone Screen',
        'Technical Interview',
        'Final Interview',
        'Offer Extended',
        'Offer Accepted',
        'Rejected',
        'Withdrawn',
      ],
    };
  },
  methods: {
    applyFilters() {
      this.$emit('applyFilters', { ...this.filters });
    },
    clearFilters() {
      this.$emit('clearFilters');
    },
  },
};
</script>