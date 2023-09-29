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
        //this.server.use(cors());

        this.start();
    }

    private async initializeServerAndRabbitMQ(): Promise<void> {
        try {
            await this.rabbitMQ.createQueue('testQueue', true, false);
            await this.rabbitMQ.createBinding('testQueue', 'dollar.*', 'dollar_events');

            console.log('Servidor y RabbitMQ inicializados correctamente.');
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

/*const {port} = config.server;

const app: express.Application = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));


export const serverBootstrap = (): void =>{
    app.listen(port, (): void => {
        console.log(`Server listening on port ${port}`);
    });
}*/

