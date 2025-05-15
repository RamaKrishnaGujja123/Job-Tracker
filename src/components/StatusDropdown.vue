<template>
  <div>
    <select class="form-select" v-model="selectedStatus" @change="emitStatusChange">
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