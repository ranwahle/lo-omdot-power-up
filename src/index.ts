import Koa from 'koa';
import logger from 'koa-logger';
import json from 'koa-json';
import serve from 'koa-static';
import Router from 'koa-router';
import dotEnv from 'dotEnv';
import { getProfiles } from './rav-kav-api.js';

dotEnv.config();

const app = new Koa();
app.use(serve('./client'))
const router = new Router();

router.get('/profiles', async (ctx, next)=> {
    const profiles = await getProfiles();
    console.log('profiles', profiles);
    ctx.body = profiles;
    await next();
})
app.use(logger());
app.use(json());
app.use(router.routes()).use(router.allowedMethods());

const port  = process.env.PORT || 3000;
app.listen(port, () => console.log('I am listening'));