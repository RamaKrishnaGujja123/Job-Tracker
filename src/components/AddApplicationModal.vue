<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#addApplicationModal"
      data-bs-placement="top"
      title="Add a new application"
    >
      Add Application
    </button>

    <div
      class="modal fade"
      id="addApplicationModal"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalLabel">Add Application</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="companyName" class="form-label">Company</label>
                <input
                  type="text"
                  class="form-control"
                  id="companyName"
                  placeholder="Enter company name"
                  v-model="newApplication.company"
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
            </form>
          </div>
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
export default {
  data() {
    return {
      newApplication: {
        company: "",
        role: "",
        status: "Applied",
      },
    };
  },
  methods: {
    saveApplication() {
      this.$emit("addApplication", this.newApplication);
      // Reset form after saving
      this.newApplication = {
        company: "",
        role: "",
        status: "Applied",
      };
      // Close modal
      document.querySelector("#addApplicationModal").click();
    },
  },
};
</script>