import {
  Controller,
  Get,
  Route,
} from "tsoa";
  
@Route("healthcheck")
export class HealthcheckController extends Controller {
  @Get()
  public async getHealth(): Promise<any> {
    return { status: "OK" };
  }
}
