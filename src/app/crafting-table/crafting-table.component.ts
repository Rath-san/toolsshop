import { Component, OnInit } from '@angular/core';
import { WorkbenchService } from '../_services/workbench.service';

@Component({
  selector: 'app-crafting-table',
  templateUrl: './crafting-table.component.html',
  styleUrls: ['./crafting-table.component.scss']
})
export class CraftingTableComponent implements OnInit {

  constructor(
    private _wS: WorkbenchService
  ) { }

  input;
  inputSub;
  output;
  outputSub;


  ngOnInit() {
    this.inputSub = this._wS.input$;
    this.outputSub = this._wS.output$;
  }

  public craft() {
    this._wS.createItem();
  }

}
