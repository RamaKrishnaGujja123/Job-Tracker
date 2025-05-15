<template>
  <span :class="badgeClass" class="badge text-white px-2 py-1 rounded">
    {{ status }}
  </span>
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    badgeClass() {
      const statusColors = {
        Saved: 'bg-secondary',
        Applied: 'bg-primary',
        'Phone Screen': 'bg-info',
        'Technical Interview': 'bg-warning',
        'Final Interview': 'bg-orange',
        'Offer Extended': 'bg-success',
        'Offer Accepted': 'bg-success',
        Rejected: 'bg-danger',
        Withdrawn: 'bg-dark',
      };
      return statusColors[this.status] || 'bg-secondary';
    },
  },
};
</script>

<style scoped>
/* Add hover effect for badges */
.badge:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .badge {
    font-size: 0.875rem; /* Slightly smaller font for smaller screens */
    padding: 0.5rem 0.75rem;
  }
}
</style>