/* eslint-disable import/no-unresolved */

// Import polyfills dan styles
import 'regenerator-runtime'; // Polyfill untuk async/await
import '../styles/main.css'; // File CSS utama

// Import Firebase authentication
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Fungsi utilitas untuk autentikasi pengguna
import { Landing, Dashboard } from './utils/user-authentication';

// Komponen utama aplikasi
import App from './views/app';

// Registrasi service worker
import swRegister from './utils/sw-register';

// Inisialisasi instance App
const app = new App({
  content: document.querySelector('#mainContainer'), // Memilih kontainer utama untuk merender
});

// Listener perubahan status autentikasi Firebase
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
    Dashboard(); // Pengguna sudah login, tampilkan dashboard
  } else {
    Landing(); // Pengguna belum login, tampilkan halaman landing
  }
});

// Event listener untuk perubahan hash URL
window.addEventListener('hashchange', () => {
  app.renderPage(); // Merender halaman berdasarkan perubahan hash URL
});

// Event listener ketika halaman selesai dimuat
window.addEventListener('load', () => {
  app.renderPage(); // Merender konten halaman awal
  swRegister(); // Registrasi service worker untuk fitur offline
});
