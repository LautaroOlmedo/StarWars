import { Type } from "class-transformer";
import {
  IsArray,
  IsBoolean,
  isEnum,
  IsEnum,
  IsInt,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from "class-validator";

// ---------- ---------- ---------- ---------- ----------

import { ScanDTO } from "./scan-dto";
import { EnemiesDTO } from "./enemies-dto";

export class EnvironmentDTO {
  @IsArray()
  @IsNotEmpty()
  protocols: string[]; // ---> enum

  @IsArray()
  //@ValidateNested({ each: true })
  //@Type(() => ScanDTO)
  scan: any;

  enemies: any;
}
