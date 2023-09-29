import {Request, Response} from 'express'

// ---------- ---------- ---------- ---------- ----------

import {RabbitMQClient} from "../rabbitmq/rabbitmq";

export class ProductController{
    constructor(private readonly rabbitMQ: RabbitMQClient) {
    }

    public async create(req: Request, res: Response): Promise<any>{
        try {
            const body: Request = req.body;

            //await this.rabbitMQ.send();

        }catch (e) {
            console.log(e)
        }
    }

}