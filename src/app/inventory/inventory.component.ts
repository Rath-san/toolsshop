import { Component, OnInit, ViewChild, QueryList, AfterViewInit, ViewChildren, Renderer2, ElementRef } from '@angular/core';
import { InventoryService } from '../_services/inventory.service';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { Item } from '../_models/item';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit, AfterViewInit {

  inventorySub: Subscription;
  inventory: Item[];

  slots: any;

  constructor(
    private _iS: InventoryService,
    private _re2: Renderer2
  ) { }

  ngOnInit() {
    this.inventorySub = this._iS.inventory$.subscribe((x: Item[]) => {
      this.inventory = x;
    });
  }

  ngAfterViewInit() {
  }



}
