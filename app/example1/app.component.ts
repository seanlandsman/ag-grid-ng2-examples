import { Component } from '@angular/core';
import {GridOptions} from 'ag-grid/main';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {DataService} from "../common/DataService";


@Component({
    selector: 'my-app',
    templateUrl: 'app/example1/example1.html',
    directives: [<any>AgGridNg2],
    providers: [DataService]
})
export class AppComponent {
    private gridOptions: GridOptions;
    private columnDefs: any[];
    private rowData:any[];

    constructor(dataService:DataService) {
        this.gridOptions = <GridOptions>{};
        this.columnDefs = dataService.createSimpleColumnDefs();
        this.rowData = dataService.createTestData(10);
    }
}