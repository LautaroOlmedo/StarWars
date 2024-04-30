import express from "express";
import morgan from "morgan";
import cors from "cors";
import http from "http";

// ---------- ---------- ---------- ---------- ----------

import { config } from "../../config";
import { radarRouter } from "./radar-router";

export class ServerBootstrap {
  constructor() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
    this.server.use(morgan("dev"));
    this.server.use(cors());
    this.server.use("/radar", radarRouter);

    this.start();
  }

  private start = (): void => {
    this.server.listen(this.port, (): void => {
      console.log(`Server listening on port ${this.port}`);
    });
  };

  private server: express.Application = express();
  private port = config.server.port;
}
