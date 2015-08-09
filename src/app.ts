import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';
import Aureliarouter = require("aurelia-router");
import RouterConfiguration = Aureliarouter.RouterConfiguration;
import Router = Aureliarouter.Router;
export class App {
  router: Aureliarouter.Router;
  configureRouter(config: RouterConfiguration, router:Router){
    config.title = 'Aurelia';
    config.map([
      { route: ['','welcome'],  name: 'welcome',      moduleId: 'welcome',      nav: true, title:'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
