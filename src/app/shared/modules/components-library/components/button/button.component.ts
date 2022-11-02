import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { ButtonContentC } from 'src/app/shared/models/classes/button/buttonContentC';
import { ButtonC } from '../../../../models/classes/button/buttonC';
import { ButtonConfigC } from '../../../../models/classes/button/buttonConfigC';
import { getIconsSeeder } from '../../../../seeders/icon-seeder';
import { SourceC } from '../../../../models/classes/source/sourceC';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {
  @Input() button!: ButtonC;

  @Output() clickO: EventEmitter<ButtonC> = new EventEmitter<ButtonC>();

  constructor() {
    this.button = new ButtonC(
      new ButtonConfigC('', 'primary', false),
      new ButtonContentC('Default')
    );
  }

  ngOnInit(): void {}

  public isRequiredType(type: '' | 'raised' | 'stroked' | 'flat'): boolean {
    return type == this.button.getButtonConfig().getType();
  }

  public getColor(): string {
    return this.button.getButtonConfig().getColor();
  }

  public isActived(): boolean {
    return this.button.getButtonStatus().isActivated();
  }

  public isDisabled(): boolean {
    return !this.button.getButtonStatus().isEnabled();
  }

  public click(): void {
    this.clickO.emit(this.button);
  }

  public hasIcon(): boolean {
    return this.button.getButtonContent().getIcon() != '';
  }

  public getSvgIcon(): string {
    const icon = this.button.getButtonContent().getIcon();
    const iconAsSource: SourceC = new SourceC(icon, '');
    const seederOfIcons: SourceC[] = getIconsSeeder();
    if (SourceC.isInSeeder(iconAsSource, seederOfIcons)) {
      return icon;
    }
    return '';
  }

  public getIcon(): string {
    const icon = this.button.getButtonContent().getIcon();
    const iconAsSource: SourceC = new SourceC(icon, '');
    const seederOfIcons: SourceC[] = getIconsSeeder();
    if (SourceC.isInSeeder(iconAsSource, seederOfIcons)) {
      return '';
    }
    return icon;
  }

  public getName(): string {
    return this.button.getButtonContent().getName();
  }
}
