import { Component, OnInit, HostListener, Input } from '@angular/core';
import { InventoryService } from '../_services/inventory.service';
import { WorkbenchService } from '../_services/workbench.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() index: number;
  @Input() slotType?: string;

  constructor(
    private _iS: InventoryService,
    private _wS: WorkbenchService
  ) { }

  ngOnInit() {
  }

  @HostListener('dragstart', ['$event'])
  public dragStart() {
    this._iS.itemHeldSlotType = this.slotType;
  }

  @HostListener('dragover', ['$event'])
  public dragover(e) {
    e.preventDefault();
    // console.log('drag over');
  }

  @HostListener('dragenter', ['$event'])
  public dragEnter(e) {
    e.preventDefault();
    // console.log('drag enter');
  }

  @HostListener('dragleave', ['$event'])
  public dragLeave() {
    // console.log('drag leave');
  }

  @HostListener('drop', ['$event'])
  public dragDrop($event) {

    switch (this.slotType) {
      case 'input':
        if (this._iS.itemHeldSlotType === undefined) {
          if (!this._wS.input[this.index]) {
            this._iS.removeItem();
            this._wS.addItem(this.index);
          } else {
            this._iS.resetItem();
          }
        } else if (this._iS.itemHeldSlotType === 'output') {
          this._wS.removeItem();
          this._wS.addItem(this.index);
        }
        break;

      case 'output':
        if (this._iS.itemHeldSlotType === undefined) {
          this._iS.resetItem();
        }
        break;

      default:
        if (this._iS.itemHeldSlotType === undefined && !this._iS.inventory[this.index]) {
          this._iS.removeItem();
          this._iS.addItem(this.index);
        } else if (this._iS.itemHeldSlotType === 'output') {
          if (!this._iS.inventory[this.index]) {
            this._wS.removeItem();
            this._iS.addItem(this.index);
          } else {
            this._iS.getIndex(undefined);
            this._iS.inventory[this._iS.itemHeldIndex] = this._iS.itemHeld;
            this._wS.removeItem();
          }
        }
        break;
    }

    // if (this.slotType !== 'output') {
    //   this._wS.removeItem();
    //   this._iS.removeItem();
    // } else {
    //   console.log(

    //     this._iS.itemHeldIndex
    //   );
    //   this._iS.resetItem();
    //   console.log(this._iS.inventory);

    // }

    // if (this.slotType && this.slotType === 'input') {
    //   this._wS.addItem(this.index);
    // } else {
    //   if (this._iS.inventory[this.index] === undefined) {
    //     this._iS.addItem(this.index);
    //   } else {
    //     this._iS.resetItem();
    //   }
    // }

    if (this.slotType) {

      // if (this.slotType === 'input') {
      //   this._wS.addItem(this.index);
      // } else if (this.slotType === 'output') {
      //   this._iS.resetItem();
      // } else {
      //   this._iS.addItem(this.index);
      // }
    }
  }

  private moveItem() {

  }
}
