# Nextjs proxy demo

## Getting Started

```bash
# prep requirements
nvm use --lts
nvm use default
node -v
npm install
ls node_modules/.bin/next
export PATH="$PATH:$(pwd)/node_modules/.bin"
```

## Run

```bash
# run the development that will call api via the proxy(by pass cors)
npm dev
# or
yarn dev
# or
next dev

# run the production that will call server api directly then cors error
next build && next start
```

ไฟล์ที่เกี่ยวข้อง

1. [.env.development](.env.development): run `next dev`
2. [.env.production](.env.production): run `next build` + `next start`
3. [next.config.ts](next.config.ts): Next.js rewrites feature proxies requests based on URL mappings
4. [app/proxydemo/page.tsx](app/proxydemo/page.tsx): Demo next proxy api (http://localhost:3000/proxydemo)

กรณีที่โปรเจคที่กำลังทำอยู่เป็น Client Component และติด core สามารถ clone project นี้เป็น api proxy ให้ project แบบเร็วๆก็ได้

## References

- [Next Proxy](https://blog.logrocket.com/how-to-use-proxy-next-js/)
- [NEXT Configuration](https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#default-environment-variables)
