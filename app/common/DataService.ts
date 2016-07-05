import RefData from "./refData";

export class DataService {
    public createTestData(rows:number):any[] {
        var rowData:any[] = [];

        for (var i = 0; i < rows; i++) {
            var countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: DataService.createRandomPhoneNumber(),
                landline: DataService.createRandomPhoneNumber()
            });
        }

        return rowData;
    }

    public createSimpleColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 150},
            {headerName: "Country", field: "country", width: 150},
            {headerName: "Skills", width: 125},
            {headerName: "Proficiency", field: "proficiency", width: 120},
            {headerName: "Mobile", field: "mobile", width: 150},
            {headerName: "Land-line", field: "landline", width: 150},
            {headerName: "Address", field: "address", width: 500}
        ];
    }

    //public createSimpleColumnDefs() {
    //    return [
    //        {
    //            headerName: '#', width: 30, checkboxSelection: true, suppressSorting: true,
    //            suppressMenu: true, pinned: true
    //        },
    //        {
    //            headerName: 'Employee',
    //            children: [
    //                {
    //                    headerName: "Name", field: "name",
    //                    width: 150, pinned: true
    //                },
    //                {
    //                    headerName: "Country", field: "country", width: 150,
    //                    pinned: true,
    //                    filterParams: {cellHeight: 20}
    //                },
    //            ]
    //        },
    //        {
    //            headerName: 'IT Skills',
    //            children: [
    //                {headerName: "Skills", width: 125, suppressSorting: true},
    //                {headerName: "Proficiency", field: "proficiency", width: 120},
    //            ]
    //        },
    //        {
    //            headerName: 'Contact',
    //            children: [
    //                {headerName: "Mobile", field: "mobile", width: 150, filter: 'text'},
    //                {headerName: "Land-line", field: "landline", width: 150, filter: 'text'},
    //                {headerName: "Address", field: "address", width: 500, filter: 'text'}
    //            ]
    //        }
    //    ];
    //}


    static createRandomPhoneNumber() {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    }

}