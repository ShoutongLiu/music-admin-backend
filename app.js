const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const cors = require('koa2-cors')
const playlist = require('./controller/playlist.js')
const ENV = 'text-wlq50'

router.use('/playlist', playlist.routes())

app.use(cors({
    origin: 'http://localhost:9528',
    credentials: true
}))

app.use(async (ctx, next) => {
    ctx.state.env = ENV
    await next()
})

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000, () => {
    console.log('http://localhost:3000');
})