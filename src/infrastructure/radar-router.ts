import express, { NextFunction, Request, Response, response } from "express";

// ---------- ---------- ---------- ---------- ----------

import { radarController } from "./dependencies";
import { environmentMiddleware } from "./dependencies";

const radarRouter: express.Router = express.Router();

radarRouter.post(
  "/",
  (req: Request, res: Response, next: NextFunction) => [
    environmentMiddleware.validateEnvironment(req, res, next),
  ],
  radarController.run.bind(radarController)
);

export { radarRouter };
