import {ServerBootstrap} from "./src/infrastructure/http/server";
import {rabbitMQ} from './src/infrastructure/dependencies'
//import {serverBootstrap} from "./src/infrastructure/http/server"

new ServerBootstrap(rabbitMQ);



