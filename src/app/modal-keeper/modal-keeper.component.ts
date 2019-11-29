import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../modal.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-modal-keeper',
  template: `
    <div #container></div>
  `,
})
export class ModalKeeperComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container: ViewContainerRef;

  constructor(private modal: ModalService, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.modal.open.subscribe((component) => {
      const componentFactory = this.resolver.resolveComponentFactory(
        ModalComponent
      );
      const modal = this.container.createComponent(componentFactory);
      modal.instance.content.insert(component.hostView);

    })
  }

}
