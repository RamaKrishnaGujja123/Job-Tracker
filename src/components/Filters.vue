<template>
  <div class="mb-4">
    <form @submit.prevent="applyFilters">
      <div class="row g-3">
        <div class="col-md-4">
          <select v-model="localFilters.status" class="form-select">
            <option value="">Filter by Status</option>
            <option v-for="status in statuses" :key="status" :value="status">
              {{ status }}
            </option>
          </select>
        </div>
        <div class="col-md-4">
          <input
            type="text"
            v-model="localFilters.keyword"
            class="form-control"
            placeholder="Search by Company or Role"
          />
        </div>
        <div class="col-md-4 d-flex justify-content-start justify-content-md-end">
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
      localFilters: {
        status: this.filters.status,
        keyword: this.filters.keyword,
      },
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
  watch: {
    filters: {
      handler(newVal) {
        this.localFilters.status = newVal.status;
        this.localFilters.keyword = newVal.keyword;
      },
      deep: true,
    },
  },
  methods: {
    applyFilters() {
      this.$emit('applyFilters', { ...this.localFilters });
    },
    clearFilters() {
      this.localFilters.status = '';
      this.localFilters.keyword = '';
      this.$emit('clearFilters');
    },
  },
};
</script>
