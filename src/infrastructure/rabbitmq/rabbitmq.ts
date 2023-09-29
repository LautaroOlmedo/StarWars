import * as amqp from 'amqplib'

// ---------- ---------- ---------- ---------- ----------

export class RabbitMQClient{
    constructor(username: string, password: string, host: string, vhost: string) {
        this.connectRabbitMQ(username, password, host, vhost)
    }
    public async connectRabbitMQ(username: string, password: string, host: string, vhost: string): Promise<void>{
        try {
            this.connection = await amqp.connect(`amqp://lautaro:secret@localhost:5672/product`);
            this.ch = await this.connection.createChannel();
        }catch (e) {
            console.log(e)
            throw new Error(`${e}`);
        }
    }

    async createQueue(queueName: string, durable: boolean, autoDelete: boolean): Promise<void> {
        await this.ch.assertQueue(queueName, { durable, autoDelete });
    }

    async createBinding(queueName: string, binding: string, exchange: string): Promise<void> {
        await this.ch.bindQueue(queueName, exchange, binding);
    }

    async send(exchange: string, routingKey: string, options: amqp.Options.Publish): Promise<void> {
        const result: boolean = this.ch.publish(exchange, routingKey, Buffer.from('hello'), options);
        if (!result) {
            throw new Error('Message was not confirmed by the broker.');
        }
    }

    async consume(queue: string, autoAck: boolean): Promise<void> {
       try {
           await this.ch.assertQueue(queue);
           await this.ch.consume(queue, async (msg: any): Promise<any> => {
               console.log("Event received", msg);
           }, {noAck: autoAck});
       }catch (e) {
           console.log(e)
           throw new Error(JSON.stringify(e));
       }finally {
          await this.ch.close();
       }
    }

    async applyQos(count: number, size: number, global: boolean): Promise<void> {
        //await this.ch.qos(count, undefined, global);
    }

    async close(): Promise<void>{
        try {

        }catch (e) {

        }finally {
            await this.ch.close()
        }
    }

    public connection: amqp.Connection;
    public ch: amqp.Channel;
}




