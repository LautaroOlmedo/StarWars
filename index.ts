import {ServerBootstrap} from "./src/infrastructure/http/server";
import {rabbitMQ} from './src/infrastructure/dependencies'


new ServerBootstrap(rabbitMQ);



