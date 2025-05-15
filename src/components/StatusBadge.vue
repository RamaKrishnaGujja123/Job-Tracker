<template>
  <span :class="badgeClass" class="badge">
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