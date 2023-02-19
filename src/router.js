const router = require('koa-router')()

// 环境参数，根据环境参数来链接不同的数据库
const ENV = process.env.NODE_ENV

router.get('/api/test', async (ctx, next) => {
  ctx.body = {
    errno: 0,
    msg: `这是一条vscode编写的代码,ENV:${ENV}`
  }
})

module.exports = router
