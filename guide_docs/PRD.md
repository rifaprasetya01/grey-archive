# PRODUCT REQUIREMENTS DOCUMENT (PRD)

**Proyek**: Personal Archive Portfolio (No-Supabase, Junior-Friendly & Scalable)
**Versi**: 1.2 (Revisi Database Mandiri)
**Tanggal**: 29 Juni 2026
**Target Level**: Pemula / Junior Developer

---

## 1. Tujuan Produk

- Menjadi arsip digital personal untuk mendokumentasikan kegiatan, tugas, proyek, dan prestasi (kampus & non-kampus).
- Memberikan nilai nostalgia dan refleksi diri bagi pemilik.
- Menjadi portfolio profesional yang kredibel bagi recruiter dengan kendali penuh atas database dan data pribadi sendiri.

## 2. Target Audience

- **Utama**: Pemilik website (untuk arsip & dokumentasi).
- **Sekunder**: Recruiter, calon klien, atau rekan kerja.

## 3. Struktur Umum Website (Dua Sisi)

### A. Sisi Publik (Public Website - Tanpa Login)
- Menampilkan arsip yang berstatus `isPublic: true`.
- Desain bersih, informatif, dan *mobile-first*.

**Halaman Publik**:
- **Landing Page & About**: Gabungan profil singkat, pendidikan, skills, dan kontak dalam satu alur sederhana.
- **Timeline Kronologis**: Daftar semua arsip publik diurutkan berdasarkan tanggal terbaru.
- **Halaman Detail Arsip**: Menampilkan judul, tanggal, deskripsi (teks biasa), tags, dan tombol/link menuju media di Google Drive.

**Fitur Publik**:
- Search Bar (berdasarkan Judul)
- Filter berdasarkan Tags (klik pada tag untuk menyaring arsip)
- Responsive & Mobile-First

### B. Sisi Privat (Admin Dashboard - Terproteksi)
- Hanya dapat diakses oleh pemilik melalui sistem login terproteksi.

**Fitur Admin Dashboard**:
- **Authentication**: Login menggunakan **Auth.js (NextAuth)** atau sistem Password *hardcoded* sederhana yang aman di server-side.
- **Manajemen Arsip (CRUD)**: Form sederhana untuk Tambah, Lihat, Edit, dan Hapus arsip langsung ke database utama.
- **Set Status**: Switch toggle untuk menentukan arsip bersifat Public atau Private.

---

## 4. Scope MVP (Minimal Viable Product)

### Fitur Must-Have

**Sisi Publik**:
1. Halaman utama (Profil + Timeline Terintegrasi).
2. Halaman detail arsip yang menampilkan data teks biasa dan link media Google Drive.
3. Fitur pencarian teks pada judul dan filter *click-to-filter* pada tag.

**Sisi Admin**:
1. Halaman Login khusus menggunakan kredensial (username/password) yang disimpan aman di Environment Variable (`.env`).
2. Form CRUD Arsip dengan input: Judul, Deskripsi (Plain Text), Tanggal, Tags (Input berbasis teks), URL Media, dan Status Publik.

**Technical Requirements**:
- **Database & Backend**: Menggunakan database relasional independen dengan tabel datar (*flat table*) tanpa relasi *many-to-many* yang kompleks.
- **Media Handling**: Dialihkan sepenuhnya ke Google Drive (sistem hanya menyimpan string URL).

---

## 5. Struktur Data & Skema Database (Independent Architecture)

Menggunakan PostgreSQL murni (atau SQLite) lewat Drizzle ORM dengan memanfaatkan tipe data Array (atau teks yang dipisahkan koma jika menggunakan SQLite) agar tetap efisien dan mudah dikelola.

```typescript
// Menggunakan PostgreSQL Independen via Drizzle ORM
export const archives = pgTable('archives', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull(),                  // Judul (Plain Text)
  description: text('description').notNull(),      // Deskripsi (Plain Text tanpa format)
  date: date('date').notNull(),                    // Tanggal kegiatan/arsip
  tags: text('tags').array(),                     // Array string sederhana, misal: ['iot', 'kuliah']
  mediaUrl: text('media_url'),                    // Link eksternal mengarah ke Google Drive
  isPublic: boolean('is_public').default(false).notNull(), // Status publikasi
});

```

---

## 6. Rekomendasi Tech Stack (Bebas Supabase)

* **Frontend & Framework**: Next.js 15 (App Router)
* **Database**: PostgreSQL murni (Hosting gratis/murah di **Neon.tech**, **Railway**, atau **Render**)
* **ORM**: Drizzle ORM (Untuk mengontrol dan berkomunikasi dengan database)
* **Authentication**: **Auth.js / NextAuth** (Credentials Provider menggunakan password dari `.env`) atau Middleware Proteksi manual.
* **Styling**: Tailwind CSS + shadcn/ui
* **Deployment**: Vercel (Frontend & Serverless Functions)

---

## 7. Alur Kerja Pengelolaan Media (Google Drive Integration)

1. Admin mengunggah file bukti (Foto, PDF, atau Video) ke akun Google Drive pribadi.
2. Admin mengatur hak akses file di Google Drive menjadi **"Siapa saja yang memiliki link dapat melihat"**.
3. Admin menyalin (*copy*) tautan berbagi tersebut.
4. Admin menempelkan (*paste*) tautan tersebut ke kolom `mediaUrl` di Admin Dashboard.
5. Sisi publik akan menampilkan tombol *"Lihat Dokumen/Media"* yang membuka langsung ke Google Drive.

---

## 8. Out of Scope (Dieliminasi untuk Menyederhanakan)

* Pihak ketiga BaaS (Backend-as-a-Service) seperti Supabase/Firebase.
* Rich Text Editor / Markdown Parser.
* Sistem Manajemen Tag terpisah.
* Registrasi User Baru (Hanya ada 1 akun admin statis).


### Keuntungan Perubahan Ini Bagi Anda:
1. **Vendor Lock-in Hilang:** Anda tidak terikat dengan aturan atau batasan kuota gratis dari Supabase.
2. **Data Milik Sendiri Penuh:** Database PostgreSQL Anda berjalan mandiri, Anda bisa mengekspor atau memindahkannya ke penyedia cloud mana pun dengan sangat mudah lewat Drizzle ORM.
3. **Login Jauh Lebih Simpel:** Karena hanya Anda sendiri adminnya, kita bisa pakai sistem autentikasi berbasis *Environment Variable* di Next.js tanpa perlu membuat tabel `users` di database. Lebih aman dari tangan jahil dan super mudah dibuat!
