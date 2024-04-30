// ---------- ---------- ---------- ---------- ----------

import { EnvironmentDTO } from "./DTO's/environment-dto";

export class SendCoordinates {
  constructor() {}

  public async run(body: EnvironmentDTO) {
    try {
      console.log(body.scan);
    } catch (e) {
      console.log(e);
    }
  }
}
