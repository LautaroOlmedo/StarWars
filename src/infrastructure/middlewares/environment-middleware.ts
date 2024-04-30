import { NextFunction, Request, Response } from "express";
import { validate, ValidateBy } from "class-validator";

// ---------- ---------- ---------- ---------- ----------

import { EnvironmentDTO } from "../../application/DTO's/environment-dto";
import { HttpResponse } from "../shared/http-response";

export class EnvironmentMiddleware {
  constructor(private readonly httpResponse: HttpResponse) {}
  validateEnvironment(req: Request, res: Response, next: NextFunction) {
    const { protocols, scan, enemies } = req.body;

    const valid: EnvironmentDTO = new EnvironmentDTO();
    valid.protocols = protocols;
    valid.scan = scan;
    valid.enemies = enemies;

    validate(valid).then((err) => {
      if (err.length > 0) {
        return this.httpResponse.Error(res, err);
      } else {
        next();
      }
    });
  }
}
