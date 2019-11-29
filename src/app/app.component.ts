import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { FooComponent } from './foo/foo.component';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  constructor(private resolver: ComponentFactoryResolver, private modalService: ModalService) {
  }

  showPrompt() {
    const componentFactory = this.resolver.resolveComponentFactory(
      FooComponent
    );
    const component = this.container.createComponent(componentFactory);

    this.modalService.open.next(
      component
    );
  }
}
