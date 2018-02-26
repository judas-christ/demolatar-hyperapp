const send = require('koa-send')
const proxy = require('koa-proxy')
const Koa = require('koa')
const app = new Koa()

// $ GET /package.json
// $ GET /

app.use(
  proxy({
    host: 'http://www.demolatar.se', // proxy alicdn.com...
    match: /^\/api\// // ...just the /api folder
  })
)

app.use(async ctx => {
  switch (ctx.path) {
    case '/images/logo.gif':
      await send(ctx, 'images/logo.gif')
      break
    case '/app.css':
    case '/app.js':
      await send(ctx, `public${ctx.path}`)
      break
    default:
      await send(ctx, 'public/index.html')
  }
})

const port = process.env.PORT || 3000
app.listen(port)

console.log('listening on port ' + port)
