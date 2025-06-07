# Harsh Pipaliya – Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It showcases projects, skills, and provides a contact form with email integration and toast notifications.

## 🚀 Features

- **Hero Section** with animated headline, CTA buttons, and social links  
- **Projects** grid with hover effects, filters, live demo & code links  
- **Contact Form** powered by React state, custom `Input` & `Textarea` components, with validation and toast feedback (`use-toast` hook)  
- **Animations** via [Framer Motion](https://www.framer.com/motion/)  
- **UI Components** built on Tailwind CSS and Radix primitives  
- **Responsive Design** for all devices  

## 🛠️ Tech Stack

- Next.js 13 (App Router)  
- React & TypeScript  
- Tailwind CSS  
- Framer Motion  
- Radix UI & Lucide Icons  
- pnpm / npm  

## 🗂️ Project Structure

```text
.
├── .next/             # build output
├── app/               # Next.js App router
├── components/        # shared UI & section components
├── hooks/             # custom React hooks
├── lib/               # utilities & helpers
├── public/            # static assets
├── styles/            # global & Tailwind styles
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## ⚙️ Getting Started

1. Clone the repo  
   ```bash
   git clone https://github.com/hp-078/harsh-portfolio.git
   cd harsh-portfolio
   ```
2. Install dependencies  
   ```bash
   pnpm install
   # or
   npm install
   ```
3. Run in development  
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
4. Build & start  
   ```bash
   pnpm build
   pnpm start
   # or
   npm run build
   npm run start
   ```

## 🔧 Configuration

- Rename `.env.example` to `.env.local` and add any secrets (e.g., SMTP or form backend URL).  
- Tailwind settings in `tailwind.config.ts`  
- Next.js settings in `next.config.mjs`  

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

Made with ❤️ by [Harsh Pipaliya](https://github.com/hp-078)
