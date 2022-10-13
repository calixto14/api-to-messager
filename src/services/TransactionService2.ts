const { Kafka, Partitioners } = require('kafkajs')
class TransactionService2 {

     kafka = new Kafka({ clientId: 'my-app', brokers: ['localhost:9092'] })

     async audite(transaction : any)
     {  
        let producer = this.kafka.producer({ createPartitioner: Partitioners.LegacyPartitioner });
        await producer.connect();
        await producer.send({ topic: 'quickstart-events', messages: [ { value: JSON.stringify({
         amount : transaction.amount.toString(),
         currency: transaction.currency.toString(),
         token : transaction.token.toString()
        }) }, ], }) ;
        await producer.disconnect()

     }
}

export default TransactionService2;