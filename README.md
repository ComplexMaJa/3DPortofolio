# 🎨 3D Portfolio

![TypeScript](https://img.shields.io/badge/TypeScript-96.9%25-3178C6?style=flat-square&logo=typescript)
![React](https://img.shields.io/badge/React%2019-61DAFB?style=flat-square&logo=react)
![Vite](https://img.shields.io/badge/Vite%207-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

> ✨ A stunning, high-performance 3D portfolio built with **React**, **TypeScript**, and **Vite**. Experience smooth 3D rendering optimized across all devices.

---

## 🚀 Quick Start

### Prerequisites
- **pnpm** (recommended) or npm
- Node.js 18+

### Installation & Development

```bash
# Install dependencies
pnpm install

# Start development server with HMR
cd react && pnpm dev

# Open http://localhost:5173 in your browser
```

### Build for Production

```bash
cd react && pnpm build
```

---

## ✨ Features

- 🎯 **High Performance** – Optimized bundle size, fast HMR with SWC
- 📱 **Mobile Responsive** – Smooth 3D rendering on all devices
- ⚡ **Modern Stack** – React 19, TypeScript, Vite 7 with SWC plugin
- 🎨 **Tailwind CSS** – Beautiful, utility-first styling
- 🔍 **Type-Safe** – Strict TypeScript configuration
- 📦 **Optimized Assets** – Efficient texture and media handling

---

## 📁 Project Structure

```
react/
├── src/
│   ├── main.tsx              # Entry point
│   ├── App.tsx               # Main app component
│   ├── index.css             # Global styles
│   ├── components/           # Reusable React components
│   └── assets/               # SVGs, images, and media
├── vite.config.ts            # Vite configuration
├── tsconfig.app.json         # TypeScript app config
└── package.json              # Project dependencies & scripts
```

---

## 🛠️ Available Scripts

Run from the `react/` directory:

| Command | Description |
|---------|-------------|
| `pnpm dev` | 🚀 Start development server with HMR |
| `pnpm build` | 📦 Build for production (TypeScript + Vite) |
| `pnpm lint` | ✅ Run ESLint to check code quality |
| `pnpm preview` | 👁️ Preview production build locally |

---

## 🎯 Development Workflow

### Adding a New Component

1. Create your component in `react/src/components/MyComponent.tsx`:
   ```typescript
   export default function MyComponent() {
     return <div>Hello World</div>;
   }
   ```

2. Import and use it in `react/src/App.tsx`

3. Run `pnpm dev` to see changes with HMR

### Using Tailwind CSS

Tailwind is already configured. Just use utility classes in your JSX:

```tsx
<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
  {/* Your content */}
</div>
```

---

## ⚙️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Build Tool**: Vite 7 + SWC (Fast Refresh)
- **Styling**: Tailwind CSS + PostCSS
- **Linting**: ESLint with TypeScript support
- **Package Manager**: pnpm (with lock file)

---

## 🎮 Performance Tips

✅ **Before submitting changes:**
- Run `pnpm build` to keep bundles lean
- Run `pnpm lint` to ensure code quality
- Test on mobile or throttled networks via DevTools
- Verify smooth 3D rendering on slower hardware

---

## 📝 Key Configuration Files

| File | Purpose |
|------|---------|
| `vite.config.ts` | Vite build configuration with SWC plugin |
| `tsconfig.app.json` | Strict TypeScript settings |
| `tailwind.config.js` | Tailwind CSS theme & utilities |
| `eslint.config.js` | Linting rules |

---

## 💡 Best Practices

✨ **Code Style**:
- Use functional components with React Hooks
- Keep components co-located with their styles
- Export types explicitly for better type safety
- Memoize expensive calculations and components

🎨 **Performance**:
- Lazy load heavy components with `React.lazy()`
- Optimize media assets before committing
- Minimize bundle size—bundle analysis available via build output

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 🌟 Show Your Support

If you found this project helpful, please consider giving it a ⭐ on GitHub!

**Happy coding! 🚀**
