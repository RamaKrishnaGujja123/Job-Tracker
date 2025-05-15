<template>
  <span :class="badgeClass" class="badge text-white px-2 py-1 rounded">
    {{ status }}
  </span>
</template>

<script>
export default {
  name: "StatusBadge",
  props: {
    status: {
      type: String,
      required: true,
    },
  },
  computed: {
    badgeClass() {
      const statusColors = {
        Saved: "bg-secondary",
        Applied: "bg-primary",
        "Phone Screen": "bg-info",
        "Technical Interview": "bg-warning text-dark",
        "Final Interview": "bg-orange text-dark", // Custom color, define in CSS
        "Offer Extended": "bg-success",
        "Offer Accepted": "bg-success",
        Rejected: "bg-danger",
        Withdrawn: "bg-dark",
      };
      return statusColors[this.status] || "bg-secondary";
    },
  },
};
</script>

<style scoped>
/* Custom orange background for Final Interview */
.bg-orange {
  background-color: #fd7e14; /* Bootstrap orange */
}

/* Hover scale effect */
.badge:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease-in-out;
}

/* Responsive font and padding */
@media (max-width: 768px) {
  .badge {
    font-size: 0.875rem;
    padding: 0.5rem 0.75rem;
  }
}
</style>
