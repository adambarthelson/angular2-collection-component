import {Component} from 'angular2/core';


@Component({
  selector: 'child-component',
  templateUrl: 'app///child-component/child-component.html',
  styleUrls: ['app///child-component/child-component.css'],
  providers: [],
  directives: [],
  pipes: [],
  inputs: ['content']
})
export class ChildComponent {
  public content: string;

  constructor() {}

}
