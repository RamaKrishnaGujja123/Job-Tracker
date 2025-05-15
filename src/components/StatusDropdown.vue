<template>
  <div>
    <select
      class="form-select px-3 py-2 rounded"
      v-model="selectedStatus"
      @change="emitStatusChange"
    >
      <option v-for="status in statuses" :key="status" :value="status">
        {{ status }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    currentStatus: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      selectedStatus: this.currentStatus,
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
    emitStatusChange() {
      this.$emit('statusChange', this.selectedStatus);
    },
  },
};
</script>

<style scoped>
/* Add hover and focus effects for dropdown */
.form-select {
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.form-select:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease-in-out;
}

.form-select:focus {
  border-color: #0056b3;
  box-shadow: 0 0 5px rgba(0, 86, 179, 0.3);
}

/* Adjustments for smaller screens */
@media (max-width: 768px) {
  .form-select {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>