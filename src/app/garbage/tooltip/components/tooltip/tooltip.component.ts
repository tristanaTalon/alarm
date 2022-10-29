import {
  Overlay,
  OverlayPositionBuilder,
  OverlayRef,
} from '@angular/cdk/overlay';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @ViewChild('container') public container!: TemplateRef<any>;

  @ViewChild('leftTopRef') public leftTopRef!: TemplateRef<any>;

  @ViewChild('rightTopRef') public rightTopRef!: TemplateRef<any>;

  @ViewChild('midRef') public midRef!: TemplateRef<any>;

  @ViewChild('tooltipTemplate') public xd!: TemplateRef<any>;

  private _overlayRef!: OverlayRef;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const position = this.overlayPositionBuilder
      // Se enlaza la posición del overlay al elemento portador de la directiva
      .flexibleConnectedTo(this.midRef.elementRef)
      // Se declaran las posiciones preferidas que usará el overlay al mostrarse
      .withPositions([
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'end',
          overlayY: 'top',
          offsetX: 0,
          offsetY: 0,
        },
      ]);

    // Se crea el overlay y se guarda su referencia
    this._overlayRef = this.overlay.create({
      // Configuración para la posición del overlay
      positionStrategy: position,
      // Comportamiento del overlay cuando se haga scroll y se esté mostrando
      scrollStrategy: this.overlay.scrollStrategies.close(),
      // Clase para darle estilo al overlay
      panelClass: 'custom-tooltip',
    });
  }

  show(): void {}

  @HostListener('mouseenter', ['$event']) open($event: any): void {
    console.log($event);
  }
}
