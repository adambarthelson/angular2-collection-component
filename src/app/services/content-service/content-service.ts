import {Injectable, Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Injectable()
export class ContentService {
  @Output() emitter: EventEmitter<any> = new EventEmitter();
  constructor() {}

  loadMore() {
    console.log(this.emitter)
    this.emitter.next(1);
  }
}
