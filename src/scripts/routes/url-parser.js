/* eslint-disable max-len */
const UrlParser = {
  // Fungsi untuk parse URL aktif dengan kombinasi
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase(); // Ambil URL aktif dari hash dan ubah ke huruf kecil
    const splitedUrl = this._urlSplitter(url); // Split URL menjadi bagian-bagian
    return this._urlCombiner(splitedUrl); // Kombinasikan kembali URL berdasarkan hasil split
  },

  // Fungsi untuk parse URL aktif tanpa kombinasi
  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase(); // Ambil URL aktif dari hash dan ubah ke huruf kecil
    return this._urlSplitter(url); // Split URL menjadi bagian-bagian
  },

  // Fungsi internal untuk split URL menjadi resource, id, dan verb
  _urlSplitter(url) {
    const urlsSplits = url.split('/'); // Split URL berdasarkan '/'
    return {
      resource: urlsSplits[1] || null, // Bagian pertama setelah domain sebagai resource
      id: urlsSplits[2] || null, // Bagian kedua sebagai id
      verb: urlsSplits[3] || null, // Bagian ketiga sebagai verb
    };
  },

  // Fungsi internal untuk menggabungkan kembali URL berdasarkan objek hasil split
  _urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') // Resource jika ada
      + (splitedUrl.id ? '/:id' : '') // ID jika ada
      + (splitedUrl.verb ? `/${splitedUrl.verb}` : ''); // Verb jika ada
  },
};

export default UrlParser;
