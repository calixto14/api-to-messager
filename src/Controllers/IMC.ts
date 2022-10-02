import IMCService  from '../services/IMCService';

export class IMC {
    

    IMCService = new IMCService();

    async calculeteIMC(req : any, res: any) 
    {
       let imc = await this.IMCService.calculateService(req.body.height, req.body.weight);
        
       res.send({
        IMC : imc
       })
    }

}


