import TransactionService2 from '../services/TransactionService2'
export class Transaction2 {

    TRService =new  TransactionService2();

    async auditeTransaction(req : any, res: any)
    {
        let confirmation = await this.TRService.audite(req.body);

        res.send('transaction submited to audience with status : '+ confirmation);
    }

}