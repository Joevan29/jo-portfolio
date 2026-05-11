# ⚡ Joevan Pramana - Interactive 3D Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38bdf8?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)

> *Sebuah portofolio web imersif yang menggabungkan desain minimalis dengan interaksi 3D, animasi fisika, dan pengalaman pengguna yang halus.*

## 🌟 Tentang Proyek

Website ini bukan sekadar portofolio statis, melainkan sebuah *showcase* kemampuan teknis dalam membangun antarmuka web modern yang kompleks. Dibangun menggunakan **Next.js 14** (App Router), proyek ini mengintegrasikan elemen 3D reaktif, *smooth scrolling*, dan transisi halaman yang dinamis untuk menciptakan pengalaman *storytelling* yang unik bagi pengunjung.

🔗 **Live Demo:** joevan-portfolio.vercel.app

## 🚀 Fitur Unggulan

Proyek ini mengimplementasikan berbagai teknik *frontend* tingkat lanjut:

* **Interactive 3D Physics:** Objek-objek 3D yang melayang, bertabrakan, dan merespons kursor mouse secara *real-time* menggunakan **React Three Fiber** & **Rapier Physics Engine**.
* **Smooth Scrolling Experience:** Implementasi scroll momentum yang sangat halus menggunakan **Lenis** (`@studio-freight/react-lenis`), memberikan nuansa premium saat menjelajahi halaman.
* **Parallax & Scroll Animations:**
    * Galeri proyek dengan efek *parallax* (pergeseran kecepatan scroll).
    * Teks yang muncul (*reveal*) secara elegan saat di-scroll.
* **Magnetic Navigation:** Tombol dan elemen navigasi yang "menempel" dan mengikuti gerakan mouse secara magnetis.
* **Custom Cursor & Grain:** Kursor kustom yang dinamis dan lapisan efek *film grain* untuk estetika visual yang mendalam.
* **Audio Interaction:** Feedback suara halus saat *hover* dan *klik* untuk meningkatkan *user engagement*.

## 🛠️ Tech Stack

Dibuat dengan teknologi terkini di ekosistem React:

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:**
    * [Framer Motion](https://www.framer.com/motion/) (Layout animations & transitions)
    * [GSAP](https://greensock.com/gsap/) (Advanced sequencing)
* **3D & WebGL:**
    * [Three.js](https://threejs.org/)
    * [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
    * [@react-three/drei](https://github.com/pmndrs/drei) (Helpers)
    * [@react-three/rapier](https://rapier.rs/) (Physics engine)
* **State Management:** [Zustand](https://github.com/pmndrs/zustand)

## 📂 Struktur Proyek

```bash
client/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root Layout (Cursor, SmoothScroll, Audio)
│   ├── page.tsx            # Halaman Utama (Hero, About, Works)
│   └── work/[id]/          # Halaman Detail Proyek Dinamis
├── components/
│   ├── 3d/                 # Komponen Three.js (Scene, Shapes, Gallery)
│   ├── ui/                 # Komponen UI (Header, Hero, Footer, Preloader)
│   └── utils/              # Logic Utilitas (SoundManager)
├── data/
│   └── projects.ts         # Data statis untuk konten portofolio
└── public/                 # Aset statis (Images, Sounds, Fonts)
```
⚡ Cara Menjalankan (Local Development)

Ikuti langkah ini untuk menjalankan proyek di komputer lokal:

Clone repositori:
```Bash
git clone [https://github.com/Joevan29/jo-portfolio.git](https://github.com/Joevan29/jo-portfolio.git)
cd jo-portfolio/client
```
Install dependencies: Pastikan kamu sudah menginstall Node.js.
```Bash
npm install
# atau jika menggunakan yarn
yarn install
```
Jalankan server development:
```Bash
    npm run dev
    Buka browser: Kunjungi http://localhost:3000 untuk melihat hasilnya.
```

📝 Manajemen Konten

Data proyek seperti judul, deskripsi, gambar, dan tech stack dikelola secara terpusat. Kamu bisa mengubah atau menambah proyek baru dengan mudah melalui file: client/data/projects.ts.

👨‍💻 Author

Joevan Pramana Achmad

    Software Engineer | Data Scientist | Cloud Architect

    LinkedIn

    GitHub

    Email: joevanpan@outlook.com

© 2024 Joevan Pramana. Built with code & creativity.
