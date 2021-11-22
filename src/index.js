import Koa from 'koa';
import path from 'path';
import cors from '@koa/cors';
import body from 'koa-body';
import helmet from 'koa-helmet';
import statics from 'koa-static';
import compose from 'koa-compose';
import json from 'koa-json';
import koaCompress from 'koa-compress';

import router from './routes/routes';
// const Koa = require('koa');
// const path = require('path');
// const cors = require('@koa/cors');
// const body = require('koa-body');
// const helmet = require('koa-helmet');  // 安全头
// const statics = require('koa-static');

// const { router } = require('./routes/routes');

const app = new Koa();

// app.use(body());
// app.use(helmet());
// app.use(cors());
// app.use(statics(path.join(__dirname, '../public')));  // 静态资源 需要绝对路径

const isDevMode = process.env.NODE_ENV === 'procuction' ? true : false

/**
 * 使用koa-compose集成中间件
 */
const middleware = compose([
  body(),
  statics(path.join(__dirname, '../public')),
  cors(),
  json(),
  helmet()
]);

if (isDevMode) {
  app.use(koaCompress())
}

app.use(middleware);
app.use(router());

app.listen(4399, () => {
  console.log('4399端口已监听');
});