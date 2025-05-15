<template>
  <div class="container mt-4">
    <h2 class="mb-4 text-center">Add New Application</h2>
    <form @submit.prevent="addApplication" class="p-4 bg-light rounded shadow-sm">
      <div class="mb-3">
        <label for="company" class="form-label">Company Name</label>
        <input
          type="text"
          id="company"
          v-model="form.company"
          class="form-control"
          required
          autocomplete="organization"
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
          autocomplete="off"
        />
      </div>

      <div class="mb-3">
        <label for="location" class="form-label">Location</label>
        <input
          type="text"
          id="location"
          v-model="form.location"
          class="form-control"
          autocomplete="off"
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
          <option
            v-for="status in statuses"
            :key="status"
            :value="status"
          >
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
          rows="3"
        ></textarea>
      </div>

      <button type="submit" class="btn btn-primary w-100">
        Add Application
      </button>
    </form>
  </div>
</template>

<script>
import { useApplicationStore } from '../store/applicationStore';

export default {
  name: "AddApplication",
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
        id: Date.now().toString(), // Unique ID based on timestamp
        history: [{ status: this.form.status, date: new Date().toISOString() }],
      };
      store.addApplication(application);
      this.$router.push('/'); // Redirect after adding
    },
  },
};
</script>

<style scoped>
/* Typography */
h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
}

/* Form styling */
form {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
}

label {
  font-weight: 600;
  color: #555;
}

input,
select,
textarea {
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #0056b3;
  box-shadow: 0 0 5px rgba(0, 86, 179, 0.3);
  outline: none;
}

button {
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  font-weight: 600;
}

button:hover {
  transform: scale(1.02);
}

/* Responsive */
@media (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }
  form {
    padding: 1rem;
  }
}
</style>
