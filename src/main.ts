import "bootstrap";
import { Aurelia } from "aurelia-framework";
import environment from "./environment";
import "@progress/kendo-ui/js/kendo.core";
import "@progress/kendo-ui/js/kendo.scheduler";

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin("aurelia-kendoui-bridge")
    .feature("resources");

  aurelia.use.developmentLogging(environment.debug ? "debug" : "warn");

  if (environment.testing) {
    aurelia.use.plugin("aurelia-testing");
  }

  aurelia.start().then(() => aurelia.setRoot());
}
