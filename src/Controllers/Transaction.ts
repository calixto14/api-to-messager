import TransactionService from '../services/TransactionService';
export class Transaction {

    TRService =new  TransactionService();

    async auditeTransaction(req : any, res: any)
    {
        let confirmation = await this.TRService.audite(req.body);

        res.send('transaction submited to audience with status : '+ confirmation);
    }
}