This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Publicar en Vercel

El repositorio está preparado para desplegarse con la integración nativa de Vercel:

1. Importá `TTSArg/TTDigitales` desde el [panel de Vercel](https://vercel.com/new).
2. Seleccioná `main` como rama de producción y confirmá la configuración detectada de Next.js.
3. Configurá Node.js 22.x o superior en los ajustes del proyecto. No se requieren variables de entorno para la configuración actual.

Vercel generará despliegues de producción al actualizar `main` y previews para pull requests. GitHub Actions ejecuta lint y verificación de tipos en pushes a `main` y pull requests dirigidos a esa rama. Vercel se ocupa del build y del despliegue.

## Getting Started

Use Node.js 20.19.0 or newer.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
