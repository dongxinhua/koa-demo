import Router from 'koa-router';
import demoController from '../api/DemoController.js';

const router = new Router();

// router.prefix('/api');

router.get('/demo', demoController.getDemo);

export default router;