import { Request, Response } from "express";

// ---------- ---------- ---------- ---------- ----------

import { SendCoordinates } from "../application/send-coordinates";
import { EnvironmentDTO } from "../application/DTO's/environment-dto";
import { EnvironmentMiddleware } from "./middlewares/environment-middleware";

export class RadarController {
  constructor(private readonly sendCoordinates: SendCoordinates) {}
  public async run(
    req: Request<{}, {}, EnvironmentDTO>,
    res: Response
  ): Promise<any> {
    try {
      res.status(200).json("hello from run");
      console.log(req.body);
      EnvironmentDTO;
      this.sendCoordinates.run(req.body);
    } catch (e) {
      console.log(e);
    }
  }
}
