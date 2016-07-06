import {Component} from '@angular/core';
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';
import ProficiencyFilter from './proficiencyFilter';
import SkillFilter from './skillFilter';
import RefData from './refData';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [AgGridNg2],
    styles: ['.toolbar button {margin: 2px; padding: 0px;}'],
})
export class AppComponent {

    private gridOptions:GridOptions;
    private showGrid:boolean;
    private rowData:any[];
    private columnDefs:any[];

    private quickFilter:string = "";

    constructor() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = <GridOptions>{};
        this.createRowData();
        this.createColumnDefs();
        this.showGrid = true;
    }

    private onRowSelected($event) {
        console.log($event);
    }

    private setQuickFilter() : void {
        this.gridOptions.api.setQuickFilter(this.quickFilter)
    }

    private clearQuickFilter() : void {
        this.quickFilter = "";
        this.setQuickFilter();
    }

    private createRowData() {
        var rowData:any[] = [];
        for (var i = 0; i < 15; i++) {
            var countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skill: RefData.IT_SKILLS_NAMES[Math.floor(Math.random() * RefData.IT_SKILLS_NAMES.length)],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: createRandomPhoneNumber(),
                landline: createRandomPhoneNumber()
            });
        }

        this.rowData = rowData;
    }

    private createColumnDefs() {
        this.columnDefs = [
            {headerName: "Name", field: "name", width: 150, checkboxSelection:true},
            {headerName: "Country", field: "country", width: 150},
            {headerName: "Main Skill", field: "skill", width: 125},
            {headerName: "Proficiency %", field: "proficiency", width: 120},
            {headerName: "Mobile", field: "mobile", width: 150},
            {headerName: "Land-line", field: "landline", width: 155}
        ];
    }
}

function createRandomPhoneNumber() {
    var result = '+';
    for (var i = 0; i < 12; i++) {
        result += Math.round(Math.random() * 10);
        if (i === 2 || i === 5 || i === 8) {
            result += ' ';
        }
    }
    return result;
}
