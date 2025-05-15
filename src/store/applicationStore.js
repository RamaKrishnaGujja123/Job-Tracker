import { defineStore } from 'pinia';

export const useApplicationStore = defineStore('applicationStore', {
  state: () => ({
    applications: JSON.parse(localStorage.getItem('applications') || '[]'),
  }),
  actions: {
    addApplication(application) {
      this.applications.push(application);
      this.saveToLocalStorage();
    },
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
    saveToLocalStorage() {
      localStorage.setItem('applications', JSON.stringify(this.applications));
    },
  },
});