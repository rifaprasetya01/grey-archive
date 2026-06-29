Berikut adalah **Roadmap & Timeline** pengerjaan proyek _Personal Archive Portfolio_ yang dirancang khusus untuk programmer pemula. Timeline ini dibuat dengan estimasi total **4 Minggu (1 Bulan)** dengan asumsi alokasi waktu santai sekitar 2-3 jam per hari.

Strategi utamanya adalah **"UI First, Data Later"**—membuat tampilannya dulu menggunakan data palsu (_mock data_), baru kemudian menghubungkannya ke database asli agar Anda tidak pusing memikirkan _bug_ visual dan _bug_ data secara bersamaan.

---

## 🗺️ Roadmap Proyek (Peta Jalan)

Roadmap ini dibagi menjadi 4 Fase Utama yang berurutan:

```
[FASE 1: Fondasi & UI] ──> [FASE 2: Database & ORM] ──> [FASE 3: Dashboard & Auth] ──> [FASE 4: Integrasi & Deploy]

```

### **Fase 1: Fondasi & UI Sisi Publik (Minggu 1)**

- **Tujuan**: Menyiapkan proyek Next.js dan merancang semua halaman yang bisa dilihat pengunjung menggunakan data buatan.
- **Fokus**: Slicing UI, Tailwind CSS, shadcn/ui, Responsive Design.

### **Fase 2: Database & Setup ORM (Minggu 2)**

- **Tujuan**: Menyiapkan "rumah" bagi data arsip Anda.
- **Fokus**: Pembuatan cloud database gratis, konfigurasi Drizzle ORM, dan pengujian komunikasi data (_seeding_).

### **Fase 3: Sisi Admin & Proteksi Login (Minggu 3)**

- **Tujuan**: Membuat halaman rahasia tempat Anda mengelola data arsip.
- **Fokus**: Pembuatan Form CRUD, integrasi Auth.js / Middleware Next.js berbasis `.env`.

### **Fase 4: Integrasi Akhir, Testing, & Launch (Minggu 4)**

- **Tujuan**: Menyambungkan semua komponen dan meluncurkan website ke internet.
- **Fokus**: Pembersihan kode, testing alur Google Drive, Deployment ke Vercel.

---

## 📅 Timeline Mingguan (Detail Eksekusi)

### 🗓️ MINGGU 1: Slicing UI Sisi Publik & Mock Data

- **Hari 1-2: Inisialisasi Proyek**
- Install Next.js 15 (App Router).
- Setup Tailwind CSS dan inisialisasi shadcn/ui.
- Konfigurasi tema (Light/Dark mode jika diinginkan).

- **Hari 3-4: Landing Page & Timeline**
- Membuat satu file `mockData.ts` berisi array objek arsip (judul, deskripsi teks biasa, tanggal, tags array, url GDrive).

- Slicing halaman utama: Header/Profil singkat + Komponen Timeline menggunakan data dari `mockData.ts`.

- **Hari 5-6: Halaman Detail, Search, & Filter UI**
- Membuat halaman detail (`/archive/[id]`).

- Membuat komponen Search Bar dan Badge Tag di UI (logika pencariannya menyusul).

- **Hari 7: Evaluasi UI**
- Memastikan tampilan web sudah rapi dan tidak rusak saat dibuka di HP (Mobile-first).

### 🗓️ MINGGU 2: Database Setup & Integrasi Sisi Publik

- **Hari 8-9: Setup Cloud Database & Drizzle**
- Daftar akun di Neon.tech (atau Railway/Render) dan buat database PostgreSQL gratis.

- Install Drizzle ORM dan Drizzle Kit ke proyek Next.js.

- Tulis skema database `archives` sesuai dengan dokumen PRD.

- **Hari 10-11: Migrasi & Seeding**
- Jalankan perintah `drizzle-kit push` untuk membuat tabel asli di cloud database.

- Buat skrip _seed_ sederhana untuk memasukkan data palsu dari `mockData.ts` ke database asli melalui Drizzle.

- **Hari 12-14: Hubungkan UI Publik ke Database Asli**
- Ganti konsumsi `mockData.ts` di halaman publik menggunakan query asli dari Drizzle (`db.select().from(archives)...`).
- Implementasikan logika _Search_ (pencarian teks pada judul) dan _Filter_ (klik badge tag) menggunakan filter query SQL dasar.

### 🗓️ MINGGU 3: Dashboard Admin & Keamanan Login

- **Hari 15-16: Setup Autentikasi Kredensial**
- Install Auth.js (NextAuth) atau buat _Middleware_ Next.js manual.
- Simpan `ADMIN_USERNAME` dan `ADMIN_PASSWORD` di file `.env.local`.

- Buat halaman `/login` sederhana. Pastikan jika password salah, akses ditolak.

- **Hari 17-18: UI Dashboard & Fitur "Read & Delete"**
- Buat halaman utama dashboard admin (`/admin`) yang diproteksi (hanya bisa dibuka jika sudah login).

- Tampilkan semua data arsip dalam bentuk tabel atau list ringkas, lengkap dengan tombol "Hapus" dan "Edit".

- **Hari 19-21: Form "Create & Update" (Tambah & Edit Data)**
- Buat form input menggunakan komponen `<textarea>` biasa (sesuai kesepakatan plain text).

- Buat logika _Server Action_ di Next.js untuk menangani fungsi `Insert` data baru dan `Update` data lama ke database.

### 🗓️ MINGGU 4: Integrasi Google Drive, Testing, & Deploy

- **Hari 22-23: Uji Coba Alur Google Drive**
- Simulasi memasukkan link "Anyone with link can view" dari Google Drive ke kolom URL Media di dashboard admin.

- Pastikan di sisi publik, tombol _"Lihat Dokumen/Media"_ muncul dan berhasil mengarah ke file GDrive tersebut saat diklik.

- **Hari 24-25: Bug Fixing & Refactoring**
- Uji coba skenario _error_: Bagaimana jika form dikosongkan? Bagaimana jika mencari judul arsip yang tidak ada?
- Rapikan susunan kode agar mudah dibaca di masa depan.

- **Hari 26-27: Deployment Akhir (Go Live!)**
- Push kode proyek Anda ke GitHub.
- Hubungkan repositori GitHub ke Vercel untuk proses _deployment_ otomatis.

- Masukkan semua Environment Variable (Koneksi Database, Kredensial Admin) ke dashboard Vercel.

- **Hari 28: SELESAI & LAUNCH 🚀**
- Website portfolio mandiri Anda resmi online dan siap dibagikan ke recruiter!

---
