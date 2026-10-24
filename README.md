# Agency Site Foundation

Config-driven Next.js 15 marketing site. First client: **Diamond Valley** (Dover, DE).

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui-style primitives
- Framer Motion
- React Hook Form + Zod
- Lucide icons

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
npm run test:content
```

## Client swap (future)

1. Replace or add files under `content/`
2. Update `config/site.config.ts` / `content/site.ts`
3. Set vertical in `content/site.ts` (`jewelry`, `restaurant`, …)
4. Drop media under `public/media/{client-id}/`
5. Adjust `config/theme/tokens.ts` if needed

## Enquiry API

`POST /api/enquiry` validates with Zod. Set `ENQUIRY_WEBHOOK_URL` to forward submissions; otherwise logs to the server console.

## Architecture

See the approved architecture plan. Pages compose domain components; domain components never import `content/*` directly — use `lib/content` accessors.
