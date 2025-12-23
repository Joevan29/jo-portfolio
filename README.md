# ✨ Joevan Pramana - Interactive Portfolio

![Project Status](https://img.shields.io/badge/status-active-success)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38bdf8)

Portfolio web modern dan interaktif yang dibangun untuk menampilkan *showcase* proyek, pengalaman, dan keahlian teknis. Proyek ini menggabungkan desain minimalis dengan elemen 3D interaktif, animasi halus, dan transisi halaman yang dinamis.

🔗 **Live Demo:** [Masukkan Link Deploy Kamu Di Sini]

## 🚀 Fitur Utama

* **3D Interactive Elements:** Menggunakan `@react-three/fiber` dan `@react-three/rapier` untuk simulasi fisika pada objek 3D yang melayang dan responsif terhadap interaksi mouse.
* **Smooth Scrolling:** Implementasi scroll yang halus menggunakan Lenis (`@studio-freight/react-lenis`) untuk pengalaman pengguna yang premium.
* **Advanced Animations:**
    * Transisi halaman dan *reveal text* menggunakan **Framer Motion**.
    * Efek Parallax pada galeri proyek.
    * Efek Magnetik pada tombol dan link navigasi.
* **Custom Cursor:** Kursor kustom yang bereaksi (membesar/mengecil) saat *hover* pada elemen interaktif.
* **Audio Feedback:** Efek suara *click* dan *hover* yang halus untuk meningkatkan *user experience*.
* **Dynamic Footer:** Menampilkan waktu real-time Jakarta (WIB).
* **Responsive Design:** Tata letak yang adaptif untuk desktop dan mobile menggunakan Tailwind CSS.

## 🛠️ Teknologi yang Digunakan

Proyek ini dibangun menggunakan *tech stack* modern:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://greensock.com/gsap/)
* **3D & WebGL:** [Three.js](https://threejs.org/), [React Three Fiber](https://docs.pmnd.rs/react-three-fiber), [Drei](https://github.com/pmndrs/drei)
* **Physics:** [Rapier](https://rapier.rs/) (via `@react-three/rapier`)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand)

## 📂 Struktur Proyek

Berikut adalah gambaran singkat struktur folder proyek:

```bash
client/
├── app/                 # Next.js App Router (Pages & Layouts)
│   ├── work/            # Halaman detail proyek dinamis [id]
│   ├── layout.tsx       # Root layout (Cursor, SmoothScroll, Grain)
│   └── page.tsx         # Homepage utama
├── components/
│   ├── 3d/              # Komponen Three.js (FloatingShapes, ParallaxGallery)
│   ├── ui/              # Komponen UI (Header, Hero, About, Footer)
│   └── utils/           # Utilitas (SoundManager)
├── data/
│   └── projects.ts      # Data statis untuk proyek-proyek
└── public/
    ├── images/          # Aset gambar proyek
    ├── sounds/          # Efek suara (click.mp3, hover.mp3)
    └── cv.pdf           # File Resume/CV

⚡ Instalasi & Menjalankan Project

Ikuti langkah-langkah ini untuk menjalankan proyek di lokal komputer kamu:

    Clone repositori:
    Bash

git clone [https://github.com/username-kamu/nama-repo.git](https://github.com/username-kamu/nama-repo.git)
cd nama-repo/client

Install dependencies: Pastikan kamu sudah menginstall Node.js.
Bash

npm install
# atau
yarn install

Jalankan development server:
Bash

    npm run dev
    # atau
    yarn dev

    Buka di browser: Buka http://localhost:3000 untuk melihat hasilnya.

📝 Data Proyek

Konten proyek (Judul, Deskripsi, Tech Stack, Gambar) dikelola secara terpusat di file client/data/projects.ts. Kamu bisa menambahkan atau mengedit proyek dengan mudah melalui file tersebut.
👨‍💻 Author

Joevan Pramana Achmad

    Software Engineer | Data Scientist | Cloud Architect

    LinkedIn

    GitHub

    Email: joevanpan@outlook.com

© 2024 Joevan. Built with Next.js & ❤️.
