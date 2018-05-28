import { Injectable } from '@angular/core';
import { Item } from '../_models/item';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {



  itemHeld: Item;

  inventorySize = 10;

  inventory = Array.apply(null, { length: 8 });
  inventory$ = new BehaviorSubject<Item[]>(this.inventory);

  constructor() {
    this.inventory[0] = new Item(1, 'hammer', 10, 'tool', 5, 2);
    this.inventory[3] = new Item(1, 'sword', 10, 'weapon', 5, 2);
    this.inventory[4] = new Item(1, 'spear', 10, 'weapon', 5, 2);
  }

  private updateInventory(): void {
    this.inventory$.next(this.inventory);
    console.log(this.inventory);
  }

  // public createItem(item: Item, index: number): void {
  //   this.inventory[index] = item;
  //   // this.updateInventory();
  // }

  public addItem(index: number): void {
    this.inventory[index] = this.itemHeld;
    this.itemHeld = undefined;
    // this.updateInventory();
  }

  // public switchItems(): void {
  //   console.log('switchitems');
  // }

  public orderItems(): void {
    // this.inventory.sort((a, b) => {
    //   return a.id < b.id;
    // });

    // this.updateInventory();
  }

  public removeItem(): void { // should return index || id
    const index = this.inventory.indexOf(this.itemHeld);
    this.inventory[index] = undefined;

  }

}
