import { Router, Request, Response, NextFunction } from 'express';
import { IMC } from '../src/Controllers/IMC';
 const IMCController = new IMC();
const routes = Router();

routes.get('/', (req: Request, res: Response, next: NextFunction )=>{
    res.send("I'm listening and ready to requests");
})

routes.post('/calculateIMC', (req: Request, res: Response, next: NextFunction )=>{
    IMCController.calculeteIMC(req, res);
})

export default routes;