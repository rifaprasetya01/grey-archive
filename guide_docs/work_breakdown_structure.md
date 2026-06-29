Berikut adalah **Work Breakdown Structure (WBS)** untuk proyek _Personal Archive Portfolio_ berdasarkan PRD final yang telah kita sepakati. WBS ini dipecah secara hierarkis hingga ke unit kerja terkecil (tugas spesifik) agar memudahkan Anda dalam melakukan _tracking_ progres harian.

---

# 📊 Work Breakdown Structure (WBS)

## 1. Inisialisasi & Persiapan Proyek (FONDASI)

- **1.1. Setup Lingkungan Pengembangan (Development Environment)**
- 1.1.1. Inisialisasi proyek Next.js 15 menggunakan App Router [o].

- 1.1.2. Konfigurasi Git dan membuat repositori di GitHub.
- 1.1.3. Install dan konfigurasi Tailwind CSS.

- 1.1.4. Inisialisasi komponen library `shadcn/ui`.

- **1.2. Konfigurasi Database & ORM**
- 1.2.1. Membuat akun dan proyek database PostgreSQL baru di penyedia cloud (Neon/Railway/Render).

- 1.2.2. Install `drizzle-orm` dan `drizzle-kit` pada proyek.

- 1.2.3. Membuat file konfigurasi koneksi database (`db.ts` dan `drizzle.config.ts`).

- 1.2.4. Menulis berkas skema database `archives` sesuai spesifikasi PRD.

- **1.3. Pembuatan Data Palsu (Mock Data)**
- 1.3.1. Membuat file `mockData.ts` yang menampung array objek arsip (judul, deskripsi plain text, tanggal, array tags, URL Google Drive, status publik).

---

## 2. Pengembangan Sisi Publik (PUBLIC SIDE)

- **2.1. Slicing UI Komponen & Halaman**
- 2.1.1. Membuat komponen Layout utama (Header/Navbar sederhana & Footer).
- 2.1.2. Slicing Halaman Utama (Landing Page, bagian Profil Singkat, Pendidikan, dan Kontak).

- 2.1.3. Slicing Komponen Timeline Kronologis (Desain kartu arsip yang rapi).

- 2.1.4. Slicing Halaman Detail Arsip (`/archive/[id]`) untuk menampilkan info lengkap.

- **2.2. Implementasi Logika Data & Interaktivitas**
- 2.2.1. Menghubungkan halaman utama dan detail untuk mengambil data langsung dari database via Drizzle ORM.

- 2.2.2. Menambahkan filter query `WHERE is_public = true` pada penarikan data sisi publik.

- 2.2.3. Membuat fungsi pencarian teks (Search Bar) berdasarkan judul arsip.

- 2.2.4. Membuat fungsi penyaringan data (_click-to-filter_) ketika komponen badge Tag diklik.

- 2.2.5. Mengintegrasikan tautan URL Media agar membuka tab baru langsung mengarah ke Google Drive.

---

## 3. Pengembangan Sisi Privat & Keamanan (ADMIN DASHBOARD)

- **3.1. Sistem Autentikasi (Sederhana & Terproteksi)**
- 3.1.1. Menyiapkan variabel lingkungan `ADMIN_USERNAME` dan `ADMIN_PASSWORD` di berkas `.env.local`.

- 3.1.2. Membuat halaman form login khusus di rute `/login`.

- 3.1.3. Membuat _Middleware_ Next.js atau konfigurasi Auth.js untuk mengunci akses seluruh rute `/admin`.

- **3.2. Manajemen Manajemen Data (CRUD Arsip)**
- 3.2.1. Slicing halaman utama dashboard (`/admin`) untuk menampilkan daftar semua arsip dalam bentuk tabel ringkas.

- 3.2.2. Membuat Form Tambah Arsip (Input judul, textarea plain text untuk deskripsi, tanggal, string tags, input URL Google Drive, dan toggle status publik).

- 3.2.3. Menulis fungsi _Server Action_ Next.js untuk operasi `INSERT` data baru ke database.

- 3.2.4. Membuat tombol dan logika operasi `DELETE` untuk menghapus arsip berdasarkan ID.

- 3.2.5. Membuat Form Edit Arsip yang otomatis terisi (_auto-populate_) dengan data lama.

- 3.2.6. Menulis fungsi _Server Action_ Next.js untuk operasi `UPDATE` data arsip lama.

---

## 4. Pengujian & Penjaminan Mutu (TESTING & OPTIMIZATION)

- **4.1. Pengujian Fungsionalitas (Functional Testing)**
- 4.1.1. Menguji alur login admin dengan skenario password benar dan salah.

- 4.1.2. Menguji operasi CRUD (memastikan data yang ditambah/diubah berhasil masuk ke database dan data yang dihapus benar-benar hilang).

- 4.1.3. Memverifikasi bahwa arsip dengan status `isPublic: false` (Private) sama sekali tidak muncul di sisi publik.

- 4.1.4. Validasi tautan Google Drive berjalan lancar di berbagai browser.

- **4.2. Pengujian Tampilan (UI/UX Testing)**
- 4.2.1. Memeriksa responsivitas desain pada ukuran layar HP, Tablet, dan Desktop (Mobile-first check).

---

## 5. Deployment & Peluncuran (DEPLOYMENT)

- **5.1. Konfigurasi Produksi**
- 5.1.1. Melakukan _build_ proyek secara lokal (`npm run build`) untuk memastikan tidak ada _error_ pada kode TypeScript.
- 5.1.2. Melakukan _push_ final seluruh kode program terupdate ke repositori GitHub.

- **5.2. Publikasi ke Cloud (Go Live)**
- 5.2.1. Menghubungkan repositori GitHub ke platform Vercel.

- 5.2.2. Memasukkan semua Environment Variables (Koneksi Database, Password Admin) pada pengaturan Vercel.

- 5.2.3. Melakukan proses _Deployment_ awal dan memastikan website dapat diakses secara online.

---
