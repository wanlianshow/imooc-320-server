const router = require('koa-router')()

// 环境参数，根据环境参数来链接不同的数据库
const ENV = process.env.NODE_ENV

router.get('/api/test', async (ctx, next) => {
  ctx.body = {
    errno: 0,
<<<<<<< HEAD
    msg: `这是一条vscode编写的代码,ENV:${ENV}`
=======
    msg: `NO1.4,ENV:${ENV}`
>>>>>>> 2c031274e0ae714b31e414b7ab645fa73e4d858a
  }
})

module.exports = router
