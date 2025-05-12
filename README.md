# 🥊 **Poke Master 3000** – Auto Poke Facebook Extension

🚀 **Poke Master 3000** adalah ekstensi Chrome yang bikin lu bisa **colek semua teman di Facebook** secara otomatis dalam sekali klik.

---

## 🧰 Fitur

* ✅ **Auto klik tombol “Colek” / “Poke”** di halaman `facebook.com/pokes`
* ⚙️ Delay klik bisa disesuaikan (biar aman atau barbar)
* 👀 Deteksi teks “Colek” (Bahasa Indonesia) & “Poke” (Bahasa Inggris)
* 🧠 Simulasi klik manusiawi (anti deteksi bot)

---

## 💾 Spesifikasi Teknis

* Dibuat dengan: HTML, CSS, JavaScript (Vanilla)
* Platform: Ekstensi Google Chrome (Manifest V3)
* Tidak butuh API atau login eksternal
* Full client-side, tidak menyimpan data apapun
* Aman & open-source

---

## 🖱 Cara Pakai

1. **Download atau clone** repositori ini
2. Buka Chrome, masuk ke `chrome://extensions`
3. Aktifkan **Developer Mode** (pojok kanan atas)
4. Klik **"Load unpacked"**, lalu pilih folder `poke-master By Jaki Jeki`
5. Buka Facebook dan akses halaman ini:
   👉 [`https://facebook.com/pokes`](https://facebook.com/pokes)
6. Klik ikon ekstensi → tekan tombol **Poke All Friends**

---

## ⚙️ Pengaturan Speed (opsional)
Kalau mau ngubah kecepatan klik tombol, buka file `popup.js`, cari bagian ini:
```js
setTimeout(nextPoke, 500 + Math.random() * 300); // delay klik
```
Ganti angkanya sesuai kebutuhan:
* `1000` = aman, slow
* `500` = normal
* `100` = cepat
* `50` = gas pol (risiko deteksi lebih tinggi)

---

## 📦 Catatan
* Pastikan kalian pakai Bahasa Indonesia (untuk deteksi "Colek") atau ganti keyword jadi `"poke"` kalau pakai Bahasa Inggris
* Hanya berfungsi di halaman `facebook.com/pokes`
* Jangan spam berlebihan, be human 😇
