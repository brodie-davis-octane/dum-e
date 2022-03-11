const Router = require("@koa/router");
const Koa = require('koa');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
    ctx.body = 'Hello World2';
    return next();
});

const snooze = ms => new Promise(resolve => setTimeout(resolve, ms));

let pendingGeneration = [];

async function doGenerate(domain) {
    console.log(`starting generation of domain ${domain}`)
    pendingGeneration.push(domain)
    await snooze(500000)
    // todo is this even thread safe? We're also kind of building a task queue anyways
    pendingGeneration = pendingGeneration.filter(item => item !== domain)
    console.log(`generation complete for domain ${domain}`)
}

router.post('/generate', async (ctx, next) => {
    console.log(ctx.request.body) // todo figure out parsing the request body
    let domain = 'test.com'
    ctx.body = {
        'status': "pending",
        'filename': 'test',
    }
    if(pendingGeneration.includes(domain)) {
        ctx.body.status = 'failed'
        ctx.body.reason = 'Generation already in progress'
        ctx.response.status = 500
        return next()
    }
    pendingGeneration.push(domain)
    doGenerate(domain)
    return next()
});

app.use(router.routes())
app.use(router.allowedMethods());
app.listen(1986); // Dum-E's birth year!