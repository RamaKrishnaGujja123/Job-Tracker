<template>
  <div class="container mt-4">
    <h2 class="mb-4">Add New Application</h2>
    <form @submit.prevent="addApplication">
      <div class="mb-3">
        <label for="company" class="form-label">Company Name</label>
        <input
          type="text"
          id="company"
          v-model="form.company"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role/Title</label>
        <input
          type="text"
          id="role"
          v-model="form.role"
          class="form-control"
          required
        />
      </div>
      <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input
          type="text"
          id="location"
          v-model="form.location"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="appliedDate" class="form-label">Applied Date</label>
        <input
          type="date"
          id="appliedDate"
          v-model="form.appliedDate"
          class="form-control"
        />
      </div>
      <div class="mb-3">
        <label for="status" class="form-label">Application Status</label>
        <select
          id="status"
          v-model="form.status"
          class="form-select"
        >
          <option v-for="status in statuses" :key="status" :value="status">
            {{ status }}
          </option>
        </select>
      </div>
      <div class="mb-3">
        <label for="notes" class="form-label">Notes/Comments</label>
        <textarea
          id="notes"
          v-model="form.notes"
          class="form-control"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Add Application</button>
    </form>
  </div>
</template>

<script>
import { useApplicationStore } from '../store/applicationStore';

export default {
  data() {
    return {
      form: {
        company: '',
        role: '',
        location: '',
        appliedDate: '',
        status: 'Saved',
        notes: '',
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
  methods: {
    addApplication() {
      const store = useApplicationStore();
      const application = {
        ...this.form,
        id: Date.now().toString(), // Simple unique ID
        history: [{ status: this.form.status, date: new Date().toISOString() }],
      };
      store.addApplication(application);
      this.$router.push('/'); // Redirect to Dashboard
    },
  },
};
</script>