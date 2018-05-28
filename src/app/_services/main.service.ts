import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../_models/item';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  gold: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  itemsDiscovered: Item[];
}
