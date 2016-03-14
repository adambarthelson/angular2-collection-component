import {Component} from 'angular2/core';
import {DynamicComponentLoader, ElementRef} from 'angular2/core';
import {CollectionComponent} from '../collection-component/collection-component';
import {ContentService} from '../services/content-service/content-service';
import {ChildComponent} from '../child-component/child-component';

@Component({
  selector: 'long-list',
  templateUrl: 'app///long-list/long-list.html',
  styleUrls: ['app///long-list/long-list.css'],
  providers: [ContentService, ChildComponent],
  directives: [ChildComponent],
  pipes: []
})
export class LongList extends CollectionComponent {
  constructor(
    provider: ContentService,
    childComponent: ChildComponent,
    private dcl: DynamicComponentLoader,
    private elementRef: ElementRef
  ) {
     super(provider, childComponent, dcl, elementRef);
  }

  ngAfterViewInit() {
    console.log(this);
  }

}
