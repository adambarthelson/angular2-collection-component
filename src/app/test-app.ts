import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {LongList} from './long-list/long-list';
import {ContentService} from './services/content-service/content-service';


@Component({
  selector: 'test-app-app',
  providers: [],
  templateUrl: 'app/test-app.html',
  directives: [ROUTER_DIRECTIVES, LongList],
  pipes: []
})
@RouteConfig([

])
export class TestAppApp {
  contentService: any;

  constructor() {}

  getRandomWord() {
    console.log(LongList);
  }
}
