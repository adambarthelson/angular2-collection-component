import {
  it,
  iit,
  describe,
  ddescribe,
  expect,
  inject,
  injectAsync,
  TestComponentBuilder,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {ContentService} from './content-service';


describe('ContentService Service', () => {

  beforeEachProviders(() => [ContentService]);


  it('should ...', inject([ContentService], (service:ContentService) => {

  }));

});
