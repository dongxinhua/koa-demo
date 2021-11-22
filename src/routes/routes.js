import combineRouters from 'koa-combine-routers';  // 路由压缩

import demoRouter from './demoRouter'

const router = combineRouters(demoRouter);

export default router