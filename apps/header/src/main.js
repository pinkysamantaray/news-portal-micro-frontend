import { createApp } from 'vue';
import './assets/input.css';
import Header from './components/Header.vue';

// Uncomment this when exposed to host app
export function mount(el) {
  createApp(Header).mount(el);
}

// this for local development, comment when exposed to host app
// createApp(Header).mount('#header'); 