import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";

// ---------- ---------- ---------- ---------- ----------

import {config} from '../config';
import {RabbitMQClient} from "../rabbitmq/rabbitmq";

export class ServerBootstrap{
    constructor(private readonly rabbitMQ: RabbitMQClient) {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(morgan("dev"));
        this.server.use(cors());

        this.start();
    }

    private async initializeServerAndRabbitMQ(): Promise<void> {
        try {
            await this.rabbitMQ.createQueue('testQueue', true, false);
            await this.rabbitMQ.createBinding('testQueue', 'product.*', 'product_events');

            console.log('RabbitMQ connected correctly.');
            //await this.startServer();
        } catch (e) {
            throw new Error(`Error: ${e}`)
        }
    }

    private start = (): void =>{
    this.server.listen(this.port, (): void => {
        console.log(`Server listening on port ${this.port}`);
    });
}


    private server: express.Application = express();
    private port = config.server.port;
}



