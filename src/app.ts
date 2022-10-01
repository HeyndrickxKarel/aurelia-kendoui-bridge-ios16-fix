import { autoinject, observable, TaskQueue } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

@autoinject()
export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Test";
    config.options.root = "/";
    config.options.pushState = true;
    config.map([
      {
        route: [""],
        name: "home",
        moduleId: "./home",
        nav: false,
        auth: false,
        title: "Home",
      },
      {
        route: ["about"],
        name: "about",
        moduleId: "./about",
        nav: false,
        auth: false,
        title: "about",
      },
    ]);
    this.router = router;
  }
}
