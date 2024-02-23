## Step 1: Initialize a Next.js Project

Primeiro, vamos criar um novo projeto Next.js usando o seguinte comando:

```bash
npx create-next-app nextjs-with-pwa --typescript
```

Em seguida, navegue até a nova pasta do projeto e instale as dependências:

```bash
cd nextjs-with-pwa
```

## Step 2: Add necessary module

Para adicionar recursos PWA ao nosso aplicativo Next.js, usaremos o pacote next-pwa:

```bash
npm i next-pwa
```

## Step 3: Configure Next.js PWA

Configure o arquivo next.config.js na raiz do seu projeto com o seguinte conteúdo:

```js
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
```

Esta configuração diz ao next-pwa para gerar o service worker necessário e armazená-lo na pasta pública.

Se você usar git para gerenciar o código-fonte, será necessário adicionar as regras abaixo no arquivo .gitignore:

- public/sw.js
- public/workbox-\*

## Step 4: Create the Manifest File

Crie um novo arquivo chamado manifest.json dentro da pasta pública:

```json
{
  "name": "Next.js PWA Demo",
  "short_name": "PWADemo",
  "description": "A Progressive Web App built with Next.js",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-256x256.png",
      "sizes": "256x256",
      "type": "image/png"
    },
    {
      "src": "/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

Adicione os ícones PWA (icon-192x192.png e icon-512x512.png) à pasta pública. Esses ícones serão exibidos quando os usuários instalarem seu PWA.

Você pode encontrar ícones em https://www.iconarchive.com e tentar selecionar um ícone de tamanho 512px.

## Step 5: Test the PWA Locally

Depois de concluir todos os itens acima, podemos testá-lo localmente. Para testar o PWA localmente, vamos primeiro criar uma nova compilação e depois iniciar um servidor localmente:

```bash
npm run build
npm run start
```

Visite http://localhost:3000 , você pode ver um ícone instalável no canto direito da localização do URL. Clique no ícone para instalar localmente e você pode iniciar o site no Launchpad na plataforma MacOS.
