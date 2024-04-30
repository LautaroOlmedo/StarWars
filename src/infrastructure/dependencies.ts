// ---------- ---------- ---------- ---------- ----------

import { SendCoordinates } from "../application/send-coordinates";
import { EnvironmentMiddleware } from "./middlewares/environment-middleware";
import { RadarController } from "./radar-controller";
import { HttpResponse } from "./shared/http-response";

export const sendCoordinates: SendCoordinates = new SendCoordinates();

export const httpResponse: HttpResponse = new HttpResponse();
export const environmentMiddleware: EnvironmentMiddleware =
  new EnvironmentMiddleware(httpResponse);

export const radarController: RadarController = new RadarController(
  sendCoordinates
);
