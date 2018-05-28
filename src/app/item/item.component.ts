import { Component, OnInit, Input, ViewChild, TemplateRef, HostListener, ElementRef, Renderer2 } from '@angular/core';
import { Item } from '../_models/item';
import { InventoryService } from '../_services/inventory.service';
import { log } from 'util';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor(
    private _elRef: ElementRef,
    private _re2: Renderer2,
    private _iS: InventoryService
  ) { }

  ngOnInit() {
  }

  // drag events

  @HostListener('dragstart', ['$event'])
  public dragStart() {
    this._iS.itemHeld = this.item;
    setTimeout(() => {
      this._re2.addClass(this._elRef.nativeElement, 'hold');
    }, 1);
    // console.log('drag start');
  }

  @HostListener('dragend', ['$event'])
  public dragEnd() {
    this._iS.itemHeld = null;
    this._re2.removeClass(this._elRef.nativeElement, 'hold');
    // console.log('drag end');
  }

  // item image
  public get imgUrl(): string {
    return `./assets/img/items/${this.item.name}.png`;
  }

}
