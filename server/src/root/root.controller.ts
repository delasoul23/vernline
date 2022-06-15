import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RootService } from "./root.service";
import { RootControllerBase } from "./base/root.controller.base";

@swagger.ApiTags("roots")
@common.Controller("roots")
export class RootController extends RootControllerBase {
  constructor(
    protected readonly service: RootService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
