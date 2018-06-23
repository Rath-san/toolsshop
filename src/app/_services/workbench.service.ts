import { Injectable } from '@angular/core';
import { Item } from '../_models/item';
import { InventoryService } from './inventory.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkbenchService {

  constructor(
    private _iS: InventoryService
  ) { }

  input = Array.apply(null, { length: 2 });
  input$ = new BehaviorSubject<Item[]>(this.input);
  output = Array.apply(null, { length: 1 });
  output$ = new BehaviorSubject<Item[]>(this.output);

  public createItem(): void {
    if (this.input[0] && this.input[1]) {
      this.output[0] = new Item(5, 'swordspear', 2, 'tool', 2, 0);
    }
    this.input[0] = undefined;
    this.input[1] = undefined;
  }

  public addItem(index: number): void {
    this.input[index] = this._iS.itemHeld;
    this._iS.itemHeld = undefined;
  }

  public removeItem(): void {
    this.output[0] = undefined;
  }

}
