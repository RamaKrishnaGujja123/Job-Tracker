<template>
  <div class="card shadow-sm">
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
  },
};
</script>