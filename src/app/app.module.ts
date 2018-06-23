import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WorkbenchComponent } from './workbench/workbench.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ItemComponent } from './item/item.component';
import { MainService } from './_services/main.service';
import { CraftingTableComponent } from './crafting-table/crafting-table.component';
import { InventoryService } from './_services/inventory.service';
import { WorkbenchService } from './_services/workbench.service';
import { SlotComponent } from './slot/slot.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkbenchComponent,
    SideMenuComponent,
    InventoryComponent,
    ItemComponent,
    CraftingTableComponent,
    SlotComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MainService,
    InventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
