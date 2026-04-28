# 🌐 LM Essentials — Website

Sitio web corporativo de **LM Essentials**, empresa de exportación global. Construido con **Angular 17**, bilingüe (EN/ES), diseño premium negro y dorado.

## 🚀 Características

- ✅ **Bilingüe** EN / ES con `ngx-translate` (cambia idioma sin recargar)
- 🎨 **Diseño premium** negro y dorado, tipografía Cormorant Garamond + Jost
- 📱 **100% responsivo** mobile-first
- ⚡ **Lazy loading** y animaciones CSS
- 📧 **Formulario de contacto** con validación reactiva
- 🔒 **Seguridad** headers configurados en Vercel
- 🚦 **GitHub Actions** CI/CD con deploy automático a Vercel

## 📂 Secciones

| Sección | Descripción |
|---------|-------------|
| Hero | Presentación principal con stats |
| About | Misión y valores de la empresa |
| Products | 6 categorías de exportación |
| Markets | Regiones y presencia global |
| Contact | Formulario de cotización |
| Footer | Links y contacto |

## ⚡ Instalación local

```bash
# Clonar
git clone https://github.com/tu-usuario/lm-essentials.git
cd lm-essentials

# Instalar dependencias
npm install

# Correr en desarrollo
npm start
# → http://localhost:4200
```

## 🐳 Build de producción

```bash
npm run build
# Genera dist/lm-essentials/browser/
```

## 🚀 Deploy en Vercel (recomendado)

### Opción A — Drag & drop (más fácil)
```bash
npm run build
# Arrastra la carpeta dist/lm-essentials/browser/ a vercel.com/new
```

### Opción B — CLI
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Opción C — GitHub + Auto-deploy
1. Sube el repo a GitHub
2. Ve a [vercel.com](https://vercel.com) → New Project
3. Conecta tu repo de GitHub
4. Configura:
   - **Framework**: Angular
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist/lm-essentials/browser`
5. Click Deploy ✅

Cada push a `main` se despliega automáticamente.

### CI/CD con GitHub Actions
Agrega estos secrets en tu repo → Settings → Secrets:
- `VERCEL_TOKEN` — Token de tu cuenta Vercel
- `VERCEL_ORG_ID` — ID de tu organización
- `VERCEL_PROJECT_ID` — ID de tu proyecto

## 🌐 Dominio personalizado

1. Compra `lmessentials.com` en Namecheap/GoDaddy
2. En Vercel → Project → Settings → Domains
3. Agrega tu dominio y configura los DNS

## 📧 Configurar formulario de contacto

En `src/app/services/contact.service.ts`, reemplaza la línea de simulación con tu servicio real:

```typescript
// Opción 1 — Formspree (gratis)
return this.http.post('https://formspree.io/f/TU_ID', form);

// Opción 2 — EmailJS
// Instala emailjs-com y configura tu template

// Opción 3 — Tu propio backend
return this.http.post('https://tu-api.com/contact', form);
```

## 🛠️ Tecnologías

- **Angular 17**
- **ngx-translate** — i18n bilingüe
- **SCSS** con variables CSS
- **Reactive Forms** — Validación
- **GitHub Actions** — CI/CD
- **Vercel** — Hosting

## 📄 Licencia

© 2026 LM Essentials. All rights reserved.
