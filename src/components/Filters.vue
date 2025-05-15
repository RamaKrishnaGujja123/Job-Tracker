<template>
  <div class="mb-4">
    <form @submit.prevent="applyFilters" novalidate>
      <div class="row g-3">
        <!-- Status Dropdown -->
        <div class="col-md-4">
          <label for="filter-status" class="form-label visually-hidden">Filter by Status</label>
          <select
            v-model="localFilters.status"
            class="form-select"
            id="filter-status"
            name="status"
            aria-label="Filter by Status"
          >
            <option value="">Filter by Status</option>
            <option
              v-for="status in statuses"
              :key="status"
              :value="status"
            >
              {{ status }}
            </option>
          </select>
        </div>

        <!-- Keyword Input -->
        <div class="col-md-4">
          <label for="filter-keyword" class="form-label visually-hidden"
            >Search by Company or Role</label
          >
          <input
            type="text"
            v-model="localFilters.keyword"
            class="form-control"
            id="filter-keyword"
            name="keyword"
            placeholder="Search by Company or Role"
            autocomplete="on"
            aria-label="Search by Company or Role"
          />
        </div>

        <!-- Buttons -->
        <div
          class="col-md-4 d-flex justify-content-start justify-content-md-end"
        >
          <button type="submit" class="btn btn-primary me-2">
            Apply
          </button>
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
  name: "FilterForm",
  props: {
    filters: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      statuses: [
        "Saved",
        "Applied",
        "Phone Screen",
        "Technical Interview",
        "Final Interview",
        "Offer Extended",
        "Offer Accepted",
        "Rejected",
        "Withdrawn",
      ],
      localFilters: {
        status: "",
        keyword: "",
      },
    };
  },
  watch: {
    filters: {
      immediate: true,
      deep: true,
      handler(newFilters) {
        this.localFilters = { ...newFilters };
      },
    },
  },
  methods: {
    applyFilters() {
      this.$emit("applyFilters", { ...this.localFilters });
    },
    clearFilters() {
      this.localFilters.status = "";
      this.localFilters.keyword = "";
      this.$emit("clearFilters");
    },
  },
};
</script>

<style scoped>
form {
  background-color: #f9f9f9;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

select,
input {
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

select:focus,
input:focus {
  border-color: #0056b3;
  box-shadow: 0 0 5px rgba(0, 86, 179, 0.3);
  outline: none;
}

button {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  min-width: 100px;
}

button:hover,
button:focus {
  transform: scale(1.05);
  outline: none;
}

@media (max-width: 768px) {
  .d-flex {
    flex-direction: column;
    align-items: stretch;
  }

  .btn {
    margin-bottom: 0.5rem;
    width: 100%;
  }
}
</style>
