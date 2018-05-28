import { Component, OnInit, HostListener, Input } from '@angular/core';
import { InventoryService } from '../_services/inventory.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input() index: number;

  constructor(
    private _iS: InventoryService
  ) { }

  ngOnInit() {
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
    console.log('drag leave');
  }

  @HostListener('drop', ['$event'])
  public dragDrop() {
    console.log('drag drop');
    this._iS.removeItem();
    this._iS.addItem(this.index);
  }
}
