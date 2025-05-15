<template>
  <div>
    <select
      class="form-select px-3 py-2 rounded"
      v-model="selectedStatus"
      @change="emitStatusChange"
      aria-label="Select application status"
    >
      <option v-for="status in statuses" :key="status" :value="status">
        {{ status }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "StatusDropdown",
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
    };
  },
  methods: {
    emitStatusChange() {
      this.$emit("statusChange", this.selectedStatus);
    },
  },
  watch: {
    currentStatus(newVal) {
      this.selectedStatus = newVal; // keep in sync if parent changes prop
    },
  },
};
</script>

<style scoped>
.form-select {
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    transform 0.2s ease-in-out;
  cursor: pointer;
}

.form-select:hover {
  transform: scale(1.02);
}

.form-select:focus {
  border-color: #0056b3;
  box-shadow: 0 0 5px rgba(0, 86, 179, 0.3);
  outline: none;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-select {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>
