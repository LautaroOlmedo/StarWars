// ---------- ---------- ---------- ---------- ----------
import {config} from './config';

import {RabbitMQClient} from "./rabbitmq/rabbitmq";
import {ProductController} from "./http/product-controller";
import {ServerBootstrap} from "./http/server";

const username: string = config.rabbitmq.username
const password: string = config.rabbitmq.password
const host: string = config.rabbitmq.host
const vhost: string = config.rabbitmq.vhost

export const rabbitMQ: RabbitMQClient = new RabbitMQClient(username, password, host, vhost);

//export const serverBootstrap: ServerBootstrap = new ServerBootstrap(rabbitMQ);
export const productController: ProductController = new ProductController(rabbitMQ);



