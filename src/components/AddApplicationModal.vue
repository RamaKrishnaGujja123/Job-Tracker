<template>
  <div>
    <!-- Add Application Button -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addApplicationModal"
      title="Add a new application"
    >
      Add Application
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="addApplicationModal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
      ref="modal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Add Application</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <!-- Modal Body -->
          <div class="modal-body">
            <form @submit.prevent="saveApplication">
              <div class="mb-3">
                <label for="companyName" class="form-label">Company</label>
                <input
                  type="text"
                  class="form-control"
                  id="companyName"
                  placeholder="Enter company name"
                  v-model="newApplication.company"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="roleName" class="form-label">Role</label>
                <input
                  type="text"
                  class="form-control"
                  id="roleName"
                  placeholder="Enter role"
                  v-model="newApplication.role"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="status" class="form-label">Status</label>
                <select
                  class="form-select"
                  id="status"
                  v-model="newApplication.status"
                >
                  <option value="Applied">Applied</option>
                  <option value="Interviewing">Interviewing</option>
                  <option value="Offered">Offered</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
              <!-- Form submit buttons moved to footer for better UX -->
            </form>
          </div>

          <!-- Modal Footer -->
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="saveApplication"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle"; // Import Bootstrap JS for modal handling

export default {
  emits: ["addApplication"],
  setup(_, { emit }) {
    const newApplication = ref({
      company: "",
      role: "",
      status: "Applied",
    });

    const modalInstance = ref(null);

    onMounted(() => {
      // Initialize Bootstrap modal JS
      const modalEl = document.getElementById("addApplicationModal");
      modalInstance.value = new bootstrap.Modal(modalEl);
    });

    const saveApplication = () => {
      if (
        !newApplication.value.company.trim() ||
        !newApplication.value.role.trim()
      ) {
        alert("Please fill in all required fields.");
        return;
      }
      // Emit the new application object to parent component
      emit("addApplication", { ...newApplication.value });

      // Reset the form
      newApplication.value = {
        company: "",
        role: "",
        status: "Applied",
      };

      // Hide the modal using Bootstrap JS API
      modalInstance.value.hide();
    };

    return {
      newApplication,
      saveApplication,
    };
  },
};
</script>

<style scoped>
/* You can add any component-specific styling here */
</style>
