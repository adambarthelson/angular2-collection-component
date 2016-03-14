import {Component} from 'angular2/core';
import {DynamicComponentLoader, ElementRef} from 'angular2/core';
import {EventEmitter} from 'angular2/core';

@Component({
  selector: 'collection-component',
  templateUrl: 'app///collection-component/collection-component.html',
  styleUrls: ['app///collection-component/collection-component.css'],
  providers: [],
  directives: [],
  pipes: []
  // inputs: ['content']
})

export class CollectionComponent {
  public classNames: Array<string>;
  public tagName:    string;
  public elementId:  string;
  public prov: any;
  content: any;
  contentSubscription: any;
  childComponentChange: EventEmitter<any> = new EventEmitter();
  childComponentTag: string;

  constructor(
    public provider: any,
    public childComponent: any,
    public dcl: DynamicComponentLoader,
    public elementRef: ElementRef
  ) {
    this.classNames = [];
    this.tagName = 'div';

    // this.prov = new this.provider();

    console.log(this.provider)
    this.contentSubscription = this.provider.emitter.subscribe((data) => {
      console.log(data);
      this.content = [...this.content, data];
    });
    console.log(this.provider)

    this.childComponentChange.subscribe((data) => {
      this.renderContent(this.content);
    });
  }

  ngAfterViewInit() {
    console.log(this)
    // Provider must provide an emitter

    // this.renderContent(this.content);
  }

  ngOnDestroy() {
    this.provider.emitter.dispose();
  }

  addItems(e) {
    this.provider.loadMore();
  }

  renderContent(content) {
    // build the template
    let directives = [this.childComponent];
    let template = '';
    let childComponentTag = hyphenate(this.childComponent);
    let classNames = this.classNames.length ? ' class="' + this.classNames.join(' ') + '"' : '';
    let elementId =  this.elementId ? ' id="' + this.elementId + '"' : '';
    template += '<' + this.tagName + classNames + elementId + '>';
    template += '<' + childComponentTag + ' *ngFor="item of content" [content]="item"' + '>';
    template += '</' + childComponentTag + '>';
    template += '</' + this.tagName + '>';
    console.log(template);   // debugging purpose
    this.dcl.loadIntoLocation(this.buildComponent(template, directives),
                              this.elementRef,
                              'collection-container');
  }

  buildComponent(template, directives = []) {
    @Component({
      selector: 'rendered-collection',
      template: template,
      directives: directives
     })
    class RenderedCollection {}

    return RenderedCollection;
  }
}

function hyphenate(obj) {
  return obj.constructor
    .toString()
    .replace(/\W/g, '')
    .replace(/function/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();
}
