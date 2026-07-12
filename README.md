# Viana Advocacia — Landing Page

Landing page em Next.js para advocacia especializada em Direito da Saúde.

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build localmente
```

## Docker

```bash
docker build -t viana-advocacia .
docker run --rm -p 3000:3000 viana-advocacia
```

A aplicação ficará disponível em `http://localhost:3000`.

## Docker Compose

Na VPS, depois de clonar o projeto:

```bash
docker compose up -d --build
```

O container sobe como `viana-advocacia`, com restart automático, ouvindo apenas em
`127.0.0.1:3000`. Use nginx na frente para expor `80/443`.

Comandos úteis:

```bash
docker compose ps
docker compose logs -f
docker compose down
```

## Deploy na Vercel

1. Suba o repositório no GitHub
2. Em [vercel.com](https://vercel.com), importe o projeto
3. A Vercel detecta Next.js automaticamente — não precisa de config extra
4. Deploy

Ou via CLI:

```bash
npm i -g vercel
vercel
```

## Estrutura

- `src/lib/config.js` — WhatsApp, OAB e telefone
- `src/components/` — seções da landing page
- `src/app/globals.css` — estilos globais
- `public/` — imagens estáticas (fotos, favicon)

## Fotos

Coloque as fotos em `public/` (ex.: `foto-hero.jpg` e `foto-sobre.jpg`) e troque o placeholder pelo `<img>` indicado nos comentários de `Hero.jsx` e `About.jsx`.
