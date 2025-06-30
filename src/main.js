import './assets/main.css';

import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import routerOptions from './router';

export const createApp = ViteSSG(
  App,
  { 
    routes: routerOptions.routes,
    base: import.meta.env.BASE_URL,
  },
  ({ app, router, routes, isClient, initialState }) => {
    // install plugins etc.
  },
);
