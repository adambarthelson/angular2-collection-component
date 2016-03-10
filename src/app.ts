import {bootstrap} from 'angular2/platform/browser';
import {TestAppApp} from './app/test-app';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(TestAppApp, [
  ROUTER_PROVIDERS
]);
