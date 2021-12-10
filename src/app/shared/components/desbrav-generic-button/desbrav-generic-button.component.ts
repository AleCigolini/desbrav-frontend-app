import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-desbrav-generic-button',
  templateUrl: './desbrav-generic-button.component.html',
  styleUrls: ['./desbrav-generic-button.component.scss']
})
export class DesbravGenericButtonComponent {
  @Input() public nameIcon?: string;
  @Input() public externalLink?: boolean;
  @Input() public haveIcon = true;
  @Input() public typeButton?: string;
  @Input() public textButton = '';
  @Input() public formInvalid?: FormGroup;
  @Output() public buttonClicked = new EventEmitter<MouseEvent>();
  @Input() public disabled = false;
  @Input() public expandMore!: boolean;
  public menuOpened!: boolean;

  public clickButton(event: MouseEvent): void {
    this.buttonClicked.emit(event);
  }

  public defineBackground(): string {
    if (!this.typeButton) {
      return 'main';
    }

    switch (this.typeButton) {
      case 'save':
        return 'save';
      case 'delete':
        return 'delete';
      case 'cancel':
        return 'cancel';
      default:
        return 'main';
    }
  }

  public openMenuExpandMore(): void {
    this.menuOpened = !this.menuOpened;
  }

}
