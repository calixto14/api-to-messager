class TransactionService {

    AWS = require('aws-sdk');

    
    audite(transaction : any){

        let credentials = new this.AWS.SharedIniFileCredentials({profile: 'local_stack'});
        
        this.AWS.config.credentials = credentials;

        this.AWS.config.update({region: 'us-east-1'});

        let topicArn = "arn:aws:sns:us-east-1:000000000000:order-creation-events";

        let message = {
            MessageAttributes :{
                "amount":{
                    DataType : "Number",
                    StringValue : transaction.amount.toString()
                },
                "currency":{
                    DataType: "String",
                    StringValue: transaction.currency
                },
                "token":{
                    DataType: "Number",
                    StringValue: transaction.token
                }
            },
            MessageBody: "new transaction so audience",
        }

        let params = {
            Message : JSON.stringify(message),
            TopicArn : topicArn

        }

        let SNS  = new this.AWS.SNS({apiVersion: '2010-03-31', endpoint: "http://localhost:4566"}).publish(params).promise();

        SNS.then(
            function(data : any) {
              console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
              console.log("MessageID is " + data.MessageId);
              return "on process";
            }).catch(
              function(err:any) {
              console.error(err, err.stack);
              return "something wrong";
            });
        

    }
}

export default TransactionService;