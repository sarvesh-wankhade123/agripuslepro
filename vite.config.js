import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        login: 'login.html',
        analytics: 'analytics_reports.html',
        automated: 'automated_controls.html',
        crops: 'crops.html',
        settings: 'farm_settings.html',
        field: 'field_monitoring.html',
      }
    }
  }
});
