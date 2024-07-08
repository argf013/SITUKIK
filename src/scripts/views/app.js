import firebaseConfig from '../globals/firebase-config'; // Konfigurasi Firebase
import FirebaseInitiator from '../utils/firebase-initiator'; // Inisialisasi Firebase
import UrlParser from '../routes/url-parser'; // Parser URL
import routes from '../routes/routes'; // Routes aplikasi

class App {
  constructor({ content }) {
    this._content = content; // Konten aplikasi yang akan dirender

    FirebaseInitiator.init({ firebaseConfig }); // Inisialisasi Firebase dengan konfigurasi
    console.log('Initial App sheel berhasil'); // Log keberhasilan inisialisasi aplikasi
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner(); // Mendapatkan URL aktif
    const page = routes[url]; // Mendapatkan halaman berdasarkan URL
    this._content.innerHTML = await page.render(); // Merender konten halaman
    await page.afterRender(); // Eksekusi setelah merender halaman
  }
}

export default App;
