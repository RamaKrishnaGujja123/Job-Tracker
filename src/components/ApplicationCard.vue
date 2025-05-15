<template>
  <div class="card shadow-sm rounded text-center">
    <div class="card-body">
      <h5 class="card-title">{{ application.company }}</h5>
      <p class="card-text">
        <strong>Role:</strong> {{ application.role }} <br />
        <strong>Status:</strong>
        <StatusBadge :status="application.status" />
      </p>
      <StatusDropdown
        :currentStatus="application.status"
        @statusChange="updateStatus"
      /> 
      <div class="mt-3">
        <button class="btn btn-danger btn-sm" @click="deleteApplication">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import StatusBadge from './StatusBadge.vue';
import StatusDropdown from './StatusDropdown.vue';

export default {
  props: {
    application: {
      type: Object,
      required: true,
    },
  },
  components: {
    StatusBadge,
    StatusDropdown,
  },
  methods: {
    updateStatus(newStatus) {
      this.$emit('updateStatus', this.application.id, newStatus);
    },
    deleteApplication() {
      if (confirm('Are you sure you want to delete this application?')) {
        this.$emit('deleteApplication', this.application.id);
      }
    },
  },
  mounted() {
    import('gsap').then(({ gsap }) => {
      gsap.from(this.$el, { opacity: 0, y: 50, duration: 0.5 });
    });
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.btn-danger {
  background-color: #dc3545;
  border-color: #dc3545;
}

.btn-danger:hover {
  background-color: #c82333;
  border-color: #bd2130;
}
</style>
