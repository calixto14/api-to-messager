import express from 'express';
import routers from './router';
const app = express();

const port = 3000;

app.use(express.json({limit: '2mb'}));

app.use(routers);

app.listen(port, ()=>{
    console.log('server online');
})