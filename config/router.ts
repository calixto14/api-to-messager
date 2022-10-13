import { Router, Request, Response, NextFunction } from 'express';
//import { Transaction } from '../src/Controllers/Transaction';
import { Transaction2 } from '../src/Controllers/Transaction2';
const TRS = new Transaction2();
const routes = Router();

routes.get('/', (req: Request, res: Response, next: NextFunction )=>{
    res.send("I'm listening and ready to requests");
})

routes.post('/audience', (req:Request, res: Response, next:NextFunction) =>{
    TRS.auditeTransaction(req, res);
});

export default routes;