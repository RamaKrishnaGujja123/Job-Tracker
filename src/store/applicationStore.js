import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('applicationStore', {
  state: () => ({
    applications: JSON.parse(localStorage.getItem('applications') || '[]'),
  }),
  actions: {
    /**
     * Add a new application to the store and save it to localStorage.
     * @param {Object} application - The application object to add.
     */
    addApplication(application) {
      this.applications.push(application);
      this.saveToLocalStorage();
    },

    /**
     * Update the status of an existing application and add a history entry.
     * @param {string} id - The ID of the application to update.
     * @param {string} newStatus - The new status to assign to the application.
     */
    updateApplicationStatus(id, newStatus) {
      const appIndex = this.applications.findIndex((app) => app.id === id);
      if (appIndex !== -1) {
        this.applications[appIndex].status = newStatus;
        this.applications[appIndex].history.push({
          status: newStatus,
          date: new Date().toISOString(),
        });
        this.saveToLocalStorage();
      }
    },

    /**
     * Remove an application from the store by ID and update localStorage.
     * @param {string} id - The ID of the application to remove.
     */
    removeApplication(id) {
      this.applications = this.applications.filter(app => app.id !== id);
      this.saveToLocalStorage();
    },

    /**
     * Save the current state of applications to localStorage.
     */
    saveToLocalStorage() {
      localStorage.setItem('applications', JSON.stringify(this.applications));
    },
  },
});
